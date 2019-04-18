(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],m=0,d=[];m<i.length;m++)r=i[m],a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],o=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var o={},a={app:0},n=[];function r(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=o,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Atomic-Categorizer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0786":function(e,t,s){"use strict";var o=s("2a74"),a=s.n(o);a.a},"0b4a":function(e,t,s){},"0be3":function(e,t,s){},"1a5e":function(e,t,s){},"1dcb":function(e,t,s){},2682:function(e,t,s){},"2a74":function(e,t,s){},"30b9":function(e,t,s){"use strict";var o=s("5b51"),a=s.n(o);a.a},"388b":function(e,t,s){"use strict";var o=s("6edc"),a=s.n(o);a.a},"56d7":function(e,t,s){"use strict";s.r(t);var o=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"o-app",attrs:{id:"app"}},[s("header",{staticClass:"o-app__header"},[e._m(0),s("a_infoBlock",[s("p",[e._v("This is an unofficial tool to help you categorize "),s("a",{attrs:{href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[e._v("Atomic Design")]),e._v(" components.")]),s("p",[e._v("Answer the following quiz to help you figure out what category a particular component belongs to.")])])],1),s("main",{staticClass:"o-app__main"},[s("o_quiz",{on:{update:e.updateScores}}),s("o_recommendation",{attrs:{scores:e.finalScores}})],1),s("footer",{staticClass:"o-app__footer"},[s("a_infoBlock",[s("p",[e._v("Fork this project on "),s("a",{attrs:{href:"https://github.com/Dan503/Atomic-Categorizer"}},[e._v("GitHub")])]),s("p",[e._v("This tool is intended to be used as a guide. The scoring system may not be perfect.")])])],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"o-app__title"},[e._v("Atomic Categorizer"),s("sup",[e._v(" [Beta]")])])}],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"o-quiz"},[s("a_restrictor",{staticClass:"o-quiz__restrictor"},[s("ol",{staticClass:"o-quiz__list"},e._l(e.questions,function(t,o){return s("li",{staticClass:"o-quiz__item"},[s("m_question",{key:t.q,attrs:{index:o,question:t},on:{update:e.updateScores}})],1)}),0)])],1)},i=[],c=[{q:"Will the component only ever be used once per page?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3}}},{q:"Do you expect to use the component in multiple different contexts?",a:{yes:{o:0,m:2,a:3},no:{o:3,m:2,a:0}}},{q:"What element is the outer wrapper for the component?",a:{section:{o:3,m:2,a:0},article:{o:2,m:3,a:0},aside:{o:2,m:2,a:1},nav:{o:4,m:1,a:0},li:{o:0,m:4,a:1},a:{o:0,m:2,a:3},button:{o:0,m:1,a:4},"div wrapped around a single dt and dd element":{o:0,m:1,a:4},other:{o:0,m:0,a:0}}},{q:"Does the component contain a list of repeating components?",a:{yes:{o:4,m:1,a:0},no:{o:1,m:2,a:2}}},{q:"Is the component an item in a list of components?",a:{yes:{o:0,m:4,a:1},no:{o:2,m:1,a:2}}},{q:"Is the component large and complex?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3}}},{q:"Does the component consist of only a single element?",a:{yes:{o:0,m:0,a:5},no:{o:2,m:2,a:1}}},{q:"Are there any atom components embedded into the component?",a:{yes:{o:2,m:3,a:0},no:{o:4,m:1,a:0},"not sure":{o:0,m:0,a:0}}},{q:"Are there any molecule components embedded into the component?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3},"not sure":{o:0,m:0,a:0}}},{q:"Is or will the component ever be embedded inside a molecule component?",a:{yes:{o:0,m:1,a:4},no:{o:3,m:2,a:0},"not sure":{o:0,m:0,a:0}}},{q:"Is or will the component ever be embedded inside an organism component?",a:{yes:{o:0,m:3,a:2},no:{o:3,m:1,a:1},"not sure":{o:0,m:0,a:0}}}],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"m-question"},[s("fieldset",{staticClass:"m-question__fieldset"},[s("legend",{staticClass:"m-question__legend"},[e._v(e._s(e.question.q))]),s("ul",{staticClass:"m-question__answers"},e._l(e.question.a,function(t,o){return s("li",{staticClass:"m-question__answer"},[s("a_radio",{attrs:{describedby:e.descID,label:o,name:e.question.q,points:t,index:e.index},on:{update:e.updateScores}})],1)}),0),s("div",{attrs:{id:e.descID}},[e.scores?s("m_scores",{staticClass:"m-question__scores",attrs:{scores:e.scores}}):e._e()],1)])])},u=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"a-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenValue,expression:"chosenValue"}],staticClass:"a-radio__input -visuallyHidden",attrs:{type:"radio",name:e.name,"aria-describedby":e.describedby},domProps:{value:e.label,checked:e._q(e.chosenValue,e.label)},on:{change:[function(t){e.chosenValue=e.label},e.update]}}),s("span",{staticClass:"a-radio__label"},[e._v(e._s(e.label))])])},d=[],p={data(){return{chosenValue:""}},props:["name","label","points","index","describedby"],methods:{update(){this.$emit("update",this.selectionData())},selectionData(){return{points:this.points,qIndex:this.index,question:this.name,selection:this.chosenValue}}}},h=p,_=(s("ecfe"),s("2877")),f=Object(_["a"])(h,m,d,!1,null,null,null),v=f.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"a-score",class:{"-selected":e.selected}},[s("dt",{staticClass:"a-score__name",attrs:{"aria-current":e.selected}},[e._v(e._s(e.name))]),s("dd",{staticClass:"a-score__value"},[e._v(e._s(e.value))])])},b=[],y={props:["name","value","selected"]},C=y,q=(s("ec07"),Object(_["a"])(C,g,b,!1,null,null,null)),w=q.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("dl",{staticClass:"m-scores"},[s("a_score",{staticClass:"m-scores__score",attrs:{name:"Atom",value:e.scores.a,selected:e.selected.a}}),s("a_score",{staticClass:"m-scores__score",attrs:{name:"Molecule",value:e.scores.m,selected:e.selected.m}}),s("a_score",{staticClass:"m-scores__score",attrs:{name:"Organism",value:e.scores.o,selected:e.selected.o}})],1)},O=[],j={components:{a_score:w},props:{scores:{type:Object,default:()=>({a:0,m:0,o:0})},highlight:{type:Boolean,default:!1}},computed:{selected(){const e={a:!1,m:!1,o:!1};if(!this.highlight)return e;const t=Object.keys(this.scores),s=Object.values(this.scores),o=Math.max(...s),a=s.filter(e=>e===o),n=s.indexOf(o),r=t[n];let i={...e};return 1===a.length&&(i[r]=!0),i}}},k=j,$=(s("388b"),Object(_["a"])(k,x,O,!1,null,null,null)),H=$.exports,S={data(){return{scores:!1}},components:{a_radio:v,a_score:w,m_scores:H},props:["question","index"],computed:{descID(){return this.question.q.replace(/\W/g,"")}},methods:{updateScores(e){function t(e){let t={...e};return Object.keys(t).forEach(e=>t[e]=`+${t[e]}`),t}this.$emit("update",e),this.scores=t(e.points)}}},A=S,E=(s("f351"),Object(_["a"])(A,l,u,!1,null,null,null)),z=E.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"a-restrictor"},[e._t("default")],2)},I=[],P=(s("888f"),{}),B=Object(_["a"])(P,D,I,!1,null,null,null),M=B.exports,T={data:()=>({questions:c}),components:{m_question:z,a_restrictor:M},props:["scores"],methods:{updateScores(e){this.$emit("update",e)}}},V=T,N=(s("30b9"),Object(_["a"])(V,r,i,!1,null,null,null)),F=N.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"a-infoBlock"},[s("a_restrictor",{staticClass:"a-infoBlock__restrictor"},[e._t("default")],2)],1)},J=[],G={components:{a_restrictor:M}},Y=G,K=(s("8207"),Object(_["a"])(Y,W,J,!1,null,null,null)),L=K.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"o-recommendation"},[s("a_restrictor",{staticClass:"o-recommendation__restrictor"},[s("div",{staticClass:"o-recommendation__inner"},[s("h2",{staticClass:"o-recommendation__title"},[e._v("Current recommendation:")]),s("m_scores",{staticClass:"o-recommendation__scores",attrs:{scores:e.scores,highlight:!0}}),s("m_graph",{staticClass:"o-recommendation__graph",attrs:{scores:e.scores}})],1)])],1)},R=[],U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"m-graph",attrs:{"aria-hidden":"true"}},[s("div",{staticClass:"m-graph__chart"},[s("div",{staticClass:"m-graph__column -a",class:{"-isHighest":e.isHighest.a},style:e.style.a}),s("div",{staticClass:"m-graph__column -m",class:{"-isHighest":e.isHighest.m},style:e.style.m}),s("div",{staticClass:"m-graph__column -o",class:{"-isHighest":e.isHighest.o},style:e.style.o})]),s("div",{staticClass:"m-graph__labels"},[s("div",{staticClass:"m-graph__label -a",class:{"-isHighest":e.isHighest.a}},[e._v("A")]),s("div",{staticClass:"m-graph__label -m",class:{"-isHighest":e.isHighest.m}},[e._v("M")]),s("div",{staticClass:"m-graph__label -o",class:{"-isHighest":e.isHighest.o}},[e._v("O")])])])},X=[],Z={props:["scores"],computed:{highest(){const{a:e,m:t,o:s}=this.scores,o=Math.max(e,t,s),a=Object.keys(this.scores).reduce((e,t)=>this.scores[e]>this.scores[t]?e:t),n=[e,t,s].filter(e=>e===o);return{key:a,value:o,isDraw:n.length>1}},isHighest(){const e=e=>this.highest.key===e&&!this.highest.isDraw;return{a:e("a"),m:e("m"),o:e("o")}},percentage(){const{a:e,m:t,o:s}=this.scores,o=e=>e/this.highest.value*100+"%";return{a:o(e),m:o(t),o:o(s)}},style(){const e=e=>`transform: translateY(-${e})`;return{a:e(this.percentage.a),m:e(this.percentage.m),o:e(this.percentage.o)}}}},ee=Z,te=(s("e642"),Object(_["a"])(ee,U,X,!1,null,null,null)),se=te.exports,oe={components:{a_score:w,a_restrictor:M,m_scores:H,m_graph:se},props:["scores"]},ae=oe,ne=(s("d66b"),Object(_["a"])(ae,Q,R,!1,null,null,null)),re=ne.exports,ie={name:"app",data(){return{scores:{a:[],m:[],o:[]},finalScores:{a:0,m:0,o:0}}},components:{o_quiz:F,o_recommendation:re,a_infoBlock:L},methods:{updateScores(e){const t=ce(this.scores,e),s=le(t);this.finalScores=s}}};function ce(e,t){for(const s in e)e.hasOwnProperty(s)&&(e[s][t.qIndex]=t.points[s]);return e}function le(e){let t={};for(const s in e)if(e.hasOwnProperty(s)){const o=e[s],a=o.reduce((e,t)=>t+e,0);t[s]=a}return t}var ue=ie,me=(s("0786"),s("e7cd"),Object(_["a"])(ue,a,n,!1,null,null,null)),de=me.exports,pe=s("9483");Object(pe["a"])("/Atomic-Categorizer/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(de)}}).$mount("#app")},5806:function(e,t,s){},"5b51":function(e,t,s){},"6edc":function(e,t,s){},"81a9":function(e,t,s){},8207:function(e,t,s){"use strict";var o=s("2682"),a=s.n(o);a.a},"888f":function(e,t,s){"use strict";var o=s("af87"),a=s.n(o);a.a},af87:function(e,t,s){},d66b:function(e,t,s){"use strict";var o=s("0be3"),a=s.n(o);a.a},e642:function(e,t,s){"use strict";var o=s("1dcb"),a=s.n(o);a.a},e7cd:function(e,t,s){"use strict";var o=s("0b4a"),a=s.n(o);a.a},ec07:function(e,t,s){"use strict";var o=s("81a9"),a=s.n(o);a.a},ecfe:function(e,t,s){"use strict";var o=s("5806"),a=s.n(o);a.a},f351:function(e,t,s){"use strict";var o=s("1a5e"),a=s.n(o);a.a}});
//# sourceMappingURL=app-legacy.04c8075d.js.map