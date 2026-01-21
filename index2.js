//console.log("Hello, World!");
//document.writeln("This is index2.js file.");
//a=prompt("Enter your name:");

//document.writeln("Hello, " + a + "!");

//var b=prompt("Enter your age:");
//b=prompt("Enter your age again:");
//document.writeln("<br>Your age is: " + b);
//let c=prompt("Enter your city:");
//document.writeln("Your city is: " + c);
//var a=10;
//{
//    let pi=3.14;
//    console.log(pi);
//    console.log(a);
//}
//let pi=3.14
//console.log(pi);

//const g=9.8;
//console.log(g);

//const sum=(a, b)=>{document.writeln(a+b);}
//sum(5, 10);

//function sum2(a, b){document.writeln(a+b);}
//sum2(20, 30);

function calculator(a, b, operation) {
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