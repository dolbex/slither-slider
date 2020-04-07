<template>
  <div class="slither-slider" v-if="finalOptions.transition">
    <slider-controller :options="finalOptions" ref="sliderController">
      <slot></slot>
    </slider-controller>

    <!-- Next/Prev controls -->
    <slider-controls
      :options="finalOptions"
      :show-controls="finalOptions.controls && hasSlides > 1"
      @next="next"
      @prev="prev"
    ></slider-controls>
  </div>
</template>

<script>
import SliderController from "./SliderController.vue";
import SliderControls from "./SliderControls.vue";

/*
      ****** COMPONENT STRUCTURE *******
      <slither-slider>
        <slider-controller>
          <slides>
            <slide></slide>
          </slides>
          <slide-dots></slide-dots>
        </slider-controller>
      </slither-slider>
    /*


    /*
      ****** OUTPUT OF THIS WHOLE THING ******

      // This is at the root
      <div class="slither-slider">
      
        <div class="slither-slider-controller">

          // Overflow hidden to shift for endless
          <div class="slither-slider-barndoor">
            <div class="slither-slider-slides">
              <slide></slide>
              <slide></slide>
              <slide></slide>
            </div>
          </div>

          <div class="slither-slider-dots">
          </div>
        </div>

        <div class="slither-slider-controls">
          // Left and Right conrols
        </div>
      </div>
    */

// Slither slider combines all of the options provided from the user and serves
// as the entry component.

export default {
  name: "SlitherSlider",
  components: {
    SliderController,
    SliderControls,
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
        autoplay: false,
        transition: "fade",
        animationDuration: 300,
        animationEasing: "easeInExpo",
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
        controlsWrapperClass: null,
        endless: false,
        gap: 30,
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
  },
};
</script>

<style lang="scss">
.slither-slider {
  position: relative;
}

// .slider {
//   position: relative;
// }

// .slider-fullscreen {
//   overflow: hidden;
// }

// .limit-dot-width {
//   width: 50px;
//   overflow: hidden;
// }

// .slider-dots {
//   position: absolute;
//   right: 0;
//   bottom: -2em;
//   left: 0;
//   display: flex;
//   justify-content: center;
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   padding: 0;
// }

// .slider-dot {
//   width: 8px;
//   height: 8px;
//   font-size: 0.1em;
//   background-color: #9b9b9b;
//   color: #9b9b9b;
//   border-radius: 8px;
//   overflow: hidden;
//   margin-right: 0.75rem;
//   transition: all 1s;
//   cursor: pointer;

//   &.active-slide {
//     background-color: #4a4a4a;
//     color: #4a4a4a;
//   }

//   &.large-dot {
//     transform: scale(1.7);
//   }
//   &.medium-dot {
//     transform: scale(1.2);
//   }
//   &.small-dot {
//     transform: scale(0.7);
//   }
//   &.hidden-dot {
//     display: none;
//   }
// }
</style>
