console.log("Celsius to Fahrenheit");
let a = 32;
let b = 9;
let c = 5;
const d = (b / c);
const celsius = 15;
const fahrenheit = (celsius) * d + a;
console.log(fahrenheit);

console.log("play with variables");
let number1 = 5;
let number2 = 3;
number1 -= 2;
number2 += 2

console.log(number1); // Should show 3
console.log(number2); // Should show 5

//hello function

function sayHello() {
    console.log("Hello!");
}
console.log("Start of program");
sayHello();
console.log("End of program");

//weather prompt
const weather = prompt("What's the day after day?");
switch (weather) {
    case "monday":
        console.log("tuesday");
        break;
    case "tuesday":
        console.log("wednesday");
        break;
    case "wednesday":
        console.log("thursday");
        break;
    case "thursday":
        console.log("friday");
        break;
    case "friday":
        console.log("saturday");
        break;
    case "saturday":
        console.log("sunday");
        break;
    case "sunday":
        console.log("monday");
        break;
    default:
        console.log("Not a default day");
}