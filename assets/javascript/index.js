function load_game(){
    let mainDiv = document.getElementById('mainDiv');
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    //newCard.style = 'width:18rem;'
    let newCardHeader = document.createElement('div');
    newCardHeader.classList.add('card-header');
    newCardHeader.innerText = 'Select number of players:';
    let newCardBody =document.createElement('div');
    newCardBody.classList.add('card-body');
    newCardBody.appendChild(createSelectList(['1 Player','2 Players']));
    let newCardFooter = document.createElement('footer');
    newCardFooter.classList.add('card-footer');
    let newBtn = document.createElement('button');
    newBtn.classList.add('btn','btn-primary');
    newBtn.innerText = 'NEXT';
    newCardFooter.appendChild(newBtn);


    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    newCard.appendChild(newCardFooter);

    mainDiv.appendChild(newCard);
    



}

function createSelectList(options){
    let select = document.createElement('select');
    
    for(let i = 0;i<options.length;i++){
        let newOption = document.createElement('option');
        newOption.value = i;
        newOption.innerText = options[i];
        select.appendChild(newOption)
    }
    
    return select;

}

load_game();

let puzzles = []
puzzles.push(new Puzzle("movie","the perks of being a wallflower"))
puzzles.push(new Puzzle("book","anna karinina"))

console.log(puzzles)

function Puzzle(category, answer){
    this.category = category;
    this.answer = answer;
}

function getPuzzle(){

}