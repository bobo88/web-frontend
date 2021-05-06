(function(){
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        sayHello () {
            console.log('动物在叫～')
        }
    }

    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }
    }

    const dog = new Dog('wangcai', 3)
    console.log(dog)
    console.log(dog.sayHello())
})();