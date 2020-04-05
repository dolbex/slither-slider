<template>
  <div v-if="slides" :class="[options.transition, options.sliderClass]">
    <!-- Holder for incoming HTML -->
    <div ref="allSlidesSlot" v-show="false">
      <slot></slot>
    </div>

    <!-- Slider -->
    <slider-frame
      ref="sliderframe"
      v-if="slides.length > 0"
      :options="options"
      :number-of-slides="options.numberOfSlides"
      :number-of-pages="numberOfPages"
      @active-index-changed="activeIndexChanged"
      :animating="animating"
    >
      <!-- DIV container - parent of the outputted slider -->
      <div
        @mouseenter="pauseInterval"
        @mouseleave="startAutoplay"
        slot-scope="{ goToIndex, next, prev, pauseInterval, startAutoplay }"
        class="slider"
        :style="sliderStyles"
        :class="sliderClasses"
      >
        <!-- Slides -->
        <slider-slides
          ref="slides"
          class="slides"
          :options="options"
          :class="[options.sliderClass]"
          v-touch:swipe.left="next"
          v-touch:swipe.right="prev"
        >
          <slider-slide
            v-for="(groupData, key) in groups"
            :key="groupData.key"
            :loaded="loaded"
            :group="groupData.group"
            :options="options"
            :class="options.slideClass"
            :is-next="isNext(key)"
            @contentChanged="contentChanged"
            :style="slideStyles"
          >
          </slider-slide>
        </slider-slides>

        <!-- Dots at the bottom of the slider -->
        <!-- eslint-disable vue/valid-v-for -->
        <template v-if="options.dots && slides.length > 1">
          <ol class="slider-dots">
            <li
              v-for="n in numberOfDots"
              :key="n"
              class="slider-dot"
              :class="dotClass(n)"
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
import anime from "animejs/lib/anime.es.js";

/* eslint-disable no-param-reassign */
import SliderFrame from "./SliderFrame";
import SliderSlides from "./SliderSlides.vue";
import SliderSlide from "./SliderSlide.vue";

