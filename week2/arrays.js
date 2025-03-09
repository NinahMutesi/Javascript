const kilograms = [5, 10, 15, 20];
let branches = ["main","satelite"];
let userRoles = ["manager", "director","sales agent"];
let produceList = ["soyabeans", "maize grain", "cowpeas", "G-nuts"];
let suppliers = ["john Traders Ltd", "AfroFarm Ltd", "Matugga Farms", "Magajo Coorperative"];

console.log(suppliers.length);

let firstSupplier= suppliers[0];
console.log(firstSupplier);

let stockInventory = [
    {produce : "Soyabeans", quality : 2000, amount:3000},
    
    { produce: "maizeGrain", quality : 1500, amount: 5000},
    
    { produce : "cowpeas", quality : 3000, amount: 7000},
    
    { produce : "G-nuts", quality : 6000, amount: 8000}

];

console.log("available stock with quantities:", stockInventory)

let trustedBuyers = [
    { name: "james Ouma", NIN: "CM1234567890AB", amountDue: 1500000, dueDate: "2025-03-01"}
];

let salesRecords = [
    { produce : "G-nuts", quality : 6000, amountPaid: 8000, salesAgent:"Alice", date:"2025-02-01" }
];