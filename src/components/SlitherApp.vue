<template>
  <div class="slither-slider" v-if="finalOptions.transition">
    <slider :options="finalOptions" ref="slider">
      <slot></slot>
    </slider>

    <!-- Next/Prev controls -->
    <template v-if="finalOptions.controls && numberOfSlides > 1">
      <div @click="prev">
        <slot name="previous">
          <button class="slider-direction slider-direction--prev">
            &laquo;
          </button>
        </slot>
      </div>
      <div @click="next">
        <slot name="next">
          <button class="slider-direction slider-direction--next">
            &raquo;
          </button>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  name: "SlitherSlider",
  components: {
    Slider,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultSlot: [],
      defaultOptions: {
        transition: "slide",
        animationDuration: 300,
        controls: true,
        dots: true,
        animatedDots: false,
        dotLimit: false,
        fullscreen: false,
        fullscreenOffset: null,
        lazy: true,
        numberOfSlides: 1,
        slideClass: null,
        sliderClass: null,
        endless: false,
        gap: 10,
        loop: true,
        extras: 3,
      },
      finalOptions: {},
    };
  },

  created() {
    this.setOptions();
  },

  mounted() {
    this.defaultSlot = this.$slots.default;
  },
  computed: {
    numberOfSlides() {
      return this.defaultSlot.length;
    },
  },
  methods: {
    setOptions() {
      this.finalOptions = Object.assign({}, this.defaultOptions, this.options);
    },
    next() {
      this.$refs.slider.$refs.sliderframe.next();
    },
    prev() {
      this.$refs.slider.$refs.sliderframe.prev();
    },
  },
};
</script>

<style lang="scss">
.slither-slider {
  position: relative;
}
</style>
