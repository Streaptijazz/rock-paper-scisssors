let userChoice;
let computerChoice;

function setInput(choice) {
    userChoice = choice;
    console.log("User choice:", userChoice);
    // You can perform additional actions here with the saved choice
}

document.querySelector("#computerChoiceButton").addEventListener("click", game)

let condition = true

if (condition){
    function game() {
        condition = false
        let counter_maschine = 0
        let counter_player = 0
        for (i=0;i<=5;i++) {
            function compareChoices() {

                // Array of choices: rock, paper, scissors
                let choices = ["rock", "paper", "scissors"];

                // Generate a random index between 0 and 2
                let randomIndex = Math.floor(Math.random() * 3);
                
                // Get the randomly chosen choice
                let computerChoice = choices[randomIndex];
                
                // Output the computer's choice
                console.log("Computer's Choice: " + computerChoice)

                if ((computerChoice== "scissors" && userChoice== "paper")|| 
                (computerChoice=="rock" && userChoice== "scissors") ||
                (computerChoice=="paper" && userChoice== "rock")) 
                {
                    //console.log("the winner is the maschine")
                    counter_maschine++

                } else if ((userChoice== "scissors" && computerChoice== "paper")|| 
                        (userChoice=="rock" && computerChoice== "scissors") ||
                        (userChoice=="paper" && computerChoice== "rock")) 
                {
                    //console.log("the winner is you, the human")
                    counter_player++
                } else { //console.log("it's a tie")
                            counter_maschine++
                            counter_player++    
                }
            }
    }
        if (counter_maschine > counter_player) {
            console.log("winner is the machine")     
        }else if (counter_maschine > counter_player) {
            console.log("winner is you the human")
        } else {
            console.log("it's a tie")
        }
    }
}


//eite mono otan patisoume  to koubi game emfanizonte ta alla koubia kai meta apo 5 gures stamataei kai ksanavgainei to game
//eite den kanei tpt ektos kai ama patisoume to koubi game, se periptosi ano ton 5 guron pali tpt, an kato apo 5 to <game> den kanei kati
