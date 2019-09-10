<template>
  <transition :name="transition">
    <div
      v-show="active"
      class="slider-slide"
    >
      <slot />

    </div>
  </transition>
</template>

<script>
export default {
  name: 'Slide',
  props: {
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
      }
    }
  },
};
</script>

<style lang="scss">
.slider-slide--transition-left-enter-active,
.slider-slide--transition-left-leave-active,
.slider-slide--transition-right-enter-active,
.slider-slide--transition-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slider-slide--transition-left-leave-active,
.slider-slide--transition-right-leave-active {
  top: 0;
  position: absolute;
}

.slider-slide--transition-left-enter,
.slider-slide--transition-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slider-slide--transition-left-leave-active,
.slider-slide--transition-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
