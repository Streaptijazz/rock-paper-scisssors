let userChoice;
let computerChoice;
let counter_machine = 0
let counter_player = 0
let conditionRound = false
let conditionGame = true
let counter = 0


function checkAndSetInput(choice) {
    if (conditionCheck()) {
      setInput(choice);
    } else {
        conditionRound = false
        counter = 0
    }
}
  
function conditionCheck() {
    if (conditionRound && counter<5) {
        return true
    } 
    // Add your condition check logic here
    // Return true if the condition is met, otherwise return false
}
  
function setInput(choice) {
    userChoice = choice;
    console.log("User choice:", userChoice);
    // Call your equation function here and pass the userChoice
    compareChoices(userChoice);
    counter++
    console.log(counter)
    if (counter == 5) {
        gamewinner()
        conditionGame = true
    }
}
  


document.querySelector("#playGameButton").addEventListener("click", game)


function game (){
    if (conditionGame)  {
        conditionGame = false
        
        conditionRound = true
    }         
}


function gamewinner(){
    if (counter_machine > counter_player) {
        console.log("round winner is the machine")     
    }else if (counter_machine < counter_player) {
        console.log("round winner is you the human")
    } else if (counter_machine==counter_player) {
        console.log("it's a round tie")
    }
}


function compareChoices(userChoice) {

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
        console.log("the winner is the maschine")
        counter_machine++

    } else if ((userChoice== "scissors" && computerChoice== "paper")|| 
            (userChoice=="rock" && computerChoice== "scissors") ||
            (userChoice=="paper" && computerChoice== "rock")) 
    {
        console.log("the winner is you, the human")
        counter_player++
    } else {    
                console.log("it's a tie")
                counter_machine++
                counter_player++    
    }        
    
}


//eite mono otan patisoume  to koubi game emfanizonte ta alla koubia kai meta apo 5 gures stamataei kai ksanavgainei to game
//eite den kanei tpt ektos kai ama patisoume to koubi game, se periptosi ano ton 5 guron pali tpt, an kato apo 5 to <game> den kanei kati
