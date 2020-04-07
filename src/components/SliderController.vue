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
        props: {
          activeIndex: this.activeIndex,
          slideSets: slideSets,
          options: this.options,
          numberOfElementsPerSlide: this.numberOfElementsPerSlide,
        },
        on: {
          animating: (newValue) => {
            this.animating = newValue;
          },
        },
      });

      const barndoorElement = createElement(
        "div",
        { class: "slither-slider-barndoor", style: this.barndoorStyles },
        [slidesElement]
      );

      const controllerElement = createElement("div", { class: "slither-slider-controller" }, [
        barndoorElement,
      ]);

      return controllerElement;
    }
    return "";
  },
  components: {
    SlideRenderer,
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
      slideElements: [],
      inlineHeight: 0,
      loaded: false,
      autoplayInterval: null,
      windowWidth: window.innerWidth,
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
        this.options.numberOfSlides.forEach((sizeConfig) => {
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
        return nextIndex <= this.numberOfPages ? nextIndex : 0;
      }
      return nextIndex <= this.numberOfPages - 1 ? nextIndex : 0;
    },

    prevIndex() {
      const prevIndex = this.activeIndex - 1;
      return prevIndex >= 0 ? prevIndex : this.numberOfPages - 1;
    },

    barndoorStyles() {
      const styles = {
        position: "relative",
      };

      if (this.options.endless) {
        styles.overflow = "hidden";
        styles.width = "30000px";
      }

      return styles;
    },
  },

  mounted() {
    this.buildAndAddSlides();
    this.$nextTick(() => {
      this.loaded = true;
      this.goToIndex(this.activeIndex);
      this.startAutoplay();
    });

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    buildAndAddSlides() {
      if (this.$slots && this.$slots.default) {
        this.$slots.default.forEach((slideElements) => {
          this.slideElements.push(slideElements);
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
        direction = buttonClicked === "next" ? "left" : "right";
      } else {
        direction = this.activeIndex < index ? "left" : "right";
      }

      this.activeIndex = index;
    },
    next() {
      if (!this.animating) this.goToIndex(this.nextIndex, "next");
    },
    prev() {
      if (!this.animating) this.goToIndex(this.prevIndex, "prev");
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

      this.slideElements.forEach((slideElement) => {
        const slide = createElement(SlideRenderer, {}, [slideElement]);
        renderedSlideElements.push(slide);
      });

      for (let i = 1; i <= this.numberOfPages; i++) {
        const slideSet = [];

        const startOfSet = (i - 1) * this.numberOfElementsPerSlide;
        for (let j = startOfSet; j < this.numberOfElementsPerSlide + startOfSet; j++) {
          slideSet.push(renderedSlideElements[j]);
        }
        slideSets.push(slideSet);
      }
      return slideSets;
    },
    // calculateHeight() {
    //   if (this.options.fullscreen) {
    //     this.setFullScreen();
    //   } else {
    //     this.setInlineHeight();
    //   }
    // },
    // setFullScreen() {
    //   Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
    //     node.style.height = `${window.innerHeight + this.options.fullscreenOffset}px`;
    //     this.$refs.slides.$el.style.height = `${
    //       window.innerHeight + this.options.fullscreenOffset
    //     }px`;
    //   });
    // },
    // setInlineHeight() {
    //   if (this.$refs.slides) {
    //     this.inlineHeight = 0;
    //     Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
    //       let bottomPaddingCorrection = this.getPaddingBottom(node);
    //       // find THE HIGHEST!!!

    //       // console.log(node.childNodes[0]);

    //       this.inlineHeight =
    //         this.inlineHeight > node.childNodes[0].scrollHeight + bottomPaddingCorrection
    //           ? this.inlineHeight
    //           : node.childNodes[0].scrollHeight + bottomPaddingCorrection;
    //     });

    //     Array.from(this.$refs.slides.$el.childNodes).forEach((node) => {
    //       node.style.height = `${this.inlineHeight}px`;
    //     });

    //     this.$refs.slides.$el.style.height = `${this.inlineHeight}px`;
    //   }
    // },
    // getPaddingBottom(node) {
    //   let bottomPaddingCorrection = 0;
    //   Array.from(node.childNodes).forEach((childnode) => {
    //     const paddingBottom = window.getComputedStyle(childnode).paddingBottom;
    //     const paddingBottomInt = parseInt(paddingBottom.substring(0, paddingBottom.length - 2));
    //     if (paddingBottomInt > bottomPaddingCorrection) {
    //       bottomPaddingCorrection = paddingBottomInt;
    //     }
    //   });
    //   return bottomPaddingCorrection;
    // },

    // activeIndexChanged(index) {
    //   this.activeIndex = index;

    //   if (this.options.endless) {
    //     this.animating = true;
    //     anime({
    //       targets: this.$refs.slides.$el,
    //       opacity: 1,
    //       duration: this.options.animationDuration,
    //       translateX: -this.totalOffsetWidth,
    //       easing: "easeOutExpo",
    //       complete: () => {
    //         this.animating = false;
    //         if (this.options.loop) {
    //           if (index + 1 > this.numberOfPages) {
    //             this.$refs.sliderframe.setIndex(0);
    //             anime.set(this.$refs.slides.$el, { translateX: 0 });
    //           }
    //         }
    //       },
    //     });
    //   }
    // },
    // contentChanged() {
    //   setTimeout(() => {
    //     this.calculateHeight();
    //   }, 500);
    // },

    // dotClass(dotIndex) {
    //   let classes = { "active-slide": this.activeIndex + 1 === dotIndex };

    //   if (this.options.animatedDots) {
    //     const dotDistance = this.activeIndex + 1 - dotIndex;
    //     if (this.options.dotLimit) {
    //       classes["large-dot"] = dotDistance === 0 || dotDistance === 1 || dotDistance === 2;
    //       classes["medium-dot"] = dotDistance === -1 || dotDistance === 3;
    //       classes["small-dot"] = dotDistance === -2 || dotDistance === -3;
    //       classes["hidden-dot"] = dotDistance > 4 || dotDistance < -2;
    //       // classes[dotDistance] = true;
    //     } else {
    //       classes["large-dot"] = dotDistance === 0;
    //       classes["medium-dot"] = dotDistance === -1 || dotDistance === 1;
    //       classes["small-dot"] = dotDistance === -2 || dotDistance === 2;
    //     }
    //   }

    //   return classes;
    // },
  },
};
</script>

<style lang="scss">
.slither-slider-slides {
  position: relative;
  display: flex;
}
</style>
