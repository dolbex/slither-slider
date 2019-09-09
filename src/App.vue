<template>
  <div id="app">
    <slither-slider :config="{dots:false, fullscreen:true, lazy:true}">
      <div :style="{backgroundColor: 'red', height:'10000px'}">Yeah</div>
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
