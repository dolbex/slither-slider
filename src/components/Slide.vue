<script>
export default {
  name: "Slide",
  render(createElement) {
    const slide = createElement(
      "div",
      {
        ref: "slide",
        class: "slither-slider-slide",
        style: this.styles,
      },
      this.slideSet
    );
    const slideWrapper = createElement("div", { ref: "slideWrapper" }, [slide]);
    return slideWrapper;
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    slideSet: {
      type: Array,
      required: true,
    },
    numberOfElementsPerSlide: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    if (!this.options.endless) {
      this.$nextTick(() => {
        setTimeout(() => {
          if (this.$refs.slide) {
            console.log(this.$refs.slide.children[0]);
            this.$emit(
              "slideDimensions",
              this.$refs.slide.children[0].getBoundingClientRect().height
            );
          }
        }, 200);
      });
    }
  },
  computed: {
    isActive() {
      return this.index === this.activeIndex;
    },
    styles() {
      if (this.options.endless) {
        return {
          display: "flex",
        };
      }
      return {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${this.numberOfElementsPerSlide}, minmax(0, 1fr))`,
        gap: this.options.gap + "px",
      };
    },
  },
};
</script>

<style>
.slither-slider-slide {
}
</style>
