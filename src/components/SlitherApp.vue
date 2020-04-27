<template>
  <div
    class="slither-slider"
    v-if="finalOptions.transition"
    v-touch:swipe.left="leftSwipe"
    v-touch:swipe.right="rightSwipe"
  >
    <slider-controller
      :options="finalOptions"
      :container-width="containerWidth"
      ref="sliderController"
      @newNumberOfPages="
        value => {
          this.numberOfPages = value;
        }
      "
      @newNumberOfSlides="
        value => {
          this.numberOfSlides = value;
        }
      "
      @newActiveIndex="
        value => {
          this.activeIndex = value;
          this.$emit('changed', value);
        }
      "
    >
      <slot></slot>
    </slider-controller>

    <!-- Next/Prev controls -->
    <slider-controls
      :options="finalOptions"
      :show-controls="finalOptions.controls && this.numberOfSlides > 1"
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
    SliderDots
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      numberOfSlides: 0,
      numberOfPages: 0,
      activeIndex: 0,
      defaultSlot: [],
      containerWidth: 0,
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
        touch: true,
        cuts: "right"
      },
      finalOptions: {}
    };
  },

  created() {
    this.setOptions();
  },

  mounted() {
    this.defaultSlot = this.$slots.default;
    this.$emit("changed", 0);

    window.addEventListener("resize", () => {
      this.setContainerWidth();
    });

    this.addChangeListener();
    this.refresh();
  },
  computed: {
    hasSlides() {
      return this.numberOfSlides > 0;
    }
  },
  methods: {
    refresh() {
      this.setContainerWidth();
    },
    setOptions() {
      this.finalOptions = Object.assign({}, this.defaultOptions, this.options);
    },
    leftSwipe() {
      if (this.finalOptions.touch) {
        this.next();
      }
    },
    rightSwipe() {
      if (this.finalOptions.touch) {
        this.prev();
      }
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
    setContainerWidth() {
      this.containerWidth = this.$el.getBoundingClientRect().width;
    },
    addChangeListener() {
      if (this.defaultSlot) {
        this.defaultSlot.forEach(vnode => {
          if (vnode.data) {
            this.observer = new MutationObserver(
              function(mutations) {
                this.refresh();
              }.bind(this)
            );
            // Setup the observer
            this.observer.observe(this.$el, { attributes: true, childList: true, subtree: true });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.slither-slider {
  position: relative;
}
</style>
