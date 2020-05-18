// TypeScript的核心原则之一是对值所具有的结构进行类型检查
function printLabel1 (labelledObj: { label: string }) {
  console.log(labelledObj.label)
}
// let myObj = { size: 10, label: 'My obj size is 10' }

// 只要传的对象符合LabelledObj的必要条件，那么这个对象就是被允许的,接口中的属性是必须的
interface LabelledObj {
  label: string
}

function printLabel (labelledObj: LabelledObj) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'My obj size is 10' }
// printLabel(myObj)

/**
 * 可选属性，接口中的属性不是必须的，有些条件可以存在也可以不存在
 */
interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any
}

function createSquare (config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let square = createSquare({ color: 'black', opacity: 0.5 } as SquareConfig)

/**
 * 只读属性， 一些对象只能在刚刚创建的时候修改其值
 * 作为变量使用用const定义，作为属性使用用readonly
 */
interface Point {
  readonly x: number,
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
let a: number[] = [1, 6, 9, 10, 8]
let ro: ReadonlyArray<number> = a
let b = ro as ReadonlyArray<number>

/**
 * 函数类型
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString)
  return result > -1;
}

/**
 * 可索引的类型
 */
interface StringArray {
  [index: number]: string
}
let myArray: StringArray;
myArray = ['Jack', 'Tom']

let myStr: string = myArray[0]

// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// 设置为只读属性
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let strArr: ReadonlyStringArray = ['name', 'Jack', 'like']

/**
 * 类类型
 */
// // 实现接口
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d
//   }
//   constructor (h: number, m: number) {}
// }

// 类静态部分与实例部分的区别
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  // tick();
}

function createClock (ctor: ClockConstructor, hour: number, minute: number):ClockInterface {
  return new ctor(hour, minute);
}

/**
 * 继承接口
 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let squareE = <Square>{};
squareE.color = 'red';
squareE.sideLength = 10;

// 一个接口可以继承多个接口
interface Width {
  width: number,
  [propName: string]: any // 自定义属性添加
}

interface Height {
  height: number
}

interface Area extends Width, Height {
  area: number
}

let total = <Area>{};
total = {
  width: 19,
  height: 90,
  area: 1000,
  name: 'Jack'
}

/**
 * 混合类型
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter
}

let c = getCounter()
c.interval = 5.0

// 接口继承类
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {};
}

class TextBox extends Control {
  select() {}
}