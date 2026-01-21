// calculator arrow function in js
/*const calculator = (a, b, operation) => {
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
let a=parseInt(prompt("Enter first number:"));
let b=parseInt(prompt("Enter second number:"));
let operation=prompt("Enter operation: add, subtract, multiply, divide: ");
document.writeln(calculator(a, b, operation));*/

//make a object using arrow function
/*const Person = (name, age, city) => {
    return {
        student_name: name,
        age: age,
        city: city
    };
};
const p1 = Person("Bhaskar Sah", 20, "Janakpur");
document.writeln(`Name: ${p1.student_name}, Age: ${p1.age}, City: ${p1.city}<br>`);

const p2 = Person("Dikshya Tiwari", 21, "Kathmandu");
document.writeln(`Name: ${p2.student_name}, Age: ${p2.age}, City: ${p2.city}`);
*/


const student = [
    {
        id: 1,
        name: "Bhaskar Sah",
        age: 20
    },
    {
        id: 2,
        name: "Manish Gautam",
        age: 21
    },
    {
        id: 3,
        name: "Sujan Dahal",
        age: 21
    }
];
student.forEach((s) => {
    document.writeln(`ID: ${s.id}, Name: ${s.name}, Age: ${s.age}<br><br>`);
});