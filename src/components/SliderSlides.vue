<template>
  <div class="slider-slides">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Slides',
};
</script>

<style lang="scss">
.slider-slides {
  position: relative;
}
</style>
