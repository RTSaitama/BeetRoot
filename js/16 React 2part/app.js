const url = 'http://www.omdbapi.com/?apikey=eb5a2aa0';
 
const API_KEY = 'eb5a2aa0';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const options ={
    method: 'GET'
}
function App(){
 
    return (
      <div className='page_wrapper'>
          <Header/>

      </div>
    )
  
}
 
// #region header main tags

// #endregion 
// #region Search

// #endregion
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App));

 