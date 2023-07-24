//class
/*A class is a blueprint for the object. You can create an object from the class.
The constructor() method inside a class gets called automatically each time an object is created.
The getter methods get the value of an object and setter methods set the value of an object.
We use the get keyword for getter methods and set for setter methods. */


class Person {
  constructor(name) {
      this.name = name;
  }
  greet() {
      console.log(`yooo ${this.name}`);
  }

  // getter
  get personName() {
      return this.name;
  }

  // setter
  set personName(x) {
      this.name = x;
  }
}
let person1 = new Person('Ankita');
// accessing property
console.log(person1.name); // Ankita
// accessing method
person1.greet(); // yooo Ankita 

let person2 = new Person('Riya');
console.log(person2.name); // Riya

// changing the value of name property
person2.personName = 'Hirman';
console.log(person2.name); // Hirman

