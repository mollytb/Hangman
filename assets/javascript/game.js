
//word bank for coasters
var cedarPointRollerCoasters = ["Blue Streak", "Cedar Creek Mine Ride", "Corkscrew",
"Gatekeeper", "Gemini", "Iron Dragon", "Magnum", "Maverick", "Millennium Force", 
"Pipe Scream", "Raptor", "Rougarou", "Steel Vengeance", "Top Thrill Dragster", 
"Valravn", "Wicked Twister", "Wilderness Run", "Woodstock Express"]

//word bank for rides
var cedarPointRides = ["Dodgem", "Matterhorn", "Monster", "Ocean Motion", "Power Tower",
"Scrambler", "Skyhawk", "Snake River Falls", "Super Himalaya", "Thunder Canyon", "Tiki Twirl",
"Troika", "Wave Swinger", "WindSeeker", "Witches' Wheel", "maXair"]

//word bank for food places
var cedarPointFood = ["Toft's Ice Cream Parlor", "Arctic Junction", "Happy Friar", "Lakeside Express", 
"Last Chance Saloon", "Miday Market", "Pretzel Fillers", "Sky Ride Refreshments", "The Roundup", 
"Wagon Wheel Pizza", "Mr. Potato", "High Energy Station", "Frontier Inn", "Dragon's Inn", "Dive In", 
"Corral", "Coasters", "Chickie's & Pete's"]

var userText = document.getElementById("user-text");
var Underscore = [];
//print all coasters
for (var i = 0; i < cedarPointRollerCoasters.length; i++) {
    console.log(cedarPointRollerCoasters[i]);
    }
  
//print all rides    
for (var i = 0; i < cedarPointRides.length; i++) {
    console.log(cedarPointRides[i]);
    }

//print all food places
for (var i = 0; i < cedarPointFood.length; i++) {
    console.log(cedarPointFood[i]);
    }

    
//select a random coaster for game play
function randomSortCoasters() {
    cedarPointRollerCoasters.sort(function(a, b){return 0.5 - Math.random()});
    console.log(cedarPointRollerCoasters[1])
}

//select a random ride for game paly
function randomSortRides() {
    cedarPointRides.sort(function(a, b){return 0.5 - Math.random()});
    console.log(cedarPointRides[1])
}
//select a random food string for game play
function randomSortFood() {
    cedarPointFood.sort(function(a, b){return 0.5 - Math.random()});
    console.log(cedarPointFood[1])
}

randomSortCoasters()
randomSortFood()
randomSortRides()
//replace the chosen word with underscores

let generateUnderscore = () => {
     for (let i = 0; i , randomSortCoasters.length; i++) {
         Underscore.push("_");
     }
     return Underscore;
 }
 console.log(generateUnderscore());

 //get players input
 //document.addEventListener("keypress", (event))

//console.log(event)

//document.onkeyup = function(event) {
 //   userText.textContent = event.key;
 // };
 // console.log(event)