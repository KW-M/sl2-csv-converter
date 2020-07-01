#!/usr/bin/env node
/*eslint no-console: 0 */
var sl2 = require('..'); //require('sl2format');



const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles(evt) {
  var files = evt.target.files;
  var file = files[0];
  console.log(file)
  var jsFileReader = new FileReader();
  var options = {
    feetToMeter: true, //default false
    convertProjection: true, //default false
    radToDeg: true //default false
  };

  var reader = new sl2.Reader(options);
  var outputString = 'longitude,latitude,depth(m)\n'

  function headerFound(header) {
    console.log('header', header);
    document.getElementById("message").innerHTML = "Found Header: " + JSON.stringify(header) + "<\\br>Converting...";
    console.log('-------------------');
  };

  reader.on('data', function (block) {
    outputString += block.longitude + ',' + block.latitude + ',' + block.waterDepth + '\n'
  });

  function downloadCSV(string) {
    var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(string);
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", file.name + "_converted.csv");
    dlAnchorElem.click();
  }

  function conversionCompleteHandler() {
    document.getElementById("message").innerHTML = "Done!"
    var button = document.getElementById("download_button")
    button.style.display = 'block';
    button.onclick = function () {
      downloadCSV(outputString)
    }
  }

  jsFileReader.onload = function (event) {
    console.log(event.target.result);
    event.target.result
    document.getElementById('progress').style.display = 'block'
    reader.wholeLoad(event.target.result, null, headerFound, conversionCompleteHandler);
    // fs.createReadStream(fil, fsoptions)
    //   .pipe(reader);

  }
  jsFileReader.readAsArrayBuffer(file)

}
