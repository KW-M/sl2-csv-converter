(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//download.js v4.21, by dandavis; 2008-2018. [MIT] see http://danml.com/download.html for tests/usage
;

(function (root, factory) {
  typeof define == "function" && define.amd ? define([], factory) : (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" ? module.exports = factory() : root.download = factory();
})(void 0, function () {
  return function download(data, strFileName, strMimeType) {
    var self = window,
        defaultMime = "application/octet-stream",
        mimeType = strMimeType || defaultMime,
        payload = data,
        url = !strFileName && !strMimeType && payload,
        anchor = document.createElement("a"),
        toString = function toString(a) {
      return String(a);
    },
        myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString,
        fileName = strFileName || "download",
        blob,
        reader;

    myBlob = myBlob.call ? myBlob.bind(self) : Blob, String(this) === "true" && (payload = [payload, mimeType], mimeType = payload[0], payload = payload[1]);

    if (url && url.length < 2048) {
      fileName = url.split("/").pop().split("?")[0], anchor.href = url;

      if (anchor.href.indexOf(url) !== -1) {
        var ajax = new XMLHttpRequest();
        return ajax.open("GET", url, !0), ajax.responseType = "blob", ajax.onload = function (e) {
          download(e.target.response, fileName, defaultMime);
        }, setTimeout(function () {
          ajax.send();
        }, 0), ajax;
      }
    }

    if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
      if (!(payload.length > 2096103.424 && myBlob !== toString)) return navigator.msSaveBlob ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload);
      payload = dataUrlToBlob(payload), mimeType = payload.type || defaultMime;
    } else if (/([\x80-\xff])/.test(payload)) {
      var i = 0,
          tempUiArr = new Uint8Array(payload.length),
          mx = tempUiArr.length;

      for (i; i < mx; ++i) {
        tempUiArr[i] = payload.charCodeAt(i);
      }

      payload = new myBlob([tempUiArr], {
        type: mimeType
      });
    }

    blob = payload instanceof myBlob ? payload : new myBlob([payload], {
      type: mimeType
    });

    function dataUrlToBlob(strUrl) {
      var parts = strUrl.split(/[:;,]/),
          type = parts[1],
          indexDecoder = strUrl.indexOf("charset") > 0 ? 3 : 2,
          decoder = parts[indexDecoder] == "base64" ? atob : decodeURIComponent,
          binData = decoder(parts.pop()),
          mx = binData.length,
          i = 0,
          uiArr = new Uint8Array(mx);

      for (i; i < mx; ++i) {
        uiArr[i] = binData.charCodeAt(i);
      }

      return new myBlob([uiArr], {
        type: type
      });
    }

    function saver(url, winMode) {
      if ("download" in anchor) return anchor.href = url, anchor.setAttribute("download", fileName), anchor.className = "download-js-link", anchor.innerHTML = "downloading...", anchor.style.display = "none", anchor.addEventListener("click", function (e) {
        e.stopPropagation(), this.removeEventListener("click", arguments.callee);
      }), document.body.appendChild(anchor), setTimeout(function () {
        anchor.click(), document.body.removeChild(anchor), winMode === !0 && setTimeout(function () {
          self.URL.revokeObjectURL(anchor.href);
        }, 250);
      }, 66), !0;
      if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(url) && (url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime)), window.open(url) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = url), !0;
      var f = document.createElement("iframe");
      document.body.appendChild(f), !winMode && /^data:/.test(url) && (url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime)), f.src = url, setTimeout(function () {
        document.body.removeChild(f);
      }, 333);
    }

    if (navigator.msSaveBlob) return navigator.msSaveBlob(blob, fileName);
    if (self.URL) saver(self.URL.createObjectURL(blob), !0);else {
      if (typeof blob == "string" || blob.constructor === toString) try {
        return saver("data:" + mimeType + ";base64," + self.btoa(blob));
      } catch (y) {
        return saver("data:" + mimeType + "," + encodeURIComponent(blob));
      }
      reader = new FileReader(), reader.onload = function (e) {
        saver(this.result);
      }, reader.readAsDataURL(blob);
    }
    return !0;
  };
});

},{}],2:[function(require,module,exports){
"use strict";

// Constants:
var POLAR_EARTH_RADIUS = 6356752.3142;
var PI = Math.PI;
var MAX_UINT4 = 4294967295;
var FT2M = 1 / 3.2808399; // factor for feet to meter conversions

var KN2KM = 1 / 1.852; // factor for knots to km conversions
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

var typeReaderFunctions = {
  'UInt8': function UInt8(dataView, offset) {
    return dataView.getUint8(offset, false);
  },
  'UInt16LE': function UInt16LE(dataView, offset) {
    return dataView.getUint16(offset, true);
  },
  'UInt32LE': function UInt32LE(dataView, offset) {
    return dataView.getUint32(offset, true);
  },
  'FloatLE': function FloatLE(dataView, offset) {
    return dataView.getFloat32(offset, true);
  }
}; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
// Available block attributes, their offset inside each block and their type:

var block_def = {
  'blockSize': {
    'offset': 26,
    'type': 'UInt16LE',
    'len': 2
  },
  // 'lastBlockSize': {'offset': 28, 'type':'UInt16LE', 'len': 2},
  // 'channel': {'offset': 30, 'type':'UInt16LE', 'len': 2},
  // 'packetSize': {'offset': 32, 'type':'UInt16LE', 'len': 2},
  // 'frameIndex': {'offset': 34, 'type':'UInt16LE', 'len': 4},
  // 'upperLimit': {'offset': 38, 'type':  'FloatLE', 'len': 4},
  // 'lowerLimit': {'offset': 42, 'type':  'FloatLE', 'len': 4},
  // 'frequency': {'offset': 51, 'type':  'UInt8', 'len': 1},
  // 'time1': {'offset': 58, 'type':'UInt16LE', 'len': 4}           // unknown resolution, unknown epoche
  'waterDepthFt': {
    'offset': 62,
    'type': 'FloatLE',
    'len': 4
  },
  // in feet
  // 'keelDepthFt': {'offset': 66, 'type':  'FloatLE', 'len': 4},    // in feet
  // 'speedGpsKnots': {'offset': 98, 'type':  'FloatLE', 'len': 4},  // in knots
  // 'temperature': {'offset': 102, 'type':  'FloatLE', 'len': 4},   // in °C
  'lowrance_longitude': {
    'offset': 106,
    'type': 'UInt16LE',
    'len': 4
  },
  // Lowrance encoding (easting)
  'lowrance_latitude': {
    'offset': 110,
    'type': 'UInt16LE',
    'len': 4
  } // Lowrance encoding (northing)
  // 'speedWaterKnots': {'offset': 114, 'type':  'FloatLE', 'len': 4},  // from "water wheel sensor" if present, else GPS value(?)
  // 'courseOverGround': {'offset': 118, 'type':  'FloatLE', 'len': 4}, // ourseOverGround in radians
  // 'altitudeFt': {'offset': 122, 'type':  'FloatLE', 'len': 4},       // in feet
  // 'heading': {'offset': 126, 'type':  'FloatLE', 'len': 4},          // in radians
  // 'flags': {'offset': 130, 'type':'UInt16LE', 'len': 2},
  // 'time': {'offset': 138, 'type':'UInt16LE', 'len': 4}              // unknown resolution, unknown epoche

};

function readBlock(dataView, block_offset) {
  var output = {};

  for (var key in block_def) {
    if (Object.hasOwnProperty.call(block_def, key)) {
      var value_byte_offset = block_offset + block_def[key].offset;
      var length = block_def[key].len;
      var type = block_def[key].type;
      var typeReader = typeReaderFunctions[type];
      output[key] = typeReader(dataView, value_byte_offset);
    }
  }

  return output;
}

function getLinebreak() {
  if (navigator.userAgent.indexOf("Windows") != -1) return "\r\n";else return "\n";
}

function convert_sl2(sl2_file_buffer) {
  var alive_counter = 0; // counter to regularly show, that the script is still running

  var output_csv_string = "";
  var block_offset = 0;
  block_offset += 10; // Startindex of the first block (i.e. skip the 10 Bytes of Header)

  var dataView = new DataView(sl2_file_buffer);
  var sl2_file_size = sl2_file_buffer.byteLength;
  console.log(sl2_file_size, block_offset);

  var _loop = function _loop() {
    if (alive_counter % 100 == 0) {
      console.log("".concat(Math.round(100.0 * block_offset / sl2_file_size), "% done..."));
    }

    alive_counter += 1;
    var h = readBlock(dataView, block_offset); // A few conversions into non-proprietary or metric formats:
    // =========================================================
    // if(h['lowrance_longitude'] != undefined) h['longitude'] = h['lowrance_longitude']/POLAR_EARTH_RADIUS * (180/PI)
    // [ Caution! ] If the expected longitude (in decimal degrees) is *negative*, use the following line instead:

    if (h['lowrance_longitude'] != undefined) h['longitude'] = (h['lowrance_longitude'] - MAX_UINT4) / POLAR_EARTH_RADIUS * (180 / PI);
    if (h['lowrance_latitude'] != undefined) h['latitude'] = (2 * Math.atan(Math.exp(h['lowrance_latitude'] / POLAR_EARTH_RADIUS)) - PI / 2) * (180 / PI);
    if (h['waterDepthFt'] != undefined) h['waterDepthM'] = h['waterDepthFt'] * FT2M;
    if (h['keelDepthFt'] != undefined) h['keelDepthM'] = h['keelDepthFt'] * FT2M;
    if (h['altitudeFt'] != undefined) h['altitudeM'] = h['altitudeFt'] * FT2M;
    if (h['speedGpsKnots'] != undefined) h['speedGpsKm'] = h['speedGpsKnots'] * KN2KM;
    console.log("Read block:", h);

    if (h['blockSize'] == 0) {
      // corrupt sl2 files may lead to this
      console.log("ABORTING! (sl2 file may be corrupt): blockSize = 0 found which will otherwise lead to endless loop.");
      return "break";
    }

    block_offset += h['blockSize']; // // Save only one set of data per GPS position to csv-file:
    // unless output_h[[h['latitude'], h['longitude']]]
    // output_h[[h['latitude'], h['longitude']]] = h['waterDepthM']

    if (output_csv_string.length == 0) {
      //add the header line:
      output_csv_string += Object.keys(h).join(",") + getLinebreak();
    } // Finally the prepared line is written to the csv-file:


    output_csv_string += Object.keys(h).map(function (keyName) {
      return h[keyName].toString();
    }).join(",") + getLinebreak();
  };

  while (block_offset < sl2_file_size) {
    var _ret = _loop();

    if (_ret === "break") break;
  } // When finished, output some statistics:


  console.log("Found and decoded #{output_h.keys.length} data blocks (distinct gps positions).");
  return output_csv_string;
}

module.exports = {
  'convert_sl2': convert_sl2
};

},{}],3:[function(require,module,exports){
"use strict";

var sl2 = module.exports = require('./lib/ruby_conversion.js');

var download = require('./download.min.js');

var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
var output_csv_string = "";

function handleFiles(evt) {
  var files = evt.target.files;
  var file = files[0];
  console.log("got file:", file);

  function downloadCSV(string) {
    download(string, file.name + "_converted.csv", "text/csv");
  }

  function conversionCompleteHandler() {
    document.getElementById("message").innerHTML = "Done!";
    var button = document.getElementById("download_button");
    button.style.display = 'block';

    button.onclick = function () {
      downloadCSV(output_csv_string);
    };
  }

  var jsFileReader = new FileReader();

  jsFileReader.onload = function (event) {
    console.log("Loaded file: ", event.target.result);
    document.getElementById("message").innerHTML = "Converting...";
    setTimeout(function () {
      output_csv_string = sl2.convert_sl2(event.target.result);
      conversionCompleteHandler();
    }, 10);
  };

  jsFileReader.readAsArrayBuffer(file);
}

},{"./download.min.js":1,"./lib/ruby_conversion.js":2}]},{},[3]);
