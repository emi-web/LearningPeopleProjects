In this project, you’ll write four functions in script.js. We’ve provided some additional JavaScript code in game.js that will call your functions based on user interactions, but you don’t need to look at game.js and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. In this project, your JavaScript functions are incorporated into a website that also uses HTML/CSS. You’ll learn more about how to do this from scratch as you continue your JavaScript journey.

1.  Create a generateTarget function. This function should return a random integer between 0 and 9.

The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.

2.  Create a compareGuesses function. This function:

has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed
determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win
returns true if the human player wins, and false if the computer player wins
The purpose of this function is to be called each round to determine which guess is closest to the target number.

3.  Create an updateScore function. This function:

has a single parameter, which will be a string value representing the winner
increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore — the string passed in will be either 'human' or 'computer'
does not need to return any value
The purpose of this function is to be used to correctly increase the winner’s score after each round.

4.  Create an advanceRound function. This function should increase the value of currentRoundNumber by 1.

The purpose of this function is to be used to update the round number after each round.

After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer’s score increase correctly, move to the next round, and see the correct round displayed.

5.  Test that your code is working properly by invoking your newly written functions within script.js with sample inputs. You can delete this code once you’re certain that everything is working as expected.
