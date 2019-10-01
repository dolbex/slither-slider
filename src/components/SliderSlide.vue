<template>
  <transition :name="transition" mode="out-in">
    <div
      v-show="active || !loaded"
      class="slider-slide"
    >
      <slide-renderer
        :slide="slide"
        :options="options"
        v-if="typeof slide.tag !== 'undefined'"
      ></slide-renderer>
    </div>
  </transition>
</template>

<script>
import SlideRenderer from './SlideRenderer';

export default {
  name: 'Slide',
  components: {
    SlideRenderer
  },
  props: {
    slide: {
      type: Object,
      required: true
    },
    loaded: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default () {
        return {
          lazy: false
        }
      }
    }
  },
  data () {
    return {
      active: false,
      transition: '',
    };
  },
  mounted () {
    // console.log(this.slide)
  },
  methods: {
    // Deactivate and hide the slide and
    // also activate the correct transition.
    hide (direction) {
      this.transition = `slider-slide--transition-${direction}`;
      this.active = false;
    },
    // Activate and show the slide and
    // also activate the correct transition.
    show (direction) {
      this.transition = `slider-slide--transition-${direction}`;
      this.checkLazy();
      this.active = true;
    },

    checkLazy () {
      if (this.options.lazy) {
        const lazyImages = this.$el.getElementsByClassName("slither-lazy");
        for (let image of lazyImages) {
          if ('IntersectionObserver' in window) {
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

    setImage (image) {
      if (image.hasAttribute('data-src')) {
        const imageSrc = image.getAttribute('data-src')
        image.setAttribute('src', imageSrc)
        image.removeAttribute('data-src')
      }
      if (image.hasAttribute('data-bg-src')) {
        const imageSrc = image.getAttribute('data-bg-src')
        image.style.backgroundImage = `url('${imageSrc}')`
        image.removeAttribute('data-bg-src')
      }
    }
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slider-slide--transition-left-enter-active,
.slider-slide--transition-right-enter-active,
.slider-slide--transition-left-leave-active,
.slider-slide--transition-right-leave-active {
  transition-duration: 750ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slider-slide--transition-left-leave-active,
.slider-slide--transition-right-leave-active {
  position: absolute;
  // transition-duration: 0ms;
}

.fade {
  .slider-slide--transition-left-enter,
  .slider-slide--transition-right-leave-active {
    opacity: 0;
    transform: translate(0em, 0);
  }

  .slider-slide--transition-left-leave-active,
  .slider-slide--transition-right-enter {
    opacity: 0;
    transform: translate(-0em, 0);
  }
}

.slide {
  .slider-slide--transition-left-enter,
  .slider-slide--transition-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
    top:0;
  }

  .slider-slide--transition-left-leave-active,
  .slider-slide--transition-right-enter {
    opacity: 0;
    transform: translate(-100%, 0);
    top:0;
  }
}
</style>
