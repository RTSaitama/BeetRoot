"use strict";

// const axios = require("./axios");
// let cookieArr = document.cookie.split(';');
// cookieArr.forEach(element => {
//     split('=');
//     return 
//  });
//  let kyiv= document.cookie = encodeURIComponent('cityid')+ '='+encodeURIComponent('703448')
//  console.log(cookieArr);
//  let cityName='Kyiv';
//  let countryCode ='UA';
//   let API_KEY='a21fea6fed5276f6e3a9d5217dd2f45f';
//  let response = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Kyiv,UA&appid=a21fea6fed5276f6e3a9d5217dd2f45f`);
var weatherInKyiv = axios.get("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a21fea6fed5276f6e3a9d5217dd2f45f)");
console.log(weatherInKyiv);
var kyivGeo = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=a21fea6fed5276f6e3a9d5217dd2f45f");
console.log(kyivGeo); // https:api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}