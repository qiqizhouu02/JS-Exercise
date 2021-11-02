//improved hello
const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
console.log(sayHello(firstName, lastName));

//circumference of a circle
const circumference = radius => 2 * Math.PI * radius;
const area = radius => Math.PI * radius ** 2;
const r = Number(prompt("Enter the circle radius:"));
console.log(`Its circumference is ${circumference(r)}`);
console.log(`Its area is ${area(r)}`);