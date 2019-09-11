export default {
  name: 'SlideRenderer',
  mounted () {
    console.log(this.slide)
  },
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
