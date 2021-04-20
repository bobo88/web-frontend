v-model原理

v-model其实是一个语法糖, 他背后本质是包含两个操作

v-bind绑定一个value属性v-on指令绑定当前元素的input事件
也就是说下面的代码：等同于下面的代码：
<input type="text" v-model="message">
<!-- 等同于下面的代码 -->
<input type="text" :value="message" @input="message = $event.target.value">