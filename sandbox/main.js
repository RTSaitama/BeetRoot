// #region form
function spam(){
  const a = parseInt(prompt('введіть число'));
  if(!isNaN(a)){
    return false
  }
  spam()
}
  
const ERRORS_CONFIG ={
  userName:{
    message: 'Please add user name'
  },
  userPassword:{
    message: 'Please type a password'  
  },
  userEmail:{
    message: 'Please add valid email'
  },
  agree:{
    message: 'Please check Terms&Conditions'
  },
}
function showError(errorType){
  const errorText = ERRORS_CONFIG[errorType].message;
  const errorWrapper =document.querySelector('.error');

  errorWrapper.textContent = errorText;
  errorWrapper.classList.add('active');
}
 
function submitForm(){
  document.querySelector('.error').classList.remove('active');

  const userName = document.querrySelector('#userName').value;
  const userPassword = document.querrySelector('#userPassword').value;
  const userEmail = document.querrySelector('#userEmail').value;
  const userAgree = document.querrySelector('#agree').checked;
  if(!userName) {
    return false;
  }
}
// #endregion

// #region el create
const container = document.querySelector('container')

const newHtml = '<ul><li></li><li></li><li></li><li></li></ul>'
container.insertAdjacentHTML('beforebegin, newHtml');

console.log(container);
// #endregion

const actionsConfig ={
  add:function(){
    console.log('Add to cart');
  },
  remove:function(){
    console.log('Remove from cart');
  },
  clear: function(){
    console.log('Clear cart');
  }
  }
  
  
  
  function buttonAction(event){
    const functionKey = event.target.dataset.action;
    console.log(functionKey);
    actionsConfig[functionKey]();
  
  }
  document.getElementById('add').addEventListener('click', buttonAction);
  document.getElementById('remove').addEventListener('click', buttonAction);
  document.getElementById('clear').addEventListener('click', buttonAction);