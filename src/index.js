import VSDrag from './VSimpleDrag.vue';

VSDrag.install = vm => {
  vm.component('v-s-drag', VSDrag)
}
// export default {
//   install (vm) {
//     vm.component('v-s-drag', VSDrag)
//   }
// }

export default VSDrag;
