<template>
  <div
    id="app"
    class="demo"
  >
    <div>
      <h1>Basic slider</h1>
      <slither-slider>
        <div>
          <h2>Slide 1 </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia tellus, vitae commodo ligula ultrices vitae. Duis rhoncus, lectus eget sollicitudin pretium, enim libero egestas mi, ut bibendum lacus lectus in sapien. Vivamus ullamcorper lorem ac vestibulum tempor. Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec pharetra.</p>
          <p>Quisque interdum a ipsum ac ultrices. Quisque vehicula ac enim vel sollicitudin. Morbi commodo, arcu eu facilisis congue, nibh magna aliquet nunc, quis auctor metus nisl et ligula. Nullam ac nisi ac felis pretium hendrerit. Proin vel ante ac turpis aliquam sagittis. Vivamus felis lectus, ultrices fermentum feugiat vitae, blandit sed urna. Duis consequat nibh dui, et aliquet ante mollis a. Integer maximus vel tortor quis consectetur. Cras cursus tempor porttitor. Quisque in ullamcorper turpis, vel tincidunt felis. Quisque ut nulla ultrices, iaculis dui a, posuere turpis. Donec vehicula tortor ipsum, non molestie felis commodo non. Vestibulum commodo accumsan tellus vitae egestas. Maecenas semper, tortor eget posuere blandit, velit diam dictum elit, vitae fermentum orci mauris quis diam. Quisque elementum ut ante ac hendrerit. Fusce ornare ante sit amet tristique ultricies.</p>
        </div>
        <div>
          <h2>Slide 2 </h2>
          <p>Vestibulum vitae leo suscipit, consectetur magna vel, suscipit nulla. Aenean mattis risus eget mauris auctor, et cursus odio porttitor. Quisque vel accumsan augue. Vivamus sodales quis dui vel placerat. In a nibh sed mi consequat feugiat. Fusce aliquet dui vel congue tincidunt. Suspendisse id ex consequat, luctus leo eu, malesuada augue. Praesent vestibulum, turpis ut lobortis faucibus, libero mauris laoreet sem, eu commodo tellus dui ac ante. Donec condimentum commodo tortor, in iaculis nisl egestas sed. Pellentesque vel semper lectus, vel posuere sapien. In vitae dui a tortor cursus finibus. Curabitur volutpat commodo diam vehicula pharetra. Vestibulum sollicitudin enim vitae ante rutrum faucibus.</p>
          <p>Donec massa metus, bibendum nec sapien vel, volutpat semper neque. Donec lacus ligula, scelerisque non ullamcorper non, blandit vitae nulla. Mauris rutrum feugiat condimentum. Donec eu viverra enim. Nulla vulputate ac ligula eget rutrum. Vivamus mollis mauris ipsum, nec placerat dui euismod ac. Praesent at ante magna. Praesent vel rhoncus ipsum, ut blandit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci a mi tempor mollis. Mauris eleifend commodo lectus vel rhoncus. Sed lacinia, tellus a vehicula vehicula, dolor felis aliquet quam, non malesuada ipsum est nec metus. Nam nec enim facilisis, sodales nulla at, interdum mauris. Donec eget ipsum ultricies, vehicula risus porttitor, convallis mauris. Maecenas nulla turpis, faucibus a malesuada sit amet, vulputate eu elit.</p>
        </div>
        <div>
          <h2>Slide 3</h2>
          <p>Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis arcu, ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id pretium quam turpis quis enim. Vivamus efficitur ex nec lectus luctus, ac pretium dui semper. Vestibulum vehicula augue at odio fermentum, eget ultrices leo bibendum. Donec feugiat ex sed gravida consequat. Integer vitae ullamcorper neque, sit amet mattis eros. Donec in ligula ac massa rutrum pretium lacinia eu odio. Maecenas pretium commodo augue, vitae pellentesque velit mollis et. Donec tempus ante in venenatis ultricies.</p>
          <p> Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec pharetra.</p>
        </div>
      </slither-slider>

      <hr>

      <h1>Slider with logical slides and options</h1>
      <slither-slider :options="{dots:true, numberOfSlides:3}">
        <div
          v-for="n in 35"
          :key="n"
        >
          <h2>Slide {{ n }} </h2>
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

      <hr>

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

      <h1>Fullscreen with Offset of -200</h1>
      <slither-slider :options="{fullscreen: true, fullscreenOffset: -200}">
        <div :style="{backgroundColor: 'blue', height:'100%'}">
          <h2>Slide 1 </h2>
        </div>
        <div :style="{backgroundColor: 'green', height:'100%'}">
          <h2>Slide 2 </h2>
        </div>
        <div :style="{backgroundColor: 'yellow', height:'100%'}">
          <h2>Slide 3 </h2>
        </div>
      </slither-slider>

      <h1>Single Slide</h1>
      <slither-slider>
        <div :style="{backgroundColor: 'blue', color: 'white', padding:'20px', height:'50px', width: '500px'}">
          <h2>Slide 1 </h2>
        </div>
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
