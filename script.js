var win = 0;
var loss = 0;
var tie = 0;

var options = ["R", "P", "S"];

var play = true;

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function game() {
    userChoice = prompt("R, P, or S?");
    computerChoice = options[random(0, 2)];
    
    alert("Computer's choice: " + computerChoice);

    if ((userChoice == "R" && computerChoice == "P") || (userChoice == "P" && computerChoice == "S") || (userChoice == "S" && computerChoice == "R")){
        alert("You lost!");
        loss++;
    }else if ((userChoice == "R" && computerChoice == "S") || (userChoice == "P" && computerChoice == "R") || (userChoice == "S" && computerChoice == "P")) {
        alert("You win!");
        win++
    } else if ((userChoice == "R" && computerChoice == "R") || (userChoice == "P" && computerChoice == "P") || (userChoice == "S" && computerChoice == "S")) {
        alert("You tied!");
        tie++;
    }

    alert("Wins: " + win + "\n" + "Loses: " + loss + "\n" + "Ties: " + tie);

    play = confirm("Do you want to play again?");
}

do {
    game();
} while (play == true);
