<script>
import bus from "../bus";
export default {
  name: "Slide",
  render(createElement) {
    const slide = createElement(
      "div",
      {
        ref: "slide",
        class: this.slideClasses,
        style: this.styles
      },
      this.slideSet
    );
    const slideWrapper = createElement("div", { ref: "slideWrapper" }, [slide]);
    return slideWrapper;
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    },
    slideSet: {
      type: Array,
      required: true
    },
    numberOfElementsPerSlide: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      height: "auto"
    };
  },
  mounted() {
    this.setHeight();
  },
  computed: {
    slideClasses() {
      const slideClasses = ["slither-slider-slide"];

      if (this.index === this.activeIndex) {
        slideClasses.push("slither-slider-active-slide");
      }

      return slideClasses;
    },

    styles() {
      if (this.options.endless) {
        if (this.options.cuts === "left") {
          return {
            display: "flex",
            flexDirection: "row-reverse"
          };
        }

        return {
          display: "flex"
        };
      }

      return {
        position: "relative",
        height: this.height,
        display: "grid",
        gridTemplateColumns: this.calculateGrid(),
        gap: this.options.gap + "px"
      };
    }
  },
  methods: {
    setHeight() {
      if (this.options.fullscreen) {
        const fullscreenHeight = window.innerHeight + this.options.fullscreenOffset;
        this.height = fullscreenHeight + "px";
      }
    },

    calculateGrid() {
      if (this.options.preserveGrid) {
        return `repeat(${this.numberOfElementsPerSlide}, minmax(0, 1fr))`;
      }

      if (this.slideSet.length <= this.numberOfElementsPerSlide) {
        return `repeat(${this.slideSet.length}, minmax(0, 1fr))`;
      }

      return `repeat(${this.numberOfElementsPerSlide}, minmax(0, 1fr))`;
    }
  }
};
</script>
