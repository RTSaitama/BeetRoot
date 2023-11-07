"use strict";

var footerSlider = document.querySelector('.footerSlider');
var x = 0;
var allSlides = document.querySelectorAll('.footerSlide');
var slideWidth = parseInt(getComputedStyle(allSlides[0]).width);
var bgnow = 0;
var lastBg = allSlides.length;
var currentWidth = 0;
var minusWidth = 0;

function nextBg() {
  bgnow < allSlides.length - 1 ? bgnow++ : bgnow;
  minusWidth = (bgnow - (bgnow - 1)) * slideWidth;
  footerSlider.style.transform = "translateX(-".concat(bgnow * slideWidth, "px)");
  currentWidth = bgnow * slideWidth; // bgnow === 4? bgnow=-1:bgnow;
}

function prevBg() {
  bgnow > 0 ? bgnow-- : bgnow;
  footerSlider.style.transform = "translateX(-".concat(currentWidth - minusWidth, "px");
}

document.querySelector('.footerSlider').touch = function (event) {
  console.log(event);
  x = changedTouches[0].pageX;
};

document.querySelector('.footerSlider').onmousemove = function (event) {
  console.log(event);
  x = event.offsetX;
};

function slideBg() {
  x < window.innerWidth / 2 ? prevBg() : nextBg();
}

document.querySelector('.footerSlider').addEventListener('click', slideBg); // let mouseHere = footerSlider.pageX 
// function cursorLocation(event){
//  mouseX = event.clientX;
//  let mouseX=0;
// }
// document.querySelector('.footerSlider').addEventListener('mousemove', cursorLocation);

var bgToChange = document.querySelector('.latestNews').style.background;
var gradient1 = 126;
var gradient2 = 85;

function changeGradient() {
  gradient1 + 15;
  gradient2 += 15;
  gradient1 > 250 ? gradient1 = 26 : gradient1;
  gradient1 > 150 ? gradient2 = 86 : gradient2;
  document.querySelector('.latestNews').style.background = "linear-gradient(251deg, rgb(".concat(gradient1, ", 90, 255) -2.19%, rgb(").concat(gradient2, ", 183, 255) 103.21%)");
}

document.querySelector('.latestNews').addEventListener('click', changeGradient);