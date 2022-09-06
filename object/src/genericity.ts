// 泛型

/**
 * 在定义函数或者类时，遇到类型不明确的时候可以使用泛型
 */

function fn<T> (a: T): T {
  return a;
}

// 不指定泛型，ts会自动断言
let result = fn(10)
let result1 = fn<string>('1111')
console.log(result, result1);

function fn2<T, K>(a: T, b: K): T {
  return a
}

fn2<number, string> (12, '123131')

interface Inter {
  name: string
}

function fn3<T extends Inter>(a: T): string {
  return a.name
}

fn3<Inter> ({ name: '1231' })

class MyClass<T> {
  name: T

  constructor(name: T) {
    this.name = name
  }
}

const my1 = new MyClass<string>('Jack')
console.log('my1 >>>>>>>>>', my1)