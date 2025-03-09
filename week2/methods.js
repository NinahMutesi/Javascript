//how to write an object

let car = {
    name: "mazda",
    color: "white",
    mileage: 30,
    start: function(){
        console.log("The car has started")
    }
}

let person = {
    name: "John",
    age: 15,
    speak: function (){
        console.log("Hello my name is" + this.name +  " i am" + this.age  +  " years old")
    }
}
 console.log(person.name)
person.speak()

/*let store = {
    name: " Karibu Groceries",
    location: "Ntinda",
    stock:{
        beans: 100,
        maize: 200,
        peas: 250,
    }, 
    saleProduce: function (quantity){
      if (quantity <= this.stock)
      console.log("sold successfully")
    } 


};*/

 let store = {
        name: " Karibu Groceries",
        location: "Ntinda",
        stock:{
            beans: 100,
            maize: 200,
            peas: 250
    },

         saleProduce: function (){
          
           console.log("sold successfully")
         }
 }
 store.saleProduce()

 let calculator = {
    add: function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    },
 }
 console.log(calculator.add(4,109))
 console.log(calculator.subtract(98,4))