<template>
  <div id="app">
    <slider :config="config">
      <slot></slot>
    </slider>
  </div>
</template>

<script>
import Slider from './Slider.vue';

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
