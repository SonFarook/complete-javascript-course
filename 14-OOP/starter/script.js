'use strict';

// Der Parametername und der Name der Eigenschaft müssen zwar nicht exakt gleich sein, es ist jedoch eine Konvention
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2025 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const omer = new Person('Ömer', 2003);
// const jack = new Person('Jack', 1992);
// console.log(omer, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// Person.hey = function () {
//   console.log(`Hey there 💀`);
// };

// Person.hey();

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// jonas.calcAge();
// omer.calcAge();

// console.log(jonas.__proto__);

// console.log(Person.prototype.isPrototypeOf(omer));
// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';
// console.log(omer.species, jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 2, 6, 6, 92]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   //   console.log(`Accelerated to ${this.speed}km/h!`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   //   console.log(`Braked to ${this.speed}km/h!`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// mercedes.accelerate();

// bmw.brake();
// mercedes.brake();

// class expression
// const Personcl = class{}

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// const walter = new PersonCl('Walter White', 1995);

// PersonCl.hey();

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 2003);
// steven.calcAge();

// const sara = Object.create(PersonProto);
// sara.init('Sara', '1979');
// sara.calcAge();

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`Accelerated to ${this.speed}km/h!`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`Braked to ${this.speed}km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// ford.speedUS = 500;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Erstellt ein leeres Objekt, welches die Person "Klasse" als Prototypen erhält und setzt damit das Prototyp von Student auf Person
// // Diese "Vererbung" muss geschehen, bevor man weitere Methoden oder Eigenschaften zum Prototypen hinzufügt.
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(
//     `Hello! My name is ${this.firstName} and I am studying ${this.course}.`,
//   );
// };

// const omer = new Student('Ömer', 2003, 'Computer Science');

// omer.introduce();
// omer.calcAge();

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerated to ${this.speed}km/h!`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Braked to ${this.speed}km/h!`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;

//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`,
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(35);
// tesla.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `Hello! My name is ${this.fullName} and I am studying ${this.course}.`,
//     );
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but as a student I fell more like ${2037 - this.birthYear + 10}`,
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Hello! My name is ${this.firstName} and I am studying ${this.course}.`,
//   );
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   // Public interface (API)
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Ömer', 'TL', 3655);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static test() {
    console.log('test');
  }
}

const acc1 = new Account('Ömer', 'TL', 3655);
// acc1.deposit(300);
// acc1.withdraw(100);
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();
console.log(acc1);

// Account.test();
