<template>
  <div class="slither-slider">
    <slider :config="options">
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
    options: {
      type: Object,
      default () {
        return {};
      },
    },
  },
};
</script>

<style>
.slither-slider {
  overflow: hidden;
}
</style>