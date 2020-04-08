<template>
  <ol class="slither-slider-dots" v-if="numberOfDots > 1 && options.dots">
    <li
      v-for="n in numberOfDots"
      :key="n"
      class="slither-slider-dot"
      :class="dotClass(n)"
      @click="$emit('goToIndex', n - 1)"
    >
      {{ n }}
    </li>
  </ol>
</template>

<script>
export default {
  name: "SliderDots",
  props: {
    options: {
      type: Object,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    numberOfSlides: {
      type: Number,
      required: true,
    },
    numberOfPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    numberOfDots() {
      if (this.options.endless) {
        return this.numberOfSlides;
      }
      return this.numberOfPages;
    },
  },
  methods: {
    dotClass(dotIndex) {
      let classes = { "active-slide": this.activeIndex + 1 === dotIndex };
      if (this.options.animatedDots) {
        const dotDistance = this.activeIndex + 1 - dotIndex;
        if (this.options.dotLimit) {
          classes["large-dot"] = dotDistance === 0 || dotDistance === 1 || dotDistance === 2;
          classes["medium-dot"] = dotDistance === -1 || dotDistance === 2;
          classes["small-dot"] = dotDistance === -2 || dotDistance === -3;
          classes["hidden-dot"] = dotDistance > 4 || dotDistance < -2;
          // classes[dotDistance] = true;
        } else {
          classes["large-dot"] = dotDistance === 0;
          classes["medium-dot"] = dotDistance === -1 || dotDistance === 1;
          classes["small-dot"] = dotDistance <= -2 || dotDistance >= 2;
        }
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.limit-dot-width {
  width: 50px;
  overflow: hidden;
}

.slither-slider-dots {
  position: absolute;
  right: 0;
  bottom: -2em;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 0;
}

.slither-slider-dot {
  width: 8px;
  height: 8px;
  font-size: 0.1em;
  background-color: #9b9b9b;
  color: #9b9b9b;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 0.75rem;
  transition: all 1s;
  cursor: pointer;

  &.active-slide {
    background-color: #4a4a4a;
    color: #4a4a4a;
  }

  &.large-dot {
    transform: scale(1.7);
  }
  &.medium-dot {
    transform: scale(1.2);
  }
  &.small-dot {
    transform: scale(0.7);
  }
  &.hidden-dot {
    display: none;
  }
}
</style>
