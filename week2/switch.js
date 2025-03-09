 /* 4 boys
 martin - chocolate 
 brian- bread
 lastone- sweets
 person b- doesnot answer phone calls */

 /*let contact = prompt("enter your boyfriend contact"); // you have called contact 2
 switch (contact) {
    case 1:
        alert( "chocolate")
        break;
    case 2:
        alert( "bread")
        break;
    case 3:
       alert( "sweets")
        break;
    default: 
    alert( "not available")
    break;

 }*/

 /*if( contact === 1 ){
 
  console.log("chocolate")

 } else if (contact === 2){

    console.log("bread")

} else if (contact === 3){

    console.log("sweets")
} else {
    console.log( "not available")
}; */
  
// Ask the user to enter a produce name
//let produce = prompt("Enter the produce name (Beans, Maize, Cow Peas, G-nuts, Soybeans):"); //html kinda command

// Convert input to lowercase to avoid case sensitivity issues
// produce = produce.toLowerCase();  //validation/sanitise

// switch (produce) {
//     case "beans":   //can be anything boolean,sting,number ; 
//         alert("🫘 Category: Legumes");   // terminal / browser
//         break;
//     case "maize":
//         alert("🌽 Category: Grains");
//         break;
//     case "cow peas":
//         alert("🥗 Category: Pulses");
//         break;
//     case "g-nuts":
//         alert("🥜 Category: Nuts");
//         break;
//     case "soybeans":
//         alert("🌱 Category: Protein-rich Crops");
//         break;
//     default:
//         alert("❌ Unknown Produce! Please enter a valid name.");
// }


 let stock = 500 //in kgs
let orders= 400

if (orders>stock){
    console.log("there's not enough stock")
} else  {
    stock= stock-orders
    //stock -= orders
    console.log (`sale has been successful, remaining stock is ${stock} `)//we can make the sale but need to tell the user whats remaining
}

//alert- not enough stock available
//else - stock is available but cant give the remainder


let trustedBuyer = true;
let amountDue = 150000;

if (trustedBuyer && amountDue > 10000) {
    console.log("✅ Credit sale allowed.");
} else {
    console.log("❌ Buyer not eligible for credit.");
}