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
  mounted () {
    this.observer = new MutationObserver(function(mutations) {
      this.$emit('contentChanged')
    }.bind(this));
    
    // Setup the observer
    this.observer.observe(
      this.$el,
      { attributes: true, childList: true, subtree: true }
    );
  }
};
