var sportsButtonsEl = document.querySelector("#sports-buttons");
var teamsEl = document.querySelector("#teams");
var dateEl = document.querySelector("#date");
var timeEl = document.querySelector("#time");
var recipes = $('.carouselInter')



console.log(recipes);
//Sports Button Identifier
sportsButtonsEl.addEventListener("click", function (event) {
  var selectedSport = event.target.id;
  sports(selectedSport);
});

//Button listeners for sports API call
var sportsFormSubmitHandler = function (event) {
  event.preventDefault();
  console.log();
  sports(selectedSport);
};

//Cocktail Event Listener
$("#submit-form").on("click", function (event) {
  event.preventDefault();
  var text = $("#search-form").val();
  var liqour = $("#typeliq option:selected").text();
  getcocktails(text, liqour);
});

//Cocktail API Call
var getcocktails = function (name, type) {
  if (name === "") {
    var cocktailApi =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + type
    console.log(cocktailApi);
  }

  if (type === "Select a Liquor") {
    var cocktailApi =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
    console.log(cocktailApi);
  }

  fetch(cocktailApi).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      populatecocktails(data);
    });
  });
};

//Cocktail HTML Generator
var populatecocktails = function (data1) {
  var drinksArray = data1.drinks;
  console.log(drinksArray);
  for (var i = 0; i <= 3; i++) {
    recipes[i].src = drinksArray[i].strDrinkThumb;
    var drinksId = drinksArray[i].idDrink
    populateInstructions(drinksId, i);
  }
};


var populateInstructions = function (drinksId, i) {
  var ingredients = $('.drinkRecipe')
  var drinkname = $('.carousel h2');
  var ingredUl = document.createElement('ul');


  var url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinksId;
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data.drinks[0].strInstructions)
      ingredients[i].textContent = data.drinks[0].strInstructions
      drinkname[i].textContent = data.drinks[0].strDrink;
      drinkname[i].insertAdjacentElement('afterend', ingredUl);
      ingredUl.setAttribute('class', 'ingredList')
      console.log(data)

      for (var j = 1; j <= 15; j++) {
        var ingredient = data.drinks[0]["strIngredient" + j]
        var measure = data.drinks[0]["strMeasure" + j];
        console.log(measure)
        console.log(ingredient)
        if (ingredient && measure) {
          var ingredList = document.createElement('li');
          ingredList.textContent = ingredient + " " + measure;
          ingredUl.appendChild(ingredList);
        }
        if (ingredient && !measure) {
          var ingredList = document.createElement('li');
          ingredList.textContent = ingredient;
          ingredUl.appendChild(ingredList);
        }

      }
    });
  });
}

//Sports API call
var sports = function (selectedSport) {
  if (selectedSport === "baseball-btn") {
    var sportsApiUrl =
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4424&s=2022";
  }
  if (selectedSport === "football-btn") {
    var sportsApiUrl =
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4391&s=2021";
  }
  if (selectedSport === "soccer-btn") {
    var sportsApiUrl =
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022";
  }
  if (selectedSport === "basketball-btn") {
    var sportsApiUrl =
      "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4387&s=2021-2022";
  }

  fetch(sportsApiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      populateSchedule(data);
    });
  });
};

//Sports HTML Generator
function populateSchedule(data) {
  teamsEl.innerHTML = "";
  timeEl.innerHTML = "";
  dateEl.innerHTML = "";

  for (i = 99; i >= 90; i--) {
    var teams = data.events[i].strEventAlternate;
    var date = data.events[i].dateEvent;
    var time = data.events[i].strTime;
    console.log(teams);
    console.log(date);
    console.log(time);
    var teamsChild = document.createElement("h5");
    var timeChild = document.createElement("h5");
    var dateChild = document.createElement("h5");
    teamsChild.textContent = teams;
    teamsEl.appendChild(teamsChild);
    timeChild.textContent = time;
    timeEl.appendChild(timeChild);
    dateChild.textContent = date;
    dateEl.appendChild(dateChild);
  }
}



//Initial functions on page load
function init() {
  $(document).ready(function () {
    $("select").formSelect();
    $(".parallax").parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  });
}
init();
