"use strict";

// #region form
function spam() {
  var a = parseInt(prompt('введіть число'));

  if (!isNaN(a)) {
    return false;
  }

  spam();
}

var ERRORS_CONFIG = {
  userName: {
    message: 'Please add user name'
  },
  userPassword: {
    message: 'Please type a password'
  },
  userEmail: {
    message: 'Please add valid email'
  },
  agree: {
    message: 'Please check Terms&Conditions'
  }
};

function showError(errorType) {
  var errorText = ERRORS_CONFIG[errorType].message;
  var errorWrapper = document.querySelector('.error');
  errorWrapper.textContent = errorText;
  errorWrapper.classList.add('active');
}

function submitForm() {
  document.querySelector('.error').classList.remove('active');
  var userName = document.querrySelector('#userName').value;
  var userPassword = document.querrySelector('#userPassword').value;
  var userEmail = document.querrySelector('#userEmail').value;
  var userAgree = document.querrySelector('#agree').checked;

  if (!userName) {
    return false;
  }
} // #endregion
// #region el create


var container = document.querySelector('container');
var newHtml = '<ul><li></li><li></li><li></li><li></li></ul>';
container.insertAdjacentHTML('beforebegin, newHtml');
console.log(container); // #endregion

var actionsConfig = {
  add: function add() {
    console.log('Add to cart');
  },
  remove: function remove() {
    console.log('Remove from cart');
  },
  clear: function clear() {
    console.log('Clear cart');
  }
};

function buttonAction(event) {
  var functionKey = event.target.dataset.action;
  console.log(functionKey);
  actionsConfig[functionKey]();
}

document.getElementById('add').addEventListener('click', buttonAction);
document.getElementById('remove').addEventListener('click', buttonAction);
document.getElementById('clear').addEventListener('click', buttonAction);