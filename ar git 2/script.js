// var x = prompt("Where does the john live?");
//  if (x === "new york") {
//   alert("Correct!");
//   }


/////////////////////////////////////


// var x = (yourTicketNumber = 48720)
// if (yourTicketNumber !== 487208) {
//  alert("Better luck next time.");
//  }

//////////////////////////////////////

// var x = prompt("Where does the john live?");
//  if (x === "new york") {
//   alert("Correct!");
//   }
//   else {
//  alert("Wrong answer");
//  }

////////////////////////////////////


// var country0 = "america";
// var country1 = "turkey";
// var country2 = "pakistan";
// var country3 = "malaysia";
// var country4 = "england";
// var country5 = "Seattle";

// alert("Welcome to " + country3);


// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// alert("Welcome to " + cities[3]);


// var pets = [];

//  pets[0] = "dog";
//  pets[1] = "cat";
// pets[2] = "bird";

// // pets.pop(0);

////////////////////////////

// pets.push("fish", "ferret");

////////////////////////////////

// pets.shift();

////////////////////////////////

// pets.unshift("fish", "ferret");

///////////////////////////////

// pets.splice(2, 2, "pig", "duck", "emu");

//////////////////////////////////

// pets.splice(2, 2);

/////////////////////////////////////

// var noPets = pets.slice(2, 4);

//////////////////////////////


var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var cityToCheck = ["karachi", "tronto", "Tucson", "istanbul", "Honolulu"];

// if (cityToCheck === cleanestCities[0]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[1]) {
//      alert("It's one of the cleanest cities");
//      }
//     else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
//     }
//     else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[4]) {
//      alert("It's one of the cleanest cities");
//      }

////////////////////////////////////////

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//      alert("It's one of the cleanest cities");
//      }
//      }

////////////////////////////////////////////

 var matchFound = "no";
 for (var i = 0; i <= 4; i++);
 if (cityToCheck === cleanestCities[i]) {
 matchFound = "yes";
 alert("It's one of the cleanest cities");
 }
 
 if (matchFound === "no")
   alert("It's not on the list");
 