# TypeScript简介

### 一、关于TypeScript:
- TypeScript是Javascript的一个超集，支持ECMAScript6标准。
- 在Javascript的基础上增加了很多语言特性：
    - 类型批注和编译时类型检查
    - 类型推断
    - 类型擦除
    - 接口
    - 枚举
    - Mixin
    - 泛型编程
    - 名字空间
    - 元组
    - Await

### 二、安装TypeScript：
- 安装： `npm i -g typescript`
- 安装完成后我们可以使用 `tsc` 命令来执行TypeScript的相关代码
    - 比如： `tsc app.ts` 可以将 `app.ts` 转换为 `app.js`
- TypeScript文件的扩展名为 `.ts`


### 三、TypeScript面向对象编程实例：
```js
class Site { 
   name():void { 
      console.log("Runoob") 
   } 
} 
var obj = new Site(); 
obj.name();
```

### 四、TypeScript的相关语法：
- TypeScript的基础类型：
    - any：任何类型
    - number： 数字类型
    - string： 字符串类型
    - boolean： 布尔类型
    - 数组类型
    - 元组
    - enum：枚举，枚举类型用于定义数值集合
    - void： void，用于标识方法返回值的类型，表示该方法没有返回值
    - null： null，表示对象值缺失
    - undefined： undefined，用于初始化变量为一个未定义的值
    - never： never，never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
- TypeScript的变量声明：
    - 语法：`var [变量名] : [类型] = 值;`
        - 例如： `var uname:string = "Runoob";`
    - TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：
        - var num:number = "hello"     // 这个代码会编译错误
- TypeScript的函数：
    - 带有返回值的函数的语法：
        ```js
        function function_name():return_type { 
            // 语句
            return value; 
        }
        ```
        - return_type 是返回值的类型
        - return 关键词后跟着要返回的结果
        - 一般情况下，一个函数只有一个 return 语句
        - 返回值的类型需要与函数定义的返回类型(return_type)一致
    - 带参数的函数：
        ```js
        function func_name( param1 [:datatype], param2 [:datatype]) {   
        }
        ```
        - param1、param2 为参数名
        - datatype 为参数类型
        ```js
        function add(x: number, y: number): number {
            return x + y;
        }
        console.log(add(1,2))
        ```
    -  可选参数和默认参数：
        - 可选参数使用问号标识 ？
        ```js
        function buildName(firstName: string, lastName?: string) {
            if (lastName)
                return firstName + " " + lastName;
            else
                return firstName;
        }
        
        let result1 = buildName("Bob");  // 正确
        let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
        let result3 = buildName("Bob", "Adams");  // 正确
        ```
        - 默认参数：
        ```js
        function function_name(param1[:type],param2[:type] = default_value) { 
        }
        ```
        ```js
        function calculate_discount(price:number,rate:number = 0.50) { 
            var discount = price * rate; 
            console.log("计算结果: ",discount); 
        } 
        calculate_discount(1000) 
        calculate_discount(1000,0.30)
        ```
        - 注意：参数不能同时设置为可选和默认
    - 剩余参数：
        ```js
        function buildName(firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        }
        
        let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
        ```
    - 函数重载:
        - 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
        - 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表
        - 参数类型不同：
        - 参数数量不同：
        - 参数类型顺序不同：
- TypeScript 联合类型：
    - 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值
        ```js
        Type1|Type2|Type3 
        ```
    - 举例：
        ```js
        var val:string|number 
        val = 12 
        console.log("数字为 "+ val) 
        val = "Runoob" 
        console.log("字符串为 " + val)
        ```
```js
// TypeScript的基础类型
// 数字类型
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// 字符串类型
let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;

// 布尔类型
let flag: boolean = true;

// 数组类型
// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr: Array<number> = [1, 2];

// 元组
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob

// 枚举
// 枚举类型用于定义数值集合
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

// void: 用于标识方法返回值的类型，表示该方法没有返回值
function hello(): void {
    alert("Hello Runoob");
}

```

### 五、TypeScript主要扩展的语言特性：
- 接口：
    - 语法：`interface interface_name { }`
    - 接口继承： 
        - 单接口继承语法格式: `Child_interface_name extends super_interface_name`
        - 多接口继承语法格式: `Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name`
- 类的访问控制修饰符：
    - public（默认） : 公有，可以在任何地方被访问
    - protected : 受保护，可以被其自身以及其子类和父类访问
    - private : 私有，只能被其定义所在的类访问
- 类和接口：
    - 类可以实现接口，使用关键字 `implements`
