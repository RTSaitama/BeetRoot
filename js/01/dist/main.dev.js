"use strict";

function userFullName() {
  var userName = prompt("hi, what's your name?");

  if (userName && userName.length && userName.length > 2) {
    alert("ok,".concat(userName));
  }

  var _UserSurname = prompt("твоє and whats you fullname?");

  if (_UserSurname && _UserSurname.length && _UserSurname.length > 2) {
    alert("so your fullname is, ".concat(_UserSurname));
  }

  var $userFullname = "".concat(_UserSurname, "+ ").concat(userName);
  alert("Nice to meet you,".concat($userFullname, " "));
}

function birthYear() {
  var curruntDate = new Date();
  var currentYear = curruntDate.getFullYear(); // new Date('2023-09-11T14:50:00')

  var wasBorned = parseInt(prompt('введіть, будь ласка, ваш рік народження.'));

  if (!isNaN(wasBorned) && currentYear > wasBorned) {
    var userAge = currentYear - wasBorned;
    alert("\u0432\u0430\u0448 \u0432\u0456\u043A ".concat(userAge, " \u0440\u043E\u0447\u043A\u0456\u0432, \u0430\u043B\u0435 \u043F\u0430\u043C'\u044F\u0442\u0430\u0439, \u0449\u043E \u043F\u0456\u0441\u043B\u044F 20 \u0432\u0441\u0456\u043C 100 \u0440\u043E\u043A\u0456\u0432"));
  }
}

function square() {
  var squareSide = parseInt(prompt('введіть сторону квадрата, щоб дізнатись його периметр'));

  if (!isNaN(squareSide)) {
    var result = squareSide * 4;
    alert(" \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 = ".concat(result, " \u0441\u043C"));
  } else {
    alert('введіть, будь ласка, коректну довжину сторони квадрата (в см)');
  }

  ;
}

function runnerSpeedCalc() {
  var distance = parseInt(prompt("\u044F\u043A\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u043C\u0456\u0436 \u043C\u0456\u0441\u0442\u0430\u043C\u0438 \u0432 \u043A\u043C, \u044F\u043A\u0443 \u0442\u0440\u0435\u0431\u0430 \u043F\u043E\u0434\u043E\u043B\u0430\u0442\u0438?"));
  var time = parseInt(prompt(" \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0447\u0430\u0441\u0443 \u0432 \u0442\u0435\u0431\u0435 \u0431\u0443\u0434\u0435 \u0432 \u0433\u043E\u0434\u0438\u043D\u0430\u0445?"));

  if (!isNaN(distance) && !isNaN(time)) {
    var result = distance / time;
    alert("\u0442\u043E\u0431\u0456 \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0431\u0456\u0433\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(result, "\u043A\u043C \u0437\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
  }
}

function binanceStepOne() {
  var dollars = parseInt(prompt("\u0441\u043A\u0456\u043B\u044C\u043A\u0438 $ \u0442\u0440\u0435\u0431\u0430 \u043E\u0431\u043C\u0456\u043D\u044F\u0442\u0438 \u043D\u0430 \u20AC "));

  if (!isNaN(dollars)) {
    var coeff = 0.93;
    var inEvros = dollars * coeff;
    alert("\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043C\u0456\u043D\u044F\u0442\u0438 \u043D\u0430 ".concat(inEvros, " \u20AC"));
  }
}