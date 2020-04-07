<template>
  <div id="app" class="demo">
    <div>
      <!-- <div class="headline-1">Basic slider</div>
      <slither-slider>
        <div class="slider-card">
          <div class="headline-2">Slide 1</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia tellus,
            vitae commodo ligula ultrices vitae. Duis rhoncus, lectus eget sollicitudin pretium,
            enim libero egestas mi, ut bibendum lacus lectus in sapien. Vivamus ullamcorper lorem ac
            vestibulum tempor. Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla
            pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies.
            Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut
            blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia
            sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue.
            Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed
            ex nec pharetra.
          </p>
          <p>
            Quisque interdum a ipsum ac ultrices. Quisque vehicula ac enim vel sollicitudin. Morbi
            commodo, arcu eu facilisis congue, nibh magna aliquet nunc, quis auctor metus nisl et
            ligula. Nullam ac nisi ac felis pretium hendrerit. Proin vel ante ac turpis aliquam
            sagittis. Vivamus felis lectus, ultrices fermentum feugiat vitae, blandit sed urna. Duis
            consequat nibh dui, et aliquet ante mollis a. Integer maximus vel tortor quis
            consectetur. Cras cursus tempor porttitor. Quisque in ullamcorper turpis, vel tincidunt
            felis. Quisque ut nulla ultrices, iaculis dui a, posuere turpis. Donec vehicula tortor
            ipsum, non molestie felis commodo non. Vestibulum commodo accumsan tellus vitae egestas.
            Maecenas semper, tortor eget posuere blandit, velit diam dictum elit, vitae fermentum
            orci mauris quis diam. Quisque elementum ut ante ac hendrerit. Fusce ornare ante sit
            amet tristique ultricies.
          </p>
        </div>
        <div class="slider-card">
          <div class="headline-2">Slide 2</div>
          <p>
            Vestibulum vitae leo suscipit, consectetur magna vel, suscipit nulla. Aenean mattis
            risus eget mauris auctor, et cursus odio porttitor. Quisque vel accumsan augue. Vivamus
            sodales quis dui vel placerat. In a nibh sed mi consequat feugiat. Fusce aliquet dui vel
            congue tincidunt. Suspendisse id ex consequat, luctus leo eu, malesuada augue. Praesent
            vestibulum, turpis ut lobortis faucibus, libero mauris laoreet sem, eu commodo tellus
            dui ac ante. Donec condimentum commodo tortor, in iaculis nisl egestas sed. Pellentesque
            vel semper lectus, vel posuere sapien. In vitae dui a tortor cursus finibus. Curabitur
            volutpat commodo diam vehicula pharetra. Vestibulum sollicitudin enim vitae ante rutrum
            faucibus.
          </p>
          <p>
            Donec massa metus, bibendum nec sapien vel, volutpat semper neque. Donec lacus ligula,
            scelerisque non ullamcorper non, blandit vitae nulla. Mauris rutrum feugiat condimentum.
            Donec eu viverra enim. Nulla vulputate ac ligula eget rutrum. Vivamus mollis mauris
            ipsum, nec placerat dui euismod ac. Praesent at ante magna. Praesent vel rhoncus ipsum,
            ut blandit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci a
            mi tempor mollis. Mauris eleifend commodo lectus vel rhoncus. Sed lacinia, tellus a
            vehicula vehicula, dolor felis aliquet quam, non malesuada ipsum est nec metus. Nam nec
            enim facilisis, sodales nulla at, interdum mauris. Donec eget ipsum ultricies, vehicula
            risus porttitor, convallis mauris. Maecenas nulla turpis, faucibus a malesuada sit amet,
            vulputate eu elit.
          </p>
        </div>
        <div class="slider-card">
          <div class="headline-2">Slide 3</div>
          <p>
            Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis
            arcu, ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id
            pretium quam turpis quis enim. Vivamus efficitur ex nec lectus luctus, ac pretium dui
            semper. Vestibulum vehicula augue at odio fermentum, eget ultrices leo bibendum. Donec
            feugiat ex sed gravida consequat. Integer vitae ullamcorper neque, sit amet mattis eros.
            Donec in ligula ac massa rutrum pretium lacinia eu odio. Maecenas pretium commodo augue,
            vitae pellentesque velit mollis et. Donec tempus ante in venenatis ultricies.
          </p>
          <p>
            Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra
            vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas
            feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus.
            Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac
            nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna
            neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec
            pharetra.
          </p>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Autoplay Slider</div>
      <slither-slider :options="{ autoplay: true, secondsOnSlide: 5 }">
        <div class="slider-card">
          <div class="headline-2">Slide 1</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia tellus,
            vitae commodo ligula ultrices vitae. Duis rhoncus, lectus eget sollicitudin pretium,
            enim libero egestas mi, ut bibendum lacus lectus in sapien. Vivamus ullamcorper lorem ac
            vestibulum tempor. Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla
            pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies.
            Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut
            blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia
            sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue.
            Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed
            ex nec pharetra.
          </p>
          <p>
            Quisque interdum a ipsum ac ultrices. Quisque vehicula ac enim vel sollicitudin. Morbi
            commodo, arcu eu facilisis congue, nibh magna aliquet nunc, quis auctor metus nisl et
            ligula. Nullam ac nisi ac felis pretium hendrerit. Proin vel ante ac turpis aliquam
            sagittis. Vivamus felis lectus, ultrices fermentum feugiat vitae, blandit sed urna. Duis
            consequat nibh dui, et aliquet ante mollis a. Integer maximus vel tortor quis
            consectetur. Cras cursus tempor porttitor. Quisque in ullamcorper turpis, vel tincidunt
            felis. Quisque ut nulla ultrices, iaculis dui a, posuere turpis. Donec vehicula tortor
            ipsum, non molestie felis commodo non. Vestibulum commodo accumsan tellus vitae egestas.
            Maecenas semper, tortor eget posuere blandit, velit diam dictum elit, vitae fermentum
            orci mauris quis diam. Quisque elementum ut ante ac hendrerit. Fusce ornare ante sit
            amet tristique ultricies.
          </p>
        </div>
        <div class="slider-card">
          <div class="headline-2">Slide 2</div>
          <p>
            Vestibulum vitae leo suscipit, consectetur magna vel, suscipit nulla. Aenean mattis
            risus eget mauris auctor, et cursus odio porttitor. Quisque vel accumsan augue. Vivamus
            sodales quis dui vel placerat. In a nibh sed mi consequat feugiat. Fusce aliquet dui vel
            congue tincidunt. Suspendisse id ex consequat, luctus leo eu, malesuada augue. Praesent
            vestibulum, turpis ut lobortis faucibus, libero mauris laoreet sem, eu commodo tellus
            dui ac ante. Donec condimentum commodo tortor, in iaculis nisl egestas sed. Pellentesque
            vel semper lectus, vel posuere sapien. In vitae dui a tortor cursus finibus. Curabitur
            volutpat commodo diam vehicula pharetra. Vestibulum sollicitudin enim vitae ante rutrum
            faucibus.
          </p>
          <p>
            Donec massa metus, bibendum nec sapien vel, volutpat semper neque. Donec lacus ligula,
            scelerisque non ullamcorper non, blandit vitae nulla. Mauris rutrum feugiat condimentum.
            Donec eu viverra enim. Nulla vulputate ac ligula eget rutrum. Vivamus mollis mauris
            ipsum, nec placerat dui euismod ac. Praesent at ante magna. Praesent vel rhoncus ipsum,
            ut blandit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci a
            mi tempor mollis. Mauris eleifend commodo lectus vel rhoncus. Sed lacinia, tellus a
            vehicula vehicula, dolor felis aliquet quam, non malesuada ipsum est nec metus. Nam nec
            enim facilisis, sodales nulla at, interdum mauris. Donec eget ipsum ultricies, vehicula
            risus porttitor, convallis mauris. Maecenas nulla turpis, faucibus a malesuada sit amet,
            vulputate eu elit.
          </p>
        </div>
        <div class="slider-card">
          <div class="headline-2">Slide 3</div>
          <p>
            Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis
            arcu, ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id
            pretium quam turpis quis enim. Vivamus efficitur ex nec lectus luctus, ac pretium dui
            semper. Vestibulum vehicula augue at odio fermentum, eget ultrices leo bibendum. Donec
            feugiat ex sed gravida consequat. Integer vitae ullamcorper neque, sit amet mattis eros.
            Donec in ligula ac massa rutrum pretium lacinia eu odio. Maecenas pretium commodo augue,
            vitae pellentesque velit mollis et. Donec tempus ante in venenatis ultricies.
          </p>
          <p>
            Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra
            vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas
            feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus.
            Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac
            nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna
            neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec
            pharetra.
          </p>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Slider with multiple items per slide</div>
      <slither-slider :options="{ dots: true, numberOfSlides: 3, slideClass: 'flex-demo-slide' }">
        <div
          v-for="n in 35"
          :key="n"
          class="slider-card"
          style="margin-right: 30px; padding: 30px;"
        >
          <div class="headline-2">Slide {{ n }}</div>
          <p>
            Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra
            vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas
            feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus.
            Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac
            nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna
            neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec
            pharetra.
          </p>
        </div>
      </slither-slider>

      <hr />
