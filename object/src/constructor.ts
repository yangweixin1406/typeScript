class Dog {
  name: string
  age: number

  constructor(options: any) {
    this.name = options.name
    this.age = options.age
  }
}

const dog = new Dog({ name: 'Timi', age: 3 })

console.log('dog >>>>>>>', dog)