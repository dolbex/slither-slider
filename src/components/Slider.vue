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
      :number-of-slides="options.numberOfSlides"
      @active-index-changed="activeIndexChanged"
    >
      <!-- DIV container - parent of the outputted slider -->
      <div
        slot-scope="{ goToIndex, next, prev }"
        class="slider"
        :class="{'slider-fullscreen': options.fullscreen}"
      >
        <!-- Slides -->
        <slider-slides
          ref="slides"
          :style="{overflow:'hidden', display:'flex'}"
        >
          <slider-slide
            v-for="(slide, key) in slides"
            :key="key"
            :loaded="loaded"
            v-html="slide"
            :options="options"
          >
          </slider-slide>
        </slider-slides>

        <!-- Next/Prev controls -->
        <template v-if="options.controls && slides.length > 1">

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
        <template v-if="options.dots && slides.length > 1">
          <ol class="slider-dots">
            <li
              v-for="n in slides.length"
              :key="n"
              class="slider-dot"
              :class="{'active-slide': (n-1) === activeIndex}"
              @click="goToIndex(n - 1)"
            >
              {{ n }}
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
      activeIndex: 1,
      options: {
        controls: true,
        dots: true,
        fullscreen: false,
        lazy: true,
        numberOfSlides: 1,
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
      this.loaded = true;
    });
  },
  methods: {
    setOptions () {
      this.options = Object.assign({}, this.options, this.config);
    },
    addSlides () {
      let height = 0;
      this.$refs.slidesSlot.childNodes.forEach((node) => {
        // Push into slides
        if (node.outerHTML && node.outerHTML.length > 0) {
          this.slides.push(node.outerHTML);
        }
      });
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
        this.$refs.slides.$el.style.height = `${window.innerHeight}px`;
      });
    },
    setInlineHeight () {
      if (this.$refs.slides) {
        this.$refs.slides.$el.childNodes.forEach((node) => {
          // find THE HIGHEST!!!
          this.inlineHeight = this.inlineHeight > node.scrollHeight
            ? this.inlineHeight : node.scrollHeight;
        });

        this.$refs.slides.$el.childNodes.forEach((node) => {
          node.style.height = `${this.inlineHeight}px`;
        });

        this.$refs.slides.$el.style.height = `${this.inlineHeight}px`;
      }
    },
    activeIndexChanged (index) {
      this.activeIndex = index;
    }
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
  &:focus {
    outline: none;
  }
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
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
