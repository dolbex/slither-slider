export default {
  name: "SlideRenderer",
  props: {
    options: {
      type: Object,
    },
  },
  render() {
    return this.defaultSlot;
  },
  data() {
    return {
      defaultSlot: null,
    };
  },
  mounted() {
    this.defaultSlot = this.$slots.default;
    if (this.defaultSlot) {
      this.defaultSlot.forEach((vnode) => {
        if (vnode.data) {
          this.observer = new MutationObserver(
            function (mutations) {
              this.$emit("contentChanged");
            }.bind(this)
          );
          // Setup the observer
          this.observer.observe(this.$el, { attributes: true, childList: true, subtree: true });
        }
      });
    }
  },
};
