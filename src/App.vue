<template>
  <div id="app">
    <slither-slider :options="{dots:false, fullscreen:false, lazy:true, numberOfSlides:2}">
      <div :style="{backgroundColor: 'red', height:'500px'}">
        <h1>Slide 1 </h1>
        <img
          data-src="https://picsum.photos/id/237/200/300"
          class="slither-lazy"
        >
      </div>
      <div>
        <h1>Slide 2 </h1>
        <img
          data-bg-src="https://picsum.photos/id/238/500/500"
          style="width:500px;height:500px;"
          class="slither-lazy"
        >
      </div>
      <div>
        <h1>Slide 3 </h1>
      </div>

      <template slot="previous">
        <div>WTF</div>
      </template>
      <template slot="next">
        <div>After</div>
      </template>
    </slither-slider>
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
