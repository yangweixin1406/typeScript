/*
 * @Author: yangweixin
 * @Date: 2020-05-22 09:58:17
 * @LastEditTime: 2020-05-22 10:03:20
 * @LastEditors: Please set LastEditors
 * @Description: symbols
 * @FilePath: \typeScript\base\11.symbols.ts
 */ 

 let sym1 = Symbol();

let sym2 = Symbol('key');

let sym = Symbol();

let obj = {
  [sym]: 'value'
}
