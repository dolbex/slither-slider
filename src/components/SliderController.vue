<script>
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
      let numberOfSlides = 0;
      this.slideElements.forEach(slideElement => {
        if (typeof slideElement !== "undefined" && typeof slideElement.tag !== "undefined") {
          numberOfSlides += 1;
        }
      });
      return numberOfSlides;
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
        paddingTop: this.options.overflowHiddenPadding.top + "px",
        paddingRight: this.options.overflowHiddenPadding.right + "px",
        paddingBottom: this.options.overflowHiddenPadding.bottom + "px",
        paddingLeft: this.options.overflowHiddenPadding.left + "px",
        maxWidth: "100%",
        height: "auto"
      };

      if (this.animating) {
        styles["overflow"] = "hidden";
      } else if (this.options.endless) {
        styles["overflowX"] = "hidden";
      }

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
            marginLeft: `-${offset}px`
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
        this.resize();
      });
    },

    reload() {
      this.loaded = false;
      this.init();
    },

    resize() {
      this.windowWidth = window.innerWidth;
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
      if (!this.animating) {
        this.activeIndex = index;
      }
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

      this.setIndex(index);
    },
    next() {
      if (!this.animating || this.options.endless) this.goToIndex(this.nextIndex, "next");
    },
    prev() {
      if (!this.animating || this.options.endless) this.goToIndex(this.prevIndex, "prev");
    },
    startAutoplay() {
      if (this.options.autoplay) {
        this.resetAutoPlayInterval();
      }
    },
    resetAutoPlayInterval() {
      if (this.options.autoplay) {
        clearInterval(this.autoplayInterval);
        const interval = this.options.secondsOnSlide ? this.options.secondsOnSlide * 1000 : 4000;
        this.autoplayInterval = setInterval(() => {
          this.next();
        }, interval);
      }
    },
    pauseInterval() {
      clearInterval(this.autoplayInterval);
    },
    deepClone(vnodes, createElement) {
      function cloneVNode(vnode) {
        let cloned = createElement(vnode.tag, vnode.data);
        if (vnode.children) {
          const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode));
          cloned = createElement(vnode.tag, vnode.data, clonedChildren);
        }

        cloned.text = vnode.text;
        cloned.isComment = vnode.isComment;
        cloned.componentInstance = vnode.componentInstance;
        cloned.componentOptions = vnode.componentOptions;
        cloned.elm = vnode.elm;
        cloned.context = vnode.context;
        cloned.ns = vnode.ns;
        cloned.isStatic = vnode.isStatic;
        cloned.key = Math.random() * (10000 - 100) + 100;
        return cloned;
      }
      if (vnodes) {
        const clonedVNodes = cloneVNode(vnodes);
        return clonedVNodes;
      }
      return null;
    },

    buildSlideSets(createElement) {
      const renderedSlideElements = [];
      const slideSets = [];

      this.slideElements.forEach(slideElement => {
        if (typeof slideElement !== "undefined" && typeof slideElement.tag !== "undefined") {
          renderedSlideElements.push(slideElement);
        }
      });

      for (let i = 1; i <= this.numberOfPages; i++) {
        const slideSet = [];

        const startOfSet = (i - 1) * this.numberOfElementsPerSlide;
        for (let j = startOfSet; j < this.numberOfElementsPerSlide + startOfSet; j++) {
          if (this.options.endless) {
            if (this.options.cuts === "right") {
              renderedSlideElements[j].data.style = {
                marginRight: this.options.gap + "px",
                ...renderedSlideElements[j].data.style
              };
            } else {
              renderedSlideElements[j].data.style = {
                marginLeft: this.options.gap + "px",
                ...renderedSlideElements[j].data.style
              };
            }
          }
          if (this.options.clickableSlides) {
            if (typeof renderedSlideElements[j].data.on === "undefined") {
              renderedSlideElements[j].data["on"] = {};
            }

            renderedSlideElements[j].data.style = {
              cursor: "pointer",
              ...renderedSlideElements[j].data.style
            };

            renderedSlideElements[j].data.on.click = () => {
              this.goToIndex(j);
            };
          }
          if (renderedSlideElements[j]) {
            slideSet.push(renderedSlideElements[j]);
          }
        }
        slideSets.push(slideSet);
      }

      // Add extras
      if (this.options.endless && this.options.loop) {
        for (let i = 0; i < this.options.extras; i++) {
          const element = this.deepClone(renderedSlideElements[i], createElement);
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
      this.resetAutoPlayInterval();
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
