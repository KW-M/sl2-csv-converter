import convert_sl2 from './ruby_conversion.js';
import download from './download.min.js'
// var MultiSelect = require('./multi-select-umd.js')
import MultiSelect from '@dotburo/multi-select';


// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(new URL('../sw.js', import.meta.url))
        .then(() => { console.log('Service Worker Registered'); });
}

window.addEventListener("load", function () {
    console.log("Page loaded");
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false);
})

function setMessage(message) {
    document.getElementById("message").innerHTML = message;
}


function getLinebreak() {
    if (navigator.userAgent.indexOf("Windows") != -1) {
        return "\r\n";
    }
    return "\n";
}

var columnSelector;
function addColumnSelctionPicker(resultObject) {
    // var selectParent = document.getElementById("Column_Selector")

    var options = []

    for (var key in resultObject[0]) {
        options.push(key);
    }

    columnSelector = new MultiSelect("#Column_Selector", {
        items: options,
        current: ["latitude", "longitude", "waterDepthM"],
        sort: false,
        placeholder: "Select columns to include",
    })
}

// function getSelectValues(selectElem) {
//     var result = [];
//     var options = selectElem && selectElem.options;
//     var opt;

//     for (var i = 0, iLen = options.length; i < iLen; i++) {
//         opt = options[i];

//         if (opt.selected) {
//             result.push(opt.value || opt.text);
//         }
//     }
//     return result;
// }

function getSelectedColumns() {
    // var select = document.getElementById("mySelect")
    var selectedOptions = columnSelector.getCurrent();
    var result = {}
    for (var i = 0; i < selectedOptions.length; i++) {
        result[selectedOptions[i].value] = true;
    }
    return result;
}

function resultToCSV(resultObject, columsToInclude) {
    let columns = Object.keys(resultObject[0]).filter((rowName) => {
        return columsToInclude[rowName] == true;
    })
    let output_csv_string = columns.join(",") + getLinebreak();

    // Finally every row is written to the csv string:
    for (var i = 0; i < resultObject.length; i++) {
        output_csv_string += Object.keys(resultObject[i]).filter((rowName) => {
            return columsToInclude[rowName] == true;
        }).map((keyName) => {
            return resultObject[i][keyName].toString();
        }).join(",") + getLinebreak();
    }

    return output_csv_string;
}

function resultToKML(resultObject) {
    let output_kml_string = `<?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
      <name>SonarConverted.kml</name>
      <open>1</open>
      <Placemark>
        <name>SonarPath</name>
        <LineString>
          <extrude>1</extrude>
          <tessellate>1</tessellate>
          <altitudeMode>relativeToGround</altitudeMode>
          <coordinates>
          `

    // every row is written to the kml string:
    for (var i = 0; i < resultObject.length; i++) {
        output_kml_string += ["longitude", "latitude", "waterDepthM"].map((keyName) => {
            // if (keyName == "waterDepthM") resultObject[i][keyName] *= -1;
            return resultObject[i][keyName].toString();
        }).join(",") + ` `; // space char
    }

    output_kml_string += `
                </coordinates>
            </LineString>
        </Placemark>
    </Document>
    </kml>
    `
    return output_kml_string;
}


function handleFiles(evt) {
    var files = evt.target.files;
    var file = files[0];

    function downloadCSV(string) {
        download(string, file.name + "_converted.csv", "text/csv")
    }

    function downloadKML(string) {
        download(string, file.name + "_converted.kml", "application/vnd.google-earth.kml+xml")
    }

    function conversionCompleteHandler(output) {
        setMessage("Done!");
        addColumnSelctionPicker(output);

        var button = document.getElementById("download_button")
        button.parentNode.style.display = 'block';
        button.onclick = function () {
            var output_format = document.getElementById("Output_Format").value
            // if csv is the selected format:
            if (output_format == "csv") {
                downloadCSV(resultToCSV(output, getSelectedColumns()));
            } else if (output_format == "kml") {
                downloadKML(resultToKML(output));
            }
        }
    }


    var jsFileReader = new FileReader();
    jsFileReader.onload = function (event) {
        var file_contents = event.target.result
        console.log("Loaded file: ", file_contents);
        document.getElementById("Info_Text").style.display = "none";
        document.getElementById("input").disabled = "true";
        var message_el = document.getElementById("message");
        var progress_el = document.getElementById("progress-bar");
        message_el.innerHTML = "Converting... (May make page unresponsive)";
        progress_el.style.display = "block";
        setTimeout(function () { // give the message time to be displayed before blocking the UI thread.
            convert_sl2(file_contents, async (percent_done) => {
                message_el.innerHTML = `Converting... ${percent_done}% done`;
                progress_el.value = percent_done / 100.0;
                await new Promise((r) => setTimeout(r, 0))
            }).then((output) => {
                progress_el.style.display = "none";
                conversionCompleteHandler(output);
            }).catch((error) => {
                console.error("Conversion failed: ", error);
                progress_el.style.display = "none";
                message_el.innerHTML = "Conversion failed. Please reload the page and try again.";
            });
        }, 1);
    }
    jsFileReader.readAsArrayBuffer(file)

}

module.exports = {}
