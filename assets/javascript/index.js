

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