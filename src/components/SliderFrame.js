export default {
  name: 'SliderFrame',
  props: {
    numberOfSlides: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    slides () {
      // All slides must be children of the `SliderSlides` component.
      return this.$children
        .find(x => x.$options.name === 'Slides').$children;
    },
    slidesCount () {
      return this.slides.length;
    },
    numberOfPages () {
      return Math.ceil(this.slidesCount / this.numberOfSlides)
    },
    nextIndex () {
      const nextIndex = this.activeIndex + 1;

      if (this.numberOfSlides === 1) {
        return nextIndex <= this.slidesCount - 1 ? nextIndex : 0;
      }
      return nextIndex <= this.numberOfPages - 1 ? nextIndex : 0;
    },
    prevIndex () {
      const prevIndex = this.activeIndex - 1;
      if (this.numberOfSlides === 1) {
        return prevIndex >= 0 ? prevIndex : this.slidesCount - 1;
      }
      return prevIndex >= 0 ? prevIndex : this.numberOfPages - 1;
    },
  },
  mounted () {
    // Immediately activate the first slide.
    this.goToIndex(this.activeIndex);
  },
  methods: {
    goToIndex (index) {
      // Find out the direction we're moving.
      // This is useful for animations.
      const direction = index > this.activeIndex ? 'left' : 'right';

      if (this.numberOfSlides === 1) {
        this.showSingleSlide(index, direction)
      } else {
        this.showPageOfSlides(index, direction)
      }

      this.activeIndex = index;
      this.$emit('active-index-changed', index)
    },
    showSingleSlide (index, direction) {
      // Call the `hide()` method on the currently
      // active `SliderSlide` component.
      this.slides[this.activeIndex].hide(direction);
      // Call the `show()` method on the `SliderSlide`
      // component with the correspondign index.
      this.slides[index].show(direction);
    },
    showPageOfSlides (index, direction) {
      // Hide old page
      const oldActiveSlides = {
        start: ((this.numberOfSlides * (this.activeIndex))),
        end: ((this.numberOfSlides * this.activeIndex) + 1),
      }
      for (let i = oldActiveSlides.start; i <= oldActiveSlides.end; i++) {
        if (this.slides[i]) {
          this.slides[i].hide(direction);
        }
      }

      // Show new page
      const newActiveSlides = {
        start: ((this.numberOfSlides * index)),
        end: ((this.numberOfSlides * index) + 1),
      }
      for (let i = newActiveSlides.start; i <= newActiveSlides.end; i++) {
        if (this.slides[i]) {
          this.slides[i].show(direction);
        }
      }
    },
    next () {
      this.goToIndex(this.nextIndex);
    },
    prev () {
      this.goToIndex(this.prevIndex);
    },
  },
  render () {
    return this.$scopedSlots.default({
      // Data
      activeIndex: this.activeIndex,
      numberOfSlides: this.numberOfSlides,
      // Methods
      goToIndex: this.goToIndex,
      next: this.next,
      prev: this.prev,
    });
  },
};
