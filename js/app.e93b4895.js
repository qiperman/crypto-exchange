(function(e){function t(t){for(var n,s,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://qiperman.github.io/crypto-exchange//";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0468":function(e,t,r){"use strict";r.r(t),t["default"]={id:"CloseIcon-usage",viewBox:"0 0 496.096 496.096",url:r.p+"img/icons.a800e13a.svg#CloseIcon",toString:function(){return this.url}}},"12b5":function(e,t,r){"use strict";r.r(t),t["default"]={id:"SwapIcon-usage",viewBox:"0 0 64 64",url:r.p+"img/icons.a800e13a.svg#SwapIcon",toString:function(){return this.url}}},"2b01":function(e,t,r){"use strict";r.r(t);r("99af"),r("4de4"),r("fb6a");var n=r("2b0e"),i=r("ffee");n["a"].filter("filePath",(function(e){return null!==e&&e.length?(e="/"===e.charAt(0)?e.slice(1):e,"".concat(i["a"].images.basePath,"/").concat(e)):null}))},"56d7":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-background min-h-full-vh max-w-full-vw flex justify-center flex-col items-center p-4",attrs:{id:"app"}},[r("div",{staticClass:"inline-block"},[r("h1",{staticClass:"text-4xl sm:text-5xl text-primary font-semibold leading-none mb-4 sm:mb-2"},[e._v("Crypto Exchange")]),r("h2",{staticClass:"text-2xl sm:text-3xl text-dark mb-8 ml-1 leading-none"},[e._v("Exchange fast and easy")]),r("div",{staticClass:"flex md:inline-flex pb-4 flex-col md:flex-row"},[r("app-input-select",{attrs:{currencies:e.currencies,min:e.min,danger:null!==e.min&&Number(e.model.value)<e.min},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),r("div",{staticClass:"flex items-center justify-center md:py-0 text-primary p-4 -mt-4"},[r("app-icon",{attrs:{name:"SwapIcon",size:"2.5rem"}})],1),r("app-input-select",{attrs:{currencies:e.currencies,readonly:""},model:{value:e.model2,callback:function(t){e.model2=t},expression:"model2"}})],1),e.isDisabled?r("div",{staticClass:"text-center text-danger text-lg"},[e._v(" This pair is disabled now ")]):e._e(),r("div",{staticClass:"mt-4 flex md:items-end flex-col md:flex-row"},[r("app-input",{staticClass:"flex-1",attrs:{label:"Yor Ethereum address"}}),r("app-button",{staticClass:"mt-8 md:ml-8 md:mt-0"},[e._v("EXCHANGE")])],1)])])},a=[],s=(r("a9e3"),r("96cf"),r("1da1")),o={name:"App",data:function(){return{currencies:[],model:{value:null,currency:"btc"},model2:{value:null,currency:"eth"},min:0,isDisabled:!1}},methods:{updateEstimated:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.model2.value="",!(null===e.model.value||null!==e.min&&e.min>Number(e.model.value))){t.next=5;break}return null!==e.min&&(e.isDisabled=!1),e.model2.value="-",t.abrupt("return",!1);case 5:return t.next=7,e.$api.getEstimated(e.model.currency,e.model2.currency,e.model.value);case 7:r=t.sent,n=r.data,null===n?(e.isDisabled=!0,e.model2.value="-"):(e.isDisabled=!1,e.model2.value=n);case 10:case"end":return t.stop()}}),t)})))()},updateMin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getMin(e.model.currency,e.model2.currency);case 2:r=t.sent,n=r.data,null===n?e.isDisabled=!0:(e.min=Number(n.min),Number(e.model.value)<e.min&&(e.model.value=e.min),e.updateEstimated());case 5:case"end":return t.stop()}}),t)})))()},getCurrencies:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getAllCurrencies();case 2:r=t.sent,n=r.data,e.currencies=n,e.updateMin();case 6:case"end":return t.stop()}}),t)})))()}},created:function(){this.getCurrencies()},watch:{"model.currency":function(){this.updateMin()},"model2.currency":function(){this.updateMin()},"model.value":function(){this.updateEstimated()}}},u=o,l=r("2877"),c=Object(l["a"])(u,i,a,!1,null,null,null),d=c.exports,p=(r("def6"),r("fde2"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){e.closeOptions()},expression:"() => {closeOptions()}"}],staticClass:"border border-solid border-dark rounded flex md:inline-flex bg-white relative",class:{"border-danger":e.danger}},[r("div",{staticClass:"flex-1"},[r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"outline-none w-full h-full font-body text-2xl px-4 rounded",attrs:{type:"text"},domProps:{value:e.currentValue},on:{keypress:function(t){return e.$validateInput(t,"udouble")},input:function(t){t.target.composing||(e.currentValue=t.target.value)}}},"input",e.$attrs,!1))]),r("div",{staticClass:"border-l border-solid border-dark p-4 flex items-center cursor-pointer",on:{click:function(t){e.isActive=!0}}},[e.currentCurrency?r("div",{staticClass:"mr-4 flex items-center justify-center flex-1 h-8 w-6"},[r("img",{attrs:{src:e._f("filePath")(e.currentCurrency.image),alt:""}})]):e._e(),e.currentCurrency?r("span",{staticClass:"text-2xl uppercase"},[e._v(e._s(e.currentCurrency.symbol))]):e._e()]),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"bg-white absolute z-10",staticStyle:{top:"-1px",right:"-1px",left:"-1px"}},[r("div",{staticClass:"w-full h-full border border-solid border-dark border-b-light rounded-t relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],ref:"searchInput",staticClass:"outline-none w-full h-full font-body text-2xl p-4 py-5 rounded",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchString},on:{keydown:e.onSearchKeyDown,input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),r("div",{staticClass:"absolute color-light cursor-pointer z-20 flex items-center justify-center",staticStyle:{right:"1rem",top:"50%",transform:"translateY(-50%)"},on:{click:function(t){return t.stopPropagation(),e.closeOptions(t)}}},[r("app-icon",{attrs:{name:"CloseIcon",size:"1rem"}})],1)]),r("div",{ref:"dropdownMenu",staticClass:"border border-solid border-dark border-t-0 rounded-b overflow-y-auto",staticStyle:{"max-height":"290px"}},[e.filteredCurrencies.length?e._l(e.filteredCurrencies,(function(t,n){return r("div",{key:n,staticClass:"flex items-center p-4 cursor-pointer",class:{"bg-background":e.currentCurrency.symbol===t.symbol||e.typeAheadPointer===n},on:{click:function(r){e.currentCurrency=t.symbol},keypress:function(r){if(!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.currentCurrency=t.symbol},mouseover:function(t){e.typeAheadPointer=n}}},[r("div",{staticClass:"flex items-center pr-2 flex items-center flex-1"},[r("div",{staticClass:"mr-6 w-10 flex items-center justify-center"},[r("img",{attrs:{src:e._f("filePath")(t.image),alt:t.symbol}})]),r("div",{staticClass:"text-2xl uppercase text-dark"},[e._v(" "+e._s(t.symbol)+" ")])]),r("div",{staticClass:"text-light text-xl flex-1"},[e._v(" "+e._s(t.name)+" ")])])})):r("div",{staticClass:"p-4 text-center text-xl uppercase text-dark"},[e._v(" No currencies found ")])],2)])])],1),null!==e.min?r("div",{staticClass:"text-light uppercase ml-2 text-sm",class:{"text-danger":e.danger}},[e._v(" Min: "+e._s(e.min)+" ")]):e._e()])}),f=[],m=(r("4de4"),r("7db0"),r("c740"),r("caad"),r("c975"),r("ac1f"),r("2532"),r("5319"),r("498a"),{methods:{maybeAdjustScroll:function(){var e,t=(null===(e=this.$refs.dropdownMenu)||void 0===e?void 0:e.children[this.typeAheadPointer])||!1;if(t){var r=this.getDropdownViewport(),n=t.getBoundingClientRect(),i=n.top,a=n.bottom,s=n.height;if(i<r.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(s+i);if(a>=r.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(r.height-s)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}}),h={name:"AppInputSelect",mixins:[m],props:{value:{},currencies:{type:Array,required:!0},min:{type:[Number,Object],default:function(){return null}},danger:{default:!1,type:Boolean}},data:function(){return{isActive:!1,searchString:"",typeAheadPointer:-1}},computed:{filteredCurrencies:function(){if(!this.searchString.length)return this.currencies;var e=this.searchString.trim().toLowerCase();return this.currencies.filter((function(t){return t.symbol.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)}))},currentValue:{get:function(){return this.value.value},set:function(e){var t=this.value;t.value=e,t.value=t.value.replace(/,/g,".").replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),0===t.value.indexOf(".")&&(t.value=t.value.substring(1)),this.$emit("input",t)}},currentCurrencyIndex:function(){var e=this;return this.filteredCurrencies.findIndex((function(t){return t.symbol===e.value.currency}))},currentCurrency:{get:function(){var e=this;return this.currencies.find((function(t){return t.symbol===e.value.currency}))},set:function(e){var t=this.value;t.currency=e,this.$emit("input",t),this.isActive=!1}}},methods:{closeOptions:function(){this.isActive=!1},typeAheadUp:function(){this.typeAheadPointer=this.typeAheadPointer-1<0?0:this.typeAheadPointer-1,this.maybeAdjustScroll()},typeAheadDown:function(){this.typeAheadPointer=this.typeAheadPointer+1>this.filteredCurrencies.length-1?this.filteredCurrencies.length-1:this.typeAheadPointer+1,this.maybeAdjustScroll()},onSearchKeyDown:function(e){var t=e.which?e.which:e.keyCode;switch(t){case 13:this.typeAheadPointer>=0&&this.typeAheadPointer<=this.filteredCurrencies.length&&(this.currentCurrency=this.filteredCurrencies[this.typeAheadPointer].symbol);break;case 27:this.isActive=!1;break;case 38:e.preventDefault(),this.typeAheadUp();break;case 40:e.preventDefault(),this.typeAheadDown();break}}},watch:{isActive:function(){var e=this;this.isActive?(this.typeAheadPointer=this.currentCurrencyIndex,this.$nextTick((function(){e.maybeAdjustScroll(),e.$refs.searchInput.focus()}))):this.searchString=""}}},v=h,b=(r("ea44"),Object(l["a"])(v,p,f,!1,null,null,null)),y=b.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.label?r("label",{staticClass:"text-2xl text-dark",attrs:{for:e._uid}},[e._v(e._s(e.label))]):e._e(),r("input",{staticClass:"outline-none w-full h-full font-body text-2xl p-4 py-5 rounded border border-solid border-dark",attrs:{type:"text",id:e._uid}})])},x=[],w={name:"AppInput",props:{label:{},value:{}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},C=w,_=Object(l["a"])(C,g,x,!1,null,null,null),k=_.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"text-2xl py-4 px-8 bg-primary text-white rounded border border-solid border-primary hover:bg-primary-hover"},[e._t("default")],2)},O=[],S={name:"AppButton"},P=S,j=Object(l["a"])(P,A,O,!1,null,"0aedb8b1",null),$=j.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"fill-current",style:{width:e.size,height:e.size},attrs:{viewBox:e.icon.viewBox,width:e.size,height:e.size}},[r("use",{attrs:{"xlink:href":e.icon.url}})])},E=[],I={name:"AppIcon",props:{name:{type:String},size:{default:"24px"}},data:function(){return{icon:null}},created:function(){var e=r("6f32")("./".concat(this.name,".svg"));Object.prototype.hasOwnProperty.call(e,"default")&&(e=e.default),this.icon=e}},M=I,N=Object(l["a"])(M,D,E,!1,null,null,null),T=N.exports,z=r("bc3a"),R=r.n(z),B=r("ffee"),L=R.a.create({baseURL:B["a"].api.baseUrl}),U=L,V={getAllCurrencies:function(){return U.get("get_all_currencies",{params:{api_key:B["a"].api.key}})},getMin:function(e,t){return U.get("get_ranges",{params:{currency_from:e,currency_to:t,api_key:B["a"].api.key}})},getEstimated:function(e,t,r){return U.get("get_estimated",{params:{currency_from:e,currency_to:t,api_key:B["a"].api.key,amount:r}})}},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",r=e.which?e.which:e.keyCode;if("double"===t)r>=48&&r<=57||46===r||44===r||45===r||e.preventDefault();else if("udouble"===t)r>=48&&r<=57||46===r||44===r||e.preventDefault();else if("int"===t)r>=48&&r<=57||45===r||e.preventDefault();else{if("uint"!==t)return!0;r>=48&&r<=57||e.preventDefault()}};n["a"].prototype.$validateInput=q,n["a"].directive("click-outside",{bind:function(e,t){var r=t.modifiers.bubble,n=function(n){(r||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=n,document.addEventListener("click",n)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}),n["a"].component(y.name,y),n["a"].component(k.name,k),n["a"].component($.name,$),n["a"].component(T.name,T),n["a"].prototype.$api=V,n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")},"6f32":function(e,t,r){var n={"./CloseIcon.svg":"0468","./SwapIcon.svg":"12b5"};function i(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="6f32"},b6ba:function(e,t,r){},def6:function(e,t,r){},ea44:function(e,t,r){"use strict";var n=r("b6ba"),i=r.n(n);i.a},fde2:function(e,t,r){r("2b01")},ffee:function(e,t,r){"use strict";var n={api:{baseUrl:"https://api.simpleswap.io/v1/",key:"7306165f-4828-49f1-a856-ed52f8a49d53"},images:{basePath:"https://simpleswap.io/"}};t["a"]=n}});
//# sourceMappingURL=app.e93b4895.js.map