class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
   
    isAdult() {
      return this.age >= 18;
    }
  }
  

  const person1 = new Person("Radha Priyadarshan", "Jagadeesan", 22, "Male");
  console.log(person1.getFullName()); 
  console.log(person1.isAdult());      
  