export default {
  name: "Slider",
  components: {
    SliderFrame,
    SliderSlides,
    SliderSlide,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      activeIndex: 0,
      animating: false, // Only used for endless
      slides: [],
      inlineHeight: 0,
      loaded: false,
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
    slideCount() {
      if (typeof this.options.numberOfSlides === "number") {
        return this.options.numberOfSlides;
      }
      const windowWidth = window.innerWidth;
      let currentSize = {
        number: 1,
        min: -1,
      };
      for (let i = 0; i < this.options.numberOfSlides.length; i++) {
        const responsiveSize = this.options.numberOfSlides[i];
        if (responsiveSize.min < windowWidth && responsiveSize.min > currentSize.min) {
          currentSize = responsiveSize;
        }
      }
      return currentSize.number;
    },
    numberOfPages() {
      return Math.ceil(this.slidesCount / this.slideCount);
    },
    numberOfDots() {
      return this.numberOfPages;
    },

    // Groups of slides - even if there are just one
    groups() {
      let groups = [];
      let _slides = this.slides.slice();

      for (let i = 0; i < this.numberOfPages; i++) {
        const start = i * this.slideCount;
        const end = i * this.slideCount + this.slideCount;
        let group = _slides.slice(start, end);
        groups.push({ group: group, key: this.randomString() });
      }

      if (this.options.endless && this.options.loop) {
        for (let i = 0; i < this.options.extras; i++) {
          const start = i * this.slideCount;
          const end = i * this.slideCount + this.slideCount;
          let group = _slides.slice(start, end);
          groups.push({ group: group, key: this.randomString() });
        }
      }

      return groups;
    },

    sliderClasses() {
      let classes = this.options.sliderClass;

      if (this.options.fullscreen) {
        classes += " slider-fullscreen";
      }

      return classes;
    },
    sliderStyles() {
      if (this.options.endless) {
        return { overflow: "hidden" };
      }
      return {};
    },

    // This sums the total width of the slides (plus gap) of the slides we've seen until now
    totalOffsetWidth() {
      let totalWidth = 0;

      for (let i = 0; i < this.activeIndex; i++) {
        const element = this.$refs.sliderframe.slides[i];
        const rect = element.$el.getBoundingClientRect();
        totalWidth += rect.width;
        totalWidth += this.options.gap;
      }

      return totalWidth;
    },
    slideStyles() {
      let styles = {};

      if (this.options.endless) {
        styles.marginRight = `${this.options.gap}px`;
      }

      return styles;
    },
  },

  mounted() {
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
    addSlides() {
      if (this.$slots && this.$slots.default) {
        this.$slots.default.forEach((slide) => {
          if (typeof slide.tag !== "undefined") {
            this.slides.push(slide);
          }
        });
      }
    },
    calculateHeight() {
      if (this.options.fullscreen) {
        this.setFullScreen();
      } else {
        this.setInlineHeight();
      }
    },
    setFullScreen() {
      Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
        node.style.height = `${window.innerHeight + this.options.fullscreenOffset}px`;
        this.$refs.slides.$el.style.height = `${
          window.innerHeight + this.options.fullscreenOffset
        }px`;
      });
    },
    setInlineHeight() {
      if (this.$refs.slides) {
        this.inlineHeight = 0;
        Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
          let bottomPaddingCorrection = this.getPaddingBottom(node);
          // find THE HIGHEST!!!

          this.inlineHeight =
            this.inlineHeight > node.childNodes[0].scrollHeight + bottomPaddingCorrection
              ? this.inlineHeight
              : node.childNodes[0].scrollHeight + bottomPaddingCorrection;
        });

        Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
          node.style.height = `${this.inlineHeight}px`;
        });

        this.$refs.slides.$el.style.height = `${this.inlineHeight}px`;
      }
    },
    getPaddingBottom(node) {
      let bottomPaddingCorrection = 0;
      Array.from(node.childNodes).forEach((childnode) => {
        const paddingBottom = window.getComputedStyle(childnode).paddingBottom;
        const paddingBottomInt = parseInt(paddingBottom.substring(0, paddingBottom.length - 2));
        if (paddingBottomInt > bottomPaddingCorrection) {
          bottomPaddingCorrection = paddingBottomInt;
        }
      });
      return bottomPaddingCorrection;
    },

    activeIndexChanged(index) {
      this.activeIndex = index;

      if (this.options.endless) {
        this.animating = true;
        anime({
          targets: this.$refs.slides.$el,
          opacity: 1,
          duration: this.options.animationDuration,
          translateX: -this.totalOffsetWidth,
          easing: "easeOutExpo",
          complete: () => {
            this.animating = false;
            if (this.options.loop) {
              if (index + 1 > this.numberOfPages) {
                this.$refs.sliderframe.setIndex(0);
                anime.set(this.$refs.slides.$el, { translateX: 0 });
              }
            }
          },
        });
      }
    },
    contentChanged() {
      setTimeout(() => {
        this.calculateHeight();
      }, 500);
    },
    isNext(index) {
      return index === this.activeIndex + 1;
    },
    randomString() {
      return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      );
    },
    dotClass(dotIndex) {
      let classes = { "active-slide": this.activeIndex + 1 === dotIndex };

      if (this.options.animatedDots) {
        const dotDistance = this.activeIndex + 1 - dotIndex;
        if (this.options.dotLimit) {
          classes["large-dot"] = dotDistance === 0 || dotDistance === 1 || dotDistance === 2;
          classes["medium-dot"] = dotDistance === -1 || dotDistance === 3;
          classes["small-dot"] = dotDistance === -2 || dotDistance === -3;
          classes["hidden-dot"] = dotDistance > 4 || dotDistance < -2;
          // classes[dotDistance] = true;
        } else {
          classes["large-dot"] = dotDistance === 0;
          classes["medium-dot"] = dotDistance === -1 || dotDistance === 1;
          classes["small-dot"] = dotDistance === -2 || dotDistance === 2;
        }
      }

      return classes;
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
  z-index: 5000;

  border: 1px solid #718096;
  border-radius: 9999px;
  height: 50px;
  width: 50px;
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

.limit-dot-width {
  width: 50px;
  overflow: hidden;
}

.slider-dots {
  position: absolute;
  right: 0;
  bottom: -2em;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 0;
}

.slider-dot {
  width: 8px;
  height: 8px;
  font-size: 0.1em;
  background-color: #9b9b9b;
  color: #9b9b9b;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 0.75rem;
  transition: all 1s;
  cursor: pointer;

  &.active-slide {
    background-color: #4a4a4a;
    color: #4a4a4a;
  }

  &.large-dot {
    transform: scale(1.7);
  }
  &.medium-dot {
    transform: scale(1.2);
  }
  &.small-dot {
    transform: scale(0.7);
  }
  &.hidden-dot {
    display: none;
  }
}
</style>
