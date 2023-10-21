//Creating Object
let user = {
    name: "inci gulcin",
    surname: "durak yolcu"
};

let car = new Object();
car.color = "red";
car.brand = "Suzuki";

let movie = Object.create(null); //No inheritence

let bike = Object.create(car);   //inheritance
bike.brand = "Bisan";
bike.color = "black";

//Object Key & Value
console.log(car.brand); //Reaching the key
car.year = "2018"; //Adding Property
console.log(car);
delete(car.year);  //Deleting Property
console.log(car);

user["likes chocolate"] = true;
console.log(user["likes chocolate"]);
delete user["likes chocolate"]

 //Computed property
 function objectify (key, value) {
    return {
        [key]: value
   }
 }
 objectify("name", "inci");   //{name: "Anna"} 

 // Define an object constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    // Define a method for the object
    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
  
  // Create instances of the object
  var person1 = new Person("John", "Doe", 30);
  var person2 = new Person("Jane", "Smith", 25);
  
  // Access properties and methods
  console.log(person1.firstName);  // Output: John
  console.log(person2.getFullName());  // Output: Jane Smith
  

  // Define an object constructor using a class
class Employee {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    
    // Define a method for the object
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // Create instances of the object
  const employee1 = new Employee("John", "Doe", 30);
  const employee2 = new Employee("Jane", "Smith", 25);
  
  // Access properties and methods
  console.log(employee1.firstName);  // Output: John
  console.log(employee2.getFullName());  // Output: Jane Smith
  