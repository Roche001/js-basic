//Variables
//  Cannot be a reserved keyword
// They should be meaningful; avoid a, b, c
// They cannot start with a number e.g 1name
// They cannot contain a space or hyphen e.g dev-roche, instead use camelCase e.g devRoche

//Constants- used when we don't want the value of a variable to change
const interestRate = 0.3;
console.log(interestRate);
// Values assigned to a variable

let name = "Laura"; //string literal
let age = 26; // Number literals
let isApproved = false; // boolean
let firstNaame = undefined;
let selectColor = null; // null is used in situations where we want clear the value of a variable
// JS is a dynamic programming language because the type of a variable can change at runtime
// Objects
let person = { name: "John", age: 30 };
//Accessing object properties
//Dot notation
// Better because its concise
person.name = "Laura";
console.log(person.name);
//Bracket Notation
person["name"] = "Shaky";
console.log(person["name"]);
//Arrays; it is a data structure used to represent a list of items
let selectedColors = ["Red", "Green", "Yellow"];
console.log(selectedColors);
//Accessing array
console.log(selectedColors[1]);
//Adding elements to an Array
selectedColors[3] = "4";
console.log(selectedColors.length);
//Fucntions syntax
//In the case below name is a parameter
// Parameters are essentially variables
//Parameters are only meaningful inside the function signature
//Laura is an argument to the greet function
// name is a parameter to the greet function
// a function can have multiple parameters
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("Laura", "Shaky");
