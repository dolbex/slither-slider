(function(e){function t(t){for(var s,a,o=t[0],l=t[1],d=t[2],c=0,h=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={app:0},r=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/slither-slider/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"013d":function(e,t,i){},"11c3":function(e,t,i){},"2e0f":function(e,t,i){"use strict";var s=i("4ac9"),n=i.n(s);n.a},4713:function(e,t,i){"use strict";var s=i("e812"),n=i.n(s);n.a},"4ac9":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var s,n,r,a,o,l,d=i("2b0e"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo",attrs:{id:"app"}},[i("div",[i("div",{staticClass:"headline-1"},[e._v("Basic slider")]),i("slither-slider",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Basic slider (Fade Transition)")]),i("slither-slider",{attrs:{options:{transition:"fade",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticClass:"slider-card",staticStyle:{"background-color":"pink"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Autoplay Slider with No Controls")]),i("slither-slider",{attrs:{options:{autoplay:!0,secondsOnSlide:5,controls:!1,dots:!1,overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/450/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/449/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/448/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with multiple items per slide")]),i("slither-slider",{attrs:{options:{dots:!0,numberOfSlides:3,slideClass:"flex-demo-slide"}}},e._l(35,(function(t){return i("div",{key:t,staticClass:"slider-card",staticStyle:{"margin-right":"30px",padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with multiple items per slide / responsive")]),i("slither-slider",{attrs:{options:{dots:!0,dotLimit:!0,animatedDots:!0,numberOfSlides:[{number:1,min:0},{number:2,min:780}],slideClass:"flex-demo-slide",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},e._l(35,(function(t){return i("div",{key:t,staticClass:"slider-card",staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(3),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Variable Width Endless Slider")]),i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20}}},e._l(4,(function(t){return i("div",{key:t,style:{backgroundColor:"#434190",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v("\n        "+e._s(t)+"\n      ")])})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Endless Slider (opposite side cut-off)")]),i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20,cuts:"left"}}},e._l(4,(function(t){return i("div",{key:t,style:{backgroundColor:"#434190",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v("\n        "+e._s(t)+"\n      ")])})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Variable Width Endless Slider (Doesn't Loop)")]),i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20,loop:!1}}},e._l(8,(function(t){return i("div",{key:t,style:{backgroundColor:"#E53E3E",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v("\n        "+e._s(t)+"\n      ")])})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Background Images")]),i("slither-slider",{attrs:{options:{dots:!1}}},[i("div",{staticStyle:{"background-image":"url('https://picsum.photos/id/450/1200/500')","background-size":"cover","background-position":"center",height:"500px",width:"100%"}}),i("div",{staticStyle:{"background-image":"url('https://picsum.photos/id/451/1200/500')","background-size":"cover","background-position":"center",height:"500px",width:"100%"}})]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Custom Controls")]),i("slither-slider",{staticStyle:{color:"#fff"},attrs:{options:{controlsWrapperClass:"controls-custom"}}},[i("div",{style:{backgroundColor:"#434190",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 1")])]),i("div",{style:{backgroundColor:"#285E61",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 2")])]),i("div",{style:{backgroundColor:"#276749",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 3")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Fullscreen height with Offset of -200")]),i("p",[e._v("\n      The slider will calculate the height of the screen and fit it to that. If you need an offset\n      you can also set that as well. This is helpful with heros that lay under a fixed position\n      navigation. The width of the slider is up to the designer. In this case the slider is\n      constrained by the padding of this demo but you could easily bleed it to the edge by putting\n      it somewhere without padding or by using negative margins.\n    ")]),i("div",[i("slither-slider",{attrs:{options:{fullscreen:!0,fullscreenOffset:-200}}},[i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#434190",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#285E61",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#276749",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Animated Dots")]),i("slither-slider",{attrs:{options:{animatedDots:!0}}},[i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#434190",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#285E61",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#276749",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")])])])],1),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Limit Number of Dots")]),i("p",[e._v("\n      With dotLimit set to true we prevent a million dots appearing. Here there are 37 slides.\n    ")]),i("slither-slider",{attrs:{options:{animatedDots:!0,dotLimit:!0}}},e._l(37,(function(t){return i("div",{key:t,staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Single Slide")]),i("p",[e._v("We hide controls when there is only one slide")]),i("slither-slider",[i("div",{staticClass:"slider-card",style:{backgroundColor:"#276749",color:"white",padding:"20px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Touch Enabled")]),i("slither-slider",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),i("p",[e._v("Swipe to the right or left")])]),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),i("p",[e._v("Yay! You did it!")])])]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),i("p",[e._v("You did it again!!!")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Touch Disabled")]),i("slither-slider",{attrs:{options:{touch:!1}}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with components")]),e._m(0),i("slither-slider",e._l(6,(function(e){return i("div",{key:e},[i("another-test-component",{attrs:{number:e,"full-width":!0}})],1)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Endless Slider with components")]),e._m(1),e.loaded?i("slither-slider",{attrs:{options:{endless:!0,extras:4,animatedDots:!0,dotLimit:!0}}},e._l(9,(function(e){return i("another-test-component",{key:e,attrs:{number:e}})})),1):e._e(),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with complex render components")]),e._m(2),i("slither-slider",[i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),i("test-render-component")],1),i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),i("test-render-component")],1),i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),i("test-render-component")],1)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider Events")]),i("slither-slider",{attrs:{options:{autoplay:!0}},on:{changed:e.setNewSlideIndex}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),i("p",[e._v("Check out the current slide index below")])]),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),i("p",[e._v("Check out the current slide index below")])])]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),i("p",[e._v("Check out the current slide index below")])])]),i("div",[e._v("The current slide index is "+e._s(e.exampleEventIndex))]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with added / removed slides")]),i("div",{staticStyle:{"margin-bottom":"20px"}},[i("button",{staticStyle:{"font-size":"1rem",padding:"1rem 2rem","background-color":"#276749",color:"white","margin-right":"8px"},on:{click:function(t){e.dynamicSlides++}}},[e._v("\n        Add slide\n      ")]),i("button",{staticStyle:{"font-size":"1rem",padding:"1rem 2rem","background-color":"#434190",color:"white","margin-right":"8px"},on:{click:function(t){e.dynamicSlides--}}},[e._v("\n        Remove slide\n      ")])]),i("slither-slider",{attrs:{options:{endless:!0}}},e._l(e.dynamicSlides,(function(t,s){return i("div",{key:s,staticClass:"slider-card",staticStyle:{width:"200px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(s+1))])])})),0),i("hr")],1)])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n      Another test with the components at the root and endless turned on.\n      "),i("strong",[e._v("Important")]),e._v(": You "),i("strong",[e._v("must")]),e._v(" wrap components in a div or other\n      valid html element.\n    ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n      Another test with the components at the root and endless turned on.\n      "),i("strong",[e._v("Important")]),e._v(": You "),i("strong",[e._v("must")]),e._v(" wrap components in a div or other\n      valid html element.\n    ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n      You can pass components into the slider that have dynamic elements to them through render\n      components. This was a problem for many other sliders that we wanted to address.\n      "),i("strong",[e._v("Important")]),e._v(": You "),i("strong",[e._v("must")]),e._v(" wrap components in a div or other\n      valid html element.\n    ")])}],h=function(){var e=this,t=this,i=t.$createElement,s=t._self._c||i;return t.finalOptions.transition?s("div",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.leftSwipe,expression:"leftSwipe",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:swipe.right",value:t.rightSwipe,expression:"rightSwipe",arg:"swipe",modifiers:{right:!0}}],staticClass:"slither-slider"},[s("slider-controller",{ref:"sliderController",attrs:{options:t.finalOptions,"container-width":t.containerWidth},on:{newNumberOfPages:function(t){e.numberOfPages=t},newNumberOfSlides:function(t){e.numberOfSlides=t},newActiveIndex:function(t){e.activeIndex=t,e.$emit("changed",t)}}},[t._t("default")],2),s("slider-controls",{attrs:{options:t.finalOptions,"show-controls":t.finalOptions.controls&&this.hasSlides,previous:t.$slots.previous,next:t.$slots.next},on:{next:t.next,prev:t.prev}}),s("slider-dots",{attrs:{options:t.finalOptions,"show-dots":t.finalOptions.dots,"number-of-slides":this.numberOfSlides,"number-of-pages":this.numberOfPages,"active-index":this.activeIndex},on:{goToIndex:t.goToIndex}})],1):t._e()},p=[],m=(i("ac6a"),i("7618")),f=(i("c5f6"),new d["a"]),v={name:"SlideRenderer",props:{options:{type:Object,required:!0}},render:function(){return this.defaultSlot},data:function(){return{defaultSlot:null}},mounted:function(){this.defaultSlot=this.$slots.default,this.setImages(),this.addChangeListener()},methods:{setImages:function(){var e=this.findImages(this.defaultSlot[0]);e.forEach((function(e){e.data.on=Object.assign({},{load:function(){f.$emit("loaded")}},e.data.on)}))},findImages:function(e){var t=this,i=[];return"img"===e.tag&&i.push(e),e.children&&e.children.forEach((function(e){i=i.concat(t.findImages(e))})),i},addChangeListener:function(){var e=this;this.defaultSlot&&this.defaultSlot.forEach((function(t){t.data&&(e.observer=new MutationObserver(function(e){this.$emit("contentChanged")}.bind(e)),e.observer.observe(e.$el,{attributes:!0,childList:!0,subtree:!0}))}))}}},g=(i("5df3"),i("1c4c"),i("1209")),b={name:"Slide",render:function(e){var t=e("div",{ref:"slide",class:"slither-slider-slide",style:this.styles},this.slideSet),i=e("div",{ref:"slideWrapper"},[t]);return i},props:{options:{type:Object,required:!0},index:{type:Number,required:!0},activeIndex:{type:Number,required:!0},slideSet:{type:Array,required:!0},numberOfElementsPerSlide:{type:Number,required:!0}},data:function(){return{height:"auto"}},mounted:function(){this.setHeight()},computed:{styles:function(){return this.options.endless?"left"===this.options.cuts?{display:"flex",flexDirection:"row-reverse"}:{display:"flex"}:{position:"relative",height:this.height,display:"grid",gridTemplateColumns:"repeat(".concat(this.numberOfElementsPerSlide,", minmax(0, 1fr))"),gap:this.options.gap+"px"}}},methods:{setHeight:function(){if(this.options.fullscreen){var e=window.innerHeight+this.options.fullscreenOffset;this.height=e+"px"}}}},y=b,S=i("2877"),_=Object(S["a"])(y,s,n,!1,null,null,null),x=_.exports,C={name:"Slides",render:function(e){var t=this,i=[];return this.slideSets.forEach((function(s,n){var r=n===t.activeIndex||t.options.endless&&0===n?e(x,{key:n,ref:"slide",style:t.styles,class:"slither-slider-slide-wrapper",props:{options:t.options,slideSet:s,index:n,activeIndex:t.activeIndex,numberOfElementsPerSlide:t.numberOfElementsPerSlide,randothing:t.activeIndex===n}}):null;if(t.options.endless)i.push(r);else{var a=e("transition-group",{tag:"div",class:"slither-slider-transition-group",style:"width:100%;",css:"false",on:{enter:t.animateIn,leave:t.animateOut}},[r]);i.push(a)}})),e("div",{style:{transition:"height 300ms"}},i)},components:{Slide:x},props:{slideSets:{type:Array,required:!0},activeIndex:{type:Number,required:!0},options:{type:Object,required:!0},numberOfElementsPerSlide:{type:Number,required:!0},slideDirection:{type:String,default:"left"},numberOfSlides:{type:Number,required:!0}},data:function(){return{height:"auto"}},computed:{activeSlide:function(){return this.options.endless?0:this.slideSets[this.activeIndex]},styles:function(){var e={};return this.options.endless&&("left"===this.options.cuts?e.marginLeft=this.options.gap+"px":e.marginRight=this.options.gap+"px"),e},totalOffsetWidth:function(){for(var e=0,t=Array.from(this.$refs.slide.$el.children[0].children),i=0;i<this.activeIndex;i++){var s=t[i],n=s.getBoundingClientRect();e+=n.width,e+=this.options.gap}return e},endOffsetWidth:function(){for(var e=0,t=Array.from(this.$refs.slide.$el.children[0].children),i=0;i<t.length-this.options.extras;i++){var s=t[i],n=s.getBoundingClientRect();e+=n.width,e+=this.options.gap}return e}},methods:{animateIn:function(e,t){"fade"===this.options.transition?this.fadeAnimation(e,t,"in",this.slideDirection):"slide"===this.options.transition&&this.slideAnimation(e,t,"in",this.slideDirection)},animateOut:function(e,t){var i=e.parentElement.getBoundingClientRect(),s=e.getBoundingClientRect(),n={};n.top=s.top-i.top,n.right=s.right-i.right,n.bottom=s.bottom-i.bottom,n.left=s.left-i.left,g["a"].set(e,{position:"absolute",top:n.y+"px",left:n.x+"px",width:n.width+"px",height:n.height+"px"}),"fade"===this.options.transition?this.fadeAnimation(e,t,"out",this.slideDirection):"slide"===this.options.transition&&this.slideAnimation(e,t,"out",this.slideDirection)},fadeAnimation:function(e,t,i,s){var n=this,r="in"===i?0:1,a="in"===i?1:0;g["a"].set(e,{opacity:r}),Object(g["a"])({targets:e,opacity:a,duration:this.options.animationDuration,easing:this.options.animationEasing,complete:function(){n.$emit("animating",!1),t()}})},slideAnimation:function(e,t,i,s){var n=this,r="in"===i?0:1,a="in"===i?1:0,o="in"===i?"-100%":0,l="in"===i?0:"100%";"left"===s&&(o="in"===i?"100%":0,l="in"===i?0:"-100%"),this.$emit("animating",!0),g["a"].set(e,{translateX:o,opacity:r});Object(g["a"])({targets:e,translateX:l,opacity:a,duration:this.options.animationDuration,easing:this.options.animationEasing,complete:function(){n.$emit("animating",!1),t()}})}},watch:{activeIndex:function(e,t){var i=this;this.options.endless&&(this.animating=!0,t<e-1&&g["a"].set(this.$el,{translateX:-this.endOffsetWidth}),Object(g["a"])({targets:this.$el,opacity:1,duration:this.options.animationDuration,translateX:"left"===this.options.cuts?this.totalOffsetWidth:-this.totalOffsetWidth,easing:"easeOutExpo",complete:function(){i.animating=!1,i.options.loop&&e+1>i.numberOfSlides&&(i.$emit("resetToStart"),g["a"].set(i.$el,{translateX:0}))}}))}}},w=C,O=Object(S["a"])(w,r,a,!1,null,null,null),q=O.exports,I={name:"SliderController",render:function(e){var t=this;if(this.loaded){var i=this.buildSlideSets(e),s=e(q,{class:"slither-slider-slides",style:this.sliderStyles,props:{activeIndex:this.activeIndex,slideSets:i,options:this.options,numberOfElementsPerSlide:this.numberOfElementsPerSlide,slideDirection:this.slideDirection,numberOfSlides:this.numberOfSlides},on:{animating:function(e){t.animating=e},resetToStart:function(){t.setIndex(0)}}}),n=e("div",{class:"slither-slider-barndoor",style:this.barndoorStyles},[s]),r=e("div",{class:"slither-slider-controller"},[n]);return r}return""},components:{SlideRenderer:v},props:{options:{type:Object,default:function(){return{}}},containerWidth:{type:Number,required:!0}},data:function(){return{defaultSlot:null,activeIndex:0,animating:!1,slideElements:[],inlineHeight:0,loaded:!1,autoplayInterval:null,windowWidth:window.innerWidth,slideDirection:null}},computed:{numberOfSlides:function(){return this.slideElements.length},numberOfElementsPerSlide:function(){var e=this;if(this.options.endless)return this.numberOfSlides;if("object"===Object(m["a"])(this.options.numberOfSlides)){var t=1,i=0;return this.options.numberOfSlides.forEach((function(s){s.min>=i&&s.min<=e.windowWidth&&(i=s.min,t=s.number)})),t}return this.options.numberOfSlides},numberOfPages:function(){return this.options.endless?1:Math.ceil(this.numberOfSlides/this.numberOfElementsPerSlide)},nextIndex:function(){var e=this.activeIndex+1;return this.options.endless&&this.options.loop?e<=this.numberOfSlides?e:0:this.options.endless&&!this.options.loop?e<this.numberOfSlides?e:0:e<=this.numberOfPages-1?e:0},prevIndex:function(){var e=this.activeIndex-1;return this.options.endless&&this.options.loop?e>=0?e:this.numberOfSlides-1:this.options.endless&&!this.options.loop?e>0?e:this.numberOfSlides-1:e>=0?e:this.numberOfPages-1},barndoorStyles:function(){var e={position:"relative",overflow:"hidden",paddingTop:this.options.overflowHiddenPadding.top+"px",paddingRight:this.options.overflowHiddenPadding.right+"px",paddingBottom:this.options.overflowHiddenPadding.bottom+"px",paddingLeft:this.options.overflowHiddenPadding.left+"px"};return e},sliderStyles:function(){var e={};if(this.options.endless){var t=3e5;if("left"===this.options.cuts){var i=t-this.containerWidth;e={width:"".concat(t,"px"),transform:"translate3d(-".concat(i,"px, 0, 0)")}}else e={width:"".concat(t,"px")}}return e}},mounted:function(){this.defaultSlot=this.$slots.default,this.init()},beforeUpdate:function(){this.buildAndAddSlides()},methods:{init:function(){var e=this;this.buildAndAddSlides(),this.$nextTick((function(){e.loaded=!0,e.startAutoplay()})),window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))},buildAndAddSlides:function(){var e=this;this.slideElements=[],this.$slots&&this.$slots.default&&this.$slots.default.forEach((function(t){e.slideElements.push(t)}))},setIndex:function(e){this.activeIndex=e},goToIndex:function(e,t){this.slideDirection=t?"next"===t?"left":"right":this.activeIndex<e?"left":"right",this.activeIndex=e},next:function(){this.animating&&!this.options.endless||this.goToIndex(this.nextIndex,"next")},prev:function(){this.animating&&!this.options.endless||this.goToIndex(this.prevIndex,"prev")},startAutoplay:function(){var e=this;if(this.options.autoplay){var t=this.options.secondsOnSlide?1e3*this.options.secondsOnSlide:4e3;this.autoplayInterval=setInterval((function(){e.next()}),t)}},pauseInterval:function(){clearInterval(this.autoplayInterval)},buildSlideSets:function(e){var t=this,i=[],s=[];this.slideElements.forEach((function(s){var n=e(v,{props:{options:t.options}},[s]);i.push(n)}));for(var n=1;n<=this.numberOfPages;n++){for(var r=[],a=(n-1)*this.numberOfElementsPerSlide,o=a;o<this.numberOfElementsPerSlide+a;o++)this.options.endless&&(i[o].data.style={marginRight:this.options.gap+"px"}),r.push(i[o]);s.push(r)}if(this.options.endless&&this.options.loop)for(var l=0;l<this.options.extras;l++){var d=i[l];d&&s[0].push(d)}return s}},watch:{numberOfSlides:function(e){this.$emit("newNumberOfSlides",e)},numberOfPages:function(e){this.$emit("newNumberOfPages",e)},activeIndex:function(e){this.$emit("newActiveIndex",e)}}},P=I,k=(i("2e0f"),Object(S["a"])(P,o,l,!1,null,null,null)),E=k.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.showControls?i("div",{staticClass:"slither-slider-controls",class:e.options.controlsWrapperClass},[i("div",{on:{click:function(t){return e.$emit("prev")}}},[e.previous?[i("vnodes",{attrs:{vnodes:e.previous}})]:[i("button",{staticClass:"slider-direction slider-direction--prev"},[e._v("\n        «\n      ")])]],2),i("div",{on:{click:function(t){return e.$emit("next")}}},[void 0,e.next?[i("vnodes",{attrs:{vnodes:e.next}})]:[i("button",{staticClass:"slider-direction slider-direction--next"},[e._v("\n        »\n      ")])]],2)]):e._e()},$=[],D={name:"SliderControls",components:{Vnodes:{functional:!0,render:function(e,t){return t.props.vnodes},props:{vnodes:{type:Array,required:!0}}}},props:{showControls:{type:Boolean,default:!0},options:{type:Object,required:!0},next:{type:Array,default:null},previous:{type:Array,default:null}}},W=D,A=(i("87bd"),Object(S["a"])(W,j,$,!1,null,null,null)),N=A.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.numberOfDots>1&&e.options.dots?i("ol",{staticClass:"slither-slider-dots"},e._l(e.numberOfDots,(function(t){return i("li",{key:t,staticClass:"slither-slider-dot",class:e.dotClass(t),on:{click:function(i){return e.$emit("goToIndex",t-1)}}},[e._v("\n    "+e._s(t)+"\n  ")])})),0):e._e()},T=[],L={name:"SliderDots",props:{options:{type:Object,required:!0},activeIndex:{type:Number,required:!0},numberOfSlides:{type:Number,required:!0},numberOfPages:{type:Number,required:!0}},computed:{numberOfDots:function(){return this.options.endless?this.numberOfSlides:this.numberOfPages}},methods:{dotClass:function(e){var t={"active-slide":this.activeIndex+1===e};if(this.options.animatedDots){var i=this.activeIndex+1-e;this.options.dotLimit?(t["large-dot"]=0===i||1===i||2===i,t["medium-dot"]=-1===i||2===i,t["small-dot"]=-2===i||-3===i,t["hidden-dot"]=i>4||i<-2):(t["large-dot"]=0===i,t["medium-dot"]=-1===i||1===i,t["small-dot"]=i<=-2||i>=2)}return t}}},M=L,H=(i("9bbf"),Object(S["a"])(M,R,T,!1,null,"686e2b33",null)),z=H.exports,B={name:"SlitherSlider",components:{SliderController:E,SliderControls:N,SliderDots:z},props:{options:{type:Object,default:function(){return{}}}},data:function(){return{numberOfSlides:0,numberOfPages:0,activeIndex:0,defaultSlot:[],containerWidth:0,defaultOptions:{autoplay:!1,transition:"slide",animationDuration:500,animationEasing:"easeOutQuint",controls:!0,dots:!0,animatedDots:!1,dotLimit:!1,fullscreen:!1,fullscreenOffset:null,numberOfSlides:1,controlsWrapperClass:null,endless:!1,gap:30,loop:!0,extras:3,overflowHiddenPadding:{top:0,left:0,right:0,bottom:0},touch:!0,cuts:"right"},finalOptions:{}}},created:function(){this.setOptions()},mounted:function(){var e=this;this.defaultSlot=this.$slots.default,this.$emit("changed",0),window.addEventListener("resize",(function(){e.setContainerWidth()})),this.addChangeListener(),this.refresh()},computed:{hasSlides:function(){return this.numberOfSlides>0}},methods:{refresh:function(){this.setContainerWidth()},setOptions:function(){this.finalOptions=Object.assign({},this.defaultOptions,this.options)},leftSwipe:function(){this.finalOptions.touch&&this.next()},rightSwipe:function(){this.finalOptions.touch&&this.prev()},next:function(){this.$refs.sliderController&&this.$refs.sliderController.next()},prev:function(){this.$refs.sliderController&&this.$refs.sliderController.prev()},goToIndex:function(e){this.$refs.sliderController&&this.$refs.sliderController.goToIndex(e)},setContainerWidth:function(){this.containerWidth=this.$el.getBoundingClientRect().width},addChangeListener:function(){var e=this;this.defaultSlot&&this.defaultSlot.forEach((function(t){t.data&&(e.observer=new MutationObserver(function(e){this.refresh()}.bind(e)),e.observer.observe(e.$el,{attributes:!0,childList:!0,subtree:!0}))}))}}},U=B,V=(i("4713"),Object(S["a"])(U,h,p,!1,null,null,null)),Y=V.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v("\n  This is a test component. Time is: "+e._s(e.time)+"\n")])},X=[],Q=i("5118"),J={name:"TestComponent",props:{testProp:{type:Boolean,required:!0}},data:function(){return{time:new Date}},mounted:function(){var e=this;Object(Q["setInterval"])((function(){e.time=new Date}),1e3)}},G=J,K=Object(S["a"])(G,F,X,!1,null,null,null),Z=K.exports,ee={name:"TestRenderComponent",render:function(e,t){return e(Z,{props:{testProp:!0}})}},te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"background-color":"white","border-radius":"5px"},style:e.cardStyles},[i("img",{staticStyle:{width:"100%",height:"200px"},attrs:{src:"https://picsum.photos/id/23"+e.number+"/"+e.cardWidth+"/200"}}),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Title of "+e._s(e.number))]),i("p",[e._v("\n      Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis arcu,\n      ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id pretium\n      quam turpis quis enim.\n    ")])])])},ie=[],se={name:"AnotherTestComponent",props:{number:{type:Number,required:!0},fullWidth:{type:Boolean,default:!1}},computed:{cardWidth:function(){return this.fullWidth?1e3:250},cardStyles:function(){return this.fullWidth?{width:"100%"}:{width:"250px"}}}},ne=se,re=Object(S["a"])(ne,te,ie,!1,null,null,null),ae=re.exports,oe={name:"App",components:{SlitherSlider:Y,AnotherTestComponent:ae,TestRenderComponent:ee},data:function(){return{loaded:!0,exampleEventIndex:0,paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor eu lorem commodo interdum. Praesent ut dictum neque. Duis bibendum, lorem bibendum congue volutpat, felis risus consectetur ipsum, eget varius lacus lacus id massa. Fusce suscipit leo eget lorem porta, nec tempor tellus cursus. Curabitur pellentesque vitae nisi finibus gravida. Praesent id lectus ac lacus tristique consectetur. Integer hendrerit odio vel erat varius, et fermentum arcu dignissim.","Sed ac lacinia mi. Aenean mollis aliquam tortor, eget vulputate eros. Nulla luctus ullamcorper tristique. Curabitur ex magna, tincidunt et ante a, sodales vestibulum mi. Proin luctus turpis vel tempus rutrum. Curabitur nec euismod nibh. Suspendisse id ante odio. Cras euismod lacus vel venenatis bibendum. Nulla sit amet semper est.","Donec blandit nibh vitae consequat rhoncus. Phasellus a nibh a leo tempor pellentesque nec in ex. Quisque feugiat interdum nulla. Maecenas ac justo aliquam, feugiat ipsum a, sodales leo. Ut fermentum sodales lacus at ullamcorper. Fusce quis tellus eget ipsum dignissim euismod. Duis dignissim nisi mi, ac luctus metus viverra non. Mauris velit nibh, porttitor id felis at, fermentum maximus erat. Donec eget nisi ultrices nisl eleifend cursus. Cras nec sem ut lectus egestas tincidunt. Curabitur laoreet eget erat gravida congue. In vehicula dolor nec metus tempor aliquet.","Ut vestibulum, eros eget vestibulum efficitur, nunc sem sagittis nisl, in dapibus lectus ex nec sem. Curabitur eleifend luctus purus, sed sodales odio luctus ac. Pellentesque egestas sed neque vel vehicula. Vivamus aliquet lectus et massa luctus laoreet. Nulla pellentesque purus in metus posuere molestie. Sed porta, arcu nec vehicula lobortis, eros eros feugiat arcu, vel venenatis sem nisi vitae velit. Mauris ligula velit, varius non diam in, fermentum viverra lorem. Donec vel sodales augue. Aliquam tristique nunc risus. In malesuada non urna a ultricies. Aliquam egestas commodo nisl, at semper libero efficitur ac. Praesent enim lorem, hendrerit eget pellentesque quis, vestibulum non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nisi purus, efficitur et neque ac, condimentum accumsan libero. Vestibulum consectetur nibh non auctor ultrices. Integer sodales ligula non urna molestie, et feugiat quam eleifend.","Aliquam iaculis eros sit amet purus rutrum, non laoreet mi scelerisque. Pellentesque nibh purus, iaculis in nisl a, consectetur molestie nibh. Mauris vitae lacus finibus, euismod dolor a, finibus neque. Morbi pharetra odio ut laoreet varius. Proin eu mattis arcu. Pellentesque commodo nulla odio, quis maximus sem laoreet sed. Vestibulum viverra aliquam enim, a porta justo venenatis ac. Etiam semper sem id hendrerit egestas. Donec tincidunt ultrices risus et sagittis. Fusce aliquet eu odio ac ullamcorper. Praesent at auctor erat.","Maecenas vel porttitor dui. Vivamus feugiat tellus ac sapien dignissim volutpat. Praesent feugiat arcu augue, aliquam dapibus enim eleifend quis. Sed ultricies aliquam lobortis. Donec id nunc pulvinar diam porta efficitur. Donec risus lacus, malesuada vitae orci at, tincidunt pulvinar neque. Nam posuere suscipit mauris in venenatis. Nullam porta enim nisl, at lacinia tortor auctor a. Curabitur tempor enim nec finibus tristique. Cras auctor egestas posuere. Proin at est dapibus, imperdiet sem nec, bibendum libero. Ut ultricies, elit viverra rhoncus hendrerit, odio augue faucibus leo, a elementum lectus urna euismod neque.","Vestibulum tristique turpis vel enim mollis, a vehicula neque dignissim. Duis ornare, nibh feugiat consequat mattis, odio dui iaculis nibh, et hendrerit metus nisi ac nibh. Etiam fringilla purus nec tincidunt mollis. Donec finibus neque a aliquam sollicitudin. Integer venenatis, dolor a posuere egestas, est neque sollicitudin lacus, ut feugiat erat neque vel augue. Aenean ac dui vel odio placerat rhoncus. Aliquam lectus libero, feugiat non turpis eu, ultrices dapibus leo.","Ut semper justo fringilla, tempor felis et, eleifend lorem. In in porttitor ex. Cras vel lorem ut diam congue laoreet sed egestas augue. Nam bibendum mi at diam accumsan, eget ultrices enim ornare. Nunc luctus nisl quis est pellentesque fringilla. Cras semper elementum metus, quis porttitor quam gravida a. Nulla aliquam laoreet enim. Integer scelerisque arcu lorem, sed mattis libero venenatis non. Proin sit amet sagittis ligula, nec ornare lorem. Nulla elementum commodo maximus. Ut id nulla et nisl aliquam consequat. Curabitur mollis tempor diam, ornare feugiat ex egestas vel. Nunc volutpat odio non odio luctus ornare. Sed maximus suscipit mi, dignissim cursus ante eleifend in. Etiam massa elit, volutpat sit amet luctus vel, dignissim vel leo.","Sed lectus est, lobortis quis congue eu, iaculis non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet rhoncus justo, ut ullamcorper velit. Ut non ligula et erat gravida suscipit quis sit amet nunc. Nunc sagittis massa at dui sagittis feugiat. Proin posuere tortor pretium ipsum consectetur mollis. Quisque imperdiet porttitor scelerisque. Nullam quis pulvinar tellus, ac fringilla dolor. Donec euismod nisi risus, lacinia consequat quam condimentum in.","Ut lacinia ullamcorper faucibus. Etiam euismod pretium dui, sit amet lacinia ante lacinia vitae. Donec nibh metus, vestibulum sed iaculis at, finibus sed orci. Donec ac sem et purus ultrices sagittis. Nulla rutrum felis id feugiat blandit. Sed ac lectus maximus, posuere diam sed, elementum enim. Proin feugiat dui at fringilla euismod. Donec ullamcorper massa et placerat pharetra. Curabitur hendrerit est ultrices odio sodales mattis. Pellentesque consequat mi eu nulla porttitor consequat. Etiam posuere, purus eget rhoncus rhoncus, lorem felis venenatis mauris, a vehicula nulla velit sed nulla. In hac habitasse platea dictumst. Etiam eu consequat odio. In fringilla semper sapien molestie scelerisque. Morbi convallis, elit a pellentesque cursus, neque metus porta quam, vitae malesuada dui mi sit amet risus."],dynamicSlides:0}},methods:{randomWidth:function(e){var t=[200,300,400,500];return t[e%4]+"px"},getRandomParagraphs:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getRandomParagraph());return t},getRandomParagraph:function(){var e=Math.floor(Math.random()*Math.floor(9));return this.paragraphs[e]},setNewSlideIndex:function(e){this.exampleEventIndex=e}}},le=oe,de=Object(S["a"])(le,u,c,!1,null,null,null),ue=de.exports,ce=i("0086"),he=i.n(ce);d["a"].use(he.a),new d["a"]({render:function(e){return e(ue)}}).$mount("#app")},"87bd":function(e,t,i){"use strict";var s=i("11c3"),n=i.n(s);n.a},"9bbf":function(e,t,i){"use strict";var s=i("013d"),n=i.n(s);n.a},e812:function(e,t,i){}});
//# sourceMappingURL=app.22841acc.js.map