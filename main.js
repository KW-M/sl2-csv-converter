var sl2 = require('./ruby_conversion.js');
var download = require('./download.min.js')

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function setMessage(message) {
    document.getElementById("message").innerHTML = message;
}

setTimeout(function () {

}, 10)

function handleFiles(evt) {
    var files = evt.target.files;
    var file = files[0];

    console.log("got file:", file)

    let output_csv_string = "";

    function downloadCSV(string) {
        download(string, file.name + "_converted.csv", "text/csv")
    }

    function conversionCompleteHandler() {
        setMessage("Done!");
        var button = document.getElementById("download_button")
        button.style.display = 'block';
        button.onclick = function () {
            downloadCSV(output_csv_string)
        }
    }


    var jsFileReader = new FileReader();
    jsFileReader.onload = function (event) {
        console.log("Loaded file: ", event.target.result);
        document.getElementById("message").innerHTML = "Converting..."
        output_csv_string = sl2.convert_sl2(event.target.result);
        conversionCompleteHandler();
    }
    jsFileReader.readAsArrayBuffer(file)

}

module.exports = {}