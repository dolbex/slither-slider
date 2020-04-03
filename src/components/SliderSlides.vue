<template>
  <div class="slider-slides" :style="slidesStyles">
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
  },
  computed: {
    slidesStyles() {
      let styles = {
        position: "relative"
      };

      if (this.options.endless) {
        styles.display = "flex";
      }

      return styles;
    }
  }
};
</script>
