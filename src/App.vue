<template>
  <slider :config="{dots:false, fullscreen:true}">
    <div :style="{backgroundColor: 'red', height:'10000px'}">Yeah</div>
    <div>Yo</div>
    <div>Boo</div>
  </slider>
</template>

<script>
import Slider from './components/Slider.vue';

export default {
  name: 'App',
  components: {
    Slider,
  },
};
</script>
