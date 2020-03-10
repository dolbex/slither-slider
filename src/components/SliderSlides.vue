<template>
  <div class="slider-slides">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Slides",
  props: {
    options: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.slider-slides {
  position: relative;
}
</style>
