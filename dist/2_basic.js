"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Preimitives data types
let username = "Munna";
let age = 23;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4, 5, 6];
let names = ["Munna", "Biswas"];
// Tuples
let person = ["Munna", 23];
let details = ["Baraigram", 6630, true];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "Munna";
randomValue = true;
// unknown (safer than any);
let userInput;
userInput = 58;
userInput = "Amar sonar bangla";
// Function in typeScript
function munnaBhai(message) {
    console.log(message);
}
function biswas(age) {
    return age;
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
//# sourceMappingURL=2_basic.js.map