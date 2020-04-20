<script>
import SlideRenderer from "./SlideRenderer";
import Slides from "./Slides";

export default {
  name: "SliderController",
  render(createElement) {
    if (this.loaded) {
      const slideSets = this.buildSlideSets(createElement);

      const slidesElement = createElement(Slides, {
        class: "slither-slider-slides",
        style: this.sliderStyles,
        props: {
          activeIndex: this.activeIndex,
          slideSets: slideSets,
          options: this.options,
          numberOfElementsPerSlide: this.numberOfElementsPerSlide,
          slideDirection: this.slideDirection,
          numberOfSlides: this.numberOfSlides
        },
        on: {
          animating: newValue => {
            this.animating = newValue;
          },
          resetToStart: () => {
            this.setIndex(0);
          }
        }
      });

      const barndoorElement = createElement(
        "div",
        {
          class: "slither-slider-barndoor",
          style: this.barndoorStyles
        },
        [slidesElement]
      );

      const controllerElement = createElement("div", { class: "slither-slider-controller" }, [
        barndoorElement
      ]);

      return controllerElement;
    }
    return "";
  },
  components: {
    SlideRenderer
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    containerWidth: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      defaultSlot: null,
      activeIndex: 0,
      animating: false, // Only used for endless
      slideElements: [],
      inlineHeight: 0,
      loaded: false,
      autoplayInterval: null,
      windowWidth: window.innerWidth,
      slideDirection: null
    };
  },

  computed: {
    numberOfSlides() {
      return this.slideElements.length;
    },

    numberOfElementsPerSlide() {
      if (this.options.endless) {
        return this.numberOfSlides;
      }
      if (typeof this.options.numberOfSlides === "object") {
        let numberOfSlidesPerPage = 1;
        let sizeConfigChoice = 0;
        this.options.numberOfSlides.forEach(sizeConfig => {
          if (sizeConfig.min >= sizeConfigChoice && sizeConfig.min <= this.windowWidth) {
            sizeConfigChoice = sizeConfig.min;
            numberOfSlidesPerPage = sizeConfig.number;
          }
        });
        return numberOfSlidesPerPage;
      }
      return this.options.numberOfSlides;
    },

    numberOfPages() {
      if (this.options.endless) {
        return 1;
      }
      return Math.ceil(this.numberOfSlides / this.numberOfElementsPerSlide);
    },

    nextIndex() {
      const nextIndex = this.activeIndex + 1;
      if (this.options.endless && this.options.loop) {
        return nextIndex <= this.numberOfSlides ? nextIndex : 0;
      } else if (this.options.endless && !this.options.loop) {
        return nextIndex < this.numberOfSlides ? nextIndex : 0;
      }
      return nextIndex <= this.numberOfPages - 1 ? nextIndex : 0;
    },

    prevIndex() {
      const prevIndex = this.activeIndex - 1;
      if (this.options.endless && this.options.loop) {
        return prevIndex >= 0 ? prevIndex : this.numberOfSlides - 1;
      } else if (this.options.endless && !this.options.loop) {
        return prevIndex > 0 ? prevIndex : this.numberOfSlides - 1;
      }
      return prevIndex >= 0 ? prevIndex : this.numberOfPages - 1;
    },

    barndoorStyles() {
      const styles = {
        position: "relative",
        overflow: "hidden",
        paddingTop: this.options.overflowHiddenPadding.top + "px",
        paddingRight: this.options.overflowHiddenPadding.right + "px",
        paddingBottom: this.options.overflowHiddenPadding.bottom + "px",
        paddingLeft: this.options.overflowHiddenPadding.left + "px"
      };

      return styles;
    },

    sliderStyles() {
      let styles = {};

      if (this.options.endless) {
        const width = 300000;

        if (this.options.cuts === "left") {
          const offset = width - this.containerWidth;

          styles = {
            width: `${width}px`,
            transform: `translate3d(-${offset}px, 0, 0)`
          };
        } else {
          styles = { width: `${width}px` };
        }
      }

      return styles;
    }
  },

  mounted() {
    this.defaultSlot = this.$slots.default;
    this.init();
  },
  beforeUpdate() {
    this.buildAndAddSlides();
  },
  methods: {
    init() {
      this.buildAndAddSlides();
      this.$nextTick(() => {
        this.loaded = true;
        this.startAutoplay();
      });

      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    },
    buildAndAddSlides() {
      this.slideElements = [];
      if (this.$slots && this.$slots.default) {
        this.$slots.default.forEach(slideElement => {
          this.slideElements.push(slideElement);
        });
      }
    },
    setIndex(index) {
      this.activeIndex = index;
    },
    goToIndex(index, buttonClicked) {
      // Find out the direction we're moving.
      // This is useful for animations.
      let direction = "left";
      if (buttonClicked) {
        this.slideDirection = buttonClicked === "next" ? "left" : "right";
      } else {
        this.slideDirection = this.activeIndex < index ? "left" : "right";
      }

      this.activeIndex = index;
    },
    next() {
      if (!this.animating || this.options.endless) this.goToIndex(this.nextIndex, "next");
    },
    prev() {
      if (!this.animating || this.options.endless) this.goToIndex(this.prevIndex, "prev");
    },
    startAutoplay() {
      if (this.options.autoplay) {
        const interval = this.options.secondsOnSlide ? this.options.secondsOnSlide * 1000 : 4000;
        this.autoplayInterval = setInterval(() => {
          this.next();
        }, interval);
      }
    },
    pauseInterval() {
      clearInterval(this.autoplayInterval);
    },
    buildSlideSets(createElement) {
      const renderedSlideElements = [];
      const slideSets = [];

      this.slideElements.forEach(slideElement => {
        const slide = createElement(SlideRenderer, { props: { options: this.options } }, [
          slideElement
        ]);
        renderedSlideElements.push(slide);
      });

      for (let i = 1; i <= this.numberOfPages; i++) {
        const slideSet = [];

        const startOfSet = (i - 1) * this.numberOfElementsPerSlide;
        for (let j = startOfSet; j < this.numberOfElementsPerSlide + startOfSet; j++) {
          if (this.options.endless) {
            renderedSlideElements[j].data.style = { marginRight: this.options.gap + "px" };
          }
          slideSet.push(renderedSlideElements[j]);
        }
        slideSets.push(slideSet);
      }

      // Add extras
      if (this.options.endless && this.options.loop) {
        for (let i = 0; i < this.options.extras; i++) {
          const element = renderedSlideElements[i];
          if (element) {
            slideSets[0].push(element);
          }
        }
      }

      return slideSets;
    }
  },
  watch: {
    numberOfSlides(newValue) {
      this.$emit("newNumberOfSlides", newValue);
    },
    numberOfPages(newValue) {
      this.$emit("newNumberOfPages", newValue);
    },
    activeIndex(newValue) {
      this.$emit("newActiveIndex", newValue);
    }
  }
};
</script>

<style lang="scss">
.slither-slider-slides {
  position: relative;
  transform: scaleY(1);
  transform-origin: top;
}
</style>
