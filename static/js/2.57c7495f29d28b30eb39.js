webpackJsonp([2],{"/S0f":function(t,e,n){t.exports=n.p+"static/img/order-back.c6e5140.png"},iTzg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("lC5x"),a=n.n(s),r=n("J0Oq"),i=n.n(r),c=n("aYx4"),o=void 0,v=void 0,l=void 0,d={data:function(){return{lang:"zh",lang_list:{},langShow:!1,address:"",short_address:"connect",parents:"",meanShow:!1,maskShow:!1}},created:function(){},mounted:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lang=sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):"en",t.lang_list=t.en.lang,e.t0=t.lang,e.next="zh"===e.t0?5:"en"===e.t0?7:9;break;case 5:return t.lang_list=t.zh.lang,e.abrupt("break",9);case 7:return t.lang_list=t.en.lang,e.abrupt("break",9);case 9:t.parents=t.$route.query.p_address?t.$route.query.p_address:t.getUrlParam("p_address"),t.checkNet(),new c.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){},scrollContainer:null}).init();case 13:case"end":return e.stop()}},e,t)}))()},methods:{toWhite:function(){window.open("/static/djt.pdf")},toIndex:function(){this.$router.push({name:"home",params:{}}),this.meanShow=!1},toOrder:function(){this.$router.push({name:"order",params:{}}),this.meanShow=!1},toKuang:function(){this.$router.push({name:"kuang",params:{}}),this.meanShow=!1},switchLang:function(t,e){e.currentTarget;switch(t){case"zh":sessionStorage.setItem("lang","zh");break;case"en":sessionStorage.setItem("lang","en")}location.reload()},showLang:function(){this.langShow?this.langShow=!1:this.langShow=!0},showMask:function(){this.maskShow=!0},closeMask:function(){this.maskShow=!1},showMean:function(){this.meanShow=!0},closeMean:function(){this.meanShow=!1},connectWallet:function(){this.address?this.short_address=this.address.substr(0,3)+"..."+this.address.substr(this.address.length-3):this.checkNet()},getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},checkNet:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t;try{o=new ethers.providers.Web3Provider(web3.currentProvider),o.getSigner(),n.checkLogin()}catch(t){n.$toast("请使用币安只能链连接")}case 2:case"end":return e.stop()}},e,t)}))()},checkLogin:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,setInterval(function(){window.ethereum.enable().then(function(t){(0!=t.length||""==v)&&0!=t.length?t[0]!=v&&(v=t[0],window.location.reload(),console.log("account change, start bat updateData!")):window.location.reload()}).catch(function(t){console.log("User rejected provider access"===t)})},1e3),window.ethereum.enable().then(function(){var t=i()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.length){t.next=3;break}return console.log("33333"),t.abrupt("return");case 3:if(v=e[0],console.log("defaultAccount: ",v),1!=(l=window.ethereum.networkVersion)){t.next=12;break}return n.type="ETH",n.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 12:if(42!=l){t.next=18;break}return n.type="ETH",n.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 18:if(128!=l){t.next=24;break}return n.type="HT",n.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 24:if(256!=l){t.next=30;break}return n.type="HT",n.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 30:if(56!=l){t.next=34;break}n.type="BNB",t.next=36;break;case 34:return n.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 36:""!=v&&(n.address=v);case 37:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),setTimeout(function(){v&&(n.address=v,n.short_address=n.address.substr(0,3)+"..."+n.address.substr(n.address.length-3))},500);case 4:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"djtIndex-top"},[s("img",{staticClass:"djtIndex-top-back",attrs:{src:n("/S0f"),alt:""}}),t._v(" "),s("div",{staticClass:"djtIndex-top-mean"},[t._m(0),t._v(" "),s("div",{staticClass:"djtIndex-top-mean-right"},[s("span",{staticClass:"djtIndex-top-mean-right-text",on:{click:function(e){return t.showMask()}}},[t._v("链接钱包")]),t._v(" "),s("img",{staticClass:"djtIndex-top-mean-right-img1",attrs:{src:n("2IZu"),alt:""},on:{click:function(e){return t.showLang()}}}),t._v(" "),s("img",{staticClass:"djtIndex-top-mean-right-img2",attrs:{src:n("+auw"),alt:""},on:{click:t.showMean}})])]),t._v(" "),t._m(1)]),t._v(" "),t.meanShow?s("div",{staticClass:"index_pop_content"},[s("div",{staticClass:"index_pop_top"},[t._m(2),t._v(" "),s("div",{on:{click:t.closeMean}},[s("img",{staticClass:"index_pop_top-right",attrs:{src:n("/TeD"),alt:""}})])]),t._v(" "),s("div",{staticClass:"index_pop_main_tab"},[s("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toIndex()}}},[t._m(3)]),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toKuang()}}},[t._m(5)]),t._v(" "),s("div",{staticClass:"index_pop_middle",on:{click:t.toOrder}},[t._m(6)]),t._v(" "),s("div",{staticClass:"index_pop_middle",on:{click:t.toWhite}},[t._m(7)]),t._v(" "),t._m(8)])]):t._e(),t._v(" "),t.maskShow?s("div",{staticClass:"index_mask"},[t._m(9),t._v(" "),s("div",{on:{click:function(e){return t.closeMask()}}},[s("img",{staticClass:"index_mask-close",attrs:{src:n("JXSh"),alt:""}})])]):t._e(),t._v(" "),t.langShow?s("div",{staticClass:"index_lang"},[s("div",{staticClass:"index_lang-button"},[t._v("中文")]),t._v(" "),s("div",{staticClass:"index_lang-button-active"},[t._v(" EN")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"djtIndex-top-mean-left"},[e("img",{staticClass:"djtIndex-top-mean-left-img",attrs:{src:n("iQH9"),alt:""}}),this._v(" "),e("span",{staticClass:"djtIndex-top-mean-left-text"},[this._v("Donald John Trump")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"kuang-content"},[s("div",{staticClass:"order-content"},[s("div",{staticClass:"order-content-top"},[s("div",[s("img",{staticClass:"order-content-top-imgUsdt",attrs:{src:n("zkHk"),alt:""}}),t._v(" "),s("img",{staticClass:"order-content-top-imgDji",attrs:{src:n("ku3g"),alt:""}})]),t._v(" "),s("div",[t._v("DJT-USDT")])]),t._v(" "),s("div",{staticClass:"order-content-line"}),t._v(" "),s("div",{staticClass:"order-content-tab"},[s("div",{staticClass:"order-content-tab-left"},[s("div",[t._v("质押数量：")]),t._v(" "),s("div",[t._v("质押时间：")]),t._v(" "),s("div",[t._v("解锁时间：")]),t._v(" "),s("div",[t._v("收 益：")])]),t._v(" "),s("div",{staticClass:"order-content-tab-right"},[s("div",[t._v("1000 DJT 1000 DJT   ")]),t._v(" "),s("div",[t._v("2022-03-03 20:05")]),t._v(" "),s("div",[t._v("2022-03-28 20:04")]),t._v(" "),s("div",[t._v("100.3645DJT")])])]),t._v(" "),s("div",{staticClass:"kuang-content-submit order-content-button-back1"},[t._v("未解锁")]),t._v(" "),s("div",{staticClass:"kuang-content-submit"},[t._v("解锁")]),t._v(" "),s("div",{staticClass:"kuang-content-submit order-content-button-back2"},[t._v("已解锁")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"index_pop_top-left",attrs:{src:n("iQH9"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:n("+iNP"),alt:""}}),this._v(" "),e("span",[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle"},[e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:n("cS2Z"),alt:""}}),this._v(" "),e("span",[this._v("交换DJT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:n("JEyF"),alt:""}}),this._v(" "),e("span",[this._v("DJT挖矿")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:n("CpAf"),alt:""}}),this._v(" "),e("span",[this._v("挖矿记录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:n("LWLN"),alt:""}}),this._v(" "),e("span",[this._v("白皮书")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_bottom"},[e("div",{staticClass:"index_pop_bottom-left"},[e("img",{attrs:{src:n("2+6y"),alt:""}})]),this._v(" "),e("div",{staticClass:"index_pop_bottom-left"},[e("img",{attrs:{src:n("9TKO"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_mask-content"},[e("div",{staticClass:"index_mask-title"},[this._v("链接钱包")]),this._v(" "),e("img",{staticClass:"index_mask-img",attrs:{src:n("0RgF"),alt:""}})])}]},m=n("C7Lr")(d,u,!1,null,null,null);e.default=m.exports},ku3g:function(t,e){t.exports="data:image/png;base64,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"},zkHk:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IArs4c6QAAAblQTFRFAAAAAFXVAG3bFHbrEm3bFGbgFHDgFHDrGWvmF2zoF3ToF3HhFm3pFHDmFG7mFnDmFm/mFXHnFXDlFXDoF3DoF3DmFnDmFnDnFm/lFm/nFm/mFnDmF2/lF3HmF3DmFnDmFm/mF2/mF2/lF3DmF2/nF2/mF3DmF3DnF3DmF3DnF2/mFnDmFnDlF3DmF2/mF2/nF2/mFnDlFnDmF2/mFnDnFm/mFnDnFnDmF2/mF3DmGHDmGHHmGXHmG3LmH3XmJXjnJXnnJnnnLX3oMYDoMoDpNoPpOITpOYXpPYfqPYjqQovqRIzrTJDrTpLrTpLsUJPsUZTsU5XsVJXsVZbsWJjtWZntWpntXZvtX5ztX5zuYZ7uZ6HuaaPva6PvbaTvb6bvcKfvcafvc6jwdKnwe63we67wfq/xgLDxg7PxhLPxibbyjLjylr7znML0ocX0pMf1psj1qsv1sM72ss/2s9D3vtb4wdj4wtn4xtv4yN35yd75z+H50OL60eP60uP60+T61OX61+b62Of72+n73+v75O785/D86fH87PP97vT97/X98fb98vf99Pj99/r++Pr++Pv++vz+////jI0Q6QAAADl0Uk5TAAYHDQ4ZGRkfISEiIzIzW1xhYmJie4KClZWWlpqam6Slpa+vvr+/v8jI19jZ3d7e7u/y8/v8/P3+KYCh0gAAAi9JREFUSMdjYMAAPIISqrpGpqZGuqoSgjwMBAGHqJYlCtAS5cCrgVfJ3BIDmCvx4tTAqmhhiRVYKLJh18FvaIkTGPJj0cAoa4kXyDKi62BRsSQAVFhQdTBrWhIEGsworlK3JAKoMyFpkbEkCsgihZUlkQAebmwGxGoxZIdqkbckGihAUwlynLsnYIBY5HTAB9aijGxM0iQM0IcsrwzSwWmGLBSPqaUbWd6MC6hFzJIULZZiQC3aKCLJmFr6URRoA/MgapC4hINBCkhtcxiYHYqqgodBCGtg+oO01GOVEmaQwCruC9JSi1VKikEVXcg+MD4luwikpSMnPSHUxQZNXpVBD5lrG1FQUZgdE+QZAtLS4O4XlZJfVZrmhKxGn8EYiefc1BaA6RfHvL5MJEXGDCZIvJBJXXGOEL90dvd2VoKZ1l4lk6qRFJmiaLH0Le6ZUFOUlRjp4+Hq6uYdHJ2aW9Y6qSHDAUWLMarn7Hzic0uqWrpBDpvY3lhemBXhjKrCGNX7qPFSZ4VNSh8zkAlFpRqDJKlapBmESU8wPKRqAVYfOqRp0cbIYgS1iAO1cJmRogWckVGLC0JawMUFAx+Wisi3FQjKsVROkEKJQYH4ok8RWlqyG5JcwJJRjDMwyBKnQw6pfmEivUpiYCGi4tNEqyxZ1AjpUGPBqMTlCPiDkdSmggD25gU77gYJO85WDB/WZo8yH962ErcYWv7REeMm3CTjEZJW1wM14fTUpUWwNOEAAFUAlf8j87AAAAAASUVORK5CYII="}});
//# sourceMappingURL=2.57c7495f29d28b30eb39.js.map