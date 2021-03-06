var sl2 = module.exports = require('./lib');
var download = require('./download.min.js')

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function getLinebreak() {
    if (navigator.userAgent.indexOf("Windows") != -1) {
        return "\r\n";
    }
    return "\n";
}

function handleFiles(evt) {
    var files = evt.target.files;
    var file = files[0];
    console.log(file)
    var jsFileReader = new FileReader();
    var options = {
        feetToMeter: true, //default false
        convertProjection: false, //default false
        radToDeg: true //default false
    };

    var reader = new sl2.Reader(options);
    var outputString = 'latitude,longitude,depth(m)' + getLinebreak()

    function headerFound(header) {
        console.log('header', header);
        console.log('-------------------');
    };

    reader.on('data', function (block) {
        outputString += block.latitude + ',' + block.longitude + ',' + block.waterDepth + getLinebreak();
    });

    function downloadCSV(string) {
        download(string, file.name + "_converted.csv", "text/csv")
        // var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(string);
        // var dlAnchorElem = document.getElementById('downloadAnchorElem');
        // dlAnchorElem.setAttribute("href", dataStr);
        // dlAnchorElem.setAttribute("download", file.name + "_converted.csv");
        // dlAnchorElem.click();
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
        console.log("Got file: ", event.target.result);
        document.getElementById("message").innerHTML = "Converting..."
        setTimeout(function () {
            reader.wholeLoad(event.target.result, null, headerFound, conversionCompleteHandler);
        }, 10)
    }
    jsFileReader.readAsArrayBuffer(file)

}
