<template>
  <div id="app">
    <div>
      <h1>Basic slider</h1>
      <slither-slider>
        <div :style="{backgroundColor: 'red', height:'500px'}">
          <h2>Slide 1 </h2>
        </div>
        <div>
          <h2>Slide 2 </h2>
        </div>
        <div>
          <h2>Slide 3 </h2>
        </div>
      </slither-slider>

      <hr>

      <h1>Slider with logical slides and options</h1>

      <slither-slider :options="{dots:false}">
        <div
          v-for="n in 4"
          :key="n"
        >
          <h2>Slide {{ n + 4 }} </h2>
        </div>
      </slither-slider>

      <hr>

      <h1>Lazy slider</h1>
      <slither-slider :options="{lazy: true, dots: false}">
        <div>
          <h2>Slide 1 </h2>
          <img
            data-src="https://picsum.photos/id/237/200/300"
            class="slither-lazy"
          >
        </div>
        <div>
          <h2>Slide 2 </h2>
          <img
            data-bg-src="https://picsum.photos/id/238/500/500"
            style="width:500px;height:500px;"
            class="slither-lazy"
          >
        </div>
      </slither-slider>

      <h1>Custom Controls</h1>
      <slither-slider :options="{fullscreen: true}">
        <div :style="{backgroundColor: 'blue', height:'100%'}">
          <h2>Slide 1 </h2>
        </div>
        <div :style="{backgroundColor: 'green', height:'100%'}">
          <h2>Slide 2 </h2>
        </div>
        <div :style="{backgroundColor: 'yellow', height:'100%'}">
          <h2>Slide 3 </h2>
        </div>

        <template slot="previous">
          <div>Hey, go back!</div>
        </template>
        <template slot="next">
          <div>Only look forward!</div>
        </template>
      </slither-slider>
    </div>
  </div>
</template>

<script>
import SlitherSlider from './components/SlitherSlider.vue';

export default {
  name: 'App',
  components: {
    SlitherSlider,
  },
};
</script>
