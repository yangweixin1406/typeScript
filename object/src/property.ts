;(function () {

  class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    get name() {
      return this._name
    }

    set name(value: string) {
      this._name = value
    }
  }

  const per = new Person('Jack', 12)
  
  per.name = '修改后'
  // per.age = 123

  console.log('before <>>>>>>>>>>>>', per)


})()