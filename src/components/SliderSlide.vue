<template>
  <transition
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div v-show="active || options.endless || !loaded" class="slider-slide" :style="slideStyles">
      <slide-renderer
        v-for="slideData in filteredGroup"
        :key="slideData.key"
        :slide="slideData.slide"
        :options="options"
        @contentChanged="$emit('contentChanged')"
      ></slide-renderer>
    </div>
  </transition>
</template>

<script>
import SlideRenderer from "./SlideRenderer";
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Slide",
  components: {
    SlideRenderer
  },
  props: {
    group: {
      type: Array,
      required: true
    },
    loaded: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {
          lazy: false
        };
      }
    }
  },
  data() {
    return {
      active: false,
      transition: "",
      direction: "right"
    };
  },
  computed: {
    filteredGroup() {
      const filteredGroup = this.group.filter(slide => {
        return typeof slide.tag !== "undefined";
      });
      const slideData = [];
      filteredGroup.forEach(slideInGroup => {
        slideData.push({
          slide: slideInGroup,
          key: this.randomString()
        });
      });

      return slideData;
    },

    slideStyles() {
      if (this.options.endless) {
        return {
          position: "relative"
        };
      } else {
        return {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },

  methods: {
    // Deactivate and hide the slide and
    // also activate the correct transition.
    hide(direction) {
      this.direction = direction;
      this.active = false;
    },
    // Activate and show the slide and
    // also activate the correct transition.
    show(direction) {
      this.direction = direction;
      this.checkLazy();
      this.active = true;
    },

    beforeEnter(el) {
      let translateX = "-100%";
      if (this.direction === "left") {
        translateX = "100%";
      }

      anime.set(el, { translateX: translateX, opacity: 1 });
    },

    enter(el) {
      anime({
        targets: el,
        opacity: 1,
        duration: 750,
        translateX: 0,
        easing: "easeOutExpo"
      });
    },

    beforeLeave(el) {
      anime.set(el, { translateX: 0, opacity: this.options.endless ? 1 : 0 });
    },

    leave(el, done) {
      let translateX = "-100%";
      if (this.direction === "right") {
        translateX = "100%";
      }
      anime({
        targets: el,
        opacity: this.options.endless ? 1 : 0,
        duration: 750,
        translateX: translateX,
        easing: "easeOutExpo",
        complete: () => {
          done();
        }
      });
    },

    checkLazy() {
      if (this.options.lazy) {
        const lazyImages = this.$el.getElementsByClassName("slither-lazy");
        for (let image of lazyImages) {
          if ("IntersectionObserver" in window) {
            const lazyImageObserver = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  this.setImage(image);
                  lazyImageObserver.unobserve(image);
                }
              });
            });

            lazyImageObserver.observe(image);
          } else {
            this.setImage(image);
          }
        }
      }
    },

    setImage(image) {
      if (image.hasAttribute("data-src")) {
        const imageSrc = image.getAttribute("data-src");
        image.setAttribute("src", imageSrc);
        image.removeAttribute("data-src");
      }
      if (image.hasAttribute("data-bg-src")) {
        const imageSrc = image.getAttribute("data-bg-src");
        image.style.backgroundImage = `url('${imageSrc}')`;
        image.removeAttribute("data-bg-src");
      }
    },

    randomString() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      );
    }
  }
};
</script>
