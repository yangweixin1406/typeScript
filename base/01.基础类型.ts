// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;

// 字符串
let name1: string = 'Jack'

let des: string = `My name is ${name1}`

// 数组
let list: number[] = [1, 3, 9]

let list1: Array<number> = [1, 9, 0]

let stringList: Array<string> = ['ja', 'ks', 'k']

// 元组 Tuple
let x: [number, string];
x = [0, 'Hello']

// 枚举
enum Color {red = 1, green, black}
let c: Color = Color.black

let colorName: string = Color[2]

// any类型
let notSure: any = 4
notSure = false

let anyList: any[] = [1, 'ja', false]
anyList[1] = 100

// void,只能赋值undefined 和 null
let unuseable: void = undefined

// null 和 undefined
let u: undefined = undefined
let n: null = null

// never 表示那些永不存在的值的类型
function error(message: string): never {
  throw new Error(message)
}

// 判断返回值类型是never
function fail() {
  return error('Something')
}

function infiniteLoop(): never {
  while (true) {}
}

// Object表示非原始类型，是除了number，string, boolean, null, undefined, symbol之外的类型
declare function create(o: object | null): void;
// create(null)
// create({ name: 'Jack' })

// 类型断言
let someValue: any = 'This is string'
let stringLength1: number = (<string>someValue).length

let stringLength: number = (someValue as string).length
console.log(stringLength)
