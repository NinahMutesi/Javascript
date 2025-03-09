// arithmetic operators.

let pricePerKg =30000;
let quantity =10;
let discount =500;
let totalCost = pricePerKg * quantity;
console.log(totalCost);
console.log("The price of 10kg of beans is:" + totalCost);
console.log(`The price of 10kg of beans is: ${totalCost}`);

let discountedPrice = totalCost - 500;
console.log(discountedPrice);

//comparison function
let buyerMoney =5000;
let priceOfmaizePerkg =5000;
console.log(buyerMoney>=priceOfmaizePerkg);
console.log(buyerMoney===priceOfmaizePerkg);
//notequalto

console.log(buyerMoney!=priceOfmaizePerkg);

//logical operators
let sockIsAvailable =true;
let buyerIslegit =false;
console.log(sockIsAvailable&&buyerIslegit);

//concatination
let buyerName ="Ninah";
let productName ="soyah";
let receiptmessage ="Thank you!!" +buyerName +"You have just purchased" +quantity+ "kgs of" + productName;
console.log(receiptmessage)

//asssignment operators
let stock =100;
let sales =20;
stock =stock-20;
console.log(stock-sales);
stock = stock-sales;
stock-=sales;
console.log(stock);

let salesRevenue =0;
salesRevenue+=totalCost
console.log(salesRevenue);