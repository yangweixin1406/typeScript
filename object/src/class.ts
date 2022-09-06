class Person {
  name: string = '测试'
  static age: number = 18
}

const jack = new Person()

console.log('jack >>>>>>>>>>', jack)
console.log(Person.age)