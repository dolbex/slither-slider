<template>
  <div>
    <div style="display:flex; margin-bottom:20px; margin-left:20px;">
      <button @click="changeColor('#003D59')" style="margin-right:10px;">Blue</button>
      <button @click="changeColor('#414A4F')" style="margin-right:10px;">Grey</button>
      <button @click="changeColor('#FB9334')">Orange</button>
    </div>

    <slither-slider
      ref="slider"
      :options="{
        overflowHiddenPadding: { top: 0, left: 20, right: 20, bottom: 20 }
      }"
    >
      <div
        class="slider-card"
        :style="{ backgroundColor: color, color: 'white', padding: '25px' }"
        v-for="slide in activeColor"
        :key="slide.title"
      >
        <div class="headline-2">{{ slide.title }}</div>
        <div>{{ slide.description }}</div>
      </div>
    </slither-slider>
  </div>
</template>

<script>
import SlitherSlider from "../SlitherApp.vue";

export default {
  name: "DynamicSlides",

  components: {
    SlitherSlider
  },

  data() {
    return {
      color: "#003D59",
      colorSlides: {
        "#003D59": [
          {
            title: "Slide 1",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 2",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 3",
            description: this.getRandomParagraph()
          }
        ],
        "#414A4F": [
          {
            title: "Slide 4",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 5",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 6",
            description: this.getRandomParagraph()
          }
        ],
        "#FB9334": [
          {
            title: "Slide 4",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 5",
            description: this.getRandomParagraph()
          },
          {
            title: "Slide 6",
            description: this.getRandomParagraph()
          }
        ]
      }
    };
  },

  computed: {
    activeColor() {
      return this.colorSlides[this.color];
    }
  },

  methods: {
    changeColor(color) {
      this.color = color;
      this.$nextTick(() => {
        this.$refs.slider.reload();
      });
    },

    getRandomParagraph() {
      const paragraphs = [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor eu lorem commodo interdum. Praesent ut dictum neque. Duis bibendum, lorem bibendum congue volutpat, felis risus consectetur ipsum, eget varius lacus lacus id massa. Fusce suscipit leo eget lorem porta, nec tempor tellus cursus. Curabitur pellentesque vitae nisi finibus gravida. Praesent id lectus ac lacus tristique consectetur. Integer hendrerit odio vel erat varius, et fermentum arcu dignissim.`,
        `Sed ac lacinia mi. Aenean mollis aliquam tortor, eget vulputate eros. Nulla luctus ullamcorper tristique. Curabitur ex magna, tincidunt et ante a, sodales vestibulum mi. Proin luctus turpis vel tempus rutrum. Curabitur nec euismod nibh. Suspendisse id ante odio. Cras euismod lacus vel venenatis bibendum. Nulla sit amet semper est.`,
        `Donec blandit nibh vitae consequat rhoncus. Phasellus a nibh a leo tempor pellentesque nec in ex. Quisque feugiat interdum nulla. Maecenas ac justo aliquam, feugiat ipsum a, sodales leo. Ut fermentum sodales lacus at ullamcorper. Fusce quis tellus eget ipsum dignissim euismod. Duis dignissim nisi mi, ac luctus metus viverra non. Mauris velit nibh, porttitor id felis at, fermentum maximus erat. Donec eget nisi ultrices nisl eleifend cursus. Cras nec sem ut lectus egestas tincidunt. Curabitur laoreet eget erat gravida congue. In vehicula dolor nec metus tempor aliquet.`,
        `Ut vestibulum, eros eget vestibulum efficitur, nunc sem sagittis nisl, in dapibus lectus ex nec sem. Curabitur eleifend luctus purus, sed sodales odio luctus ac. Pellentesque egestas sed neque vel vehicula. Vivamus aliquet lectus et massa luctus laoreet. Nulla pellentesque purus in metus posuere molestie. Sed porta, arcu nec vehicula lobortis, eros eros feugiat arcu, vel venenatis sem nisi vitae velit. Mauris ligula velit, varius non diam in, fermentum viverra lorem. Donec vel sodales augue. Aliquam tristique nunc risus. In malesuada non urna a ultricies. Aliquam egestas commodo nisl, at semper libero efficitur ac. Praesent enim lorem, hendrerit eget pellentesque quis, vestibulum non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nisi purus, efficitur et neque ac, condimentum accumsan libero. Vestibulum consectetur nibh non auctor ultrices. Integer sodales ligula non urna molestie, et feugiat quam eleifend.`,
        `Aliquam iaculis eros sit amet purus rutrum, non laoreet mi scelerisque. Pellentesque nibh purus, iaculis in nisl a, consectetur molestie nibh. Mauris vitae lacus finibus, euismod dolor a, finibus neque. Morbi pharetra odio ut laoreet varius. Proin eu mattis arcu. Pellentesque commodo nulla odio, quis maximus sem laoreet sed. Vestibulum viverra aliquam enim, a porta justo venenatis ac. Etiam semper sem id hendrerit egestas. Donec tincidunt ultrices risus et sagittis. Fusce aliquet eu odio ac ullamcorper. Praesent at auctor erat.`,
        `Maecenas vel porttitor dui. Vivamus feugiat tellus ac sapien dignissim volutpat. Praesent feugiat arcu augue, aliquam dapibus enim eleifend quis. Sed ultricies aliquam lobortis. Donec id nunc pulvinar diam porta efficitur. Donec risus lacus, malesuada vitae orci at, tincidunt pulvinar neque. Nam posuere suscipit mauris in venenatis. Nullam porta enim nisl, at lacinia tortor auctor a. Curabitur tempor enim nec finibus tristique. Cras auctor egestas posuere. Proin at est dapibus, imperdiet sem nec, bibendum libero. Ut ultricies, elit viverra rhoncus hendrerit, odio augue faucibus leo, a elementum lectus urna euismod neque.`,
        `Vestibulum tristique turpis vel enim mollis, a vehicula neque dignissim. Duis ornare, nibh feugiat consequat mattis, odio dui iaculis nibh, et hendrerit metus nisi ac nibh. Etiam fringilla purus nec tincidunt mollis. Donec finibus neque a aliquam sollicitudin. Integer venenatis, dolor a posuere egestas, est neque sollicitudin lacus, ut feugiat erat neque vel augue. Aenean ac dui vel odio placerat rhoncus. Aliquam lectus libero, feugiat non turpis eu, ultrices dapibus leo.`,
        `Ut semper justo fringilla, tempor felis et, eleifend lorem. In in porttitor ex. Cras vel lorem ut diam congue laoreet sed egestas augue. Nam bibendum mi at diam accumsan, eget ultrices enim ornare. Nunc luctus nisl quis est pellentesque fringilla. Cras semper elementum metus, quis porttitor quam gravida a. Nulla aliquam laoreet enim. Integer scelerisque arcu lorem, sed mattis libero venenatis non. Proin sit amet sagittis ligula, nec ornare lorem. Nulla elementum commodo maximus. Ut id nulla et nisl aliquam consequat. Curabitur mollis tempor diam, ornare feugiat ex egestas vel. Nunc volutpat odio non odio luctus ornare. Sed maximus suscipit mi, dignissim cursus ante eleifend in. Etiam massa elit, volutpat sit amet luctus vel, dignissim vel leo.`,
        `Sed lectus est, lobortis quis congue eu, iaculis non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet rhoncus justo, ut ullamcorper velit. Ut non ligula et erat gravida suscipit quis sit amet nunc. Nunc sagittis massa at dui sagittis feugiat. Proin posuere tortor pretium ipsum consectetur mollis. Quisque imperdiet porttitor scelerisque. Nullam quis pulvinar tellus, ac fringilla dolor. Donec euismod nisi risus, lacinia consequat quam condimentum in.`,
        `Ut lacinia ullamcorper faucibus. Etiam euismod pretium dui, sit amet lacinia ante lacinia vitae. Donec nibh metus, vestibulum sed iaculis at, finibus sed orci. Donec ac sem et purus ultrices sagittis. Nulla rutrum felis id feugiat blandit. Sed ac lectus maximus, posuere diam sed, elementum enim. Proin feugiat dui at fringilla euismod. Donec ullamcorper massa et placerat pharetra. Curabitur hendrerit est ultrices odio sodales mattis. Pellentesque consequat mi eu nulla porttitor consequat. Etiam posuere, purus eget rhoncus rhoncus, lorem felis venenatis mauris, a vehicula nulla velit sed nulla. In hac habitasse platea dictumst. Etiam eu consequat odio. In fringilla semper sapien molestie scelerisque. Morbi convallis, elit a pellentesque cursus, neque metus porta quam, vitae malesuada dui mi sit amet risus.`
      ];
      const randomParagraph = Math.floor(Math.random() * Math.floor(9));
      return paragraphs[randomParagraph];
    }
  }
};
</script>
