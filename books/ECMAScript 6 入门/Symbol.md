# Symbol

*1、ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值*
- Symbol 值通过Symbol函数生成
- 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
- Symbol 值不能与其他类型的值进行运算，会报错。
- 但是，Symbol 值可以显式转为字符串。
- 另外，Symbol 值也可以转为布尔值，但是不能转为数值。
- ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。
```js
let s = Symbol();

typeof s
// "symbol"

// Symbol 值不能与其他类型的值进行运算，会报错
let sym = Symbol('My symbol');
"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string

// Symbol 值可以显式转为字符串
let sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

// Symbol 值也可以转为布尔值，但是不能转为数值
let sym = Symbol();
Boolean(sym) // true
!sym  // false
if (sym) {
  // ...
}
Number(sym) // TypeError
sym + 2 // TypeError

// ES2019 提供了一个实例属性description，直接返回 Symbol 的描述
const sym = Symbol('foo');
sym.description // "foo"
```

*2、通过方括号结构和Object.defineProperty，将对象的属性名指定为一个 Symbol 值*

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

*3、注意，Symbol 值作为对象属性名时，不能用点运算符*
```js
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```

*4、魔术字符串*
- 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
```js
// 字符串Triangle就是一个魔术字符串
// 它多次出现，与代码形成“强耦合”，不利于将来的修改和维护
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
```
*实例： 消除魔术字符串*
```js
// 普通方式
const shapeType = {
  triangle: 'Triangle'
};
// Symbol 方式
const shapeType = {
  triangle: Symbol()
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

*5、属性名的遍历：*
- Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
- 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
- 另一个新的 API，Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```js
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```

*Reflect.ownKeys()方法*
```js
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```

*6、Symbol.for()，Symbol.keyFor()*
- Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
- Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
- Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key
- 注意，Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。
- Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。
```js
// 1.
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
s1 === s2 // true

// 2.
Symbol.for("bar") === Symbol.for("bar")
// true
Symbol("bar") === Symbol("bar")
// false

// 3.
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

// 4.
function foo() {
  return Symbol.for('bar');
}
const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true

// 5. iframe 窗口生成的 Symbol 值，可以在主页面得到
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
// true
```

*7、内置的 Symbol 值*
- Symbol.hasInstance:
    - 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
    ```js
    class MyClass {
        [Symbol.hasInstance](foo) {
            return foo instanceof Array;
        }
    }
    [1, 2, 3] instanceof new MyClass() // true
    ```
- Symbol.isConcatSpreadable:
    - 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
    - 类似数组的对象正好相反，默认不展开。它的Symbol.isConcatSpreadable属性设为true，才可以展开。
    ```js
    // 1.
    let arr1 = ['c', 'd'];
    ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
    arr1[Symbol.isConcatSpreadable] // undefined

    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    ['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']

    // 2.
    let obj = {length: 2, 0: 'c', 1: 'd'};
    ['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

    obj[Symbol.isConcatSpreadable] = true;
    ['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
    ```
- Symbol.species:
    - 对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性。
- Symbol.match:
    - 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.replace:
- Symbol.search:
- Symbol.split:
- Symbol.iterator:
- Symbol.toPrimitive:
- Symbol.toStringTag:
- Symbol.unscopables:

