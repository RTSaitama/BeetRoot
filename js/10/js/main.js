// eb5a2aa0 key 
const API_KEY = 'eb5a2aa0';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
 
 
let PAGE = 1;
let finalPage = 1;
 
function searchMovie(event) {
    event.preventDefault();
    const movieName = document.getElementById('search').value;
    console.log(movieName);
    if(movieName) {
        axios.get(BASE_URL+`&s=${movieName}&page=${PAGE}`)
        .then(function (res) {
            console.log(res.data);
            finalPage = Math.ceil(res.data.totalResults / 10);
            
            generateCards(res.data.Search);
        })
    }
}

function generateCards(resultsData) {
    let html = `<div class="movies_slider">`;

    resultsData.forEach(el => {
        html = html + `<div>
        <span class="title">${el.Title}</span>
        <span class="year">${el.Year}</span>
        <img  class="poster" src="${el.Poster}" alt/>
        </div>`;
    })
    html = html + '</div>'
    document.getElementById('movies_slider').innerHTML = html;
 
}
$('.movies_slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:4000,
    speed: 200,
    fade: true,
    slide: "div",
    slidesToShow: 10,
    slidesToScroll: 5,
    centerMode: true,
    centerPadding: '40px',
    prevArrow: document.querySelector('.mov_prev_arrow'),
    nextArrow: document.querySelector('.mov_next_arrow'),
  
   
  });
function nextPage(event) {
    event.preventDefault();
    PAGE++;
    gotoPage(PAGE)
}

function gotoPage(page) {
    PAGE = page;
    searchMovie();
}

function goToEnd(event) {
    event.preventDefault();
    PAGE = finalPage;
    gotoPage(PAGE)
}


function toSearchCartoon(){
  axios.get(BASE_URL+`&type=${movieName}&page=${PAGE}`)
}
function toSearchFilm(){
  
}
function toSearchSeries(){
  
}
function toSearchEpisods(){
  
}