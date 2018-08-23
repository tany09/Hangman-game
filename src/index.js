import Hangman from "./hangman"
import getPuzzle from "./request"

const newDOM = document.querySelector('#puzzle');
const newDOM2 = document.querySelector('#guesses');


// Create a new instance of Hangman
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess);
    game1.gameStatus();
    render()

})

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

const render = () => {
    newDOM.innerHTML = '';
    newDOM2.textContent = game1.statusMessage;
    const puzzle = game1.puzzle.split('')
    for(let i=0; i<puzzle.length; i++) {
        const newEl = document.createElement('span')
        newEl.textContent = puzzle[i]
        newDOM.appendChild(newEl)
    }
}
startGame()