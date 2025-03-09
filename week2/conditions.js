/*if(condition){
    //this part of code runs if the condition is true
};*/

let number = 6;
if (number>0){
    console.log(`${number} is an positive integer`)
};
//boolean
let isRaining = true;
if (isRaining){
console.log("Remember to bring your jacket")    
} else {
console.log("You dont need a jacket")
};

//string
let weather = "raining";
if (weather === "rainig"){
console.log("Remeber to carry an umbrella")
};

//else
let numberTwo = 6;
if (numberTwo>0){
    console.log(`${number} is a positive integer`)
} else {
    console.log(`${numberTwo} is a negative integer`)
};



let weatherNow = "rainy";
if (weatherNow=== "rainy"){
    console.log("you need an umbrella")
} else if(weatherNow === "cloudy"){
    console.log("you might need an umbrella")
} else if( weatherNow==="sunny"){
    console.log("move out freely")
}else {
    console.log("no need for an umbrella")
};