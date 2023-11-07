"use strict";

// #region Min
function checkAge() {
  while (true) {
    var userAge = parseInt(prompt("Please, enter your age"));

    if (!isNaN(userAge)) {
      switch (true) {
        case 0 < userAge && userAge < 12:
          alert("You are a child!");
          break;

        case 11 < userAge && userAge < 18:
          alert("You are a teenager!");
          break;

        case 17 < userAge && userAge < 60:
          alert("You are an adult!");
          break;

        case 59 < userAge && userAge < 120:
          alert("You are aged!");
          break;

        case userAge > 120:
          alert("u are a vampire, or a turtle, who knows.");
          break;
      }

      break;
    }
  }
}

function alternate_symbol() {
  while (true) {
    var keyboard_number = parseInt(prompt("Please, enter number, to find out its alternate symbol"));

    if (!isNaN(keyboard_number)) {
      switch (keyboard_number) {
        case 1:
          alert("!");
          break;

        case 2:
          alert("@");
          break;

        case 3:
          alert("#");
          break;

        case 4:
          alert("$");
          break;

        case 5:
          alert("%");
          break;

        case 6:
          alert("^");
          break;

        case 7:
          alert("&");
          break;

        case 8:
          alert("*");
          break;

        case 9:
          alert("9");
          break;

        case 0:
          alert(")");
          break;
      }

      break;
    }
  }
}

function lets_get_amount() {
  while (true) {
    var _from = parseInt(prompt("plz choose num for starting point"));

    var _to = parseInt(prompt("plz choose num for finishing point"));

    var amount = 0;

    if (!isNaN(_from) && !isNaN(_to)) {
      if (_from < _to) {
        for (var _i = _from; _i <= _to; _i++) {
          amount += _i;
        }

        alert("".concat(amount));
      } else if (_to < _from) {
        for (var _i2 = _to; _i2 <= _from; _i2++) {
          amount += _i2;
        }

        alert("".concat(amount));
      }
    }

    break;
  }
} // #endregion
// #region normal


function palindromNumber() {
  while (true) {
    var userNumber = prompt("please, enter a 5-digit number you wanna check to");

    if (!isNaN(userNumber) && userNumber.length == 5) {
      var _i3 = userNumber.length - 1;

      var checkNumber = "";

      for (_i3; _i3 >= 0; _i3--) {
        checkNumber += userNumber[_i3];
        console.log(checkNumber);
      }

      checkNumber === userNumber && alert("your number is a palindrom.");
      checkNumber !== userNumber && alert("your number is not a palindrom");
    }
  }
}

function discountCalc() {
  var price = parseInt(prompt("please enter purchase amount"));
  var withDiscount = null;

  switch (true) {
    case 0 < price && price < 200:
      alert("amount is not enough to use discount");
      break;

    case 199 < price && price < 300:
      withDiscount = price - price * 0.03;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;

    case 299 < price && price < 500:
      withDiscount = price - price * 0.05;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;

    case 499 < price:
      withDiscount = price - price * 0.07;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;
  }
}

function oddsEvensNulls() {
  var numbersCounter = 0;
  var evens = 0;
  var odds = 0;
  var nulls = 0;
  var positiveNumbers = 0;
  var negativeNumbers = 0;

  for (i = 0; i <= 10; i++) {
    var someNumber = parseInt(prompt("please enter 10 number one by one "));
    var numberSign = Math.sign(someNumber);

    switch (true) {
      case numberSign === 1:
        positiveNumbers++;
        break;

      case numberSign === -1:
        negativeNumbers++;
        break;
    }

    switch (true) {
      case someNumber === 0 && someNumber != NaN:
        nulls++;
        break;

      case someNumber % 2 === 0 && someNumber !== 0:
        evens++;
        break;

      case someNumber % 2 === 1:
        odds++;
        break;
    }

    numbersCounter++;
    numbersCounter === 10 && alert("amoung your number ive found:".concat(nulls, " nulls,").concat(odds, " odds numbers and ").concat(evens, " even numbers.\n  There are ").concat(positiveNumbers, "positive and ").concat(negativeNumbers, "negative numbers in your list."));
  }
}

function dayOfTheWeek() {
  var dayOfTheWeek = 'Monday';

  while (true) {
    var choise = confirm("today is ".concat(dayOfTheWeek, ", wanna know next day of the week?"));

    if (choise === false) {
      break;
    }

    ;

    switch (dayOfTheWeek) {
      case 'Monday':
        dayOfTheWeek = 'Tuesday';
        break;

      case 'Tuesday':
        dayOfTheWeek = 'Wednesday';
        break;

      case 'Wednesday':
        dayOfTheWeek = 'Thursday';
        break;

      case 'Thursday':
        dayOfTheWeek = 'Friday';
        break;

      case 'Friday':
        dayOfTheWeek = 'Saturday';
        break;

      case 'Saturday':
        dayOfTheWeek = 'Sunday';
        break;

      case 'Sunday':
        dayOfTheWeek = 'Monday';
        break;
    }
  }
} // #endregion 
// #region Max


function numberSearch(min, max) {
  var target = parseInt(prompt('введіть число 0-100'));
  var middle = parseInt(to - from) / 2 + from;

  if (isSucces) {
    console.log('Thanks for a game');
    return false;
  } else {
    var isLarger = confirm("Your numbers is larger than ".concat(middle, "?"));
    isLarger ? numberSearch(middle, to) : numberSearch(from, middle);
  }
}

function multitab() {
  mainCheckpoint: for (var x = 1; x < 10; x++) {
    for (var _i4 = 1; _i4 <= 9; _i4++) {
      console.log(x, _i4, x * _i4);
      if (_i4 === 9 && x === 9) break mainCheckpoint;
    }
  }
}

function dayAfter() {
  while (true) {
    var day = parseInt(prompt('please enter a number the day of the month)'));
    var month = parseInt(prompt('please enter a month'));
    var year = parseInt(prompt('please enter a year'));

    if (isNaN(day) || day > 31 || isNaN(year) || isNaN(month) || month > 12) {
      alert('valid numbers plz -_-');
      break;
    }

    var bigMonths = [1, 2, 3, 5, 7, 8, 10, 12];
    var lilMonths = [4, 6, 9, 11];

    switch (true) {
      case lilMonths.includes(month) && day === 30:
        month++;
        day = 1;
        break;

      case bigMonths.includes(month) === 11 && day === 31:
        year++;
        day = 1;
        month = 1;
        break;

      case day === 31:
        month++;
        day = 1;
        break;

      case day === 28 && month === 2 && year % 4 !== 0:
        month++;
        day = 1;
        break;

      case day === 29 && month === 2 && year % 4 === 0 && year % 100 !== 0 && year % 400 === 0:
        day++;
        break;

      default:
        day++;
        break;
    }

    if (day.toString.length = 1) {
      day = '0' + day;
    }

    if (month.toString.length = 1) {
      month = '0' + month;
    }

    alert("next day seemed to be ".concat(day, ".").concat(month, ".").concat(year));
  }
}

function dateFormat() {} // #endregion
//