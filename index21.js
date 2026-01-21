// calculator arrow function in js
const calculator = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b!==0) {
                return a / b;
            }
        else {
                return 'Error: Division by zero';
            }
    default:
            return 'Error: Invalid operation';
    }    
}
let a=prompt("Enter first number:");
let b=prompt("Enter second number:");
let operation=prompt("Enter operation: add, subtract, multiply, divide: ");
document.writeln(calculator(a, b, operation));