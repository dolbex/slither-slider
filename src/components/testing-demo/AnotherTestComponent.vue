<template>
  <div style="background-color: white; border-radius: 5px;" :style="cardStyles">
    <img
      :src="`https://picsum.photos/id/23${number}/${cardWidth}/200`"
      style="width: 100%; height: 200px;"
    />
    <div style="padding: 30px;">
      <div class="headline-2" :style="{ color: titleColor }">Title of {{ number }}</div>
      <p>
        Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis arcu,
        ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id pretium
        quam turpis quis enim.
      </p>
      <button @click="titleColor = 'blue'">Title Blue</button>
      <button @click="titleColor = 'red'">Title Red</button>
      <button @click="titleColor = 'orange'">Title Orange</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnotherTestComponent",
  props: {
    number: {
      type: Number,
      required: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      titleColor: "#000000"
    };
  },

  computed: {
    cardWidth() {
      if (this.fullWidth) {
        return 1000;
      }
      return 250;
    },
    cardStyles() {
      if (this.fullWidth) {
        return { width: "100%" };
      }
      return { width: "250px" };
    }
  }
};
</script>
