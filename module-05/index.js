//=======Task 1 =================



// const Account = function ({
//   login,
//   email
// }) {
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);

// }
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof'
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


//=======Task 2 =================
class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers `)
  }

}

const mango = new User('Mango', 2, 20);
const poly = new User('Poly', 3, 17);
mango.getInfo();
poly.getInfo();

//=======Task 3 =================

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItems(item) {
    this.items.push(item);
    return items;
  }
  removeItems(item) {
    this.items = this.items.filter(eachItem => eachItem !== item);

  }

}
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор', ]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]



storage.addItems('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItems('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//=======Task 4 =================
class StringBuilder {
  constructor(str) {
    this._value = str;
    // console.log(this._value);
  }
  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
    // console.log(this._value);
    return this._value;

  }
  prepend(str) {
    this._value = str + this._value;
    // console.log(this._value);
    return this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
    // console.log(this.value);
    return this._value;

  }

}
const builder = new StringBuilder('.');

console.log(builder);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='



//=======Task 5 =================



class Car {

  static getSpecs(car) {
    console.log(` maxSpeed : ${car.maxSpeed}, speed : ${car.speed}, isOn: ${ car.isOn }, distance: ${ car.distance }, price: ${ car.price }`);
  }

  constructor({
    maxSpeed = 0,
    speed = 0,
    isOn = 0,
    distance = 0,
    price = 0
  }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }
  set price(pricenew) {
    return this._price = pricenew;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }


  accelerate(value) {
    if ((value + this.speed) < this.maxSpeed) {
      this.speed += value;
      return this.speed;
    }

  }
  decelerate(value) {
    if ((this.speed - value) >= 0) {
      this.speed -= value;
      return this.speed
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
      return this.distance;
    }

  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
//maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000