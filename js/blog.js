let init = () => {    
    let home = document.getElementById("menuHome");
    let day1 = document.getElementById("menuDay1");
    let day2 = document.getElementById("menuDay2");
    let day3 = document.getElementById("menuDay3");
    let day4 = document.getElementById("menuDay4");
    let day5 = document.getElementById("menuDay5");

    function toggleArticle(element) {
        Array.from(document.getElementsByClassName("show-article")).forEach(element => {
            element.classList.toggle("show-article");
        });
    
        element.classList.toggle('show-article');
    }

    home.addEventListener('click', () => {toggleArticle(document.getElementById("home"))});
    day1.addEventListener('click', () => {toggleArticle(document.getElementById("day1"))});
    day2.addEventListener('click', () => {toggleArticle(document.getElementById("day2"))});
    day3.addEventListener('click', () => {toggleArticle(document.getElementById("day3"))});
    day4.addEventListener('click', () => {toggleArticle(document.getElementById("day4"))});
    day5.addEventListener('click', () => {toggleArticle(document.getElementById("day5"))});
}

window.onload = init