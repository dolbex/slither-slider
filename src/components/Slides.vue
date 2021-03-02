<script>
import anime from "animejs";
import Slide from "./Slide";

export default {
  name: "Slides",
  render(createElement) {
    const slides = [];

    this.slideSets.forEach((slideSet, index) => {
      const slideWrapper =
        index === this.activeIndex || (this.options.endless && index === 0)
          ? createElement(Slide, {
              key: index,
              ref: "slide",
              style: this.styles,
              class: "slither-slider-slide-wrapper",
              props: {
                options: this.options,
                slideSet: slideSet,
                index: index,
                activeIndex: this.activeIndex,
                numberOfElementsPerSlide: this.numberOfElementsPerSlide,
                randothing: this.activeIndex === index
              }
            })
          : null;

      if (!this.options.endless) {
        const transition = createElement(
          "transition-group",
          {
            tag: "div",
            class: "slither-slider-transition-group",
            style: "width:100%;",
            css: "false",
            on: { enter: this.animateIn, leave: this.animateOut }
          },
          [slideWrapper]
        );
        slides.push(transition);
      } else {
        slides.push(slideWrapper);
      }
    });

    return createElement(
      "div",
      { style: { overflow: "hidden", height: this.height, transition: "height 300ms" } },
      slides
    );
  },
  components: {
    Slide
  },
  props: {
    slideSets: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    numberOfElementsPerSlide: {
      type: Number,
      required: true
    },
    slideDirection: {
      type: String,
      default: "left"
    },
    numberOfSlides: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      height: "auto"
    };
  },
  computed: {
    activeSlide() {
      if (this.options.endless) {
        return 0;
      }
      return this.slideSets[this.activeIndex];
    },
    styles() {
      const styles = {};

      if (this.options.endless) {
        if (this.options.cuts === "left") {
          styles.marginLeft = this.options.gap + "px";
        } else {
          styles.marginRight = this.options.gap + "px";
        }
      }

      return styles;
    },
    totalOffsetWidth() {
      let totalWidth = 0;
      const slides = Array.from(this.$refs.slide.$el.children[0].children);

      for (let i = 0; i < this.activeIndex; i++) {
        const slideElement = slides[i];
        const rect = slideElement.getBoundingClientRect();
        totalWidth += rect.width;
        totalWidth += this.options.gap;
      }
      return totalWidth;
    },
    endOffsetWidth() {
      let totalWidth = 0;
      const slides = Array.from(this.$refs.slide.$el.children[0].children);

      for (let i = 0; i < slides.length - this.options.extras; i++) {
        const slideElement = slides[i];
        const rect = slideElement.getBoundingClientRect();
        totalWidth += rect.width;
        totalWidth += this.options.gap;
      }
      return totalWidth;
    }
  },

  methods: {
    animateIn(el, done) {
      if (this.options.transition === "fade") {
        this.fadeAnimation(el, done, "in", this.slideDirection);
      } else if (this.options.transition === "slide") {
        this.slideAnimation(el, done, "in", this.slideDirection);
      }
    },
    animateOut(el, done) {
      var parentPos = el.parentElement.getBoundingClientRect(),
        childrenPos = el.getBoundingClientRect(),
        elPosition = {};

      (elPosition.top = childrenPos.top - parentPos.top),
        (elPosition.right = childrenPos.right - parentPos.right),
        (elPosition.bottom = childrenPos.bottom - parentPos.bottom),
        (elPosition.left = childrenPos.left - parentPos.left);

      if (this.activeIndex === 1) {
        this.height = this.$el.offsetHeight + "px";
      }

      anime.set(el, {
        position: "absolute",
        top: elPosition.top + "px",
        left: elPosition.left + "px",
        width: parentPos.width + "px",
        height: parentPos.height + "px"
      });

      if (this.options.transition === "fade") {
        this.fadeAnimation(el, done, "out", this.slideDirection);
      } else if (this.options.transition === "slide") {
        this.slideAnimation(el, done, "out", this.slideDirection);
      }
    },

    fadeAnimation(el, done, inOut, direction) {
      const startingOpacity = inOut === "in" ? 0 : 1;
      const destinationOpacity = inOut === "in" ? 1 : 0;

      anime.set(el, { opacity: startingOpacity });

      anime({
        targets: el,
        opacity: destinationOpacity,
        duration: this.options.animationDuration,
        easing: this.options.animationEasing,
        complete: () => {
          this.$emit("animating", false);

          if (this.options.adaptiveHeight) {
            this.height = this.$refs.slide.$el.offsetHeight + "px";
          }
          done();
        }
      });
    },

    slideAnimation(el, done, inOut, direction) {
      const startingOpacity = inOut === "in" ? 1 : 1;
      const destinationOpacity = inOut === "in" ? 1 : 1;

      let startingTransform = inOut === "in" ? "-100%" : 0;
      let destinationTransform = inOut === "in" ? 0 : 100;

      if (direction === "left") {
        startingTransform = inOut === "in" ? "100%" : 0;
        destinationTransform = inOut === "in" ? 0 : "-100%";
      }

      this.$emit("animating", true);
      anime.set(el, { translateX: startingTransform, opacity: startingOpacity });

      anime({
        targets: el,
        translateX: destinationTransform,
        opacity: destinationOpacity,
        duration: this.options.animationDuration,
        easing: this.options.animationEasing,
        complete: () => {
          this.$emit("animating", false);

          if (this.options.adaptiveHeight) {
            this.height = this.$refs.slide.$el.offsetHeight + "px";
          }

          // if (this.options.adaptiveHeight) {
          //   this.$nextTick(() => {
          //     console.log(this.$el.offsetHeight)
          //     this.height = this.$el.offsetHeight + 'px'
          //   })
          // }

          done();
        }
      });
      // For dubugging
      // setTimeout(() => {
      //   animation.pause();
      // }, this.options.animationDuration / 2);
    }
  },
  watch: {
    activeIndex(index, oldIndex) {
      if (this.options.endless) {
        this.animating = true;

        // If progressing back from first to last reset us to give us the illusion of
        // infinite loop
        if (oldIndex < index - 1) {
          anime.set(this.$el, {
            translateX: -this.endOffsetWidth
          });
        }

        anime({
          targets: this.$el,
          opacity: 1,
          duration: this.options.animationDuration,
          translateX: this.options.cuts === "left" ? this.totalOffsetWidth : -this.totalOffsetWidth,
          easing: "easeOutExpo",
          complete: () => {
            this.animating = false;
            if (this.options.loop) {
              if (index + 1 > this.numberOfSlides) {
                this.$emit("resetToStart");
                anime.set(this.$el, { translateX: 0 });
              }
            }
          }
        });
      }
    }
  }
};
</script>
