let player = {
    name: "zia",
    chips: 145,
}
let playerEl = document.getElementById("Player-el")
playerEl.textContent = player.name + " :      $" + player.chips;

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl=document.getElementById("message-el");
let sumEL= document.getElementById("sum-el");
//let sumEL= document.querySelector("#sum-el");
let cardsEL= document.getElementById("cards-el");



function getRandomCard(){
    let randomNumber = Math.floor(((Math.random())*13))+1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    return randomNumber
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame();
}

function renderGame(){
    cardsEL.textContent="Cards:"
    for(let i=0; i<cards.length; i++){
         cardsEL.textContent += cards[i] + " "
    }

if (sum <= 20){
     message = "Do you want to draw another card"
 }
 else if(sum === 21){
     message="You have black jack";
     hasBlackJack = true;
 }
 else{
       message ="You're out of the game";
       isAlive = false
 }
  messageEl.textContent=message;
  sumEL.textContent="Sum :" + sum;
}

function newCard()
{    
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}

