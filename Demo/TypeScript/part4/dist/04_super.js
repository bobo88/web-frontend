"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫～');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }
    const dog = new Dog('wangcai', 3);
    console.log(dog);
    console.log(dog.sayHello());
})();