-->
      <div class="headline-1">Slider with multiple items per slide / responsive</div>
      <slither-slider
        :options="{
          dots: true,
          numberOfSlides: [
            { number: 1, min: 0 },
            { number: 2, min: 780 },
          ],
          slideClass: 'flex-demo-slide',
        }"
      >
        <div v-for="n in 35" :key="n" class="slider-card" style="padding: 30px;">
          <div class="headline-2">Slide {{ n }}</div>
          <p v-for="(paragraph, key) in getRandomParagraphs(3)" :key="key">{{ paragraph }}</p>
        </div>
      </slither-slider>

      <hr />
      <!--

      <div class="headline-1">Variable Width Endless Slider</div>
      <slither-slider :options="{ dots: true, endless: true, gap: 20 }">
        <div
          v-for="n in 4"
          :key="n"
          :style="{
            backgroundColor: '#434190',
            color: '#fff',
            width: randomWidth(n),
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '6rem',
            fontWeight: 'bold',
            borderRadius: '0.25rem',
          }"
        >
          {{ n }}
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Variable Width Endless Slider (Doesn't Loop)</div>
      <slither-slider :options="{ dots: true, endless: true, gap: 20, loop: false }">
        <div
          v-for="n in 8"
          :key="n"
          :style="{
            backgroundColor: '#E53E3E',
            color: '#fff',
            width: randomWidth(n),
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '6rem',
            fontWeight: 'bold',
            borderRadius: '0.25rem',
          }"
        >
          {{ n }}
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Lazy slider</div>
      <slither-slider :options="{ lazy: true, dots: false }">
        <div>
          <div class="headline-2">Slide 1</div>
          <img
            data-src="https://picsum.photos/id/237/1000/500"
            style="width: 100%;"
            class="slither-lazy"
          />
        </div>
        <div>
          <div class="headline-2">Slide 2</div>
          <img
            data-bg-src="https://picsum.photos/id/238/1000/500"
            style="width: 100%; height: 500px;"
            class="slither-lazy"
          />
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Background Images</div>
      <slither-slider :options="{ dots: false }">
        <div
          style="
            background-image: url('https://picsum.photos/id/450/1200/500');
            background-size: cover;
            background-position: center;
            height: 500px;
            width: 100%;
          "
        ></div>
        <div
          style="
            background-image: url('https://picsum.photos/id/451/1200/500');
            background-size: cover;
            background-position: center;
            height: 500px;
            width: 100%;
          "
        ></div>
      </slither-slider>

      <hr />

      <div class="headline-1">Custom Controls</div>
      <slither-slider
        style="color: #fff;"
        :options="{
          controlsWrapperClass: 'controls-custom',
        }"
      >
        <div
          :style="{
            backgroundColor: '#434190',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '10rem',
            fontWeight: 'bold',
          }"
        >
          <div>Slide 1</div>
        </div>
        <div
          :style="{
            backgroundColor: '#285E61',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '10rem',
            fontWeight: 'bold',
          }"
        >
          <div>Slide 2</div>
        </div>
        <div
          :style="{
            backgroundColor: '#276749',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '10rem',
            fontWeight: 'bold',
          }"
        >
          <div>Slide 3</div>
        </div>

        <template slot="previous">
          <div
            style="
              width: 75px;
              height: 50px;
              background-color: #c53030;
              cursor: pointer;
              border-radius: 5px;
              margin: 8px;
              margin-left: 0;
              padding: 10px;
            "
          >
            Previous
          </div>
        </template>
        <template slot="next">
          <div
            style="
              width: 75px;
              height: 50px;
              background-color: #38a169;
              cursor: pointer;
              border-radius: 5px;
              margin: 8px;
              padding: 10px;
            "
          >
            Next
          </div>
        </template>
      </slither-slider>

      <hr />

      <div class="headline-1">Fullscreen with Offset of -200</div>
      <slither-slider :options="{ fullscreen: true, fullscreenOffset: -200 }">
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#434190',
            height: '100%',
          }"
        >
          <div class="headline-2">Slide 1</div>
        </div>
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#285E61',
            height: '100%',
          }"
        >
          <div class="headline-2">Slide 2</div>
        </div>
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#276749',
            height: '100%',
          }"
        >
          <div class="headline-2">Slide 3</div>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Animated Dots</div>
      <slither-slider :options="{ animatedDots: true }">
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#434190',
            height: '500px',
            width: '100%',
          }"
        >
          <div class="headline-2">Slide 1</div>
        </div>
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#285E61',
            width: '100%',
          }"
        >
          <div class="headline-2">Slide 2</div>
        </div>
        <div
          :style="{
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#276749',
            height: '500px',
            width: '100%',
          }"
        >
          <div class="headline-2">Slide 3</div>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Limit Number of Dots</div>
      <p>
        With dotLimit set to true we prevent a million dots appearing. Here there are 37 slides.
      </p>
      <slither-slider :options="{ animatedDots: true, dotLimit: true }">
        <div v-for="n in 37" :key="n" class="slider-card">
          <div class="headline-2">Slide {{ n }}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia tellus,
            vitae commodo ligula ultrices vitae. Duis rhoncus, lectus eget sollicitudin pretium,
            enim libero egestas mi, ut bibendum lacus lectus in sapien. Vivamus ullamcorper lorem ac
            vestibulum tempor. Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla
            pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies.
            Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut
            blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia
            sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue.
            Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed
            ex nec pharetra.
          </p>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Fade Animation (wip)</div>
      <p>Recently we made some changes that broke the fade animation. Working on this asap.</p>
      <slither-slider :options="{ transition: 'fade' }">
        <div>
          <div class="headline-2">Slide 1</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia tellus,
            vitae commodo ligula ultrices vitae. Duis rhoncus, lectus eget sollicitudin pretium,
            enim libero egestas mi, ut bibendum lacus lectus in sapien. Vivamus ullamcorper lorem ac
            vestibulum tempor. Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla
            pharetra vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies.
            Maecenas feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut
            blandit metus. Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia
            sollicitudin eu ac nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue.
            Integer magna neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed
            ex nec pharetra.
          </p>
          <p>
            Quisque interdum a ipsum ac ultrices. Quisque vehicula ac enim vel sollicitudin. Morbi
            commodo, arcu eu facilisis congue, nibh magna aliquet nunc, quis auctor metus nisl et
            ligula. Nullam ac nisi ac felis pretium hendrerit. Proin vel ante ac turpis aliquam
            sagittis. Vivamus felis lectus, ultrices fermentum feugiat vitae, blandit sed urna. Duis
            consequat nibh dui, et aliquet ante mollis a. Integer maximus vel tortor quis
            consectetur. Cras cursus tempor porttitor. Quisque in ullamcorper turpis, vel tincidunt
            felis. Quisque ut nulla ultrices, iaculis dui a, posuere turpis. Donec vehicula tortor
            ipsum, non molestie felis commodo non. Vestibulum commodo accumsan tellus vitae egestas.
            Maecenas semper, tortor eget posuere blandit, velit diam dictum elit, vitae fermentum
            orci mauris quis diam. Quisque elementum ut ante ac hendrerit. Fusce ornare ante sit
            amet tristique ultricies.
          </p>
        </div>
        <div>
          <div class="headline-2">Slide 2</div>
          <p>
            Vestibulum vitae leo suscipit, consectetur magna vel, suscipit nulla. Aenean mattis
            risus eget mauris auctor, et cursus odio porttitor. Quisque vel accumsan augue. Vivamus
            sodales quis dui vel placerat. In a nibh sed mi consequat feugiat. Fusce aliquet dui vel
            congue tincidunt. Suspendisse id ex consequat, luctus leo eu, malesuada augue. Praesent
            vestibulum, turpis ut lobortis faucibus, libero mauris laoreet sem, eu commodo tellus
            dui ac ante. Donec condimentum commodo tortor, in iaculis nisl egestas sed. Pellentesque
            vel semper lectus, vel posuere sapien. In vitae dui a tortor cursus finibus. Curabitur
            volutpat commodo diam vehicula pharetra. Vestibulum sollicitudin enim vitae ante rutrum
            faucibus.
          </p>
          <p>
            Donec massa metus, bibendum nec sapien vel, volutpat semper neque. Donec lacus ligula,
            scelerisque non ullamcorper non, blandit vitae nulla. Mauris rutrum feugiat condimentum.
            Donec eu viverra enim. Nulla vulputate ac ligula eget rutrum. Vivamus mollis mauris
            ipsum, nec placerat dui euismod ac. Praesent at ante magna. Praesent vel rhoncus ipsum,
            ut blandit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci a
            mi tempor mollis. Mauris eleifend commodo lectus vel rhoncus. Sed lacinia, tellus a
            vehicula vehicula, dolor felis aliquet quam, non malesuada ipsum est nec metus. Nam nec
            enim facilisis, sodales nulla at, interdum mauris. Donec eget ipsum ultricies, vehicula
            risus porttitor, convallis mauris. Maecenas nulla turpis, faucibus a malesuada sit amet,
            vulputate eu elit.
          </p>
        </div>
        <div>
          <div class="headline-2">Slide 3</div>
          <p>
            Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis
            arcu, ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id
            pretium quam turpis quis enim. Vivamus efficitur ex nec lectus luctus, ac pretium dui
            semper. Vestibulum vehicula augue at odio fermentum, eget ultrices leo bibendum. Donec
            feugiat ex sed gravida consequat. Integer vitae ullamcorper neque, sit amet mattis eros.
            Donec in ligula ac massa rutrum pretium lacinia eu odio. Maecenas pretium commodo augue,
            vitae pellentesque velit mollis et. Donec tempus ante in venenatis ultricies.
          </p>
          <p>
            Aenean dignissim et nunc ut fermentum. Nulla hendrerit risus eu nulla pharetra
            vulputate. Donec semper est sed diam dictum, quis scelerisque odio ultricies. Maecenas
            feugiat rutrum accumsan. Etiam semper mi lacus. Nam ac facilisis quam, ut blandit metus.
            Aliquam dapibus sed risus eget bibendum. Nam in odio sed ante lacinia sollicitudin eu ac
            nunc. Integer quam orci, eleifend et quam quis, gravida luctus augue. Integer magna
            neque, ullamcorper vel erat sed, varius volutpat metus. Sed faucibus sed ex nec
            pharetra.
          </p>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Single Slide</div>
      <p>We hide controls when there is only one slide</p>
      <slither-slider>
        <div
          class="slider-card"
          :style="{
            backgroundColor: '#276749',
            color: 'white',
            padding: '20px',
          }"
        >
          <div class="headline-2">Slide 1</div>
        </div>
      </slither-slider>

      <hr /> -->

      <div class="headline-1">Slider with components</div>
      <p>
        Another test with the components at the root and endless turned on.
        <strong>Important</strong>: You <strong>must</strong> wrap components in a div or other
        valid html element.
      </p>
      <slither-slider>
        <div v-for="n in 6" :key="n">
          <another-test-component :number="n" :full-width="true"></another-test-component>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Endless Slider with components</div>
      <p>
        Another test with the components at the root and endless turned on.
        <strong>Important</strong>: You <strong>must</strong> wrap components in a div or other
        valid html element.
      </p>
      <slither-slider :options="{ endless: true }" v-if="loaded">
        <another-test-component v-for="n in 20" :key="n" :number="n"></another-test-component>
      </slither-slider>
      <hr />

      <!-- 
      <div class="headline-1">Slider with complex render components</div>
      <p>
        You can pass components into the slider that have dynamic elements to them through render
        components. This was a problem for many other sliders that we wanted to address.
        <strong>Important</strong>: You <strong>must</strong> wrap components in a div or other
        valid html element.
      </p>
      <slither-slider>
        <div class="slider-card" :style="{ height: '50px' }">
          <div class="headline-2">Slide 1</div>
          <test-render-component></test-render-component>
        </div>
        <div class="slider-card" :style="{ height: '50px' }">
          <div class="headline-2">Slide 2</div>
          <test-render-component></test-render-component>
        </div>
        <div class="slider-card" :style="{ height: '50px' }">
          <div class="headline-2">Slide 3</div>
          <test-render-component></test-render-component>
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Slider with custom classes</div>
      <slither-slider
        :options="{
          sliderClass: 'slider-container-custom-class',
          slideClass: 'slider-card-custom',
        }"
      >
        <div :style="{ height: '50px' }">
          <div class="headline-2">Slide 1</div>
          "slider-container-custom-class" added to this slider "custom-slide-class" added to this
          slide
        </div>
        <div :style="{ height: '50px' }">
          <div class="headline-2">Slide 2</div>
          "slider-container-custom-class" added to this slider "custom-slide-class" added to this
          slide
        </div>
        <div :style="{ height: '50px' }">
          <div class="headline-2">Slide 3</div>
          "slider-container-custom-class" added to this slider "custom-slide-class" added to this
          slide
        </div>
      </slither-slider>

      <hr />

      <div class="headline-1">Slider that changes heights</div>
      <slither-slider>
        <div class="slider-card">
          <div class="headline-2">Slide 1</div>
          <img :src="`https://picsum.photos/id/400/${dynamicHeightDim}/${dynamicHeightDim}`" />
        </div>
        <div class="slider-card" ref="heightChanger2">
          <div class="headline-2">Slide 2</div>
          <img :src="`https://picsum.photos/id/401/${dynamicHeightDim}/${dynamicHeightDim}`" />
        </div>
      </slither-slider>

      <hr /> -->
    </div>
  </div>
