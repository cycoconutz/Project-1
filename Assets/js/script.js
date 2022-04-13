var sportsButtonsEl = document.querySelector('#sports-buttons');

//Button listeners for sports API call
var sportsFormSubmitHandler = function (event) {
  event.preventDefault();

  console.log();
  sports(drink);
};

//Sports API call
var sports = function (selectedSport) {
  if (selectedSport === 'baseball-btn') {
    var sportsApiUrl = 'https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4424&s=2022'
  }
  if (selectedSport === 'football-btn') {
    var sportsApiUrl = 'https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4391&s=2021'
  }
  if (selectedSport === 'soccer-btn') {
    var sportsApiUrl = 'https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022'
  }
  if (selectedSport === 'basketball-btn') {
    var sportsApiUrl = 'https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4387&s=2021-2022'
  }

  fetch(sportsApiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  })
};


sportsButtonsEl.addEventListener('click', function (event) {
  var selectedSport = event.target.id
  sports(selectedSport);
});


//Initial functions on page load
function init() {
  $(document).ready(function () {
    $('select').formSelect();
    $('.parallax').parallax();
    $('.carousel').carousel();
  });
}
init();