import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number:", type: "number", name: "firstNumber" },
    { message: "Enter your second number:", type: "number", name: "secondNumber" },
    { message: "Enter operator:", type: "list", choices: ["Addition", "Subraction", "Multiplication", "Division"], name: "operator" },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
console.log("please enter correct operator");
