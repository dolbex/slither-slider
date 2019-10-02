<template>
  <div v-if="slides" :class="[options.transition, options.sliderClass]">
    <!-- Holder for incoming HTML -->
    <div
      ref="allSlidesSlot"
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
        :class="sliderClasses"
      >
        <!-- Slides -->
        <slider-slides
          ref="slides"
          class="slides"
          :class="[options.sliderClass]"
        >
          <slider-slide
            v-for="(group, key) in groups"
            :key="key"
            :loaded="loaded"
            :group="group"
            :options="options"
            :class="options.slideClass"
            @contentChanged="contentChanged"
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
              v-for="n in numberOfPages"
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
  computed: {
    slidesCount () {
      return this.slides.length;
    },
    numberOfPages () {
      return Math.ceil(this.slidesCount / this.options.numberOfSlides)
    },
    groups () {
      let groups = []
      let _slides = this.slides.slice()

      for (let i = 0; i < this.numberOfPages; i++) {
        const start = i * this.options.numberOfSlides
        const end = (i * this.options.numberOfSlides) + this.options.numberOfSlides
        let group = _slides.slice(start, end)
        groups.push(group)
      }
      
      return groups
    },
    sliderClass () {
      const classes = this.options.sliderClass

      if (options.fullscreen) {
        classes += ' slider-fullscreen'
      }

      return classes
    }
  },
  data () {
    return {
      activeIndex: 1,
      options: {
        transition: 'slide',
        controls: true,
        dots: true,
        fullscreen: false,
        fullscreenOffset: null,
        lazy: true,
        numberOfSlides: 1,
        slideClass: null,
        sliderClass: null,
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

    // One last check to defeat race conditions
    setTimeout(() => {
      this.calculateHeight();
    }, 1000);
  },
  methods: {
    setOptions () {
      this.options = Object.assign({}, this.options, this.config);
    },
    addSlides () {
      if (this.$slots && this.$slots.default) {
        this.$slots.default.forEach(slide => {
          if (typeof slide.tag !== 'undefined') {
            this.slides.push(slide)
          }
        })
      }
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
        node.style.height = `${window.innerHeight + this.options.fullscreenOffset}px`;
        this.$refs.slides.$el.style.height = `${window.innerHeight + this.options.fullscreenOffset}px`;
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
    },
    contentChanged () {
      setTimeout(() => {
        this.calculateHeight()
      }, 500)
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
  z-index:5000;

  border: 0;
  background-color: #fafafa;
  color: #222;
  padding: 0.7em 2em;
  font-size: 1em;
  opacity: 0.75;

  transition: opacity 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

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

.slides {
  overflow: hidden;
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
  padding: 0;
}

.slider-dot {
  width: 12px;
  height: 12px;
  font-size: 0.1em;
  background-color: #ddd;
  color: #ddd;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 1em;
  border: 1px solid white;
  transition: all 1s;
  box-shadow: 0 4px 6px 3px rgba(0, 0, 0, 0.06),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  &.active-slide {
    background-color: #4caf50;
    color: #4caf50;
  }
}
</style>
