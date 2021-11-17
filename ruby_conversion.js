

// Constants:
const POLAR_EARTH_RADIUS = 6356752.3142
const PI = Math.PI
const MAX_UINT4 = 4294967295
const FT2M = 1 / 3.2808399  // factor for feet to meter conversions
const KN2KM = 1 / 1.852     // factor for knots to km conversions

// Datatypes:
// ===================================================================================================
// Type    Definition                                          Directive for Ruby's String#unpack
// ---------------------------------------------------------------------------------------------------
// byte 	 UInt8  (16-bit unsigned int)                                      C
// short  UInt16LE  (16-bit unsigned int,littleEndian)                         v
// int 	  UInt32LE  (32-bit unsigned int,littleEndian)                         V
// float   FloatLE  (32 bits IEEE 754 floating point number,littleEndian)      e
// flags  UInt16LE  (16-bit unsigned int,littleEndian)                         v
// ---------------------------------------------------------------------------------------------------
const typeReaderFunctions = {
    'UInt8': (dataView, offset) => dataView.getUint8(offset, false),
    'UInt16LE': (dataView, offset) => dataView.getUint16(offset, true),
    'UInt32LE': (dataView, offset) => dataView.getUint32(offset, true),
    'FloatLE': (dataView, offset) => dataView.getFloat32(offset, true),
} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView


// Available block attributes, their offset inside each block and their type:
let block_def = {
    'blockSize': { 'offset': 26, 'type': 'UInt16LE', 'len': 2 },
    'lastBlockSize': { 'offset': 28, 'type': 'UInt16LE', 'len': 2 },
    'channel': { 'offset': 30, 'type': 'UInt16LE', 'len': 2 },
    'packetSize': { 'offset': 32, 'type': 'UInt16LE', 'len': 2 },
    'frameIndex': { 'offset': 34, 'type': 'UInt32LE', 'len': 4 },
    'upperLimit': { 'offset': 38, 'type': 'FloatLE', 'len': 4 },
    'lowerLimit': { 'offset': 42, 'type': 'FloatLE', 'len': 4 },
    'frequency': { 'offset': 51, 'type': 'UInt8', 'len': 1 },
    'time1': { 'offset': 58, 'type': 'UInt16LE', 'len': 4 },           // unknown resolution, unknown epoche
    'waterDepthFt': { 'offset': 62, 'type': 'FloatLE', 'len': 4 },   // in feet
    'keelDepthFt': { 'offset': 66, 'type': 'FloatLE', 'len': 4 },    // in feet
    'speedGpsKnots': { 'offset': 98, 'type': 'FloatLE', 'len': 4 },  // in knots
    'temperature': { 'offset': 102, 'type': 'FloatLE', 'len': 4 },   // in °C
    'raw_lowrance_longitude': { 'offset': 106, 'type': 'UInt32LE', 'len': 4 },   // Lowrance encoding (easting)
    'raw_lowrance_latitude': { 'offset': 110, 'type': 'UInt32LE', 'len': 4 },    // Lowrance encoding (northing)
    'speedWaterKnots': { 'offset': 114, 'type': 'FloatLE', 'len': 4 },  // from "water wheel sensor" if present, else GPS value(?)
    'courseOverGround': { 'offset': 118, 'type': 'FloatLE', 'len': 4 }, // ourseOverGround in radians
    'altitudeFt': { 'offset': 122, 'type': 'FloatLE', 'len': 4 },       // in feet
    'heading': { 'offset': 126, 'type': 'FloatLE', 'len': 4 },          // in radians
    'flags': { 'offset': 130, 'type': 'UInt16LE', 'len': 2 },
    'time': { 'offset': 138, 'type': 'UInt32LE', 'len': 4 }              // unknown resolution, unknown epoche
}

function readBlock(dataView, block_offset) {
    let output = {};
    for (const key in block_def) {
        if (Object.hasOwnProperty.call(block_def, key)) {
            const value_byte_offset = block_offset + block_def[key].offset;
            const length = block_def[key].len;
            const type = block_def[key].type;
            const typeReader = typeReaderFunctions[type];
            output[key] = typeReader(dataView, value_byte_offset)
            console.log(`${key} is ${value_byte_offset}`)
        }
    }
    return output;
}

