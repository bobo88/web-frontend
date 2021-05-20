# Proxy

*Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。*

*Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。*

```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
```

*ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。*
```js
var proxy = new Proxy(target, handler);
```

*注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。*

*如果handler没有设置任何拦截，那就等同于直接通向原对象。*
```js
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
target.a // "b"
```

### 一、Proxy 支持的拦截操作
*一共 13 种*
- 1、`get(target, propKey, receiver)`：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
- 2、`set(target, propKey, value, receiver)`：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- 3、`has(target, propKey)`：拦截propKey in proxy的操作，返回一个布尔值。
- 4、`deleteProperty(target, propKey)`：拦截delete proxy[propKey]的操作，返回一个布尔值。
- 5、`ownKeys(target)`：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- 6、`getOwnPropertyDescriptor(target, propKey)`：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- 7、`defineProperty(target, propKey, propDesc)`：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- 8、`preventExtensions(target)`：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- 9、`getPrototypeOf(target)`：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- 10、`isExtensible(target)`：拦截Object.isExtensible(proxy)，返回一个布尔值。
- 11、`setPrototypeOf(target, proto)`：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- 12、`apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- 13、`construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
```js
var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true
```

*备注：和 proxy 有关的所有拦截*
```js
new Proxy(
  {},
  {
    get() {}, //拦截对象属性的读取
    set() {}, //拦截对象属性的设置
    has() {}, //拦截propKey in proxy的操作
    deleteProperty() {}, //拦截delete proxy[propKey]
    ownKeys() {}, //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in
    getOwnPropertyDescriptor() {}, //拦截Object.getOwnPropertyDescriptor(proxy, propKey)
    defineProperty() {}, //拦截Object.defineProperty(proxy, propKey, propDesc）
    preventExtensions() {}, //拦截Object.preventExtensions(proxy)
    getPrototypeOf() {}, //拦截Object.getPrototypeOf(proxy)
    isExtensible() {}, //拦截Object.isExtensible(proxy)
    setPrototypeOf() {}, //拦截Object.setPrototypeOf(proxy, proto)
    apply() {}, //拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
    construct() {} //拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)
  }
);
```
