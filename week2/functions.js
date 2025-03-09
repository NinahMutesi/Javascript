

//funtion to add two numbers without parameters
/*function add(){
    let a=10
    let b=15
    let sum=a+b
    console.log(sum)
    
}
add()*/

//function sum
function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));

/*expression function
let square =function(a){
    return a*a; 
}
const square =(a)=>a*a;*/

//arrow function
 //const square =(a)=>a*a;

 //combination
 function square (x){
    return x*x;
 }
  
 //example
 function calculateTotalPrice(produce, pricePerKg, quantity){
       let totalPrice = pricePerKg * quantity;
       console.log('The totalPrice for ' + quantity + 'kg of' + produce +'is:' + totalPrice + 'Ugx.' );
       
 }
 calculateTotalPrice('maize', 3000, 3 )
 