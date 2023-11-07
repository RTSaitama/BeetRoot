"use strict";

function scrollToElement(event, el) {
  event.preventDefault();
  var target = event.target.dataset.href;
  var targetElement = document.querySelector(target);
  var viewportOffset = targetElement.getBoundingClientRect().top;

  if (targetElement) {
    window.scrollTo({
      top: viewportOffset,
      behavior: 'smooth'
    });
  }
}