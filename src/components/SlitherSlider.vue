<template>
  <div id="app">
    <slider :config="config">
      <slot></slot>
      <template slot="previous">
        <slot name="previous"></slot>
      </template>
      <template slot="next">
        <slot name="next"></slot>
      </template>
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
      default () {
        return {};
      },
    },
  },
};
</script>
