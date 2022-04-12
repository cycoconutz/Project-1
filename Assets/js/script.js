$(document).ready(function () {
  $('select').formSelect();
  $('.parallax').parallax();
  $('.carousel').carousel();
});

var cocktail = function (drink) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  console.log(apiUrl)

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
};
cocktail();