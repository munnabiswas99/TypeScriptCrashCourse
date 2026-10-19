// Alternative for type annotation to an object
interface User {
    name: string;
    age: number;
    email?: string; // optional property
    readonly id: number;  // readonly property can not be modified
}

let user1: User = {
    name: "munna",
    age: 25,
    id: 1
}

// user1.id = 2; // Cannot assign to 'id' because it is a read-only property.
// Interface with methods
interface Product {
    name: string;
    price: number;
    getDiscount(percent: number):number;
}

let laptop: Product = {
    name: "HP Pavilion",
    price: 200000,
    getDiscount(percentage: number): number {
        return this.price * (percentage/100);
    }
}