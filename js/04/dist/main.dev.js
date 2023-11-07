"use strict";

function ifPurfectNumber(number) {
  var totalDivider = 0; // 6     1 2 3 

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      totalDivider = totalDivider + i;
      console.log(totalDivider);
    }
  }

  return number === totalDivider;
}

function showResult() {
  var userNumber = parseInt(prompt('введіть будь ласка число'));
  console.log(ifPurfectNumber(userNumber) ? 'number is purfect' : 'number is not purfect');
}

function purfectInRange() {
  var min = parseInt(prompt('введ'));
  var max = parseInt(prompt());
}