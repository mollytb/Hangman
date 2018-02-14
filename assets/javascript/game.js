
//word bank for game
var wordBank = ["corkscrew", "gatekeeper", "gemini", "magnum", "maverick", "raptor", "rougarou",
    "valravn", "dodgem", "matterhorn", "monster", "scrambler", "skyhawk", "troika", "windseeker",
    "maxair", "tofts", "corral", "coasters"];


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

document.addEventListener("DOMContentLoaded", function () {
//start function works but not as a reset. adds two random words together and doesn't clear anything properly
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
        //these reset the guesses and the letterbox almost properly
        wrongGuessesLeft=10;
        badBox=[];
        

       
        
    }

    //user input
    document.onkeyup = function (event) {
        userGuess = event.key;
    
        //checking if letter exists in chosen word
        if (randWord.indexOf(userGuess) > -1) {
            for (var i = 0; i < randWord.length; i++) {
                if (randWord[i] === userGuess) {
                    underScore[i] = userGuess;
                    console.log(underScore);
                    //goodguess is useless and was supposed to be helpful but i don't remember how
                    goodGuess++;
                    
                    (goodGuess);

                }
            }

        } 
        //lose info
        if (wrongGuessesLeft === 0)
        {
            alert("You Lost! Sad day for you");
            losses++;
            document.getElementById("losses").textContent = losses;
            startGame();

        }
        //!!!!!____________WTF____________am I doing here? isn't tracking wins
        if (underScore === randWord.length)
        {
            alert("You win! What excitement.");
            wins++;
            document.getElementById("wins").textContent = wins;
            startGame();
        }
        //badbox/letterbox works but has repaets and special keys
        document.getElementById("underscore").textContent = underScore;
        if (randWord.indexOf(userGuess) < 0)
        {
            badBox.push(userGuess);
            document.getElementById("bad-box").textContent = badBox;
            wrongGuessesLeft--;
            document.getElementById("guesses").textContent = wrongGuessesLeft;

        }
       
        
        
       
    }
    
    
    

    startGame();
    
    
});