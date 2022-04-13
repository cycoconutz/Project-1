var sportsButtonsEl = document.querySelector('#sports-buttons');
var teamsEl = document.querySelector('#teams');
var dateEl = document.querySelector('#date');
var timeEl = document.querySelector('#time');


//Button listeners for sports API call
var sportsFormSubmitHandler = function (event) {
  event.preventDefault();

  console.log();
  sports(drink);
};

var displaycocktails = function (name, type)
{
  if (name==="") { var cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + type;
  console.log(cocktailApi)
  }

  if (type==="Search By Liqour") {var cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=' + name;
  console.log(cocktailApi);
  }
  fetch(cocktailApi).then(function (response) {
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

$('#submit-form').on('click', function(event) {
  event.preventDefault();
  var text =$('#username').val().trim();
  var liqour =$('#typeliq option:selected').text()
displaycocktails(text, liqour);
})







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
      populateSchedule(data);
    });
  })

};

function populateSchedule(data) {
  teamsEl.innerHTML = "";
  timeEl.innerHTML = "";
  dateEl.innerHTML = "";

  for (i = 99; i >= 90; i--) {
    var teams = data.events[i].strEventAlternate
    var date = data.events[i].dateEvent
    var time = data.events[i].strTime
    console.log(teams)
    console.log(date)
    console.log(time)
    var teamsChild = document.createElement('h5')
    var timeChild = document.createElement('h5')
    var dateChild = document.createElement('h5')
    teamsChild.textContent = teams
    teamsEl.appendChild(teamsChild);
    timeChild.textContent = time
    timeEl.appendChild(timeChild);
    dateChild.textContent = date
    dateEl.appendChild(dateChild);
  };

}


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