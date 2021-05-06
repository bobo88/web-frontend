(function(){
    // abstract: 抽象类
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        // abstract： 抽象方法，子类必须重写
        abstract sayHello(): void;
    }

    class Dog extends Animal {
        sayHello () {
            console.log('wangwangwang')
        }
    }

    class Cat extends Animal {
        sayHello () {
            console.log('miaomiaomiao')
        }
    }

    const dog = new Dog('wangcai')
    console.log(dog)
    console.log(dog.sayHello())
})();