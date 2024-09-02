"use strict";
const elReviewForm = document.querySelector('.reviewForm');
const elReviewScore = document.querySelector('#reviewScore');
const elReviewText = document.querySelector('#reviewText');
const elScoreOutput = document.querySelector('#scoreOutput');
const elReviewOutput = document.querySelector('#reviewOutput');

let reviewScore;
let reviewText;
const review = localStorage.getItem("review" + window.location.href);
if (review != null) {
    let splitReview = review.split('/R€c&en&$pl&it/');
    elScoreOutput.textContent = `Poäng: ${splitReview[0]}/5`;
    elReviewOutput.textContent = splitReview[1];
}
function validate(){
    if (elReviewText.value === ""){
        alert("Review cannot be empty")
        return false;
    }
    if (elReviewText.value.length < 10) {
        alert("Review needs to be 10 characters or longer");
        return false;
    }
    if (elReviewText.value.length > 200) {
        alert(`Review is ${elReviewText.value.length} characters, it needs to be 200 characters or lower`);
        return false;
    }
    return true;
}
function newReview(event) {
    reviewScore = elReviewScore.value;
    if (reviewScore < 0) {
        reviewScore = 0;
    }
    if (validate()) {
        reviewText = elReviewText.value;
        localStorage.setItem("review" + window.location.href, reviewScore + "/R€c&en&$pl&it/" + reviewText);
        elScoreOutput.textContent = `Poäng: ${reviewScore}/5`;
        elReviewOutput.textContent = reviewText;
    }
    event.preventDefault();
}

elReviewForm.addEventListener('submit', newReview, false);