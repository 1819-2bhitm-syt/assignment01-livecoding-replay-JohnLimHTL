class Stack {

    // Stack constructor
    constructor() {
        this.items = [];
    }

    // Push methode
    // Diese Methode fügt einen Element auf die oberste Reihe des Stacks hinzu.
    push(element) {
        this.items.push(element);
    }

    // Pop methode
    // Diese Methode entfernt einen Element aus der oberste Reihe.
    // Wenn Stack bereits leer ist, ist kein pop möglich.
    pop() {
        if(this.items.length == 0) {
            return "Kein pop möglich, da Stack leer ist!";
        }
        return this.items.pop();
    }

    // Peek methode
    // Diese Methode entfernt sozusagen das Element aus der obersten Schicht, ohne diese zu löschen.
    peek() {
        return this.items[this.items.length - 1];
    }
}

// Test Driver
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3); // Oberstes Element!

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());