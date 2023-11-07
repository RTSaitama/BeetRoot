"use strict";

// eb5a2aa0 key 
var API_KEY = 'eb5a2aa0';
var BASE_URL = "http://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;
var finalPage = 1;

function searchMovie(event) {
  event.preventDefault();
  var movieName = document.getElementById('search').value;
  console.log(movieName);

  if (movieName) {
    axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
      console.log(res.data);
      finalPage = Math.ceil(res.data.totalResults / 10);
      generateCards(res.data.Search);
    });
  }
}

function generateCards(resultsData) {
  var html = "<div class=\"movies_slider\">";
  resultsData.forEach(function (el) {
    html = html + "<div>\n        <span class=\"title\">".concat(el.Title, "</span>\n        <span class=\"year\">").concat(el.Year, "</span>\n        <img  class=\"poster\" src=\"").concat(el.Poster, "\" alt/>\n        </div>");
  });
  html = html + '</div>';
  document.getElementById('movies_slider').innerHTML = html;
}

$('.movies_slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 200,
  fade: true,
  slide: "div",
  slidesToShow: 10,
  slidesToScroll: 5,
  centerMode: true,
  centerPadding: '40px',
  prevArrow: document.querySelector('.mov_prev_arrow'),
  nextArrow: document.querySelector('.mov_next_arrow')
});

function nextPage(event) {
  event.preventDefault();
  PAGE++;
  gotoPage(PAGE);
}

function gotoPage(page) {
  PAGE = page;
  searchMovie();
}

function goToEnd(event) {
  event.preventDefault();
  PAGE = finalPage;
  gotoPage(PAGE);
}

function toSearchCartoon() {
  axios.get(BASE_URL + "&type=".concat(movieName, "&page=").concat(PAGE));
}

function toSearchFilm() {}

function toSearchSeries() {}

function toSearchEpisods() {}