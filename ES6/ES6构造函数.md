# ES6构造函数

```js
// // ES5 构造函数
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.say = function() {
//   console.log('你好')
// }
// var person1 = new Person('BOBO', 18)
// console.log(person1.name)
// person1.say()

// ES6构造函数
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log('你好，我是' + this.name)
    }
    static getInstance(name, age) {
        if (!this.instance) {
            this.instance = new Person(name, age)
        }
        return this.instance
    }
}
let person1 = Person.getInstance('bobo', 18)
let person2 = Person.getInstance('angel', 28)
console.log(person1, person2)
console.log(person1 === person2)
```