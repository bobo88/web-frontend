"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫......');
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('wangwangwang......');
        }
    }
    class Cat extends Animal {
    }
    const dog = new Dog('wangcai', 5);
    const cat = new Cat('mimi', 3);
    console.log(dog);
    console.log(dog.sayHello());
    console.log(cat);
    console.log(cat.sayHello());
})();
