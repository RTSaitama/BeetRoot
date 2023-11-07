const axios = require('axios').default;

let cookieArr = document.cookie.split(';');
cookieArr.forEach(element => {
    split('=');
    return 
 });
 
//  let response = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Kyiv,UA&appid=${API_KEY}`);
const lat =50.27;
const lon =30.31;
 const part='hourly,daily';
 
const resKyiv = axios.get(`https:api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`).then(function(resKyiv){
  console.log(resKyiv)
})
 
  const API_KEY='314d11b13fb750ad19aa3013ae61e73d';
 

 console.log(resKyiv);
 
 
// https:api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}