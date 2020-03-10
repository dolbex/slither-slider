import SlitherSlider from "./components/SlitherApp.vue";
import Vue2TouchEvents from "vue2-touch-events";

export default {
  install(Vue) {
    Vue.use(Vue2TouchEvents);
    Vue.component("slither-slider", SlitherSlider);
  }
};
