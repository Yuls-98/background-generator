(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
