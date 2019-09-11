export default {
  name: 'SlideRenderer',
  props: {
    slide: {
      type: Object,
      required: true
    }
  },

  render () {
    return this.slide;
  },
};
