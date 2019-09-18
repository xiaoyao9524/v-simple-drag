<template>
  <div class="drag-wrapper" ref="dragWrapper">
    <slot />
  </div>
</template>

<script>
  import Drag from './Drag'

  export default {
    name: 'v-simple-drag',
    props: {
      watchData: {
        default: null,
        type: Array
      },
      callback: {
        default: null,
        type: Function
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
    created () {
      console.log('props1: ', this);
    },
    mounted () {
      console.log('props2: ', this);
      if (this.watchData) {
        this.list = [...this.watchData];
      }
      const dragWrapper = this.$refs['dragWrapper'];
      const children = dragWrapper.children;
      if (!children.length) {
        console.error('未发现子元素！');
        return;
      }
      this.drag = new Drag(children[0], this.watchData, this.callback, this.animation);
    }
  }
</script>
