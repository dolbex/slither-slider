import Vue from 'vue';
import Slider from './components/Slider.vue';

export default {
  functional: true,
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  render(h) {
    return h(Slider, this.$slots.default, {
      props: this.$props,
    });
  },
};
