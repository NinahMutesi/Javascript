//QN1

//year today
const date =new Date();
console.log(date);
console.log(date.getFullYear());

//month today as a number
console.log(date.getMonth());

//date today

console.log(date.getDate());

//day today as a number

console.log(date.getDay());

//hours now

console.log(date.getHours());

//minutes now

console.log(date.getMinutes());

//number of seconds elapseed from january 1,1970 to now

console.log(date.getTime());
//specific date creation
let newDate = new Date(2025, 1, 1);
console.log(newDate);


//QN2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*first method
let base =parseFloat(prompt("Enter base:"))
let height =parseFloat(prompt("Enter height:"))
area of the triangle
let area = 0.5 * base * height
console.log("Area of the triangle is: " + area)
alert("Area of the triangle is: " + area)*/

//second method
let base =prompt('Enter base:');
let height =prompt('Enter height:')

let area = 0.5 * parseFloat(base) * parseFloat(height);
document.write("Area of the triangle is: " + area);


//QN3
//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120



let hours = prompt('Enter hours:');
let ratePerHour = prompt('Enter rate per hour:');

let weeklyEarning = parseFloat(hours) * parseFloat(ratePerHour);
console.log('Your weekly earning is:'+ weeklyEarning);


// Prompt user for triangle sides
let a = parseFloat(prompt("Enter side a:"));
let b = parseFloat(prompt("Enter side b:"));
let c = parseFloat(prompt("Enter side c:"));

// Calculate perimeter
let perimeter = a + b + c;

// Display the result
console.log(`The perimeter of the triangle is ${perimeter}`);
alert(`The perimeter of the triangle is ${perimeter}`);


//area and perimeter
let length = parseFloat(prompt("Enter length:"));
let width = parseFloat(prompt("Enter width:"));

let areaRectangle = length * width;
let perimeterRectangle = 2 * (length + width);

console.log(`The area of the rectangle is ${areaRectangle}`);
console.log(`The perimeter of the rectangle is ${perimeterRectangle}`);

//circumference
let radius = parseFloat(prompt("Enter radius:"));
const pi = 3.14;

let areaCircle = pi * radius * radius;
let circumferenceCircle = 2 * pi * radius;

console.log(`The area of the circle is ${areaCircle}`);
console.log(`The circumference of the circle is ${circumferenceCircle}`);

//slope, x-y
console.log("The slope of y = 2x - 2 is 2");
console.log("The x-intercept is 1");
console.log("The y-intercept is -2");

//slope between
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`The slope between (2,2) and (6,10) is ${slope}`);

//solve y = x^2 + 6x +9 when y = 0
function findY(x) {
    return x ** 2 + 6 * x + 9;
}
  
  console.log(`y is 0 when x = -3`);
  
//name longer than 7










