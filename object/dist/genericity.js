"use strict";
// 泛型
/**
 * 在定义函数或者类时，遇到类型不明确的时候可以使用泛型
 */
function fn(a) {
    return a;
}
// 不指定泛型，ts会自动断言
let result = fn(10);
let result1 = fn('1111');
console.log(result, result1);
function fn2(a, b) {
    return a;
}
fn2(12, '123131');
function fn3(a) {
    return a.name;
}
fn3({ name: '1231' });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const my1 = new MyClass('Jack');
console.log('my1 >>>>>>>>>', my1);
