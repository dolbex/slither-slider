(function(e){function t(t){for(var s,a,l=t[0],o=t[1],d=t[2],u=0,c=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&c.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);h&&h(t);while(c.length)c.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var s={},a={app:0},r={app:0},n=[];function l(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-3b6e0f5a":"65325aca","chunk-2d0b2cbd":"b2ff90a6","chunk-2d20f378":"05339cbd","chunk-5216374f":"07596fc6","chunk-a37453d6":"07b99e71"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i={"chunk-3b6e0f5a":1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var s="css/"+({}[e]||e)+"."+{"chunk-3b6e0f5a":"bdb38435","chunk-2d0b2cbd":"31d6cfe0","chunk-2d20f378":"31d6cfe0","chunk-5216374f":"31d6cfe0","chunk-a37453d6":"31d6cfe0"}[e]+".css",r=o.p+s,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var d=n[l],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===s||u===r))return t()}var c=document.getElementsByTagName("style");for(l=0;l<c.length;l++){d=c[l],u=d.getAttribute("data-href");if(u===s||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var s=t&&t.target&&t.target.src||r,n=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete a[e],h.parentNode.removeChild(h),i(n)},h.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,i){s=r[e]=[t,i]}));t.push(s[2]=n);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=l(e);var c=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(h);var i=r[e];if(0!==i){if(i){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,i[1](c)}r[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/slither-slider/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var h=u;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo",attrs:{id:"app"}},[i("div",[i("div",{staticClass:"headline-1"},[e._v("Basic slider")]),i("slither-slider",{attrs:{options:{swipeTolerance:80}}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Basic slider (Fade Transition)")]),i("slither-slider",{attrs:{options:{transition:"fade",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Autoplay Slider with No Controls")]),i("slither-slider",{attrs:{options:{autoplay:!0,secondsOnSlide:5,controls:!1,dots:!1,animationDuration:"500",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/450/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"700px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/449/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/448/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Autoplay Slider with adaptive height")]),i("slither-slider",{attrs:{options:{autoplay:!0,secondsOnSlide:5,controls:!1,dots:!1,adaptiveHeight:!0,animationDuration:"500",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/450/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"700px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/449/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticStyle:{"background-color":"#e2e8f0",height:"500px",display:"flex",overflow:"hidden","border-radius":"8px"}},[i("div",[i("img",{attrs:{src:"https://picsum.photos/id/448/300/600"}})]),i("div",{staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Fade Transition with Adaptive Height")]),i("slither-slider",{attrs:{options:{adaptiveHeight:!0,transition:"fade",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(5),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(2),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with multiple items per slide")]),i("slither-slider",{attrs:{options:{dots:!0,numberOfSlides:3,slideClass:"flex-demo-slide"}}},e._l(10,(function(t){return i("div",{key:t,staticClass:"slider-card",staticStyle:{"margin-right":"30px",padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with multiple items per slide preserve width")]),i("slither-slider",{attrs:{options:{dots:!0,numberOfSlides:3,preserveGrid:!0,slideClass:"flex-demo-slide"}}},e._l(10,(function(t){return i("div",{key:t,staticClass:"slider-card",staticStyle:{"margin-right":"30px",padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with multiple items per slide / responsive")]),i("slither-slider",{attrs:{options:{dots:!0,dotLimit:!0,animatedDots:!0,numberOfSlides:[{number:1,min:0},{number:2,min:780}],slideClass:"flex-demo-slide",overflowHiddenPadding:{top:0,left:20,right:20,bottom:20}}}},e._l(35,(function(t){return i("div",{key:t,staticClass:"slider-card",staticStyle:{padding:"30px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(3),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with Dynamic Slides")]),i("dynamic-slides"),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Variable Width Endless Slider")]),i("div",{staticStyle:{width:"60%","border-radius":"20px"}},[i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20}}},e._l(4,(function(t){return i("div",{key:t,style:{backgroundColor:"#434190",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v(" "+e._s(t)+" ")])})),0)],1),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Endless Slider (opposite side cut-off)")]),i("div",{staticStyle:{width:"60%","border-radius":"20px"}},[i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20,cuts:"left"}}},e._l(4,(function(t){return i("div",{key:t,style:{backgroundColor:"#434190",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v(" "+e._s(t)+" ")])})),0)],1),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Variable Width Endless Slider (Doesn't Loop)")]),i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20,loop:!1}}},e._l(8,(function(t){return i("div",{key:t,style:{backgroundColor:"#E53E3E",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v(" "+e._s(t)+" ")])})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Clickable Slides")]),i("slither-slider",{attrs:{options:{dots:!0,endless:!0,gap:20,loop:!1,clickableSlides:!0}}},e._l(8,(function(t){return i("div",{key:t,style:{backgroundColor:"#E53E3E",color:"#fff",width:e.randomWidth(t),height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",fontWeight:"bold",borderRadius:"0.25rem"}},[e._v(" "+e._s(t)+" ")])})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Background Images")]),i("slither-slider",{attrs:{options:{dots:!1}}},[i("div",{staticStyle:{"background-image":"url('https://picsum.photos/id/450/1200/500')","background-size":"cover","background-position":"center",height:"500px",width:"100%"}}),i("div",{staticStyle:{"background-image":"url('https://picsum.photos/id/451/1200/500')","background-size":"cover","background-position":"center",height:"500px",width:"100%"}})]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Custom Controls")]),i("slither-slider",{staticStyle:{color:"#fff"},attrs:{options:{controlsWrapperClass:"controls-custom"}}},[i("div",{style:{backgroundColor:"#434190",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 1")])]),i("div",{style:{backgroundColor:"#285E61",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 2")])]),i("div",{style:{backgroundColor:"#276749",height:"400px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10rem",fontWeight:"bold"}},[i("div",[e._v("Slide 3")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Fullscreen height with Offset of -200")]),i("p",[e._v(" The slider will calculate the height of the screen and fit it to that. If you need an offset you can also set that as well. This is helpful with heros that lay under a fixed position navigation. The width of the slider is up to the designer. In this case the slider is constrained by the padding of this demo but you could easily bleed it to the edge by putting it somewhere without padding or by using negative margins. ")]),i("div",[i("slither-slider",{attrs:{options:{fullscreen:!0,fullscreenOffset:-200}}},[i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#434190",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#285E61",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#276749",height:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Animated Dots")]),i("slither-slider",{attrs:{options:{animatedDots:!0}}},[i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#434190",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#285E61",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")])]),i("div",{style:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#276749",height:"500px",width:"100%"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")])])])],1),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Limit Number of Dots")]),i("p",[e._v(" With dotLimit set to true we prevent a million dots appearing. Here there are 37 slides. ")]),i("slither-slider",{attrs:{options:{animatedDots:!0,dotLimit:!0}}},e._l(37,(function(t){return i("div",{key:t,staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(t))]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Single Slide")]),i("p",[e._v("We hide controls when there is only one slide")]),i("slither-slider",[i("div",{staticClass:"slider-card",style:{backgroundColor:"#276749",color:"white",padding:"20px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Touch Enabled")]),i("slither-slider",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),i("p",[e._v("Swipe to the right or left")])]),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),i("p",[e._v("Yay! You did it!")])])]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),i("p",[e._v("You did it again!!!")])])]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Touch Disabled")]),i("slither-slider",{attrs:{options:{touch:!1}}},[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2),i("div",[i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("div",{staticClass:"slider-card"},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),e._l(e.getRandomParagraphs(1),(function(t,s){return i("p",{key:s},[e._v(e._s(t))])}))],2)]),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with components")]),e._m(0),i("slither-slider",{attrs:{options:{autoplay:!0,secondsOnSlide:5}}},e._l(6,(function(e){return i("div",{key:e},[i("another-test-component",{attrs:{number:e,"full-width":!0}})],1)})),0),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Endless Slider with components")]),e._m(1),e.loaded?i("slither-slider",{attrs:{options:{endless:!0,extras:4,animatedDots:!0,dotLimit:!0}}},e._l(9,(function(e){return i("another-test-component",{key:e,attrs:{number:e}})})),1):e._e(),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with complex render components")]),e._m(2),i("slither-slider",[i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 1")]),i("test-render-component")],1),i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 2")]),i("test-render-component")],1),i("div",{staticClass:"slider-card",style:{height:"50px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide 3")]),i("test-render-component")],1)]),i("hr"),i("slider-with-event"),i("hr"),i("div",{staticClass:"headline-1"},[e._v("Slider with added / removed slides")]),i("div",{staticStyle:{"margin-bottom":"20px"}},[i("button",{staticStyle:{"font-size":"1rem",padding:"1rem 2rem","background-color":"#276749",color:"white","margin-right":"8px"},on:{click:function(t){e.dynamicSlides++}}},[e._v(" Add slide ")]),i("button",{staticStyle:{"font-size":"1rem",padding:"1rem 2rem","background-color":"#434190",color:"white","margin-right":"8px"},on:{click:function(t){e.dynamicSlides--}}},[e._v(" Remove slide ")])]),i("slither-slider",{attrs:{options:{endless:!0}}},e._l(e.dynamicSlides,(function(t,s){return i("div",{key:s,staticClass:"slider-card",staticStyle:{width:"200px"}},[i("div",{staticClass:"headline-2"},[e._v("Slide "+e._s(s+1))])])})),0),i("hr")],1)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v(" Another test with the components at the root and endless turned on. "),i("strong",[e._v("Important")]),e._v(": You "),i("strong",[e._v("must")]),e._v(" wrap components in a div or other valid html element. ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v(" Another test with the components at the root and endless turned on. "),i("strong",[e._v("Important")]),e._v(': In this example change slide one\'s title to red, and go "back" to the left so you can see slide 9 and 1. Since the 1 you are now looking at is a clone of the first slide (to give it the illusion of infinite scroll) the states will be differnet. Just keep this in mind and use a global store if you need persistance across your slides. ')])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v(" You can pass components into the slider that have dynamic elements to them through render components. This was a problem for many other sliders that we wanted to address. "),i("strong",[e._v("Important")]),e._v(": You "),i("strong",[e._v("must")]),e._v(" wrap components in a div or other valid html element. ")])}],n=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"App",components:{SlitherSlider:function(){return i.e("chunk-3b6e0f5a").then(i.bind(null,"e65c"))},TestRenderComponent:function(){return i.e("chunk-5216374f").then(i.bind(null,"2302"))},AnotherTestComponent:function(){return i.e("chunk-a37453d6").then(i.bind(null,"4133"))},DynamicSlides:function(){return Promise.all([i.e("chunk-3b6e0f5a"),i.e("chunk-2d0b2cbd")]).then(i.bind(null,"2647"))},SliderWithEvent:function(){return Promise.all([i.e("chunk-3b6e0f5a"),i.e("chunk-2d20f378")]).then(i.bind(null,"b34e"))}},data:function(){return{loaded:!0,paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor eu lorem commodo interdum. Praesent ut dictum neque. Duis bibendum, lorem bibendum congue volutpat, felis risus consectetur ipsum, eget varius lacus lacus id massa. Fusce suscipit leo eget lorem porta, nec tempor tellus cursus. Curabitur pellentesque vitae nisi finibus gravida. Praesent id lectus ac lacus tristique consectetur. Integer hendrerit odio vel erat varius, et fermentum arcu dignissim.","Sed ac lacinia mi. Aenean mollis aliquam tortor, eget vulputate eros. Nulla luctus ullamcorper tristique. Curabitur ex magna, tincidunt et ante a, sodales vestibulum mi. Proin luctus turpis vel tempus rutrum. Curabitur nec euismod nibh. Suspendisse id ante odio. Cras euismod lacus vel venenatis bibendum. Nulla sit amet semper est.","Donec blandit nibh vitae consequat rhoncus. Phasellus a nibh a leo tempor pellentesque nec in ex. Quisque feugiat interdum nulla. Maecenas ac justo aliquam, feugiat ipsum a, sodales leo. Ut fermentum sodales lacus at ullamcorper. Fusce quis tellus eget ipsum dignissim euismod. Duis dignissim nisi mi, ac luctus metus viverra non. Mauris velit nibh, porttitor id felis at, fermentum maximus erat. Donec eget nisi ultrices nisl eleifend cursus. Cras nec sem ut lectus egestas tincidunt. Curabitur laoreet eget erat gravida congue. In vehicula dolor nec metus tempor aliquet.","Ut vestibulum, eros eget vestibulum efficitur, nunc sem sagittis nisl, in dapibus lectus ex nec sem. Curabitur eleifend luctus purus, sed sodales odio luctus ac. Pellentesque egestas sed neque vel vehicula. Vivamus aliquet lectus et massa luctus laoreet. Nulla pellentesque purus in metus posuere molestie. Sed porta, arcu nec vehicula lobortis, eros eros feugiat arcu, vel venenatis sem nisi vitae velit. Mauris ligula velit, varius non diam in, fermentum viverra lorem. Donec vel sodales augue. Aliquam tristique nunc risus. In malesuada non urna a ultricies. Aliquam egestas commodo nisl, at semper libero efficitur ac. Praesent enim lorem, hendrerit eget pellentesque quis, vestibulum non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nisi purus, efficitur et neque ac, condimentum accumsan libero. Vestibulum consectetur nibh non auctor ultrices. Integer sodales ligula non urna molestie, et feugiat quam eleifend.","Aliquam iaculis eros sit amet purus rutrum, non laoreet mi scelerisque. Pellentesque nibh purus, iaculis in nisl a, consectetur molestie nibh. Mauris vitae lacus finibus, euismod dolor a, finibus neque. Morbi pharetra odio ut laoreet varius. Proin eu mattis arcu. Pellentesque commodo nulla odio, quis maximus sem laoreet sed. Vestibulum viverra aliquam enim, a porta justo venenatis ac. Etiam semper sem id hendrerit egestas. Donec tincidunt ultrices risus et sagittis. Fusce aliquet eu odio ac ullamcorper. Praesent at auctor erat.","Maecenas vel porttitor dui. Vivamus feugiat tellus ac sapien dignissim volutpat. Praesent feugiat arcu augue, aliquam dapibus enim eleifend quis. Sed ultricies aliquam lobortis. Donec id nunc pulvinar diam porta efficitur. Donec risus lacus, malesuada vitae orci at, tincidunt pulvinar neque. Nam posuere suscipit mauris in venenatis. Nullam porta enim nisl, at lacinia tortor auctor a. Curabitur tempor enim nec finibus tristique. Cras auctor egestas posuere. Proin at est dapibus, imperdiet sem nec, bibendum libero. Ut ultricies, elit viverra rhoncus hendrerit, odio augue faucibus leo, a elementum lectus urna euismod neque.","Vestibulum tristique turpis vel enim mollis, a vehicula neque dignissim. Duis ornare, nibh feugiat consequat mattis, odio dui iaculis nibh, et hendrerit metus nisi ac nibh. Etiam fringilla purus nec tincidunt mollis. Donec finibus neque a aliquam sollicitudin. Integer venenatis, dolor a posuere egestas, est neque sollicitudin lacus, ut feugiat erat neque vel augue. Aenean ac dui vel odio placerat rhoncus. Aliquam lectus libero, feugiat non turpis eu, ultrices dapibus leo.","Ut semper justo fringilla, tempor felis et, eleifend lorem. In in porttitor ex. Cras vel lorem ut diam congue laoreet sed egestas augue. Nam bibendum mi at diam accumsan, eget ultrices enim ornare. Nunc luctus nisl quis est pellentesque fringilla. Cras semper elementum metus, quis porttitor quam gravida a. Nulla aliquam laoreet enim. Integer scelerisque arcu lorem, sed mattis libero venenatis non. Proin sit amet sagittis ligula, nec ornare lorem. Nulla elementum commodo maximus. Ut id nulla et nisl aliquam consequat. Curabitur mollis tempor diam, ornare feugiat ex egestas vel. Nunc volutpat odio non odio luctus ornare. Sed maximus suscipit mi, dignissim cursus ante eleifend in. Etiam massa elit, volutpat sit amet luctus vel, dignissim vel leo.","Sed lectus est, lobortis quis congue eu, iaculis non leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet rhoncus justo, ut ullamcorper velit. Ut non ligula et erat gravida suscipit quis sit amet nunc. Nunc sagittis massa at dui sagittis feugiat. Proin posuere tortor pretium ipsum consectetur mollis. Quisque imperdiet porttitor scelerisque. Nullam quis pulvinar tellus, ac fringilla dolor. Donec euismod nisi risus, lacinia consequat quam condimentum in.","Ut lacinia ullamcorper faucibus. Etiam euismod pretium dui, sit amet lacinia ante lacinia vitae. Donec nibh metus, vestibulum sed iaculis at, finibus sed orci. Donec ac sem et purus ultrices sagittis. Nulla rutrum felis id feugiat blandit. Sed ac lectus maximus, posuere diam sed, elementum enim. Proin feugiat dui at fringilla euismod. Donec ullamcorper massa et placerat pharetra. Curabitur hendrerit est ultrices odio sodales mattis. Pellentesque consequat mi eu nulla porttitor consequat. Etiam posuere, purus eget rhoncus rhoncus, lorem felis venenatis mauris, a vehicula nulla velit sed nulla. In hac habitasse platea dictumst. Etiam eu consequat odio. In fringilla semper sapien molestie scelerisque. Morbi convallis, elit a pellentesque cursus, neque metus porta quam, vitae malesuada dui mi sit amet risus."],dynamicSlides:0,showoverflow:!1}},methods:{randomWidth:function(e){var t=[200,300,400,500];return t[e%4]+"px"},getRandomParagraphs:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getRandomParagraph());return t},getRandomParagraph:function(){var e=Math.floor(Math.random()*Math.floor(9));return this.paragraphs[e]}}}),l=n,o=i("0c7c"),d=Object(o["a"])(l,a,r,!1,null,null,null),u=d.exports,c=i("0086"),h=i.n(c);s["a"].use(h.a,{swipeTolerance:80}),new s["a"]({render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.e3e50212.js.map