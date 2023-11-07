// #region Min
function checkAge() {
  while (true) {
    let userAge = parseInt(prompt("Please, enter your age"));

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

function alternateSymbol() {
    let keyboard_number = parseInt(
      prompt("Please, enter number, to find out its alternate symbol")
    );
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
    }
  }

function letsGetAmount() {
  while (true) {
    let from = parseInt(prompt("plz choose num for starting point"));
    let to = parseInt(prompt("plz choose num for finishing point"));
    let amount = 0;
    if (!isNaN(from) && !isNaN(to)) {
      if (from < to) {
        for (let i = from; i <= to; i++) {
          amount += i;
        }
        alert(`${amount}`);
      } else if (to < from) {
        for (let i = to; i <= from; i++) {
          amount += i;
        }
        alert(`${amount}`);
      }
    }
    break;
  }
}
function common_divider() {
  const num1 =parseInt(prompt('перше число плз'));
  let num1Dividers =[];
  const num2 =parseInt(prompt('друге число плз'));
  let num2Dividers =[];
  let comdivs=[];
  let result ;
  for( let i=1;i<=num1;i++){
    if (num1 % i === 0 && num2 %i === 0) {
     result =i
    }
  
    }
  }
  alert(result)
  
// #endregion

// #region normal
function palindromNumber() {
  while (true) {
    let userNumber = prompt(
      "please, enter a 5-digit number you wanna check to"
    );
    if (!isNaN(userNumber) && userNumber.length == 5) {
      let i = userNumber.length - 1;
      let checkNumber = "";
      for (i; i >= 0; i--) {
        checkNumber += userNumber[i];
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
      alert(`amount is not enough to use discount`);
      break;
    case 199 < price && price < 300:
      withDiscount = price - price * 0.03;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;

    case 299 < price && price < 500:
      withDiscount = price - price * 0.05;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;

    case 499 < price:
      withDiscount = price - price * 0.07;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;
  }
}

function oddsEvensNulls() {
  let numbersCounter = 0;
  let evens = 0;
  let odds = 0;
  let nulls = 0;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  for (i = 0; i <= 10; i++) {
    let someNumber = parseInt(prompt("please enter 10 number one by one "));
    let numberSign = Math.sign(someNumber);
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
    numbersCounter === 10 &&
      alert(`amoung your number ive found:${nulls} nulls,${odds} odds numbers and ${evens} even numbers.
  There are ${positiveNumbers} positive and ${negativeNumbers} negative numbers in your list.`);
  }
}

function dayOfTheWeek() {
  let dayOfTheWeek = "Monday";
  while (true) {
    let choise = confirm(
      `today is ${dayOfTheWeek}, wanna know next day of the week?`
    );
    if (choise === false) {
      break;
    }
    switch (dayOfTheWeek) {
      case "Monday":
        dayOfTheWeek = "Tuesday";
        break;
      case "Tuesday":
        dayOfTheWeek = "Wednesday";
        break;
      case "Wednesday":
        dayOfTheWeek = "Thursday";
        break;
      case "Thursday":
        dayOfTheWeek = "Friday";
        break;
      case "Friday":
        dayOfTheWeek = "Saturday";
        break;
      case "Saturday":
        dayOfTheWeek = "Sunday";
        break;
      case "Sunday":
        dayOfTheWeek = "Monday";
        break;
    }
  }
}

// #endregion

// #region Max
function numberSearch(from, to) {
  const middle = parseInt((to - from) / 2 + from);
  const isSucces= confirm(`ваше число ${middle} `)

  if (isSucces) {
    console.log("дякую за участь");
    return false;
  } else {
    const isLarger = confirm(`число більше за ${middle}?`);

    isLarger ? numberSearch(middle, to) : numberSearch(from, middle);
  }
}

function multitab() {
  mainCheckpoint: for (let x = 1; x < 10; x++) {
    for (let i = 1; i <= 9; i++) {
      console.log(x, i, x * i);

      if (i === 9 && x === 9) break mainCheckpoint;
    }
  }
}

function dayAfter() {
    var day = parseInt(prompt("please enter a number the day of the month)"));
    var month = parseInt(prompt("please enter a month"));
    var year = parseInt(prompt("please enter a year"));

    let bigMonths = [1, 2, 3, 5, 7, 8, 10, 12];
    let lilMonths = [4, 6, 9, 11];
    switch (true) {
      // lil month
      case lilMonths.includes(month) && day === 30:
        month++;
        day = 1;
        break;
      case lilMonths.includes(month) && day === 31:
        break;

      // big month
      case bigMonths.includes(month) && day === 31:
        month++;
        day = 1;
        break;

      case bigMonths.includes(month) && day === 30:
        day++;

        break;

      // new Year
      case bigMonths.includes(month) === 12 && day === 31:
        year++;
        day = 1;
        month = 1;
        break;

      case day === 28 && month === 2 && year % 4 !== 0:
        month++;
        day = 1;
        break;
      case day === 29 &&
        month === 2 &&
        year % 4 === 0 &&
        year % 100 !== 0 &&
        year % 400 === 0:
        day++;
        break;
      default:
        day++;
        break;
    }
    if (
      isNaN(day) ||
      day > 31 ||
      isNaN(year) ||
      isNaN(month) ||
      month > 12 ||
      (lilMonths.includes(month) && day === 31)
    ) {
      alert("valid numbers plz -_-");
       
    }
     const addZero = n => n<10 ? `0${n}` : n;
   
    
    alert(`next day seemed to be ${addZero(day)}.${addZero(month)}.${year}`);
  }



// #endregion

//
