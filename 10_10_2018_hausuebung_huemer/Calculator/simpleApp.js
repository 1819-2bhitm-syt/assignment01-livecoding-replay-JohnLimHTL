function  printCalculation(operator, calculate) {
    console.log("20 " + operator + " 3 = " + calculate(20, 3));
}

// Addition //
function sum(num1, num2) {
    return num1 + num2;
}

// Subtraktion //
function difference(num1, num2) {
    return num1 - num2;
}

// Multiplikation //
function product(num1, num2) {
    return num1 * num2;
}

// Division //
function quotient(num1, num2) {
    return num1 / num2;
}

// Ausgabe //
printCalculation("+", sum);
printCalculation("-", difference);
printCalculation("*", product);
printCalculation("/", quotient);

