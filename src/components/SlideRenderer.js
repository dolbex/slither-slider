import bus from "../bus";

export default {
  name: "SlideRenderer",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  render() {
    return this.defaultSlot;
  },
  data() {
    return {
      defaultSlot: null
    };
  },
  mounted() {
    this.defaultSlot = this.$slots.default;
    this.setImages();
    this.addChangeListener();
  },
  methods: {
    setImages() {
      const images = this.findImages(this.defaultSlot[0]);
      images.forEach(image => {
        image.data.on = Object.assign(
          {},
          {
            load: () => {
              bus.$emit("loaded");
            }
          },
          image.data.on
        );
      });
    },
    findImages(vnode) {
      let imageNodes = [];
      if (vnode.tag === "img") {
        imageNodes.push(vnode);
      }

      if (vnode.children) {
        vnode.children.forEach(child => {
          imageNodes = imageNodes.concat(this.findImages(child));
        });
      }

      return imageNodes;
    },
    addChangeListener() {
      if (this.defaultSlot) {
        this.defaultSlot.forEach(vnode => {
          if (vnode.data) {
            this.observer = new MutationObserver(
              function(mutations) {
                this.$emit("contentChanged");
              }.bind(this)
            );
            // Setup the observer
            this.observer.observe(this.$el, { attributes: true, childList: true, subtree: true });
          }
        });
      }
    }
  }
};
