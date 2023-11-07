"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function Marker(color, amountOfInk) {
  _classCallCheck(this, Marker);

  this.color = color;
  this.amountOfInk = amountOfInk;
}; // const marker = {
//   color:'black',
//   amountOfInk:'100%',
//   textField:document.querySelector('.textField'),
//   SetColor: function(color){
//     this.color=`"${color}"`;
//   },
//   SetAmountOfInk: function(ink){
//     this.amountOfInk=`"${ink}"`
//   },
//   SetText: function(str){
//     this.textToWrite = str
//   },
//   } 
//   function canWrite(){ 
//     let inksLeft = parseInt(this.amountOfInk);
//     let noSpaceText= this.textToWrite.replace(/ /g,'');
//     console.log(noSpaceText);
//     let symbolsCanWrite =noSpaceText.length/0.5;
//     console.log(symbolsCanWrite);
//     document.querySelector('.textField').innerHtml =`
//     <p style="color:${this.color}">${symbolsCanWrite}</p>`
//   }


exports["default"] = Marker;