"use strict";
function displayVacationData(){
    const url = 'data/index.json';
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            document.querySelector('#title').innerText = data.pageTitle;
            //austria
            let austria = data.austria;
            document.querySelector("#austriaTitle").innerHTML = austria.countryName;
            document.querySelector("#austriaArticle").innerHTML = austria.article;
            let img = document.querySelector("#austriaImage");
            img.alt = austria.imgAlt;
            //Cuba
            let cuba = data.cuba;
            document.querySelector("#cubaTitle").innerHTML = cuba.countryName;
            document.querySelector("#cubaArticle").innerHTML = cuba.article;
            img = document.querySelector("#cubaImage");
            img.alt = cuba.imgAlt;
            //Canaries
            let canaries = data.canaries;
            document.querySelector("#canariesTitle").innerHTML = canaries.countryName;
            document.querySelector("#canariesArticle").innerHTML = canaries.article;
            img = document.querySelector("#canariesImage");
            img.alt = canaries.imgAlt;
            //Japan
            let japan = data.japan;
            document.querySelector("#japanTitle").innerHTML = japan.countryName;
            document.querySelector("#japanArticle").innerHTML = japan.article;
            img = document.querySelector("#japanImage");
            img.alt = japan.imgAlt;
            //gambia
            let gambia = data.gambia;
            document.querySelector("#gambiaTitle").innerHTML = gambia.countryName;
            document.querySelector("#gambiaArticle").innerHTML = gambia.article;
            img = document.querySelector("#gambiaImage");
            img.alt = gambia.imgAlt;
        })
        .catch(function (error) {
            console.log(error);
        })
}
displayVacationData();