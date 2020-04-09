<template>
  <div class="slither-slider-controls" :class="options.controlsWrapperClass" v-if="showControls">
    <div @click="$emit('prev')">
      <template v-if="previous"><vnodes :vnodes="previous"></vnodes></template>
      <template v-else>
        <button class="slider-direction slider-direction--prev">
          &laquo;
        </button>
      </template>
    </div>
    <div @click="$emit('next')">
      <template v-html="next"></template>
      <template v-if="next"><vnodes :vnodes="next"></vnodes></template>
      <template v-else>
        <button class="slider-direction slider-direction--next">
          &raquo;
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderControls",
  components: {
    Vnodes: {
      functional: true,
      render: (h, ctx) => {
        console.log(ctx);
        return ctx.props.vnodes;
      },
      props: {
        vnodes: {
          type: Array,
          required: true,
        },
      },
    },
  },
  props: {
    showControls: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      required: true,
    },
    next: {
      type: Array,
      default: null,
    },
    previous: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.slither-slider-controls {
  display: flex;
}

.slider-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9da6b4;
  background-color: transparent;
  border-radius: 9999px;
  height: 50px;
  width: 50px;
  font-size: 1.2em;
  opacity: 0.5;
  margin: 4px;

  transition: opacity 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
}
</style>
