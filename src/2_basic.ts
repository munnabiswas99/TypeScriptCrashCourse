// Preimitives data types
let username: string = "Munna";
let age: number = 23;
let isAdmin: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let names: string[] = ["Munna", "Biswas"];

// Tuples
let person = ["Munna", 23];
let details:[string, number, boolean] = ["Baraigram", 6630, true];

// Enum
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Munna";
randomValue = true;

// unknown (safer than any);
let userInput: unknown;
userInput = 58;
userInput = "Amar sonar bangla";

// Function in typeScript
function munnaBhai(message:string): void{
    console.log(message);
}

function biswas(age:number): number{
    return age;
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