function getLinebreak() {
    if (navigator.userAgent.indexOf("Windows") != -1) return "\r\n";
    else return "\n";
}


function convert_sl2(sl2_file_buffer) {
    let alive_counter = 0   // counter to regularly show, that the script is still running

    let output_rows = [];
    let block_offset = 0
    block_offset += 10   // Startindex of the first block (i.e. skip the 10 Bytes of Header)

    const dataView = new DataView(sl2_file_buffer, 0)
    const sl2_file_size = dataView.byteLength
    console.log(sl2_file_size, block_offset)
    var starting_laurence_latitude = null, starting_lowrance_longitude = null;
    while (block_offset < sl2_file_size) {

        if (alive_counter % 100 == 0) {
            console.log(`${Math.round(100.0 * block_offset / sl2_file_size)}% done...`)
        }

        alive_counter += 1

        let outputRow = readBlock(dataView, block_offset);

        // A few conversions into non-proprietary or metric formats:
        // =========================================================

        if (outputRow['raw_lowrance_latitude'] != undefined) {
            outputRow['latitude'] = ((2 * Math.atan(Math.exp(outputRow['raw_lowrance_latitude'] / POLAR_EARTH_RADIUS))) - (PI / 2)) * (180 / PI)

            // Calculate the displacement of the current point from the starting point using the raw laurence lat values:
            if (starting_laurence_latitude == null) starting_laurence_latitude = outputRow['raw_lowrance_latitude']
            outputRow['y_displacement'] = outputRow['raw_lowrance_latitude'] - starting_laurence_latitude;
        }

        if (outputRow['raw_lowrance_longitude'] != undefined) {
            outputRow['longitude'] = outputRow['raw_lowrance_longitude'] / POLAR_EARTH_RADIUS * (180 / PI)
            // [ Caution! ] If the expected longitude (in decimal degrees) is *negative*, use the following line instead:
            if (outputRow['longitude'] > 180) outputRow['longitude'] = (outputRow['raw_lowrance_longitude'] - MAX_UINT4) / POLAR_EARTH_RADIUS * (180 / PI)

            // Calculate the displacement of the current point from the starting point using the raw laurence lon values:
            if (starting_lowrance_longitude == null) starting_lowrance_longitude = outputRow['raw_lowrance_longitude']
            outputRow['x_displacement'] = outputRow['raw_lowrance_longitude'] - starting_lowrance_longitude;
        }

        if (outputRow['waterDepthFt'] != undefined) {
            outputRow['waterDepthFt'] *= -1;
            outputRow['waterDepthM'] = outputRow['waterDepthFt'] * FT2M
        }

        if (outputRow['keelDepthFt'] != undefined) {
            outputRow['keelDepthFt'] *= -1;
            outputRow['keelDepthM'] = outputRow['keelDepthFt'] * FT2M
        }

        if (outputRow['altitudeFt'] != undefined) outputRow['altitudeM'] = outputRow['altitudeFt'] * FT2M

        if (outputRow['speedGpsKnots'] != undefined) outputRow['speedGpsKm'] = outputRow['speedGpsKnots'] * KN2KM

        console.log("Read block:", outputRow)

        if (outputRow['blockSize'] == 0) {  // corrupt sl2 files may lead to this
            console.log("ABORTING! (sl2 file may be corrupt): blockSize = 0 found which will otherwise lead to endless loop.")
            break
        }

        block_offset += outputRow['blockSize']

        // // Save only one set of data per GPS position to csv-file:
        // unless output_h[[h['latitude'], h['longitude']]]
        // output_h[[h['latitude'], h['longitude']]] = h['waterDepthM']
        output_rows.push(outputRow)
    }

    // When finished, output some statistics:
    console.log("Found and decoded " + output_rows.length + "data blocks.");
    return output_rows;
}

module.exports = { 'convert_sl2': convert_sl2 };