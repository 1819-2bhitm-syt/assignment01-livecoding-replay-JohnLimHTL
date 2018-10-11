let printCalculation = function(operator, calculate) {
    console.log("20 " + operator + " 3 = " + calculate(20, 3))
};

// Addition //
let sum = function (num1, num2) {
    return num1 + num2;
};

// Subtraktion //
let difference = function (num1, num2) {
    return num1 - num2;
};

// Multiplikation //
let product = function (num1, num2) {
    return num1 * num2;
};

// Division //
let quotient = function (num1, num2) {
    return num1 / num2;
};

// Ausgabe //
printCalculation("+", sum);
printCalculation("-", difference);
printCalculation("*", product);
printCalculation("/", quotient);

// Ausgabe Functional Expressions //
printCalculation("^", function (num1, num2) {
    return num1 ** num2;
});

// Ausgabe Anynymous Functions //
printCalculation("%", function (num1, num2) {
    return num1 % num2;
});

// Ausgabe Arrow Function Expressions //
printCalculation(("^"), (num1, num2) => num1 ** num2);
printCalculation(("%"), (num1, num2) => num1 % num2);