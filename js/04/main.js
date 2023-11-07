// #region min
//  function name() {}
// () => {}
// let name = function(){}
 function argsCount(){
  alert ((argsCount.arguments).length)
 }

 function comparison(){
    let firstNum= parseInt(prompt('введіть перше число для порівняння'))
    let secondNum= parseInt(prompt('введіть друге число для порівняння'))
    if (isNaN(firstNum)||isNaN(secondNum)){
      alert('будь ласка, введіть саме числа')
    }
    else{
    switch (true){
     case  (firstNum<secondNum) :
      alert(-1)
      break
      case  (firstNum>secondNum) :
      alert(1)
      break
      case  (firstNum===secondNum) :
      alert(0)
      break
    }}
 }

 factorial=()=>{
  let numb1=parseInt(prompt('введіть число для обчислення факторіалу'))

  if(isNaN(numb1))
  {
    alert('будь ласка, введіть число.'
    )
  return false
}
    let result=0;
    for(let i=1;i<=numb1;i++){
    result +=numb1*(numb1-i)
   }
   console.log(result)
   alert(result)

 }

 numbersInOne=()=>{
  let someNumb1=parseInt(prompt('введіть цифру для склейки в число'));
  let someNumb2=parseInt(prompt('ще одну цифру'));
  let someNumb3=parseInt(prompt('і ще одну цифру'));
  if(isNaN(someNumb1)||isNaN(someNumb2)||isNaN(someNumb3)){
    alert('будь ласка, введіть саме цифри') 
}else{
let result = Number(`${someNumb1}${someNumb2}${someNumb3}`)
console.log(result)
alert(result) 
}  
 }

function rectangleSize(){
  if(rectangleSize.arguments[1]==undefined){
    alert(`size of this rectangle = ${rectangleSize.arguments[0]**2}`)
  }  
  else{
    alert(`size of this rectangle =${rectangleSize.arguments[0]*rectangleSize.arguments[1]}`)
 }
}

// #endregion 
 
// #region normal

function ifPurfectNumber(number){

  let totalDivider= 0;
    // 6     1 2 3 
  for(let i=1;i<=number/2;i++){
    if(number%i===0){
      totalDivider=totalDivider+i
      // console.log(totalDivider)
    }
  }
    
    return number===totalDivider

}
function showResult(){
  let userNumber=parseInt(prompt('введіть будь ласка число'));
  if(isNaN(userNumber)){
    alert('будь ласка, введіть саме число')
  }else{
    alert(ifPurfectNumber(userNumber)? 'number is purfect' :'number is not purfect')
  }
 

}

function purfectInRange(){
  let min = parseInt(prompt('введіть мінімальне значення діапазону'))
  let max = parseInt(prompt('введіть максимальне значення діапазону'))
  if(isNaN(min)||isNaN(max)){
    alert('будь ласка, введіть саме число')
  }else{
  let result ='';
  for(let i=min; i<=max;i++){
    if(ifPurfectNumber(i)){
      result+=i+ ' ';
    }

  } alert(`${result} are purfect`)
}}
// #endregion