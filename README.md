# Slither Slider

Simple Vue JS slider for Vue JS that pretty much takes what you throw at it. Features 'fullscreen', lazy loading, and easy customization

![Snakes.... I hate snakes](https://github.com/dolbex/slither-slider/blob/master/snake.png?raw=true)

## Usage

### Register the plugin

```
import SlitherSlider from 'slither-slider';
Vue.use(SlitherSlider)
```

### In your component

```html
<slither-slider :options="{fullscreen:true, lazy:true}">
  <!-- Slide 1 -->
  <div :style="{backgroundColor: 'red', height:'10000px'}">Oh</div>

  <!-- Slide 2 -->
  <div>
    Mah
    <img data-src="https://picsum.photos/id/237/200/300" class="slither-lazy" />
  </div>

  <!-- Slide 3 -->
  <div>Gawd</div>
</slither-slider>
```

### Options

```javascript
{
  transition: 'fade',
  dots: true,
  fullscreen: false,
  fullscreenOffset: null,
  lazy: false,
  controls: true,
  numberOfSlides:1,
  sliderClass:null,
  slideClass:null,
  autoplay:false,
  secondsOnSlide:4,
  peeking: true
}
```

| Option           | Default | Effect                                                                                                                                                                                                                                                                                  |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transition       | 'slide' | Transition can be set to 'fade' or 'slide'                                                                                                                                                                                                                                              |
| dots             | true    | Show dots at the bottom                                                                                                                                                                                                                                                                 |
| animatedDots     | false   | Makes the dots scale up as they approach the slide it represents                                                                                                                                                                                                                        |
| dotLimit         | false   | Limits the number of dots and scrolls in new ones as needed.                                                                                                                                                                                                                            |
| fullscreen       | false   | Makes the slideshow fill the height of the screen                                                                                                                                                                                                                                       |
| fullscreenOffset | null    | When fullscreen is true it adds this number -200 would subtract 200 pixels this works well for heros with consideration for the nav                                                                                                                                                     |
| lazy             | false   | Attempts to lazy load images. * You *must* add .slither-lazy to all images * Set the url of the image to 'data-src' attribute for images _ For background images (like on a div) set the url to 'data-bg-src' _ It is highly advisable to add the height of the image to the image tag. |
| controls         | true    | Show the previous and next buttons                                                                                                                                                                                                                                                      |
| numberOfSlides   | 1       | Creates pages and shows n number of slides at a time. Optionally, you can add an object with "number" and "min" properties to define the number of slides and minimum width respectively. See examples.                                                                                 |
| sliderClass      | null    | Adds these classes to the parent of the slides                                                                                                                                                                                                                                          |
| slideClass       | null    | Adds these classes to each slide                                                                                                                                                                                                                                                        |
| autoplay         | false   | You know what this does.                                                                                                                                                                                                                                                                |
| secondsOnSlide   | 4       | This is the number of seconds slither will pause on a slide before moving foward (autoplay must be set to true)                                                                                                                                                                         |
| endless          | false   | Display all the slides next to each other regardless of their width                                                                                                                                                                                                                     |
| gap              | 10      | ("endless" parameter must be true) The gap between each of the slides in an endless presentation                                                                                                                                                                                        |

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

Ensure that you have lazy set to true in the configuration options and then use the following syntax on any images you want to lazy load. You must have the class and data-src set for lazy loading to work.

```html
<img data-src="https://picsum.photos/id/237/200/300" class="slither-lazy" />
```

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

### Compiles and minifies for production

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
