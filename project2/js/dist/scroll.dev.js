"use strict";

var target = document.getElementById('whatWeDo');
var scroller = document.querySelector(".heroToScrollDown");

function scrollTo() {
  target.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

scroller.addEventListener('click', scrollTo);