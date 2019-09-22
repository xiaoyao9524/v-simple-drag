# v-simple-drag
> 一个简单的vue拖拽插件

可以方便的在vue中使用拖拽排序的功能，并且带有简单的动画功能

## 安装

```sh
npm install v-simple-drag --save 

or 

yarn add v-simple-drag
```


## 使用方法
```
// main.js

import VSDrag from 'v-simple-drag';

Vue.use(VSDrag);

// app.vue

// 请查看: https://github.com/xiaoyao9524/vue-drag-demo/blob/master/src/App.vue

```

## 参数
```
// 模板示例

<template>
    <v-s-drag
        ref="drag"
        :observe="list"
        @change="callback"
        animation
    >
        <ul>...</ul>
    </v-s-drag>
</template>
```

* observe
    类型：Array
    默认值：null
    说明：需要被监测的数据，在顺序更改后会将更改顺序后的一份浅拷贝传入"change"事件回调函数中。
    注意：此原数据将不会做任何修改，插件内部将会浅拷贝一份。
* change
    说明：回调方法，在顺序被修改时触发，参数为修改后的"observe"浅拷贝。
* animation
    说明：是否开启动画效果，如果开启，将会有简单的移动动画。

### 内部方法

* reload
    说明：如果observe数据被修改，请调用此方法重新计算拖拽数据。
    示例：this.$refs['drag'].reload();
* destroy
    说明：如果想关闭拖拽功能，请调用此方法销毁拖拽实例。
    示例：this.$refs['drag'].destroy();

## 发布历史

* 0.0.1
    * 开始编写
* 0.0.2
    * 完成初步编写、webpack配置等
* 0.0.341
    * 完成基础功能。

## 作者

xiaoyao9524（[https://github.com/xiaoyao9524](https://github.com/xiaoyao9524)）

xiaoyao9524@163.com

此项目github地址（[https://github.com/xiaoyao9524/v-simple-drag](https://github.com/xiaoyao9524/v-simple-drag)）
