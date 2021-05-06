(function(){
    type myType = {
        name: string,
        age: number
    }
    /**
     * 接口是用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法
     *  接口中的所有属性都不能有实际的值
     *  接口只定义对象的结构，而不考虑实际值
     *      在接口中，所有的方法都是抽象方法
     */
    interface myInterface {
        name: string,
        age: number
    }

    interface myInterface {
        gender: string
    }

    const obj: myInterface = {
        name: 'bb',
        age: 3,
        gender: 'male'
    }
    console.log(obj)

    // 接口的具体实现
    interface myInter {
        name: string,
        sayHello():void
    }
    // implements: 实现
    class MyClass implements myInter {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('sssss......')
        }
    }
    const myclass = new MyClass('bbb')
    console.log(myclass)

})();