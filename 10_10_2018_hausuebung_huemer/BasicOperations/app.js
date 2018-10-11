const operations = require("./operations.js")

// Ersetze 50 durch deine Katalognummer
function printCalculation(operator, calculate){
    console.log("13 " + operator + " 7 = " + calculate(13, 7));
}

printCalculation("+", operations.sum);
printCalculation("-", operations.difference);
printCalculation("*", operations.product);
printCalculation("/", operations.quotient);