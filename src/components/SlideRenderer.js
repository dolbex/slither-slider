export default {
  name: 'SlideRenderer',
  props: {
    slide: {
      type: Object,
      required: true
    },
    options: {
      type: Object
    }
  },
  render () {
    return this.slide;
  },
};
