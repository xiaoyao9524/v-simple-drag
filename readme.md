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
<template>
    <v-s-drag
        ref="drag"
        :watch="list"
        @change="callback"
    >
        <ul>...</ul>
    </v-s-drag>
</template>
```

* watch
    类型：Array
    默认值：null
    说明：需要被监测的数据，在顺序更改后会将更改顺序后的一份浅拷贝传入"change"事件回调函数中。
    注意：此原数据将不会做任何修改，插件内部将会浅拷贝一份。

## 发布历史

* 0.0.31
    * 更新README，发布项目

## 作者

xiaoyao9524

xiaoyao9524@163.com

[https://github.com/xiaoyao9524/v-simple-drag](https://github.com/xiaoyao9524/)
