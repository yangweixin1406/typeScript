"use strict";
;
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const per = new Person('Jack', 12);
    per.name = '修改后';
    // per.age = 123
    console.log('before <>>>>>>>>>>>>', per);
})();
