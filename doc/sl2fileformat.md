SL2 File format
===========
Much kudos to openstreetmap.org project and their SL2 documentation page
http://wiki.openstreetmap.org/wiki/SL2

Some hints and info about slg can be found at
http://www.geotech1.com/forums/showthread.php?11159-Lowrance-MCC-saved-data-structure

## Datatypes
type  | definition
------|-----------
byte  | UInt8
short | UInt16LE
int   | UInt32LE
float | FloatLE (32 bits IEEE 754 floating point number)
flags | UInt16LE


## Structure
###Header
8 byte header, then a series of blocks/frames as described below.

| offset | bytes | type  | description
|  ---: |   ---:|  ---  | --------------------
|     0 |     2 | short | format[1]
|     2 |     2 | short | version[2]
|     4 |     2 | short | blocksize[3]
|     6 |     2 | short | unknown/always 0



- __format[1]__ 1 = slg, 2 = sl2, 3 = sl3
- __version[2]__ 0= ex HDS 7, 1= ex. Elite 4 CHIP
- __blocksize[3]__ 1970=Downscan #b207, 3200=Sidescan #800c

### sl2 Block/Frame
|offset| bytes | type  | description
| ---: |  ---: | :---: | ---
|    0 |     4 | short | frame offset in file
|    4 |     4 | short | last primary channel frame offset in file
|    8 |     4 | short | last secondary channel frame offset in file
|   12 |     4 | short | last downscan channel frame offset in file
|   16 |     4 | short | last left sidescan channel frame offset in file
|   20 |     4 | short | last right sidescan channel frame offset in file
|   24 |     4 | short | last composite sidescan channel frame offset in file
|   28 |     2 | short | blockSize[1], size of current block in bytes
|   30 |     2 | short | lastBlockSize, size of previous block (frameIndex -1) in bytes.
|   32 |     2 | short | channel[2], gets translated to channelName
|   34 |     2 | short | packetSize. Size of soundeing/bounce data.
|   36 |     4 | int   | frameIndex. Starts at 0. Used ot match frames/block on different channels.
|   40 |     4 | float | upperLimit
|   44 |     4 | float | lowerLimit
|   48 |     - | ?     | unknown / not verified
|   50 |     1 | byte  | frequency[3]
|   51 |     - | ?     | unknown / not verified
|   64 |     4 | float | waterDepth in feet
|   68 |     4 | float | keelDepth in feet
|   72 |     - | ?     | unknown / not verified
|  100 |     4 | float | speedGps, Speed from gps in knots
|  104 |     4 | float | temperature, in Celcius
|  108 |     4 | int   | lowrance encoded longitude
|  112 |     4 | int   | lowrance encoded latitude
|  116 |     4 | float | speedWater, in knots. Should be actual water speed or GPS if sensor not present.
|  120 |     4 | float | courseOverGround in radians,
|  124 |     4 | float | altitude in feet
|  128 |     4 | float | heading, in radians
|  132 |     2 | flags | flags[4] bit coded.
|  134 |     - | ?     | unkown / not verified
|  140 |     4 | int   | time1, Unknown resolution, unknown epoch.
|  144 |     ? | ?     | unknown / not verified. Contains sounding/bounce data

__blockSize[1]__ The last block in the file doesn't always follow this pattern and I don't know why.

__channel[2]__
* 0 = Primary (Tranditional Sonar)
* 1 = Secondary (Traditional Sonar)
* 2 = DSI (DownScan Imaging)
* 3 = Left (Sidescan)
* 4 = Right (Sidescan)
* 5 = Composite (Sidescan)
* Any other value is treated as invalid


__frequency[3]__
* 0 = 200 KHz
* 1 = 50 KHz
* 2 = 83 KHz
* 4 = 800 KHz
* 5 = 38 KHz
* 6 = 28 KHz
* 7 = 130 - 210 KHz
* 8 = 90 - 150 KHz
* 9 = 40 - 60 KHz
* 10 = 25 - 45 KHz
* Any other value is treaded like 200 KHz

__flags[4]__
offset from rightmost bit, value if read as UInt16LE

|bit offset | value |meaning
|     ---: |    ---: | -------
|       15 |  0x0080 | trackValid
|       14 |  0x0040 | waterSpeedValid
|       13 |  0x0020 | ?
|       12 |  0x0010 | positionValid
|       11 |  0x0008 | ?
|       10 |  0x0004 | waterTempValid
|        9 |  0x0002 | gpsSpeedValid
|        8 |  0x0001 | ?
|        7 |  0x8000 | ?
|        6 |  0x4000 | ?
|        5 |  0x2000 | ?
|        4 |  0x1000 | ?
|        3 |  0x0800 | ?
|        2 |  0x0400 | ?
|        1 |  0x0200 | altitudeValid
|        0 |  0x0100 | headingValid

0xBE02 in the file (10111110 00000010) should translate to
```javascript
{
    trackValid: true,
    waterSpeedValid: false,
    positionValid: true,
    waterTempValid: true,
    gpsSpeedValid: true,
    altitudeValid: true,
    headingValid: false
}
```
