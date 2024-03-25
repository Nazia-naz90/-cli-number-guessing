#! /usr/bin/env node
import inquirer from "inquirer";
// 1 # computer will generate a random number //
// 2 # user input the guessing number //
// 3 # compare user number with computer generated number//
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation ! You guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
