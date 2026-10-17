// Basic function with type
function add(a: number, b:number): number{
    return a + b;
}

// Function with optional parameter
function greet(name: string, greeting?: string){
    if(greeting){
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`;
}

// Function with default paramater
function multiply(a: number, b: number = 2): number{
    return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

// Arrow function
const divide = (a: number, b:number): number => a/b;

// function types
let calculate: (x: number, y: number) => number;
calculate = add;

// Type annotation to an object
let user:{name: string; age: number} = {
    name: "munna",
    age: 23
};

// Alternative for type annotation to an object
interface User {
    name: string;
    age: number;
}

let user1: User = {
    name: "munna",
    age: 25
}