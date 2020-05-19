/**
 * 类
 */
class Greeter {
  greeting: string;
  constructor (message: string) {
    this.greeting = message
  }
  greet () {
    return 'Hello ' + this.greeting;
  }
}

let greeter = new Greeter('World!');

/**
 * 继承
 */
class Animal1 {
  move (distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m`);
  }
}

class Dog1 extends Animal1 {
  bark () {
    console.log('Woof!')
  }
}

// const dog = new Dog1()

class Animal {
  name: string;
  constructor (theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

class Snake extends Animal {
  constructor (name: string) { super(name) };
  move (distanceInMeters = 5) {
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor (name: string) { super(name) }
  move (distanceInMeters = 45) {
    super.move(distanceInMeters)
  }
}

let samSnake = new Snake('Jack');
let smallHorse = new Horse('I am still here');

samSnake.move();
smallHorse.move(45);

/**
 * 公共，私有与保护的修饰符
 */

// 默认 public 
class Person {
  public name: string;
  public constructor (theName: string) {
    this.name = theName;
  }
  public move (distanceInMeters: number = 0) {
    console.log(`${this.name} is Person public property!`)
  }
}

// 私有 private, 当成员被标记为private时，它就不能在声明它的类外访问
class Cat {
  private name: string;
  constructor (theName: string) { 
    this.name = theName
  }
}

// protected 成员在派生类里仍然可以访问
// 意味着这个类不能在包含它的类外被实例化，但是能被继承  可以继承但是不能被实例化

/**
 * 存取器
 */
// class Employee {
//   fullName: string;
// }
// let employee = new Employee();
// employee.fullName = 'Jack loves kin'
// if (employee.fullName) {
//   console.log('I have a pen, I have an apple.')
// }

let passcode = 'secret passcode';
class Password {
  private _fullName: string;

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('Error');
    }
  }
}
let password = new Password()
password.fullName = 'Jack wolfskin';
if (password.fullName) {
  alert(password.fullName)
}