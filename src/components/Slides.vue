<script>
import anime from "animejs";
import Slide from "./Slide";

export default {
  name: "Slides",
  render(createElement) {
    const slides = [];
    this.slideSets.forEach((slideSet, index) => {
      const slideWrapper =
        index === this.activeIndex
          ? createElement(Slide, {
              key: this.randomString(),
              style: this.styles,
              props: {
                options: this.options,
                slideSet: slideSet,
                index: index,
                activeIndex: this.activeIndex,
                numberOfElementsPerSlide: this.numberOfElementsPerSlide,
              },
              on: {
                slideDimensions: this.setNewHeight,
              },
            })
          : null;

      const transition = createElement(
        "transition-group",
        { css: "false", on: { enter: this.animateIn, leave: this.animateOut } },
        [slideWrapper]
      );
      slides.push(transition);
    });

    return createElement(
      "div",
      { style: { transition: "height 300ms", height: this.height } },
      slides
    );
  },
  components: {
    Slide,
  },
  props: {
    slideSets: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    numberOfElementsPerSlide: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      height: "auto",
    };
  },
  computed: {
    activeSlide() {
      return this.slideSets[this.activeIndex];
    },
    activeSlideHeight() {
      return this.$refs[`slide-${this.activeIndex}`];
    },
    styles() {
      const styles = { display: "hidden" };

      if (this.options.endless) {
        styles.marginRight = this.options.gap + "px";
      }

      return styles;
    },
  },
  methods: {
    animateIn(el, done) {
      if (this.options.transition === "fade") {
        this.fadeAnimation(el, done, "in");
      } else {
        done();
      }
    },
    animateOut(el, done) {
      if (this.options.transition === "fade") {
        this.fadeAnimation(el, done, "out");
      } else {
        done();
      }
    },

    fadeAnimation(el, done, direction) {
      this.$emit("animating", true);

      const startingOpacity = direction === "in" ? 0 : 1;
      const destinationOpacity = direction === "in" ? 1 : 0;

      anime.set(el, { opacity: startingOpacity });

      anime({
        targets: el,
        opacity: destinationOpacity,
        duration: this.options.animationDuration,
        easing: this.options.animationEasing,
        complete: () => {
          this.$emit("animating", false);
          done();
        },
      });
    },

    randomString() {
      return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      );
    },

    setNewHeight(height) {
      if (!this.options.endless) {
        this.height = height + "px";
      }
    },
    // /**
    //  * Create component is a recursive function that takes a DOM structure
    //  * and a rendering function (of vue.js) and returns a Vuejs component.
    //  */
    // createComponent: (dNode, h, self) => {
    //   // Handle empty elements and return empty array in case the dNode passed in is empty
    //   if (!dNode) {
    //     return [];
    //   }
    //   // if the el is array call createComponent for all nodes
    //   if (typeof dNode === "array") {
    //     return dNode.map((child) => self.createComponent(child, h, self));
    //   }
    //   let children = [];
    //   if (dNode.children && dNode.children.length > 0) {
    //     for (let i = 0; i < dNode.children.length; i++) {
    //       const c = dNode.children[i];
    //       if (typeof c === "string") {
    //         children.push(c);
    //       } else {
    //         children.push(c);
    //       }
    //     }
    //   }
    //   // Need to clone
    //   const properties = dNode.properties ? JSON.parse(JSON.stringify(dNode.properties)) : {};
    //   return h(dNode.tagName, properties, children.length > 0 ? children : dNode.textNode);
    // },
    // randomString() {
    //   return (
    //     Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    //   );
    // },
    // isNext(index) {
    //   return index === this.activeIndex + 1;
    // },
  },
  // watch: {
  //   activeIndex(index) {
  //     this.activeIndex = index;

  //     if (this.options.endless) {
  //       this.animating = true;
  //       anime({
  //         targets: this.$refs.slides.$el,
  //         opacity: 1,
  //         duration: this.options.animationDuration,
  //         translateX: -this.totalOffsetWidth,
  //         easing: "easeOutExpo",
  //         complete: () => {
  //           this.animating = false;
  //           if (this.options.loop) {
  //             if (index + 1 > this.numberOfPages) {
  //               this.$refs.sliderframe.setIndex(0);
  //               anime.set(this.$refs.slides.$el, { translateX: 0 });
  //             }
  //           }
  //         },
  //       });
  //     }
  //   },
  // },
};
</script>
