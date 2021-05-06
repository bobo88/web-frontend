class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const dog = new Dog('wangcai', 18)
console.log(dog)