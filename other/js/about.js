"use strict";
function displayContext(){
    const output = document.querySelector('#contextOutput');
    const url = 'data/about.json';
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            let text = data.text;
            return output.textContent = text;
        })
        .catch(function (error) {
            console.log(error);
        })
}
function displayAbout(){
    const output = document.querySelector('#aboutOutput');
    const url = 'data/about.json';
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            document.querySelector('#title').innerText = data.pageTitle;
            let about = data.about;
            return output.textContent = about;
        })
        .catch(function (error) {
            console.log(error);
        })
}
displayAbout();