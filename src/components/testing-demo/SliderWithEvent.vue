<template>
  <div>
    <div class="headline-1">Slider Events</div>
    <slither-slider
      :options="{
        autoplay: true
      }"
      @changed="setNewSlideIndex"
    >
      <div class="slider-card">
        <div class="headline-2">Slide 1</div>
        <p>Check out the current slide index below</p>
      </div>
      <div>
        <div class="slider-card">
          <div class="headline-2">Slide 2</div>
          <p>Check out the current slide index below</p>
        </div>
      </div>
      <div class="slider-card">
        <div class="headline-2">Slide 3</div>
        <p>Check out the current slide index below</p>
      </div>
    </slither-slider>

    <div>The current slide index is {{ exampleEventIndex }}</div>
  </div>
</template>

<script>
import SlitherSlider from "../SlitherApp.vue";

export default {
  components: {
    SlitherSlider
  },

  data() {
    return {
      exampleEventIndex: 0
    };
  },

  methods: {
    setNewSlideIndex(newIndex) {
      this.exampleEventIndex = newIndex;
    }
  }
};
</script>
