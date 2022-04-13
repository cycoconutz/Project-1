var sportsButtonsEl = document.querySelector('#sports-buttons');

//Button listeners for sports API call
var sportsFormSubmitHandler = function (event) {
  event.preventDefault();

  console.log();
  sports(drink);
};

//Sports API call
var sports = function (sports) {
  var sportsApiUrl = 'https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4424&s=2022'

  console.log(sportsApiUrl)

  fetch(sportsApiUrl).then(function (response) {
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


sportsButtonsEl.addEventListener('click', function (event) {
  console.log(event.target.id)
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