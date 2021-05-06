"use strict";
(function () {
    // abstract: 抽象类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('wangwangwang');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('miaomiaomiao');
        }
    }
    const dog = new Dog('wangcai');
    console.log(dog);
    console.log(dog.sayHello());
})();
