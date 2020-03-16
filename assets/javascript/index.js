// Elements
var setupCard

var player1 = '';
var player2 = '';

function load_game() {
    let mainDiv = document.getElementById('mainDiv');
    let newCard = document.createElement('div');
    newCard.setAttribute('id', 'setup-card')
    newCard.classList.add('card');
    let newCardHeader = document.createElement('div');
    newCardHeader.classList.add('card-header');
    newCardHeader.setAttribute('id', 'setup-div');
    newCardHeader.innerText = 'Select number of players:';
    let newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');
    newCardBody.setAttribute('id', 'setup-body')
    newCardBody.appendChild(createSelectList(['1 Player', '2 Players']));
    let newCardFooter = document.createElement('footer');
    newCardFooter.classList.add('card-footer');
    let newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'submit-btn');
    newBtn.setAttribute('data-clickcount', '0');
    newBtn.classList.add('btn', 'btn-primary');
    newBtn.innerText = 'NEXT';
    newCardFooter.appendChild(newBtn);

    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    newCard.appendChild(newCardFooter);

    mainDiv.appendChild(newCard);

    setupCard = document.getElementById('setup-card');


    document.getElementById('submit-btn').onclick = function (e) {
        e.preventDefault();
        let clickCount = this.getAttribute('data-clickcount');

        if (clickCount === '0') {

            document.getElementById('setup-div').innerText = 'Enter Name for Player 1';
            playerCountSelect = document.getElementById('player-count')
            this.setAttribute('data-players', parseInt(playerCountSelect.value) + 1);
            playerCountSelect.remove();
            document.getElementById('setup-body').appendChild(createTextInput('playerName', 'John Doe'))
            document.getElementById('playerName').focus();

            if (this.getAttribute('data-players') === '1') {
                player2 = "Computer"
            }


        } else if (clickCount == '1') {

            player1 = document.getElementById('playerName').value

            if (this.getAttribute('data-players') === '2') {
                document.getElementById('setup-div').innerText = 'Enter Name for Player 2';
                document.getElementById('playerName').value = '';
                setupCard.focus();
            } else {
                setupCard.remove();
            }

        } else {
            player2 = document.getElementById('playerName').value
            setupCard.remove();
        }

        this.setAttribute('data-clickcount', ++clickCount);

    }

}

function createTextInput(fieldName, placeholder) {
    let input = document.createElement('input');
    input.setAttribute('type', 'text')
    input.setAttribute('id', fieldName)
    input.classList.add('p-2')
    input.setAttribute('placeholder', placeholder)
    return input;
}

function createSelectList(options) {
    let select = document.createElement('select');
    select.setAttribute('id', 'player-count')

    for (let i = 0; i < options.length; i++) {
        let newOption = document.createElement('option');

        newOption.value = i;
        newOption.innerText = options[i];
        select.appendChild(newOption)
    }

    return select;

}

load_game();

let puzzles = []
puzzles.push(new Puzzle("movie", "the perks of being a wallflower"))
puzzles.push(new Puzzle("book", "anna karinina"))

console.log(puzzles)

function Puzzle(category, answer) {
    this.category = category;
    this.answer = answer;
}

function getPuzzle() {

}