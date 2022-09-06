"use strict";
class Person {
    constructor() {
        this.name = '测试';
    }
}
Person.age = 18;
const jack = new Person();
console.log('jack >>>>>>>>>>', jack);
console.log(Person.age);
