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

