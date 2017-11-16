// Initialize variables

var wins = 0;
var losses = 0;
var greenBox;
var accumulator = 0;

// Empty crystal values
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;

// Function to get random integers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to reset these values  
function reset () { 
    greenBox = getRandomInt(19, 120);
    $("#green-box").text(greenBox);  
    
    redCrystal = getRandomInt(1, 12);
    blueCrystal = getRandomInt(1, 12);
    yellowCrystal = getRandomInt(1, 12);
    greenCrystal = getRandomInt(1, 12);

    accumulator = 0;
    $("#accumulator").text(accumulator);   
    
}
    
// Setting a function with statements if the user wins or loses
function winLose () {

    // If accumulator is greater than green box value, add +1 to losses
    if (accumulator > greenBox) { 
        losses++
        $("#losses").text("Losses: " + losses); // Show losses in #losses            
        alert("You lost! D:");
        reset();
    }

    // If accumulator is equal to the green box value, add +1 to wins
    else if (accumulator == greenBox) {
        wins++
        $("#wins").text("Wins: " + wins); // Show wins in #wins        
        alert("You win! :D");
        reset();
    }
}

// When the document is ready, begin the reset function and set the following text in our divs.
$(document).ready(function() {
    reset();
    
    // Assign our crystals values on click and show it in the accumulator
    $("#redcrystal").on("click", function() {
        accumulator = accumulator + redCrystal;
    $("#accumulator").text(accumulator);
    winLose ();
    });

    $("#bluecrystal").on("click", function() {
        accumulator = accumulator + blueCrystal;
    $("#accumulator").text(accumulator);
    winLose ();
    });

    $("#yellowcrystal").on("click", function() {
        accumulator = accumulator + yellowCrystal;
    $("#accumulator").text(accumulator);
    winLose ();
    });

    $("#greencrystal").on("click", function() {
        accumulator = accumulator + greenCrystal;
    $("#accumulator").text(accumulator);
    winLose ();
    });

});
