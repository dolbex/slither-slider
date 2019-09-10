<template>
  <div id="app">
    <slither-slider :config="{dots:false, fullscreen:false, lazy:true}">
      <div :style="{backgroundColor: 'red', height:'500px'}">Yeah <img
          data-src="https://picsum.photos/id/237/200/300"
          class="slither-lazy"
        ></div>
      <div>Yo <img
          data-src="https://picsum.photos/id/237/200/300"
          class="slither-lazy"
        ></div>
      <div>Boo</div>
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
