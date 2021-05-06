"use strict";
(function () {
    const obj = {
        name: 'bb',
        age: 3,
        gender: 'male'
    };
    console.log(obj);
    // implements: 实现
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('sssss......');
        }
    }
    const myclass = new MyClass('bbb');
    console.log(myclass);
})();
