<template>
  <slider :config="config">
    <slot></slot>
  </slider>
</template>

<script>
import Slider from './components/Slider.vue';

export default {
  name: 'SlitherSlider',
  components: {
    Slider,
  },
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
