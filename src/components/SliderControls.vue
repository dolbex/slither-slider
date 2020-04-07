<template>
  <div class="slither-slider-controls" :class="options.controlsWrapperClass" v-if="showControls">
    <div @click="$emit('prev')">
      <slot name="previous">
        <button class="slider-direction slider-direction--prev">
          &laquo;
        </button>
      </slot>
    </div>
    <div @click="$emit('next')">
      <slot name="next">
        <button class="slider-direction slider-direction--next">
          &raquo;
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderControls",
  props: {
    showControls: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.slider-direction {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5000;

  border: 1px solid #718096;
  border-radius: 9999px;
  height: 50px;
  width: 50px;
  font-size: 1em;
  opacity: 0.75;

  transition: opacity 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
}

.slider-direction--prev {
  left: 0.5em;
}

.slider-direction--next {
  right: 0.5em;
}
</style>
