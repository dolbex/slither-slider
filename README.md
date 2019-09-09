# Slither Slider

![Snakes.... I hate snakes](https://github.com/dolbex/slither-slider/blob/master/snake.png?raw=true)

## Usage

### Register the plugin
```
import SlitherSlider from 'slither-slider';
Vue.use(SlitherSlider)
```

### In your component

```
<slither-slider :config="{fullscreen:true, lazy:true}">
  <!-- Slide 1 -->
  <div :style="{backgroundColor: 'red', height:'10000px'}">Oh</div>
  <!-- Slide 2 -->
  <div>Mah <img
      data-src="https://picsum.photos/id/237/200/300"
      class="slither-lazy"
    ></div>
  <!-- Slide 3 -->
  <div>Gawd</div>
</slither-slider>
```

### Options

```
{
  dots: true, // Show dots at the botttom
  fullscreen: false, // Makes the slideshow fill the height of the screen
  lazy: false, // Must be set to true - see below
  nextPrev: true,
}
```

### Styles

Styles are fairly minimal out of the box so here are some that you may want to use to get started that represent what you're probably used to seeing and then you can modify from there.

```

```

### Lazy Loading 

Ensure that you have lazy set to true in the configuration and then use the following syntax on any images you want to lazy load. You must have the class and data-src set for lazy loading to work.

```
  <img
      data-src="https://picsum.photos/id/237/200/300"
      class="slither-lazy"
    ></div>
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