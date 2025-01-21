// JavaScript/Intro-to-JavaScript/intro.js
/*
console.log("Hello World!")

// Variables and Data types
var num = 5 // General declaration, previously was used do declare global scope
let num1 = 5 // General declaration, variable takes on current scope
const num2 = 5 // when declaring constants, cannot be changed after
// Arrays, Objects

// Boolean - true and false
// null - null value
// undefined - value has not be assignment yet to the var
// Number - number
// BigInt - float
// String - string
// Symbol - special type

// Expressions, Operators

let num1 = 5
let num2 = 10
let num3 = 15

console.log(num1 == num2 && num2 != num3) // false
console.log(num1 == num2 || num2 != num3) // true
console.log(num1 != num2) // false

let add = num1 + num2
let minus = num1 - num2
// remainder (modulo) --> %

// Loops, Conditionals

// for loop
for (let i = 0; i < 25; i+=3) {
    if (1 % 2 ==0) continue 
    console.log(i)
}

for (let i = 1; i < 25; i+=3) { // 1 4 7 10 13
    if (1 % 2 ==0) break 
    console.log(i)
}

// Arrays and Objects

let arr = [1,2,3, "hello" , {myKey: "value"}, [1,2,3], () => {}]
console.log(arr[3])

function isPalindrome(str) {
    return str == str.split("").reverse().join("")
}

let array = [1,2,3,4,5]

// add num 10 to each num
// 1. 
for (let i = 0; i < arr.length; i++) {
    arr[i] += 10
}
//2. 

array.forEach(function(num, i) {
    arr[1] += 10
})


arr.push("3") // add an element to the array
arr.pop() // remove an element from the array 



// Objects

let car = {
    brand: "honda", //key:value
    year: 2005,
    color: "yellow",
    type: "odyssey",
    engine: "off",
    igniteEngine: () => {
        this.engine = "on"
    }
}

// Functions

// Function Declarations
function sum(a,b) {
    return a + b
}
// Function Expressions
let sum1 = function (a,b) {
    return a + b
}
// Arrow Functions
let sum2 = (a,b) => {
    return a + b
}

*/
// Classes
/*
class Car {
    color;
    // iniitalizes ths object, runs when the object is created
    constructor(type, brand, model, year) {
        this.type = type
        this.brand = brand
        this.model = model
        this.year = year
    }
    startEngine() {
        console.log("Start engine")
    }
}
let myCar = new Car("SUV" , "Toyota", "Highlander" , 2020)


console.log(myCar.brand)
*/
// DOM: Document Object Model

console.log("hello browser!")
console.log(document)

document.body.style.backgroundColor = "red"; 