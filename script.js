var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomBttn");

function changeGradient(){
    body.style.background = "linear-gradient(to right, "
    +color1.value+", "+color2.value+" )";
    css.textContent = body.style.background + ";";
}

function randomGradient(){
    color1.value = "#"+Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#"+Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, "
    +color1.value+", "+color2.value+" )";
    css.textContent = body.style.background + ";";
}

color1.value = "#FF0000";
color2.value = "#FFFF00";
changeGradient(color1,color2);

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
randomButton.addEventListener("click", randomGradient);