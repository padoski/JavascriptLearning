//Challange 1:
function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var days = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + days + " days old");
    h1.setAttribute('id', 'days');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    console.log(days);
}

function reset() {
    document.getElementById('days').remove();
}

//Challange 2
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//Challange 3
function rpsGame(choice) {
    console.log(choice);
    var humanChoice, botChoice;
    humanChoice = choice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log("Comp choice: ", botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log("Result: ", results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(choice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 },
    };

    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'Its draw', 'color': 'yellow' };
    } else {
        return { 'message': 'You won', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalmessage) {
    var imagesDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }
        //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
//Challange 4
var all_buttons = document.getElementsByTagName('button');
//onsole.log(all_buttons);

var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(currentButton) {
    if (currentButton.value === 'red') {
        buttonsRed();
    } else if (currentButton.value === 'green') {
        buttonsGreen();
    } else if (currentButton.value === 'random') {
        buttonsRandom();
    } else if (currentButton.value === 'reset') {
        buttonsReset();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randButtonsNumb() {
    return Math.floor(Math.random() * 4);
}

function buttonsRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randButtonsNumb()]);
    }
}

//BlackJack Challange

let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
}
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const CARDS = blackjackGame['cards']

const histSound = new Audio("../static/sounds/swish.m4a")

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    let card = randomCard();
    showCard(YOU, card);
    updateScore(card, YOU);
    showScore(YOU);
}

function showCard(activePlayer, card) {
    let cardImage = document.createElement('img');
    cardImage.src = `../static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    histSound.play();
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return CARDS[randomIndex];
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + CARDS[card][1] <= 21) {
            activePlayer['score'] = activePlayer['score'] + CARDS[card][1];
        } else {
            activePlayer['score'] = activePlayer['score'] + CARDS[card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}