(function(e){function t(t){for(var o,r,i=t[0],a=t[1],n=t[2],u=0,w=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&w.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);h&&h(t);while(w.length)w.shift()();return s.push.apply(s,n||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],o=!0,i=1;i<l.length;i++){var a=l[i];0!==c[a]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=l[0]))}return e}var o={},c={app:0},s=[];function r(t){if(o[t])return o[t].exports;var l=o[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=o,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/goban/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var n=0;n<i.length;n++)t(i[n]);var h=a;s.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"004c":function(e,t,l){},"034f":function(e,t,l){"use strict";var o=l("85ec"),c=l.n(o);c.a},"0b95":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var o,c=l("2b0e"),s=l("2f62"),r=l("5f5b"),i=(l("a347"),{size:19,showCoords:!0,preset:null,isBlacksMove:!0,blind:!1,colorless:!1,captives:{black:0,white:0},names:{black:"",white:""},currName:""}),a=l("5530"),n={size:function(e){return e.size},isBlacksMove:function(e){return e.isBlacksMove},blind:function(e){return e.blind},colorless:function(e){return e.colorless},captives:function(e){return Object(a["a"])({},e.captives)},names:function(e){return Object(a["a"])({},e.names)},showCoords:function(e){return e.showCoords},currName:function(e){return e.currName},allowedToPlay:function(e){return!(!e.isBlacksMove||!e.names.black||e.names.black!==e.currName)||!(e.isBlacksMove||!e.names.white||e.names.white!==e.currName)}},h=(l("b0c0"),l("ade3")),u="NEW_GAME",w="SET_PRESETS",d="REVERT_MOVE",b="SWITCH_MOVE",v="TOGGLE_BLIND",f="TOGGLE_COLORLESS",m="CHANGE_SIZE",p="CHANGE_CAPTIVES",g="CHANGE_NAME",k="WHITE_FIRST",O="TOGGLE_COORDS",S="TOGGLE_SEAT",_=(o={},Object(h["a"])(o,u,(function(e){e.isBlacksMove=!0,e.captives.black=0,e.captives.white=0,e.blind=!1,e.colorless=!1,e.names.black="",e.names.white=""})),Object(h["a"])(o,w,(function(e,t){e.preset=t})),Object(h["a"])(o,k,(function(e){e.isBlacksMove=!1})),Object(h["a"])(o,b,(function(e){e.isBlacksMove=!e.isBlacksMove})),Object(h["a"])(o,d,(function(e){e.isBlacksMove=!e.isBlacksMove})),Object(h["a"])(o,m,(function(e,t){e.size=t})),Object(h["a"])(o,g,(function(e,t){e.currName=t})),Object(h["a"])(o,p,(function(e,t){e.captives[t.color]=t.number})),Object(h["a"])(o,v,(function(e){e.blind=!e.blind})),Object(h["a"])(o,f,(function(e){e.colorless=!e.colorless})),Object(h["a"])(o,O,(function(e){e.showCoords=!e.showCoords})),Object(h["a"])(o,S,(function(e,t){e.names[t.color]=e.names[t.color]?"":t.name})),o),C={resetGame:function(e){var t=e.commit;t(u)},setPresets:function(e,t){var l=e.commit;l(w,t)},changeSize:function(e,t){var l=e.commit;l(m,t)},switchMove:function(e){var t=e.commit;t(b)},revertMove:function(e){var t=e.commit;t(d)},whiteFirst:function(e){var t=e.commit;t(k)},toggleBlind:function(e){var t=e.commit;t(v)},toggleColorless:function(e){var t=e.commit;t(f)},toggleCoords:function(e){var t=e.commit;t(O)},changeCaptives:function(e,t){var l=e.commit;l(p,t)},changeName:function(e,t){var l=e.commit;l(g,t)},toggleSeat:function(e,t){var l=e.commit;l(S,t)}},j=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("div",{staticClass:"container justify-content-center"},[l("div",{staticClass:"row"},[l("app-goban",{ref:"goban",attrs:{socket:e.socket}}),l("app-controls",{attrs:{socket:e.socket}})],1)]),l("welcome-modal",{attrs:{socket:e.socket}})],1)},y=[],M=(l("4160"),l("159b"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"col col-12 col-lg-5"},[l("p",{staticClass:"text-center h5"},[e._v(" Пленники: "),l("span",{attrs:{"aria-label":"белых"}},[e._v("⚫")]),e._v(e._s(e.captives.black)+" "),l("span",{attrs:{"aria-label":"черных"}},[e._v("⚪")]),e._v(e._s(e.captives.white)+" ")]),l("div",{staticClass:"my-2 controls"},[l("div",[e._v(" Черный: "+e._s(e.names.black||"свободно")+" "+e._s(e.currName&&e.names.black===e.currName?"(Вы)":"")+" "),e.names.black&&e.names.black!==e.currName?e._e():l("b-button",{staticClass:"m-1",attrs:{variant:"dark"},on:{click:function(t){return e.toggleSeat("black")}}},[e._v(" "+e._s(e.names.black?"Покинуть место":"Занять место")+" ")])],1),l("div",[e._v(" Белый: "+e._s(e.names.white||"свободно")+" "+e._s(e.currName&&e.names.white===e.currName?"(Вы)":"")+" "),e.names.white&&e.names.white!==e.currName?e._e():l("b-button",{staticClass:"m-1",attrs:{variant:"light"},on:{click:function(t){return e.toggleSeat("white")}}},[e._v(" "+e._s(e.names.white?"Покинуть место":"Занять место")+" ")])],1),l("b-form-checkbox",{staticClass:"m-1 d-none d-md-block mr-auto",attrs:{name:"check-button",size:"lg",switch:""},on:{change:e.toggleCoords},model:{value:e.showCoords,callback:function(t){e.showCoords=t},expression:"showCoords"}},[e._v(" Показывать координаты ")]),l("b-form-checkbox",{staticClass:"m-1 d-none d-md-block mr-auto",attrs:{name:"check-button",size:"lg",switch:""},on:{change:e.toggleBlind},model:{value:e.blind,callback:function(t){e.blind=t},expression:"blind"}},[e._v(" Игра вслепую ")]),l("b-button",{staticClass:"m-1",attrs:{variant:"dark"},on:{click:e.changeName}},[e._v("Поменять ник")])],1)])}),N=[],$={name:"Controls",props:{socket:Object},computed:Object(a["a"])({},Object(s["b"])(["showCoords","blind","captives","currName","names","size"])),methods:{revert:function(){this.$store.dispatch("revertMove")},changeName:function(){this.$bvModal.show("welcome-modal")},toggleCoords:function(){this.$store.dispatch("toggleCoords")},toggleBlind:function(){this.$store.dispatch("toggleBlind")},toggleSeat:function(e){var t="sai";this.currName?t=this.currName:this.$store.dispatch("changeName",t),this.names[e]?this.socket.leaveSeat(e):this.socket.sendSeat(e,this.currName),this.$store.dispatch("toggleSeat",{color:e,name:t})}}},z=$,E=(l("c7b8"),l("2877")),B=Object(E["a"])(z,M,N,!1,null,"0c52ccdd",null),P=B.exports,G=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"col col-12 col-lg-7 justify-content-center mb-3"},[l("div",{staticClass:"container container-fluid goban"},[e.showCoords?l("div",{staticClass:"d-flex justify-content-center"},e._l(e.size,(function(t){return l("div",{key:t,staticClass:"legend__item d-none d-md-block"},[e._v(e._s(t))])})),0):e._e(),e._l(e.size,(function(t){return l("div",{key:t,staticClass:"d-flex justify-content-center"},[e.showCoords?l("div",{staticClass:"legend__item d-none d-md-block"},[e._v(e._s(t))]):e._e(),e._l(e.size,(function(o){return l("goban-cell",{key:t+o,attrs:{row:t,cell:o,stone:e.hasStone(t,o),last:e.hasStone(t,o)&&e.isLastMove(t,o)},on:{stone:e.placeStone}})})),e.showCoords?l("div",{staticClass:"legend__item d-none d-md-block"},[e._v(e._s(t))]):e._e()],2)})),e.showCoords?l("div",{staticClass:"d-flex justify-content-center"},e._l(e.size,(function(t){return l("div",{key:t,staticClass:"legend__item d-none d-md-block"},[e._v(e._s(t))])})),0):e._e()],2)])},x=[],T=(l("a623"),l("4de4"),l("7db0"),l("c740"),l("a434"),l("53ca")),R=l("2909"),L={atari:{black:[{row:9,cell:11},{row:10,cell:10}],white:[{row:9,cell:10},{row:10,cell:11}]},corner:{black:[{row:10,cell:1},{row:10,cell:2},{row:10,cell:3},{row:10,cell:4},{row:10,cell:5},{row:10,cell:6},{row:10,cell:7},{row:10,cell:8},{row:10,cell:9},{row:10,cell:10},{row:1,cell:10},{row:2,cell:10},{row:3,cell:10},{row:4,cell:10},{row:5,cell:10},{row:6,cell:10},{row:7,cell:10},{row:8,cell:10},{row:9,cell:10},{row:10,cell:10}]},center:{black:[{row:1,cell:2},{row:1,cell:3},{row:1,cell:4},{row:1,cell:5},{row:1,cell:6},{row:1,cell:7},{row:1,cell:8},{row:1,cell:9},{row:1,cell:10},{row:1,cell:11},{row:1,cell:12},{row:1,cell:13},{row:1,cell:14},{row:1,cell:15},{row:1,cell:16},{row:1,cell:17},{row:1,cell:18},{row:19,cell:2},{row:19,cell:3},{row:19,cell:4},{row:19,cell:5},{row:19,cell:6},{row:19,cell:7},{row:19,cell:8},{row:19,cell:9},{row:19,cell:10},{row:19,cell:11},{row:19,cell:12},{row:19,cell:13},{row:19,cell:14},{row:19,cell:15},{row:19,cell:16},{row:19,cell:17},{row:19,cell:18},{row:2,cell:1},{row:3,cell:1},{row:4,cell:1},{row:5,cell:1},{row:6,cell:1},{row:7,cell:1},{row:8,cell:1},{row:9,cell:1},{row:10,cell:1},{row:11,cell:1},{row:12,cell:1},{row:13,cell:1},{row:14,cell:1},{row:15,cell:1},{row:16,cell:1},{row:17,cell:1},{row:18,cell:1},{row:2,cell:19},{row:3,cell:19},{row:4,cell:19},{row:5,cell:19},{row:6,cell:19},{row:7,cell:19},{row:8,cell:19},{row:9,cell:19},{row:10,cell:19},{row:11,cell:19},{row:12,cell:19},{row:13,cell:19},{row:14,cell:19},{row:15,cell:19},{row:16,cell:19},{row:17,cell:19},{row:18,cell:19}]},full:{black:[{row:3,cell:3},{row:4,cell:4},{row:17,cell:3},{row:16,cell:4},{row:3,cell:17},{row:4,cell:16},{row:17,cell:17},{row:16,cell:16},{row:10,cell:4},{row:10,cell:3},{row:4,cell:10},{row:3,cell:10},{row:16,cell:10},{row:17,cell:10},{row:10,cell:16},{row:10,cell:17},{row:9,cell:10},{row:10,cell:9},{row:10,cell:11},{row:11,cell:10}]}},A={19:{2:[{row:4,cell:4},{row:16,cell:16}],3:[{row:4,cell:4},{row:4,cell:16},{row:16,cell:16}],4:[{row:4,cell:4},{row:4,cell:16},{row:16,cell:4},{row:16,cell:16}],5:[{row:4,cell:4},{row:4,cell:16},{row:10,cell:10},{row:16,cell:4},{row:16,cell:16}],6:[{row:4,cell:4},{row:4,cell:16},{row:16,cell:4},{row:16,cell:16},{row:10,cell:4},{row:10,cell:16}],7:[{row:4,cell:4},{row:4,cell:16},{row:16,cell:4},{row:16,cell:16},{row:10,cell:4},{row:10,cell:10},{row:10,cell:16}],8:[{row:4,cell:4},{row:4,cell:10},{row:4,cell:16},{row:10,cell:4},{row:10,cell:16},{row:16,cell:4},{row:16,cell:10},{row:16,cell:16}],9:[{row:4,cell:4},{row:4,cell:10},{row:4,cell:16},{row:10,cell:4},{row:10,cell:10},{row:10,cell:16},{row:16,cell:4},{row:16,cell:10},{row:16,cell:16}]},13:{2:[{row:4,cell:4},{row:10,cell:10}],3:[{row:4,cell:4},{row:4,cell:10},{row:10,cell:10}],4:[{row:4,cell:4},{row:4,cell:10},{row:10,cell:4},{row:10,cell:10}],5:[{row:4,cell:4},{row:4,cell:10},{row:10,cell:4},{row:10,cell:10},{row:7,cell:7}]},9:{2:[{row:3,cell:3},{row:7,cell:7}],3:[{row:3,cell:3},{row:3,cell:7},{row:7,cell:7}],4:[{row:3,cell:3},{row:3,cell:7},{row:7,cell:3},{row:7,cell:7}],5:[{row:3,cell:3},{row:3,cell:7},{row:7,cell:3},{row:7,cell:7},{row:5,cell:5}]}},J=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:[e.classes].concat(e.edgeClasses),on:{click:e.placeStone}},[!e.stone||e.blind&&!e.last?l("div",{staticClass:"preview",class:[e.previewClass],on:{mouseenter:e.addPreview,focus:e.addPreview,touchstart:e.addPreview,mouseleave:e.removePreview,touchend:e.removePreview,blur:e.removePreview}}):l("div",{class:e.stoneClasses}),e.star?l("div",{staticClass:"star"}):e._e()])},I=[],F=(l("a9e3"),{name:"GobanCell.vue",props:{row:Number,cell:Number,stone:String,last:Boolean},data:function(){return{classes:["cell"],previewClass:""}},methods:{placeStone:function(){this.$emit("stone",this.row,this.cell),this.removePreview()},addPreview:function(){this.allowedToPlay&&(this.previewClass=this.isBlacksMove?"preview_black":"preview_white")},removePreview:function(){this.previewClass=""}},computed:Object(a["a"])(Object(a["a"])({},Object(s["b"])(["size","blind","isBlacksMove","allowedToPlay"])),{},{stoneClasses:function(){var e=this.last&&!this.blind?"last":"";return["stone",this.stone,e]},edgeClasses:function(){var e=[];return 1===this.row?e.push("top"):this.row===this.size&&e.push("bottom"),1===this.cell?e.push("left"):this.cell===this.size&&e.push("right"),e},star:function(){return 4===this.row&&4===this.cell||4===this.row&&this.cell===this.size-3||this.row===this.size-3&&4===this.cell||this.row===this.size-3&&this.cell===this.size-3}}),created:function(){this.removePreview(),this.size>=13&&(this.row===Math.ceil(this.size/2)&&this.cell===Math.ceil(this.size/2)||this.row===Math.ceil(this.size/2)&&4===this.cell||this.row===Math.ceil(this.size/2)&&this.cell===this.size-3||4===this.row&&this.cell===Math.ceil(this.size/2)||this.row===this.size-3&&this.cell===Math.ceil(this.size/2))&&(this.star=!0)}}),W=F,H=(l("d607"),Object(E["a"])(W,J,I,!1,null,"66f8398e",null)),V=H.exports,D={name:"Goban.vue",props:{socket:Object},components:{"goban-cell":V},data:function(){return{publicPath:"/static/goban/",black:[],white:[],currentGroup:[],log:[]}},computed:Object(a["a"])({},Object(s["b"])(["size","isBlacksMove","showCoords","blind","colorless","captives","allowedToPlay"])),methods:{newGame:function(){this.black=[],this.white=[],this.currentGroup=[],this.log=[]},placeStone:function(e,t){var l=this;if(!this.hasStone(e,t)&&this.allowedToPlay){var o=this.isBlacksMove?"black":"white",c=this.isBlacksMove?"white":"black";this[o].push({row:e,cell:t});var s=this.getConnectedCoords(e,t,c);if(s.forEach((function(e){l.currentGroup=[],l.isSurrounded(e.row,e.cell,c)&&l.removeGroup(l.currentGroup,c,o)})),this.currentGroup=[],this.isSurrounded(e,t,o))this[o].pop();else{if(this.log.length>6&&this.isKo())return this.$store.dispatch("changeCaptives",{color:"black",number:this.log[this.log.length-1].captives.black}),this.$store.dispatch("changeCaptives",{color:"white",number:this.log[this.log.length-1].captives.black}),this.black=Object(R["a"])(this.log[this.log.length-1].black),void(this.white=Object(R["a"])(this.log[this.log.length-1].white));this.playStoneSound(),this.log.push({black:Object(R["a"])(this.black),white:Object(R["a"])(this.white),captives:Object(a["a"])({},this.captives)}),this.$store.dispatch("switchMove"),this.socket.sendMove(o,{row:e,cell:t})}}},hasBlackStone:function(e,t){return!!this.black.filter((function(l){return l.row===e&&l.cell===t})).length},hasWhiteStone:function(e,t){return!!this.white.filter((function(l){return l.row===e&&l.cell===t})).length},hasStone:function(e,t){return this.hasWhiteStone(e,t)?"white":this.hasBlackStone(e,t)?this.colorless?"white":"black":e>this.size||e<1||t>this.size||t<1?"edge":null},getConnectedCoords:function(e,t,l){return this[l].filter((function(l){return l.row===e&&l.cell===t+1||l.row===e+1&&l.cell===t||l.row===e-1&&l.cell===t||l.row===e&&l.cell===t-1}))},isSurrounded:function(e,t,l){var o=this;this.currentGroup.push({row:e,cell:t});var c=!this.hasStone(e+1,t)||!this.hasStone(e,t+1)||!this.hasStone(e-1,t)||!this.hasStone(e,t-1);if(c)return!1;var s=this.getConnectedCoords(e,t,l);return 0===s.length||s.every((function(e){return!!o.currentGroup.find((function(t){return t.row===e.row&&t.cell===e.cell}))||o.isSurrounded(e.row,e.cell,l)}))},removeGroup:function(e,t,l){var o=this;e.forEach((function(e){var c=o[t].findIndex((function(t){return t.row===e.row&&t.cell===e.cell}));o[t].splice(c,1),o.$store.dispatch("changeCaptives",{color:l,number:o.captives[l]+1})}))},isKo:function(){var e=this,t=this.log[this.log.length-2].black,l=this.log[this.log.length-2].white;if(this.black.length!==t.length||this.white.length!==l.length)return!1;for(var o=function(l){if(!t.find((function(t){return t.row===e.black[l].row&&t.cell===e.black[l].cell})))return{v:!1}},c=0;c<this.black.length;c++){var s=o(c);if("object"===Object(T["a"])(s))return s.v}for(var r=function(t){if(!l.find((function(l){return l.row===e.white[t].row&&l.cell===e.black[t].cell})))return{v:!1}},i=0;i<this.white;i++){var a=r(i);if("object"===Object(T["a"])(a))return a.v}return!0},revert:function(){this.log.length>1?(this.black=Object(R["a"])(this.log[this.log.length-2].black),this.white=Object(R["a"])(this.log[this.log.length-2].white),this.$store.dispatch("changeCaptives",{color:"black",number:this.log[this.log.length-2].captives.black}),this.$store.dispatch("changeCaptives",{color:"white",number:this.log[this.log.length-2].captives.white})):(this.black=[],this.white=[],this.$store.dispatch("changeCaptives",{color:"black",number:0}),this.$store.dispatch("changeCaptives",{color:"white",number:0})),this.log.pop(),this.socket.requestRevert()},setExercise:function(e){if(!(this.log.length||this.black.length||this.white.length)){if("number"===typeof e)this.black=Object(R["a"])(A[this.size][e]),this.white=[],this.$store.dispatch("whiteFirst");else if("string"===typeof e)switch(e){case"atari":this.black=Object(R["a"])(L.atari.black),this.white=Object(R["a"])(L.atari.white);break;case"corner":this.black=Object(R["a"])(L.corner.black),this.white=[],this.$store.dispatch("whiteFirst");break;case"center":this.black=Object(R["a"])(L.center.black),this.white=[],this.$store.dispatch("whiteFirst");break;case"full":this.black=Object(R["a"])(L.full.black),this.white=[],this.$store.dispatch("whiteFirst");break;case"colorless":this.$store.dispatch("toggleColorless");default:this.black=[],this.white=[]}this.$store.dispatch("changeCaptives",{color:"black",number:0}),this.$store.dispatch("changeCaptives",{color:"white",number:0}),this.log.push({black:Object(R["a"])(this.black),white:Object(R["a"])(this.white),captives:Object(a["a"])({},this.captives)})}},isLastMove:function(e,t){return!!this.log.length&&(this.blind?e===this.black[this.black.length-1].row&&t===this.black[this.black.length-1].cell||e===this.white[this.white.length-1].row&&t===this.white[this.white.length-1].cell:this.isBlacksMove?e===this.white[this.white.length-1].row&&t===this.white[this.white.length-1].cell:e===this.black[this.black.length-1].row&&t===this.black[this.black.length-1].cell)},playStoneSound:function(){var e=new Audio("".concat(this.publicPath,"stone.mp3"));e.play()}},created:function(){var e=this;this.$store.subscribe((function(t){switch(t.type){case u:e.newGame();break;case d:e.revert();break;case w:e.setExercise(t.payload);break}}))}},q=D,K=(l("7139"),Object(E["a"])(q,G,x,!1,null,"53008cbb",null)),U=K.exports,Z=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-modal",{attrs:{id:"welcome-modal"},on:{ok:e.submit}},[e._v(" Ваш ник: "),l("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[l("b-form-input",{attrs:{placeholder:"Ник"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])},Q=[],X={props:{socket:Object},data:function(){return{value:""}},computed:Object(a["a"])({},Object(s["b"])(["names","currName"])),methods:{submit:function(){this.currName&&this.names.black===this.currName?(this.$store.dispatch("toggleSeat",{color:"black"}),this.$store.dispatch("toggleSeat",{color:"black",name:this.value})):this.currName&&this.names.white===this.currName&&(this.$store.dispatch("toggleSeat",{color:"white"}),this.$store.dispatch("toggleSeat",{color:"white",name:this.value})),this.value?(this.$store.dispatch("changeName",this.value),this.socket.sendName(this.value)):(this.$store.dispatch("changeName","sai"),this.socket.sendName(this.value,"sai")),console.log(this.value),this.$bvModal.hide("welcome-modal")}},mounted:function(){this.currName||this.$bvModal.show("welcome-modal")}},Y=X,ee=Object(E["a"])(Y,Z,Q,!1,null,null,null),te=ee.exports,le=(l("99af"),l("d4ec")),oe=l("bee2"),ce=function(){function e(t){var l=this;Object(le["a"])(this,e),Object(h["a"])(this,"listen",(function(e){var t=JSON.parse(e.data);switch(console.log("received message: ".concat(e.data)),t.action){case"connection":console.log("setting board");break;case"revert":l.callbacks.askRevert();break;case"confirm":l.callbacks.confirmRevert();break;case"seat":console.log("setting seat"),l.callbacks.setSeat(t.payload.color,t.payload.name);break;case"leave":console.log("left seat"),l.callbacks.clearSeat(t.payload.color);break;case"move":console.log("placing stone"),l.callbacks.move(t.payload.color,t.payload.coords);break;default:console.log("Unknown action type: ".concat(t.action))}})),this.callbacks=t,this.socket=new WebSocket("ws://".concat(window.location.host).concat(window.location.pathname)),this.socket.onmessage=this.listen,this.socket.onopen=function(){console.log("connection ready")},this.socket.onclose=function(e){e.wasClean||console.log("Connection aborted, code ".concat(e.code))},window.addEventListener("beforeunload",(function(){l.socket.close(1e3)}))}return Object(oe["a"])(e,[{key:"sendMessage",value:function(e){console.log("sending: ".concat(e)),this.socket.send(e)}},{key:"sendName",value:function(e){var t=JSON.stringify({action:"name",payload:{newName:e}});this.sendMessage(t)}},{key:"sendSeat",value:function(e,t){var l=JSON.stringify({action:"seat",payload:{color:e,name:t}});this.sendMessage(l)}},{key:"leaveSeat",value:function(e){var t=JSON.stringify({action:"leave",payload:{color:e}});this.sendMessage(t)}},{key:"sendMove",value:function(e,t){var l=JSON.stringify({action:"move",payload:{color:e,coords:t}});this.sendMessage(l)}},{key:"requestRevert",value:function(){var e=JSON.stringify({action:"revert"});this.sendMessage(e)}},{key:"confirmRevert",value:function(){var e=JSON.stringify({action:"confirm"});this.sendMessage(e)}}]),e}(),se=ce,re={name:"App",components:{"app-goban":U,"app-controls":P,"welcome-modal":te},data:function(){return{socket:new se({setSize:this.setSize,setSeat:this.setSeat,clearSeat:this.clearSeat,setBoard:this.setBoard,askRevert:"",confirmRevert:"",move:this.move})}},computed:Object(a["a"])({},Object(s["b"])(["names"])),methods:{setSeat:function(e,t){if(!this.names[e]){var l={color:e,name:t};this.$store.dispatch("toggleSeat",l)}},clearSeat:function(e){if(this.names[e]){var t={color:e};this.$store.dispatch("toggleSeat",t)}},setSize:function(e){this.$store.dispatch("changeSize",e)},setBoard:function(e){var t=this;this.setSize(e.size),e.players.black&&this.setSeat(e.players.black),e.players.white&&this.setSeat(e.players.white),"standard"!==e.preset?this.$store.dispatch("setPresets",e.preset):e.handicap>0&&this.$store.dispatch("setPresets",e.handicap),e.log&&e.log.forEach((function(e){t.move(e.color,e.coords)}))},move:function(e,t){console.log(e,t),"black"===e&&this.isBlacksMove||"white"===e&&!this.isBlacksMove||this.$store.dispatch("switchMove"),this.$refs.goban.placeStone(t.row,t.cell)}}},ie=re,ae=(l("034f"),Object(E["a"])(ie,j,y,!1,null,null,null)),ne=ae.exports;c["default"].config.productionTip=!1,c["default"].use(r["a"]),c["default"].use(s["a"]);var he=new s["a"].Store({state:i,getters:n,mutations:_,actions:C});new c["default"]({render:function(e){return e(ne)},store:he}).$mount("#app")},7139:function(e,t,l){"use strict";var o=l("004c"),c=l.n(o);c.a},"85ec":function(e,t,l){},"9ce1":function(e,t,l){},a347:function(e,t,l){},c7b8:function(e,t,l){"use strict";var o=l("9ce1"),c=l.n(o);c.a},d607:function(e,t,l){"use strict";var o=l("0b95"),c=l.n(o);c.a}});
//# sourceMappingURL=app.d38ae94a.js.map