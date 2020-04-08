<template>
  <div class="slither-slider" v-if="finalOptions.transition">
    <slider-controller
      :options="finalOptions"
      ref="sliderController"
      @newNumberOfPages="
        (value) => {
          this.numberOfPages = value;
        }
      "
      @newNumberOfSlides="
        (value) => {
          this.numberOfSlides = value;
        }
      "
      @newActiveIndex="
        (value) => {
          this.activeIndex = value;
        }
      "
    >
      <slot></slot>
    </slider-controller>

    <!-- Next/Prev controls -->
    <slider-controls
      :options="finalOptions"
      :show-controls="finalOptions.controls && hasSlides > 1"
      @next="next"
      @prev="prev"
      :previous="$slots.previous"
      :next="$slots.next"
    >
    </slider-controls>

    <slider-dots
      :options="finalOptions"
      :show-dots="finalOptions.dots"
      :number-of-slides="this.numberOfSlides"
      :number-of-pages="this.numberOfPages"
      :active-index="this.activeIndex"
      @goToIndex="goToIndex"
    ></slider-dots>
  </div>
</template>

<script>
import SliderController from "./SliderController.vue";
import SliderControls from "./SliderControls.vue";
import SliderDots from "./SliderDots.vue";

export default {
  name: "SlitherSlider",
  components: {
    SliderController,
    SliderControls,
    SliderDots,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      numberOfSlides: 0,
      numberOfPages: 0,
      activeIndex: 0,
      defaultSlot: [],
      defaultOptions: {
        autoplay: false,
        transition: "slide",
        animationDuration: 500,
        animationEasing: "easeOutQuint",
        controls: true,
        dots: true,
        animatedDots: false,
        dotLimit: false,
        fullscreen: false,
        fullscreenOffset: null,
        numberOfSlides: 1,
        controlsWrapperClass: null,
        endless: false,
        gap: 30,
        loop: true,
        extras: 3,
        overflowHiddenPadding: { top: 0, left: 0, right: 0, bottom: 0 },
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
    hasSlides() {
      if (this.defaultSlot) {
        return this.defaultSlot.length;
      }
      console.warn("Slither Slider: No slides found");
      return 0;
    },
  },
  methods: {
    setOptions() {
      this.finalOptions = Object.assign({}, this.defaultOptions, this.options);
    },
    next() {
      if (this.$refs.sliderController) {
        this.$refs.sliderController.next();
      }
    },
    prev() {
      if (this.$refs.sliderController) {
        this.$refs.sliderController.prev();
      }
    },
    goToIndex(index) {
      if (this.$refs.sliderController) {
        this.$refs.sliderController.goToIndex(index);
      }
    },
  },
};
</script>

<style lang="scss">
.slither-slider {
  position: relative;
}
</style>
