(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a37453d6"],{4133:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"background-color":"white","border-radius":"5px"},style:t.cardStyles},[r("img",{staticStyle:{width:"100%",height:"200px"},attrs:{src:"https://picsum.photos/id/23"+t.number+"/"+t.cardWidth+"/200"}}),r("div",{staticStyle:{padding:"30px"}},[r("div",{staticClass:"headline-2",style:{color:t.titleColor}},[t._v("Title of "+t._s(t.number))]),r("p",[t._v(" Pellentesque ornare urna turpis, in feugiat augue consectetur nec. Mauris non lobortis arcu, ut mattis metus. In dictum, leo vel dignissim ornare, dui justo congue massa, id pretium quam turpis quis enim. ")]),r("button",{on:{click:function(e){t.titleColor="blue"}}},[t._v("Title Blue")]),r("button",{on:{click:function(e){t.titleColor="red"}}},[t._v("Title Red")]),r("button",{on:{click:function(e){t.titleColor="orange"}}},[t._v("Title Orange")])])])},i=[],o=(r("a9e3"),{name:"AnotherTestComponent",props:{number:{type:Number,required:!0},fullWidth:{type:Boolean,default:!1}},data:function(){return{titleColor:"#000000"}},computed:{cardWidth:function(){return this.fullWidth?1e3:250},cardStyles:function(){return this.fullWidth?{width:"100%"}:{width:"250px"}}}}),u=o,a=r("0c7c"),c=Object(a["a"])(u,n,i,!1,null,null,null);e["default"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",u=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(u,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,u;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(u=o.prototype)&&u!==r.prototype&&i(t,u),t}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),o=r("94ca"),u=r("6eeb"),a=r("5135"),c=r("c6b6"),s=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,b=r("9bf2").f,g=r("58a8").trim,m="Number",v=i[m],I=v.prototype,N=c(d(I))==m,_=function(t){var e,r,n,i,o,u,a,c,s=l(t,!1);if("string"==typeof s&&s.length>2)if(s=g(s),e=s.charCodeAt(0),43===e||45===e){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+s}for(o=s.slice(2),u=o.length,a=0;a<u;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,n)}return+s};if(o(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(N?f((function(){I.valueOf.call(r)})):c(r)!=m)?s(new v(_(e)),r,E):_(e)},w=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;w.length>A;A++)a(v,y=w[A])&&!a(E,y)&&b(E,y,h(v,y));E.prototype=I,I.constructor=E,u(i,m,E)}}}]);
//# sourceMappingURL=chunk-a37453d6.53fcd28d.js.map