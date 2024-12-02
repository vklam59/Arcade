

// Guessing Game - Declaration function
function guessingGame() {
    let input = prompt("Guess a number between 1 and 10.");;
    let count = 1;

    //Generate a random value between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) +1;
    console.log(randomNumber);

    // Calculate how many guesses player makes
    while (parseInt(input) !== randomNumber) {
        if (parseInt(input) > randomNumber) {
                count+=1;
                input = prompt("Guess was too high, guess again.");
                continue;
        } else if (parseInt(input) < randomNumber) {
                count+=1;
                input = prompt("Guess was too low, guess again.");
                continue;
        } else {
                count+=1;
                alert("You are correct!");
                break;  
        }  
    }

    alert(`You guessed it in ${count} guesses!`)
        
    };


    // Magic Eight Ball - Expression function 
    let consultOracle  = function () {
        let cont = true;
            while(cont = true){
                // Prompt the player for their question.
                input = prompt('Think of a question that can be answered yes no. Then let Magic Eight Ball shows you the future...')

                // Use a randomizer to select one answer per question to display to the asker.
                const strArray = ['It is uncertain.', 'It is decidedly so.', 'Without a doubt.','Reply hazy, try again.',
                'I do not think so.','As I see it, yes.','Most Likely.','Outlook good.'];
                let answer = strArray[Math.floor(Math.random() * strArray.length)];
                console.log(answer);
                alert(answer);

                // Repeat until the user chooses to stop. 
                let resume = prompt('Do you want to ask another question? (Enter y or n)');
                if (resume.toLowerCase() == 'n'){
                    cont = false;
                    break;
                } else if (resume.toLowerCase() == 'y'){
                    cont = true;
                };
            }
            // When the asker chooses to stop, present a farewell message of your creation.
            alert('Hope Magic Eight Ball helps answer your question. May your new endeavor be everything you have dreamed of and more!')
        };


        // Bear Ninja Hunter - Arrow function
        let bnh = () => {
            // Present a text field to gather user input. Store the user's input in a variable.
            let player = prompt('Welcome to Bear Hunter Ninja. Please enter your name to get started:'); 

            //Computer randomizes a choice within the array
            const myArray = ['Bear','Hunter','Ninja'];
            let computerchoice = myArray[Math.floor(Math.random() * myArray.length)];

            //Conditions to continue the game or error message appears when click on Cancel
            if (player === null || player.length === 0) {
                console.log('Please Press F5 to Play Again');
                document.getElementById("display").innerHTML = 'Please Press F5 to Play Again';
            } else {
                alert('Hi ' + player + ' Let\'s Play!!');// Put together messages for the players that combine text and the values of the variables from the user input (concatenation).    

                do {
                // Determine game winner based on this set of game rules.
                // Bear beats Ninja, Ninja beats Hunter, and Hunter beats Bear. 
                // Ask Player to pick an option
                let userchoice = prompt('Who are you: Bear, Ninja, or Hunter?');
                let result;
                if(computerchoice == 'Bear') {
                    switch(userchoice.toLowerCase()) {
                    case 'bear':
                        result = 'Tie';
                        break;
                    case 'hunter':
                        result = 'User wins';
                        break;
                    case 'ninja':
                        result = result = 'Computer wins';
                        break;   
                    }      
                } else if(computerchoice == 'Ninja') {
                    switch(userchoice.toLowerCase()) {
                    case 'bear':
                        result = 'User wins';
                        break;
                    case 'hunter':
                        result = 'Computer wins';
                        break;
                    case 'ninja':
                        result = result = 'Tie';
                        break;   
                    }    
                } else if (computerchoice == 'Hunter') {
                    switch(userchoice.toLowerCase()) {
                    case 'bear':
                        result = 'Computer wins';
                        break;
                    case 'hunter':
                        result = 'Tie';
                        break;
                    case 'ninja':
                        result = result = 'User wins';
                        break;   
                    }   
                } else { 
                    result = 'Invalid choice';
                }

                if (result == 'Tie') {
                    result = 'It is a tie!';
                } else if (result == 'User wins') {
                    result = 'You win!!';
                } else {
                    result = 'You lose...';
                };


            // Count down 1, 2, 3 before displaying the result
            alert ('1');
            alert ('2');
            alert ('3');
            alert(`${player}, You picked ${userchoice}. \nThe computer picked ${computerchoice}! \nResult: ${result}`);

            // Console displays result message
                console.log(`${player}, You picked ${userchoice}. \nThe computer picked ${computerchoice}! \nResult: ${result}`);
                document.getElementById("display").innerHTML = `${player}, You picked ${userchoice}. \n The computer picked ${computerchoice}! \n Result: ${result}`;

            //Ask if Player wants to resume the game 
            let cont = prompt(`${player}, would you like to play again Yes or No?`)
            }  while (cont.toLowerCase() === 'yes')
                
            };
        };
