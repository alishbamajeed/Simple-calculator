#! /usr/bin/env node
// shabang
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Enter first  number", type: "number", name: "firstNumber" },
    { message: "Enter second  number", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform your  operation",
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Mul", "Div"],
    },
]);
// Conditions
if (result.operator === "Add") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Sub") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Mul") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Div") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Please enter the valid number here");
}
