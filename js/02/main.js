function firstBtnAdd() {
  let a = Number(prompt("please give me some float number"));
  let b = Number(prompt("please give me another one to add"));
  if (a < 1 && a > 0 && b < 1 && b > 0) {
    let result = a + b;
    if (result <= 0.31) {
      console.log(result.toPrecision(1));
      alert(result.toPrecision(1));
    } else {
      console.log(result);
      alert(result);
    }
  } else {
    alert(`try again, but with Floats 0-1`);
  }
}

function secondBtnAdd() {
  let a = prompt('please enter 2')
  if(a!=Number(2)){
    alert('no, its my game with my rules, write 2 ')
    return;}
    
  let b = 1;
  let result = Number(a) + Number(b);
  console.log(result);
  alert(`${result} and thats how:   let a = prompt('please enter 2')
  if(a!=Number(2)){
    alert('no, its my game with my rules, write 2 ')
    return;}
    
  let b = 1;
  let result = Number(a) + Number(b);
  console.log(result);`);
}    
 

function thirdBtnFlashSize() {
  let input = prompt("Please, enter your flash memory size in gb");
  let memory = parseInt(input);
  let mbSize = memory * 1000;
  let howManyFiles = Math.round(mbSize / 820);
  console.log(memory);
  if (isNaN(input)) {
    alert("Please, check your input");
  } else {
    alert(`You can save ${howManyFiles} files on this flash`);
  }
}

function howManyChocolatesYouCanBuy() {
  var money = parseInt(prompt("what  are you counting on(in UAH)?"));
  var price = parseInt(prompt(" enter the cost of the chocolate bar here"))
  if (!isNaN(money)&&!isNaN(price)){
     
  console.log(money);
  console.log(price);
  let rest = money % price;
  let deal = Math.floor(money / price);

  if (money < price) {
    alert("You can't buy chocolate now, go and earn some money");
  } else if (money > price) {
    let chocoCount = `So you can buy ${deal} chocolates, and you still have ${rest} UAH `;
    deal--;
    alert(chocoCount);
  }
  }else {alert("Please, check amount and price")}
  
}
 
function fourtBtnReverseNumber(){
  let reversedNumber='';
  let number = parseInt(prompt("write 3digit number to reverse it "));
  if(!isNaN(number)){
  console.log(number);
  var firstNumb=((number)%10);
  console.log(firstNumb)
 
  var secondNumb=Math.floor(((number)%100)/10) ;
  if(secondNumb===0){
    secondNumb=Math.floor((number)%10/10);
    thirdNumb= Math.floor(((number)%1000));
  }
  console.log(secondNumb) 
  var thirdNumb=Math.floor(((number)%1000)/100);
 
  console.log(thirdNumb)
  reversedNumber=`${firstNumb}${secondNumb}${thirdNumb}`;
  alert(reversedNumber)} 
   
}

function fifthBtnDepositCalc(){
  var amount = parseInt(prompt('write your deposit amount here '));
  var interestRate = 5;
  var period = parseInt(prompt('please write period (in month)to calc profit'));
  if(!isNaN(amount)&&!isNaN(period)){
 
  var afterMonthProfit = ((amount/100)*interestRate)/12 ;
  var result =Math.floor(amount+(afterMonthProfit*period));
 
  return alert(`you will gain ${result} UAH`)
} 
alert(`plz, check amount and period`)
}