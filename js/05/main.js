// #region car
const car = {
  madeBy: "Mazda Motor Corporation ",
  model: "CX-30 ",
  year: 2023,
  averageSpeed: "102 km/h",
  FuelTankVolume: 51,
  fuelConsumption: 7,
  drivers: ["Oleg"],

  showInfo() {
    for (const i in car) {
      if (typeof car[i] !== "function") {
        console.log(`${i} : ${car[i]}`);
      }
    }
  },

  addDriver(driverName) {
    this.drivers.push(driverName);
    console.log(car.drivers);
  },

  checkDriver(nextDriver) {
    console.log(this.drivers.includes(driverName));
    return this.drivers.includes(driverName);
  },
  timeAndFuelCalc() {
    let distance = parseInt(
      prompt("please enter the distance you need to cover(in km")
    );
    if (isNaN(distance)) {
      return alert(`please enter your trip's distace in km`);
    }

    let timeInHours = distance / parseInt(this.averageSpeed);
    let timeInMinutes = timeInHours * 60;
    let resultInHours = Math.floor(timeInHours);
    let resultInMinutes = (timeInMinutes % 60).toPrecision(2);
    if (resultInHours >= 4) {
      resultInHours += Math.floor(resultInHours / 4);
    }
    fuelNeeded = ((this.fuelConsumption / 100) * distance).toPrecision(3);
    console.log(
      `This trip will take ${resultInHours} hours and ${resultInMinutes} minutes. You should have ${fuelNeeded} l of fuel in your car`
    );
    alert(
      `This trip will take ${resultInHours} hours and ${resultInMinutes}. You should have ${fuelNeeded} l of fuel in your car`
    );
  },
};
// #endregion

// #region time
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  changeHours() {
    const changeHours = parseInt(prompt("На скільки годин міняємо час?"));
    if (isNaN(changeHours)) {
      alert('plz enter how many hours do you want to change the clock to?')
      return false
    }
      this.hours = this.hours + changeHours;
      if (this.hours >= 24) {
        this.hours = this.hours%24;
      }
      if(this.hours <0){
        this.hours=24+(this.hours%24)
      }
    },
    
       
   
  changeMinutes() {
    const changeMinutes = parseInt(prompt("На скільки хвилин міняємо час?"));
    if (isNaN(changeMinutes)) {
      alert('plz enter how many minutes do you want to change the clock to?')
      return false
    }
    
    this.minutes = this.minutes + changeMinutes;
    if (this.minutes >= 60) {
      this.minutes = this.minutes % 60;
      this.hours += Math.floor(this.minutes / 60);
    } 
    if (this.minutes < 0) {
      this.minutes = 60 + (changeMinutes%60);
      this.minutes =(Math.floor(this.minutes%60)); 
      this.hours = this.hours -(Math.floor(this.minutes / 60));
    }
     
  },
  changeSeconds() {
    const changeSeconds = parseInt(prompt("На скільки секунд міняємо час?"));
    if (isNaN(changeSeconds)) {
      alert('plz enter how many seconds do you want to change the clock to?')
      return false
    }
    this.seconds = this.seconds + changeSeconds;
    if (this.seconds >= 60) {
      this.seconds = this.seconds % 60;
      this.minutes += Math.floor(this.seconds / 60);
    }
    
    if (this.seconds < 0) {
      this.seconds = 60 + (changeSeconds%60);
      this.seconds = (Math.floor(this.seconds%60));
      this.minutes = this.minutes - (Math.floor(this.seconds / 60)) ;
    }
    },
   
  changeTime() {
    this.changeHours();
    this.changeMinutes();
    this.changeSeconds();

  
   
    const addZero = (n) =>(n>=0&&n < 10? `0${n}` : n);
    const resultTime = 
    `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
      console.log(resultTime)
    alert(`${resultTime} маємо на годиннику`);
  },
}
 

// endregion

// #region fraction
const fraction = {
  nominator: 2,
  denominator: 3,
  showValue() {
    console.log(`Value is ${this.nominator}/${this.denominator}`);
  },
  findGCD(a, b) {
    if (a == 0) {
      return b;
    }
    return this.findGCD(b % a, a);
  },
  findLocalNominator(n, d) {
    return n * d;
  },
  add(n, d) {
    let localDenominator = 1;
    if (this.denominator === d) {
      localDenominator = this.denominator;
    } else {
      localDenominator = this.denominator * d;
      this.nominator = this.nominator * (localDenominator / this.denominator);
      this.denominator = localDenominator;
      n = n * (localDenominator / d);
      d = localDenominator;
      const addingResultNominator = this.nominator + n;
      const gcd = this.findGCD(addingResultNominator, d);
      console.log(`result is ${addingResultNominator / gcd}/${d / gcd}`);
    }
  },
};
// #endregion
