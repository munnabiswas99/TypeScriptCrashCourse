// Type alias
type Point = {
    x: number;
    y: number;
};

let point: Point = {x: 10, y:20};

// Type alias for primitives
type ID = string | number;


let userID: ID = "munna99";
let productID: ID = 123;

// Interface can be extended, type aliases can not
interface Animal {
    name: string;
}

interface Dog extends Animal{
    breed: string;
}

let myDog: Dog = {
    name: "Tomy",
    breed: "Deshi Dog"
}

// interface can be decleare multiple times and merge 
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

let dog: Animal = {
    name: "Tommy",
    age: 5
}

// User interface for object shapes
// Use type alias for unions/ intersections
interface User {
    name: string;
    age: number;
}

let user2: User = {
    name: "Munna",
    age: 24
}

type UserID = string | number;

