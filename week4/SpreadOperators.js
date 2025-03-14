//SpreadOperator =  its written as... and unrolls / allows an iterable such as an array or 
//                     string to be expanded into separate elements (unpacks the elements) separated by a comma
//rest operator = stores the remaining of the values in the array or object

const array1 = [1, 2, 3]
const array2 = [10, 20, 30]

const combined =[...array1, 20, "hihi", ...array2]
//multiple ways ie looping, concact method! but we'll use the three dots
console.log(combined)

//Objects
const info = {
    name: "Ninah",
    residence: "Kololo",
}
// lets say i want to create another object called full info?
/*const fullInfo = {
    ...info,
    language: "javaScript",
    Age: 20,
}*/
// instead of copying and pesting the information from the info object, i used the spread method.

// to over ride anyhting in this instance,
const fullInfo = {
    language: "javaScript",
    ...info,
    name: "Baby"
    
}
console.log(fullInfo)
//if the info is put below the info needed to be overrided, then the original will appear

//Function arguments
const numbers = [10, 20, 30]

function addNumbers(num1, num2, num3){
     return num1 + num2 + num3
}
 
const total = addNumbers(...numbers)
console.log(total)


/*<script>
        function getStock() {
            fetch("https://api.example.com/kgl-stock")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    var stockList = document.getElementById("stockList");
                    stockList.innerHTML = "";
                    data.forEach(function(item) {
                        var li = document.createElement("li");
                        li.textContent = item.name + ": " + item.stock + "kg available";
                        stockList.appendChild(li);
                    });
                })
                .catch(function(error) {
                    console.log("❌ Error fetching stock:", error);
                });
        }
    </script>*/