"use strict";

var footerSlider = document.querySelector('.footerSlider');
var allSlides = document.querySelectorAll('.customSlide');
var slideWidth = parseInt(getComputedStyle(allSlides[0]).width);
var bgnow = 0;
var lastBg = allSlides.length;

function nextBg() {
  bgnow < allSlides.length - 1 ? bgnow++ : bgnow;
  footerSlider.style.transform = "translateX(-".concat(bgnow * slideWidth, "px)");
  bgnow === 4 ? bgnow = 0 : bgnow;
}

function prevBg() {
  bgnow > 0 ? bgnow-- : bgnow;
  ;
} // window.footerBG.addEventListener('click', slideFooter);
// function mouseFind(targetFooter){
//   var X = document.getElementById('targetFooter');
//   var Y = document.getElementById('targetFooter');
//     X.value = targetFooter.pageX;
//     Y.value = targetFooter.pageY;
//   addEventListener('mousemove', mouseFind, false);
// }