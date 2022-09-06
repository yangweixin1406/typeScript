"use strict";
;
(() => {
    /**
     *  抽象类
     *      只能用于被继承，不能实例化
     */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
        sayHello() {
            console.log('汪汪汪汪！！');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵喵！！');
        }
    }
    const dog = new Dog('旺财', 13, 'femal');
    console.log('dog >>>>>>>>', dog);
    dog.sayHello();
    const cat = new Cat('咪咪', 3);
    console.log('cat >>>>>>>>', cat);
    cat.sayHello();
})();
