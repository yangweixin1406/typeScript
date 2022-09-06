"use strict";
;
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('sayHello !!!!!!!!!!!');
        }
    }
    class Dog extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
    }
    const dog = new Dog('旺财', 13, 'femal');
    console.log('dog >>>>>>>>', dog);
    dog.sayHello();
})();
