
//word bank for coasters
var wordBank = ["Blue Streak", "Cedar Creek Mine Ride", "Corkscrew",
    "Gatekeeper", "Gemini", "Iron Dragon", "Magnum", "Maverick", "Millennium Force",
    "Pipe Scream", "Raptor", "Rougarou", "Steel Vengeance", "Top Thrill Dragster",
    "Valravn", "Wicked Twister", "Wilderness Run", "Woodstock Express", "Dodgem", "Matterhorn", "Monster", "Ocean Motion", "Power Tower",
    "Scrambler", "Skyhawk", "Snake River Falls", "Super Himalaya", "Thunder Canyon", "Tiki Twirl",
    "Troika", "Wave Swinger", "WindSeeker", "Witches' Wheel", "maXair", "Toft's Ice Cream Parlor", "Arctic Junction", "Happy Friar", "Lakeside Express",
    "Last Chance Saloon", "Miday Market", "Pretzel Fillers", "Sky Ride Refreshments", "The Roundup",
    "Wagon Wheel Pizza", "Mr. Potato", "High Energy Station", "Frontier Inn", "Dragon's Inn", "Dive In",
    "Corral", "Coasters", "Chickie's & Pete's"]

$(document).ready(function () {

    var wrongGuessesLeft = 9
    var userGuess;
    var underScore = [];
    var randWord;
    var badBox = [];
    var goodGuess = 0;
    var wins = 0;
    var losses = 0;
    //print all coasters
    //for (var i = 0; i < wordBank.length; i++) {
    //    console.log(wordBank[i]);
    //    }
    
    //print all rides    
    //for (var i = 0; i < cedarPointRides.length; i++) {
    //    console.log(cedarPointRides[i]);
    //    }

    //print all food places
    //for (var i = 0; i < cedarPointFood.length; i++) {
    //    console.log(cedarPointFood[i]);
    //    }


    //select a random coaster for game play
    //function randomSortCoasters() {
    //    cedarPointRollerCoasters.sort(function(a, b){return 0.5 - Math.random()});
    //    console.log(cedarPointRollerCoasters[1])
    //}

    //select a random ride for game paly
    //function randomSortRides() {
    //    cedarPointRides.sort(function(a, b){return 0.5 - Math.random()});
    //    console.log(cedarPointRides[1])
    //}
    //select a random food string for game play
    //function randomSortFood() {
    //    cedarPointFood.sort(function(a, b){return 0.5 - Math.random()});
    //    console.log(cedarPointFood[1])
    //}

    ///randomSortCoasters()
    //randomSortFood()
    //randomSortRides()
    //replace the chosen word with underscores

    //.replace(/[a-z]/gi, '_')

    //let generateUnderscore = () => {
    //for (let i = 0; i , randomSortCoasters.length; i++) {
    //    Underscore.push("_");
    //}
    //     return Underscore;
    // }
    function startGame() {
        //picks word
        randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randWord);
        console.log(randWord.length)
        for (var i = 0; i < randWord.length; i++) {
            underScore.push("_");
        }
        //make underscores for word at start of game
        document.getElementById("underscore").textContent = underScore.join(" ");
        console.log(underScore);

        //reset

        wrongGuessesLeft = 9;

        document.getElementById("guesses").textContent = wrongGuessesLeft;
    }
    function winOrLose()
    {
        if(goodGuess = randWord.length)
        {
           // alert("You Won!");
            //1document.getElementById("wins").textContent = wins++;
        }
        else if(wrongGuessesLeft === 0)
        {
            alert("You Lost... Sad day for you");
            document.getElementById("losses").textContent = losses++;
        }
    
    }
    //user input
    document.onkeyup = function (event) {
        userGuess = event.key;
        //checking if letter exists in chosen word
        if (randWord.indexOf(userGuess) > -1) {
            for (var i = 0; randWord.length; i++) {
                if (randWord[i] === userGuess) 
                {
                    underScore[i] = userGuess;
                    document.getElementById("underscore").textContent = underScore;
                    goodGuess++;
                    winOrLose();
                }
            }

        }
        else {
            badBox.push(userGuess);
            document.getElementById("bad-box").textContent = badBox;
            wrongGuessesLeft--;
            document.getElementById("guesses").textContent = wrongGuessesLeft;
            winOrLose();

        }
    }

    startGame();

});