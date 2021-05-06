class Person {
    // readonly 只读属性
    readonly name: string = '孙悟空';
    age: number = 18;
    // static 静态属性
    static run: number = 28;

    static readonly ss: string = 'bobo';

    
}

const per = new Person();
console.log(per)
console.log(per.name)
console.log(per.age)