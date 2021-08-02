var sl2 = module.exports = require('./lib/ruby_conversion.js');
var download = require('./download.min.js')

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

let output_csv_string = "";

function handleFiles(evt) {
    var files = evt.target.files;
    var file = files[0];
    console.log("got file:", file)

    function downloadCSV(string) {
        download(string, file.name + "_converted.csv", "text/csv")
    }

    function conversionCompleteHandler() {
        document.getElementById("message").innerHTML = "Done!"
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
        setTimeout(function () {
            output_csv_string = sl2.convert_sl2(event.target.result);
            conversionCompleteHandler();
        }, 10)
    }
    jsFileReader.readAsArrayBuffer(file)

}
