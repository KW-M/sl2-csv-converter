var Header = module.exports = function () {
  console.log('new Header');
  this.format = 'sl2';
  this.version = 0;
  this.blockSize = 0;
  this.data = null;
};

Header.read = function (bufr) {
  var header = new Header();
  console.log('reading header');
  var v = bufr.UInt16();
  switch (v) {
    case 1: header.format = 'slg';
      break;
    case 2: header.format = 'sl2';
      break;
    //TODO: implement sl3
    default:
      throw new Error('Unknown formatVersion:' + v.toString());
  }
  if (v === 2) {
    header.version = bufr.asShort();
    header.blockSize = bufr.asShort();
    header.data = bufr.slice(2).data;
  }
  else {
    header.data = bufr.slice(6);
  }
  console.log('header=%j', header);
  return header;
};

