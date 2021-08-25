var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error) {
    console.log("error occured " + error);
    alert("Something wrong with the server!")
}

function getTranslationURL(text) {
    return (serverURL + "?" + "text=" + text);
}

function clickHandler() {
    var txt = txtInput.value
    fetch(getTranslationURL(txt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);