</template>

<script>
import SlitherSlider from "./components/SlitherApp.vue";
import TestRenderComponent from "./components/testing-demo/TestRenderComponent";
import AnotherTestComponent from "./components/testing-demo/AnotherTestComponent";

export default {
  name: "App",
  components: {
    SlitherSlider,
    AnotherTestComponent,
    TestRenderComponent,
  },
  data() {
    return {
      dynamicHeightDim: 100,
      loaded: true,
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor eu lorem commodo interdum. Praesent ut dictum neque. Duis bibendum, lorem bibendum congue volutpat, felis risus consectetur ipsum, eget varius lacus lacus id massa. Fusce suscipit leo eget lorem porta, nec tempor tellus cursus. Curabitur pellentesque vitae nisi finibus gravida. Praesent id lectus ac lacus tristique consectetur. Integer hendrerit odio vel erat varius, et fermentum arcu dignissim.`,
        `Sed ac lacinia mi. Aenean mollis aliquam tortor, eget vulputate eros. Nulla luctus ullamcorper tristique. Curabitur ex magna, tincidunt et ante a, sodales vestibulum mi. Proin luctus turpis vel tempus rutrum. Curabitur nec euismod nibh. Suspendisse id ante odio. Cras euismod lacus vel venenatis bibendum. Nulla sit amet semper est.`,
        `Donec blandit nibh vitae consequat rhoncus. Phasellus a nibh a leo tempor pellentesque nec in ex. Quisque feugiat interdum nulla. Maecenas ac justo aliquam, feugiat ipsum a, sodales leo. Ut fermentum sodales lacus at ullamcorper. Fusce quis tellus eget ipsum dignissim euismod. Duis dignissim nisi mi, ac luctus metus viverra non. Mauris velit nibh, porttitor id felis at, fermentum maximus erat. Donec eget nisi ultrices nisl eleifend cursus. Cras nec sem ut lectus egestas tincidunt. Curabitur laoreet eget erat gravida congue. In vehicula dolor nec metus tempor aliquet.`,
        `Ut vestibulum, eros eget vestibulum efficitur, nunc sem sagittis nisl, in dapibus lectus ex nec sem. Curabitur eleifend luctus purus, sed sodales odio luctus ac. Pellentesque egestas sed neque vel vehicula. Vivamus aliquet lectus et massa luctus laoreet. Nulla pellentesque purus in metus posuere molestie. Sed porta, arcu nec vehicula lobortis, eros eros feugiat arcu, vel venenatis sem nisi vitae velit. Mauris ligula velit, varius non diam in, fermentum viverra lorem. Donec vel sodales augue. Aliquam tristique nunc risus. In malesuada non urna a ultricies. Aliquam egestas commodo nisl, at semper libero efficitur ac. Praesent enim lorem, hendrerit eget pellentesque quis, vestibulum non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nisi purus, efficitur et neque ac, condimentum accumsan libero. Vestibulum consectetur nibh non auctor ultrices. Integer sodales ligula non urna molestie, et feugiat quam eleifend.`,
        `Aliquam iaculis eros sit amet purus rutrum, non laoreet mi scelerisque. Pellentesque nibh purus, iaculis in nisl a, consectetur molestie nibh. Mauris vitae lacus finibus, euismod dolor a, finibus neque. Morbi pharetra odio ut laoreet varius. Proin eu mattis arcu. Pellentesque commodo nulla odio, quis maximus sem laoreet sed. Vestibulum viverra aliquam enim, a porta justo venenatis ac. Etiam semper sem id hendrerit egestas. Donec tincidunt ultrices risus et sagittis. Fusce aliquet eu odio ac ullamcorper. Praesent at auctor erat.`,
        `Maecenas vel porttitor dui. Vivamus feugiat tellus ac sapien dignissim volutpat. Praesent feugiat arcu augue, aliquam dapibus enim eleifend quis. Sed ultricies aliquam lobortis. Donec id nunc pulvinar diam porta efficitur. Donec risus lacus, malesuada vitae orci at, tincidunt pulvinar neque. Nam posuere suscipit mauris in venenatis. Nullam porta enim nisl, at lacinia tortor auctor a. Curabitur tempor enim nec finibus tristique. Cras auctor egestas posuere. Proin at est dapibus, imperdiet sem nec, bibendum libero. Ut ultricies, elit viverra rhoncus hendrerit, odio augue faucibus leo, a elementum lectus urna euismod neque.`,
        `Vestibulum tristique turpis vel enim mollis, a vehicula neque dignissim. Duis ornare, nibh feugiat consequat mattis, odio dui iaculis nibh, et hendrerit metus nisi ac nibh. Etiam fringilla purus nec tincidunt mollis. Donec finibus neque a aliquam sollicitudin. Integer venenatis, dolor a posuere egestas, est neque sollicitudin lacus, ut feugiat erat neque vel augue. Aenean ac dui vel odio placerat rhoncus. Aliquam lectus libero, feugiat non turpis eu, ultrices dapibus leo.`,
        `Ut semper justo fringilla, tempor felis et, eleifend lorem. In in porttitor ex. Cras vel lorem ut diam congue laoreet sed egestas augue. Nam bibendum mi at diam accumsan, eget ultrices enim ornare. Nunc luctus nisl quis est pellentesque fringilla. Cras semper elementum metus, quis porttitor quam gravida a. Nulla aliquam laoreet enim. Integer scelerisque arcu lorem, sed mattis libero venenatis non. Proin sit amet sagittis ligula, nec ornare lorem. Nulla elementum commodo maximus. Ut id nulla et nisl aliquam consequat. Curabitur mollis tempor diam, ornare feugiat ex egestas vel. Nunc volutpat odio non odio luctus ornare. Sed maximus suscipit mi, dignissim cursus ante eleifend in. Etiam massa elit, volutpat sit amet luctus vel, dignissim vel leo.`,
        `Sed lectus est, lobortis quis congue eu, iaculis non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet rhoncus justo, ut ullamcorper velit. Ut non ligula et erat gravida suscipit quis sit amet nunc. Nunc sagittis massa at dui sagittis feugiat. Proin posuere tortor pretium ipsum consectetur mollis. Quisque imperdiet porttitor scelerisque. Nullam quis pulvinar tellus, ac fringilla dolor. Donec euismod nisi risus, lacinia consequat quam condimentum in.`,
        `Ut lacinia ullamcorper faucibus. Etiam euismod pretium dui, sit amet lacinia ante lacinia vitae. Donec nibh metus, vestibulum sed iaculis at, finibus sed orci. Donec ac sem et purus ultrices sagittis. Nulla rutrum felis id feugiat blandit. Sed ac lectus maximus, posuere diam sed, elementum enim. Proin feugiat dui at fringilla euismod. Donec ullamcorper massa et placerat pharetra. Curabitur hendrerit est ultrices odio sodales mattis. Pellentesque consequat mi eu nulla porttitor consequat. Etiam posuere, purus eget rhoncus rhoncus, lorem felis venenatis mauris, a vehicula nulla velit sed nulla. In hac habitasse platea dictumst. Etiam eu consequat odio. In fringilla semper sapien molestie scelerisque. Morbi convallis, elit a pellentesque cursus, neque metus porta quam, vitae malesuada dui mi sit amet risus.`,
      ],
    };
  },
  created() {
    setInterval(() => {
      this.dynamicHeightDim = (Math.floor(Math.random() * Math.floor(4)) + 1) * 100;
    }, 2000);
  },
  methods: {
    randomWidth(index) {
      const widths = [200, 300, 400, 500];
      return widths[index % 4] + "px";
    },
    getRandomParagraphs(numberOfParagraphs) {
      const paragraphs = [];
      for (let i = 0; i < numberOfParagraphs; i++) {
        paragraphs.push(this.getRandomParagraph());
      }
      return paragraphs;
    },
    getRandomParagraph() {
      const randomParagraph = Math.floor(Math.random() * Math.floor(9));
      return this.paragraphs[randomParagraph];
    },
  },
};
</script>
