<template>
  <div>
    <!-- Holder for incoming HTML -->
    <div
      ref="slidesSlot"
      v-show="false"
    >
      <slot></slot>
    </div>

    <!-- Slider -->
    <slider-frame
      ref="sliderframe"
      v-if="slides.length > 0"
    >
      <!-- DIV container - parent of the outputted slider -->
      <div
        slot-scope="{ goToIndex, next, prev }"
        class="slider"
        :class="{'slider-fullscreen': options.fullscreen}"
      >
        <!-- Slides -->
        <slider-slides ref="slides">
          <slider-slide
            v-for="(slide, key) in slides"
            :key="key"
            v-html="slide"
            :options="options"
          >
          </slider-slide>
        </slider-slides>

        <!-- Next/Prev controls -->
        <template v-if="options.controls">

          <button
            class="slider-direction slider-direction--prev"
            @click="prev"
          >
            <slot name="previous">
              &laquo; Prev
            </slot>
          </button>
          <button
            class="slider-direction slider-direction--next"
            @click="next"
          >
            <slot name="next">
              Next &raquo;
            </slot>
          </button>
        </template>

        <!-- Dots at the bottom of the slider -->
        <template v-if="options.dots">
          <ol class="slider-dots">
            <li
              v-for="n in slides.length"
              :key="n"
            >
              <div
                @click="goToIndex(n - 1)"
                class="slider-dot"
              >
                {{ n }}
              </div>
            </li>
          </ol>
        </template>
      </div>
    </slider-frame>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
import SliderFrame from './SliderFrame';
import SliderSlides from './SliderSlides.vue';
import SliderSlide from './SliderSlide.vue';

export default {
  name: 'Slider',
  components: {
    SliderFrame,
    SliderSlides,
    SliderSlide,
  },
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {
      options: {
        controls: true,
        dots: true,
        fullscreen: false,
        lazy: false,
      },
      slides: [],
      inlineHeight: 0,
      loaded: false,
    };
  },
  mounted () {
    this.setOptions();
    this.addSlides();
    this.$nextTick(() => {
      this.calculateHeight();
    });
  },
  methods: {
    setOptions () {
      this.options = Object.assign({}, this.options, this.config);
    },
    addSlides () {
      this.$refs.slidesSlot.childNodes.forEach((node) => {
        // find THE HIGHEST!!!
        this.inlineHeight = this.inlineHeight > node.offsetHeight
          ? this.inlineHeight : node.offsetHeight;

        // Push into slides
        this.slides.push(node.outerHTML);
      });
      this.loaded = true;
    },
    calculateHeight () {
      if (this.options.fullscreen) {
        this.setFullScreen();
      } else {
        this.setInlineHeight();
      }
    },
    setFullScreen () {
      this.$refs.slides.$el.childNodes.forEach((node) => {
        node.style.height = `${window.innerHeight}px`;
      });
    },
    setInlineHeight () {
      this.$refs.slides.$el.childNodes.forEach((node) => {
        if (node.offsetHeight > this.inlineHeight) {
          this.inlineHeight = node.offsetHeight
        };
        node.style.height = `${this.inlineHeight}px`;
      });
    },
  },
};
</script>

<style lang="scss">
.slider {
  position: relative;
}

.slider-fullscreen {
  overflow: hidden;
}

.slider-direction {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.slider-direction--prev {
  left: 0.5em;
}

.slider-direction--next {
  right: 0.5em;
}

.slider-slide {
  width: 100%;
}

.slider-dots {
  position: absolute;
  right: 0;
  bottom: 0.5em;
  left: 0;
  display: flex;
  justify-content: center;
}
</style>
