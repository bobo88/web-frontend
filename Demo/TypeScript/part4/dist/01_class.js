"use strict";
class Person {
    constructor() {
        // readonly 只读属性
        this.name = '孙悟空';
        this.age = 18;
    }
}
// static 静态属性
Person.run = 28;
Person.ss = 'bobo';
const per = new Person();
console.log(per);
console.log(per.name);
console.log(per.age);
