const el = React.createElement;
// const listLayout =` <ul>
// {cardsArray}.map((item,index) => (
// <li key={index}>{item}</li> ))
// </ul>   `
const weatherCardsList = [
      {
          city: 'Lisbon',
          temp: '21°C',
          width: 50,
          classListI:'wi wi-day-sunny',
      },
      {
          city: 'Paris',
          temp: '11°C',
          width: 25,
          classListI:'wi wi-night-sleet"',
      },
      {
          city: 'Belgrade',
          temp: '15°C',
          width: 25,
          classListI:'wi  wi-day-cloudy',
      },
      {
          city: 'Venice',
          temp: '21°C',
          width: 25,
          classListI:'wi wi-day-cloudy-high',
      },
      {
          city: 'Tel-Avive',
          temp: '32°C',
          width: 25,
          classListI:'wi wi-hot',
      },
      {
          city: 'Cair',
          temp: '21°C',
          width: 25,
          classListI:'wi wi-day-sunny',
      },
      {
          city: 'New-York',
          temp: '17°C',
          width: 25,
          classListI:'wi wi-day-sleet-storm',
      },
      {
          city: 'New-Delhi',
          temp: '17°C',
          width: 25,
          classListI:'wi wi-rain-wind',
      },
      {
          city: 'San-Francisco',
          temp: '15°C',
          width: 50,
          classListI:'wi wi-day-cloudy',
      },
      {
          city: 'Tokyo',
          temp: '8°C',
          width: 25,
          classListI:'wi wi-night-clear',
      },
      {
          city: 'Sydney',
          temp: '25°C',
          width: 100,
          classListI:'wi wi-night-partly-cloudy',
      },
  
  ]

  function App() {
 
          return(
            <div className="container">
              <h1 className="Heading">Weather Forecast <i className="wi wi-sunset"></i></h1>
               
              <WeatherList />
              <footer class="footer">
              Have a nice day and don't forget umbrella if you are in New Delhi now!
            </footer>
            </div>
            
          )
    }
    
 
 
    

 function WeatherList(){
 
  let weatherList;
  weatherList=weatherCardsList.map((card, index) => {
    return <WeatherCard item={card} key={index}/>
  })
    return (
              <div class ="weatherContainer">{weatherList}</div>
            
  )
}

function WeatherCard(props) {

  const { city, temp, width,classListI} = props.item;

  return (
   
        
        <div className={`div ${city}  w_${width}`}>
              <h3 className>{city}</h3>
              <div className="weather_screen"> <span className="temp">{temp}</span><i className={classListI}></i></div>
       
          </div>
    
  )
}


    const app = document.getElementById('app');
    const root = ReactDOM.createRoot(app);
    root.render( <React.StrictMode>{React.createElement(App)}</React.StrictMode>);

  