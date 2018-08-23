// Creating the Hangman object
class Hangman {
    constructor (word, remainingguess) {
        this.word = word.toLowerCase().split('');
        this.remainingguess = remainingguess;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    //Return the result of the game
    get puzzle () {
        let puzzle = '';
        this.word.forEach((element) => {
            if(this.guessedLetters.includes(element) || element === ' ') {
                puzzle += element;
            }
            else {
                puzzle += '*';
            }    
        });
        return puzzle;
    }

    // Make single character guess in the game
    makeGuess (letter = '') {
        if (this.status !== 'playing') {
            return ;
        }
        const guessLetter = letter.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guessLetter);
        const isBadGuess = !this.word.includes(guessLetter);

        if (isUnique && isBadGuess) {
            this.guessedLetters.push(guessLetter);
            this.remainingguess--;
        }
        else if (isUnique) {
            this.guessedLetters.push(guessLetter);
        }
        else if (!isUnique) {

        }
    }

    //Know the current game status
    gameStatus () {
        let checkStatus = true;
        this.word.forEach((element) => {
            if(this.guessedLetters.includes(element) || element === ' ') {
            }
            else {
                checkStatus = false;
            }
        })
        if(this.remainingguess >= 0 && checkStatus === true) {
            this.status = 'finished';
        }
        else if (this.remainingguess === 0) {
            this.status = 'failed';
        }
        else if (this.remainingguess > 0) {
            this.status = 'playing';
        }
    }

    // Get status message of the game
    get statusMessage () {
        if (this.status === 'playing'){
            return `You have ${this.remainingguess} guess left`;
        }
        else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`;
        }
        else if (this.status === 'finished') {
            return 'Great work! You won the game';
        }
    }

    
}

export {Hangman as default}



