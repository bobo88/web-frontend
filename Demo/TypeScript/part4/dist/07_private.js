"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *      - 它们被称为属性的存取器
         */
        // getName () {
        //     return this._name
        // }
        // TS中设置getter的方法
        get name() {
            return this._name;
        }
        setName(value) {
            this._name = value;
        }
    }
    const p = new Person('孙悟空', 88);
    p.setName('猪八戒');
    // console.log(p.getName())
    console.log(p.name);
})();
