"use strict";

var _Circle = _interopRequireDefault(require("./classes/Circle.js"));

var _Rectangle = _interopRequireDefault(require("./classes/Rectangle.js"));

var _Square = _interopRequireDefault(require("./classes/Square.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rect1 = new _Rectangle["default"](100, 200, 'pink', 20, 50);
rect1.draw();
var sq1 = new _Square["default"](300, 'blue', 200, 150);
sq1.draw();
var sr1 = new _Circle["default"](400, 'green', 400, 350);
sr1.draw();

function hiddenExample() {
  var password = 12;
} //  const circle = {
//   setRadius:function(radius){
//     this.radius=radius
//   },
//   p:Math.PI,
//   getRadius: function(){
//     console.log(this.radius)
//       // return this.radius;
//   },
//   setRadius: function (radius){
//     return  this.radius = radius;
//   },
//   getSize:function(){
//     console.log(this.p*(this.radius**2))
//   },
//   getDiameter: function(){
//     this.diameter= this.radius*2
//     console.log(this.diameter)
//   },
//   getLength: function(){
//     this.length = 2*this.p*this.radius
//     console.log(this.length)
//   }
//  }
// #endregion
// #region Marker
// #endregion
// Bank
// #endregion