# Slither Slider

Simple Vue JS slider for Vue JS that pretty much takes what you throw at it.

![Minified](https://badgen.net/bundlephobia/minzip/slither-slider)

![Snakes.... I hate snakes](https://github.com/dolbex/slither-slider/blob/master/snake.png?raw=true)

## Demo

Click below to see some examples of what you can pull off. All source for that demo is located in "App.vue"

[Demo](https://dolbex.github.io/slither-slider/)

## Usage

### Register the plugin

```
import SlitherSlider from 'slither-slider';
Vue.use(SlitherSlider)
```

### In your component

```html
<slither-slider :options="{fullscreen:true}">
  <!-- Slide 1 -->
  <div :style="{backgroundColor: 'red', height:'1000px'}">Oh</div>

  <!-- Slide 2 -->
  <div>
    Mah
    <img src="https://picsum.photos/id/237/200/300" />
  </div>

  <!-- Slide 3 -->
  <div>Gawd</div>
</slither-slider>
```

### Using components as Slides

<aside class="notice">
There is one thing to keep in mind when passing components a any part of your slides. Ensure that you are not loading your component through asynchronous methods. This is a bug I would **love** to fix so if you have any insights do let me know. 
</aside>

```html
<slither-slider :options="{fullscreen:true}">
  <!-- Slide 1 -->
  <custom-component>
    Component One
  </custom-component>

  <!-- Slide 2 -->
  <custom-component>
    Component Two
  </custom-component>

  <!-- Slide 3 -->
  <other-custom-component>
    Component Three
  </other-custom-component>
</slither-slider>
```

### Options

```javascript
{
  autoplay: false,
  transition: "slide",
  dots: true,
  animatedDots: false,
  dotLimit: false,
  fullscreen: false,
  fullscreenOffset: null,
  controls: true,
  numberOfSlides: 1,
  controlsWrapperClass: null,
  animationDuration: 500,
  animationEasing: "easeOutQuint",
  slidePosition: "center",
  slideClass: null,
  sliderClass: null,
  secondsOnSlide: 4,
  clickableSlides: false,
  endless: false,
  cuts: "right",
  gap: 30,
  adaptiveHeight: false,
  loop: true,
  extras: 3,
  overflowHiddenPadding: { top: 0, left: 0, right: 0, bottom: 0 },
  touch: true,
  preserveGrid: false,
  swipeTolerance: 80
}
```

| Option                | Default                            | Effect                                                                                                                                                                                                  |
| --------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoplay              | false                              | You know what this does.                                                                                                                                                                                |
| transition            | 'slide'                            | Transition can be set to 'fade' or 'slide' **(currently only slide working)**                                                                                                                           |
| dots                  | true                               | Show dots at the bottom                                                                                                                                                                                 |
| animatedDots          | false                              | Makes the dots scale up as they approach the slide it represents                                                                                                                                        |
| dotLimit              | false                              | Limits the number of dots and scrolls in new ones as needed.                                                                                                                                            |
| fullscreen            | false                              | Makes the slideshow fill the height of the screen                                                                                                                                                       |
| fullscreenOffset      | null                               | When fullscreen is true it adds this number -200 would subtract 200 pixels this works well for heros with consideration for the nav                                                                     |
| controls              | true                               | Show the previous and next buttons                                                                                                                                                                      |
| numberOfSlides        | 1                                  | Creates pages and shows n number of slides at a time. Optionally, you can add an object with "number" and "min" properties to define the number of slides and minimum width respectively. See examples. |
| controlsWrapperClass  | null (String)                      | Adds these classes to the wrapper around the controls                                                                                                                                                   |
| animationDuration     | 500                                | How long the animation takes                                                                                                                                                                            |
| animationEasing       | "easeOutQuint"                     | The easing of the animation - options can be found at anime.js documentation page [here](https://animejs.com/documentation/#pennerFunctions)                                                            |
| slidePosition         | "center"                           | "center", "left", and "right" are your options.                                                                                                                                                         |
| secondsOnSlide        | 4                                  | This is the number of seconds slither will pause on a slide before moving foward (autoplay must be set to true)                                                                                         |
| endless               | false                              | Display all the slides next to each other regardless of their width                                                                                                                                     |
| clickableSlides       | false                              | Will advance to the slide clicked                                                                                                                                                                       |
| cuts                  | "right"                            | ("endless" must be true) Cuts off the slides on the right side by default. In a case where you want the cut-off of slides to show on the left set this value to "left"                                  |
| gap                   | 10                                 | ("endless" parameter must be true) The gap between each of the slides in an endless presentation                                                                                                        |
| adaptiveHeight        | false                              | If set to true the slider will increase and decrease height based on the slide's height. False will base a fixed height on the first slide's height presentation                                        |
| loop                  | true                               | ("endless" parameter must be true) This gives the illusion that an endless slider appears as if it goes forever. If set to false the slider will appear to "rewind" to the beginning.                   |
| extras                | 3                                  | ("endless" and "loop" parameters must be true) This adjusts the number of slides slither appends to the end to give the illusion of infinite                                                            |
| overflowHiddenPadding | {top:0, left:0, right:0, bottom:0} | If you have a dropshadow or something absolutely positioned relative that "hangs over" the spacing of your slide contents you may need to apply some padding.                                           |
| touch                 | true                               | Enables swipe gestures to navigate slides                                                                                                                                                               |
| preserveGrid          | false                              | When multiple slides are shown at a time and you get to the last one where there is an awkward number should we preserve the grid to keep the space where slides would have been?                       |
| swipeTolerance        | 80                                 | Swipe Tolerance on the swiping: 0 - 100 - higher is more likely to register a swipe                                                                                                                     |

### Events

| Event   | Payload             | Description                                            |
| ------- | ------------------- | ------------------------------------------------------ |
| changed | current slide index | Whenever the active index changes the event is emitted |

### Methods

| Method | Parameters | Description                                                                         |
| ------ | ---------- | ----------------------------------------------------------------------------------- |
| reload | None       | Reloads and rebuilds the slider. Usefull when you have a slider with dynamic slides |

#### Basic example:

```html
<slither-slider ref="slider">
  ...
</slither-slider>
```

```javascript
this.$refs.slider.reload();
```

See the DynamicSlides component for a real world exampleß

### Styles

Styles are fairly minimal out of the box so here are some that you may want to use to get started that represent what you're probably used to seeing and then you can modify from there.

```scss
// Ensure you include the main styles and modify this path to suite your needs
@import "./node_modules/slither-slider/plugin-dist/slither-slider.css";

.slider-slide {
  margin: 0 200px;
}

.slider-slides {
  padding-bottom: 100px;
}

.slider-dot {
  width: 20px;
  height: 20px;

  &.active-slide {
    background-color: #8fc7e8;
    color: #8fc7e8;
  }
}
```

### Lazy Loading

In 2.0 lazy loading happens by the very nature of how Vue works. There's nothing special you have to do here.

### Custom Controls

In your component you can add a couple of slots that will override the control button contents like-a-so:

```html
<slither-slider>
  <!-- Slides -->
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>

  <!-- Controls -->
  <template slot="previous">
    Before
  </template>
  <template slot="next">
    After
  </template>
</slither-slider>
```

### Responsive Slide Numbers

You can control how many slides show per page at different responsive sizes like so:

```html
<slither-slider
  :options="{
          dots: true,
          numberOfSlides: [
            { number: 1, min: 0 },
            { number: 2, min: 780 }
          ]}"
>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 4</div>
  <div>Slide 5</div>
  <div>Slide 6</div>
  <div>Slide 7</div>
  <div>Slide 8</div>
</slither-slider>
```

## Development

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for docs, library and plugin

```
build-all
```

### Publishes the docs to gh-pages

```
publish-docs
```

### Compiles and minifies for library and plugin

```
build-lib
```

### Compiles and minifies for library

```
build-lib:library
```

### Compiles and minifies for plugin

```
build-lib:plugin
```

### Compiles and minifies for documentation

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Snake Illustration: <a href="https://www.vecteezy.com/">www.vecteezy.com</a>
