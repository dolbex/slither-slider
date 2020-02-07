export default {
  name: "SliderFrame",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      autoplayInterval: null
    };
  },
  computed: {
    slides() {
      // All slides must be children of the `SliderSlides` component.
      return this.$children.find(x => x.$options.name === "Slides").$children;
    },
    slidesCount() {
      return this.slides.length;
    },
    nextIndex() {
      const nextIndex = this.activeIndex + 1;
      return nextIndex <= this.slidesCount - 1 ? nextIndex : 0;
    },
    prevIndex() {
      const prevIndex = this.activeIndex - 1;
      return prevIndex >= 0 ? prevIndex : this.slidesCount - 1;
    },
    sliderClasses() {
      const classes = this.options.sliderClass;

      if (options.fullscreen) {
        classes += " slider-fullscreen";
      }

      return classes;
    }
  },
  mounted() {
    // Immediately activate the first slide.
    this.goToIndex(this.activeIndex);
    this.startAutoplay();
  },
  methods: {
    goToIndex(index) {
      // Find out the direction we're moving.
      // This is useful for animations.
      const direction = index > this.activeIndex ? "left" : "right";

      this.showSingleSlide(index, direction);

      this.activeIndex = index;
      this.$emit("active-index-changed", index);
    },
    showSingleSlide(index, direction) {
      // Call the `hide()` method on the currently
      // active `SliderSlide` component.
      this.slides[this.activeIndex].hide(direction);
      // Call the `show()` method on the `SliderSlide`
      // component with the correspondign index.
      this.slides[index].show(direction);
    },
    next() {
      this.goToIndex(this.nextIndex);
    },
    prev() {
      this.goToIndex(this.prevIndex);
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
    }
  },
  render() {
    return this.$scopedSlots.default({
      // Data
      activeIndex: this.activeIndex,
      numberOfSlides: this.numberOfSlides,
      // Methods
      goToIndex: this.goToIndex,
      next: this.next,
      prev: this.prev,
      pauseInterval: this.pauseInterval,
      startAutoplay: this.startAutoplay
    });
  }
};