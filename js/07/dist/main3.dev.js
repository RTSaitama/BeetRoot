"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// створюю дів, ставлю в баді, додаю клас контейнер для зручності.
var Addcontainer = document.createElement('div');
document.body.append(Addcontainer);
Addcontainer.className = 'container';
var container = document.querySelector('.container');
container.innerHTML = '<div></div><div></div><div></div><button></button>';
container.children[0].style.backgroundColor = 'green', container.children[1].style.backgroundColor = 'yellow';
container.children[2].style.backgroundColor = 'red';
var marker = 0;
var allTheLights = document.querySelectorAll('.container div');

function turnLightOnOff() {
  document.querySelector('.container .light');
  allTheLights[marker].classList.add('light');
  marker < allTheLights.length - 1 ? (_readOnlyError("marker"), marker++) : marker = (_readOnlyError("marker"), 0);
} // for(let i=0;i<container.childNodes.length;i++){
//   container.childNodes[i].onclick = function light(){
//       container.childNodes[i].classList.toggle('light');
//     }
//   }