<template>
  <div class="drag-wrapper" ref="dragWrapper">
    <slot />
  </div>
</template>

<script>
  import Drag from '../util/Drag'

  export default {
    name: 'v-simple-drag',
    props: {
      observe: {
        default: null,
        type: Array
      },
      animation: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        list: null,
        drag: null
      }
    },
    mounted () {
      console.log('测试 0.0.341');
      if (this.observe) {
        this.list = [...this.observe];
      }
      const dragWrapper = this.$refs['dragWrapper'];
      const children = dragWrapper.children;
      if (!children.length) {
        console.error('未发现子元素！');
        return;
      }
      this.drag = new Drag(children[0], this.list, this.change, this.animation);
    },
    methods: {
      change (data) {
        this.list = data;
        this.$emit('change', data);
      },
      reload () {
        console.log('reload: ', this.observe);
        this.list = [...this.observe];
        if (this.drag) {
          this.drag.reLoad(this.observe);
        }
      },
      test () {
        console.log('install', this.observe);
        this.drag.install();
      },
      destroy () {
        console.log('destroy', this.observe);
        if (this.drag) {
          this.drag.destroy();
        }
      }
    } // ,
    // watch: {
    //   observe: {
    //     deep: true,
    //     handler () {
    //       console.log('watch --');
    //       this.reload();
    //     }
    //   }
    // }
  }
</script>
