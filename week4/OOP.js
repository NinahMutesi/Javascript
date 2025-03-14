class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const person2 = new Person("Felicity", 20);
  person2.greet();
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Calls the parent constructor
      this.job = job;
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.job}`);
    }
  }
  
  const emp1 = new Employee("David", 28, "Software Engineer");
  emp1.greet();
  emp1.work();