"use strict";
function displayArticle(){
    document.querySelector('.big-container');
    const url = 'data/article.json';
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            let country = data.country;
            document.querySelector('#title').innerText = country.pageTitle;
            document.querySelector("#articleHeader").innerHTML = country.articleheader;
            document.querySelector("#articleBody").innerHTML = country.articlebody;
            let img = document.querySelector("#articleImage");
            img.alt = country.imgAlt;
        })
        .catch(function (error) {
            console.log(error);
        })
}
displayArticle();