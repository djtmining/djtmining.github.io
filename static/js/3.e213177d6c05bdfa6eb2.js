webpackJsonp([3],{VxV6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("lC5x"),a=s.n(n),i=s("J0Oq"),r=s.n(i),c=s("aYx4"),o=void 0,l=void 0,d=void 0,u={data:function(){return{lang:"zh",lang_list:{},langShow:!1,address:"",short_address:"connect",parents:"",meanShow:!1,maskShow:!1,kuangShow:!1}},created:function(){},mounted:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lang=sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):"en",t.lang_list=t.en.lang,e.t0=t.lang,e.next="zh"===e.t0?5:"en"===e.t0?7:9;break;case 5:return t.lang_list=t.zh.lang,e.abrupt("break",9);case 7:return t.lang_list=t.en.lang,e.abrupt("break",9);case 9:t.parents=t.$route.query.p_address?t.$route.query.p_address:t.getUrlParam("p_address"),t.checkNet(),new c.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){},scrollContainer:null}).init();case 13:case"end":return e.stop()}},e,t)}))()},methods:{toWhite:function(){window.open("/static/djt.pdf")},closeKuang:function(){this.kuangShow=!1},showKuang:function(){this.kuangShow=!0},toIndex:function(){this.$router.push({name:"home",params:{}}),this.meanShow=!1},toOrder:function(){this.$router.push({name:"order",params:{}}),this.meanShow=!1},toKuang:function(){this.$router.push({name:"kuang",params:{}}),this.meanShow=!1},switchLang:function(t,e){e.currentTarget;switch(t){case"zh":sessionStorage.setItem("lang","zh");break;case"en":sessionStorage.setItem("lang","en")}location.reload()},showLang:function(){this.langShow?this.langShow=!1:this.langShow=!0},showMask:function(){this.maskShow=!0},closeMask:function(){this.maskShow=!1},showMean:function(){this.meanShow=!0},closeMean:function(){this.meanShow=!1},connectWallet:function(){this.address?this.short_address=this.address.substr(0,3)+"..."+this.address.substr(this.address.length-3):this.checkNet()},getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null},checkNet:function(){var t=this;return r()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t;try{o=new ethers.providers.Web3Provider(web3.currentProvider),o.getSigner(),s.checkLogin()}catch(t){s.$toast("请使用币安只能链连接")}case 2:case"end":return e.stop()}},e,t)}))()},checkLogin:function(){var t=this;return r()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t,setInterval(function(){window.ethereum.enable().then(function(t){(0!=t.length||""==l)&&0!=t.length?t[0]!=l&&(l=t[0],window.location.reload(),console.log("account change, start bat updateData!")):window.location.reload()}).catch(function(t){console.log("User rejected provider access"===t)})},1e3),window.ethereum.enable().then(function(){var t=r()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.length){t.next=3;break}return console.log("33333"),t.abrupt("return");case 3:if(l=e[0],console.log("defaultAccount: ",l),1!=(d=window.ethereum.networkVersion)){t.next=12;break}return s.type="ETH",s.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 12:if(42!=d){t.next=18;break}return s.type="ETH",s.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 18:if(128!=d){t.next=24;break}return s.type="HT",s.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 24:if(256!=d){t.next=30;break}return s.type="HT",s.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 30:if(56!=d){t.next=34;break}s.type="BNB",t.next=36;break;case 34:return s.$toast("请使用币安只能链连接"),t.abrupt("return",!1);case 36:""!=l&&(s.address=l);case 37:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),setTimeout(function(){l&&(s.address=l,s.short_address=s.address.substr(0,3)+"..."+s.address.substr(s.address.length-3))},500);case 4:case"end":return e.stop()}},e,t)}))()}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"djtIndex-top"},[n("img",{staticClass:"djtIndex-top-back",attrs:{src:s("gW9D"),alt:""}}),t._v(" "),n("div",{staticClass:"djtIndex-top-mean"},[t._m(0),t._v(" "),n("div",{staticClass:"djtIndex-top-mean-right"},[n("span",{staticClass:"djtIndex-top-mean-right-text",on:{click:function(e){return t.showMask()}}},[t._v("链接钱包")]),t._v(" "),n("img",{staticClass:"djtIndex-top-mean-right-img1",attrs:{src:s("2IZu"),alt:""},on:{click:function(e){return t.showLang()}}}),t._v(" "),n("img",{staticClass:"djtIndex-top-mean-right-img2",attrs:{src:s("+auw"),alt:""},on:{click:t.showMean}})])]),t._v(" "),n("div",{staticClass:"kuang-content"},[n("div",{staticClass:"djtIndex-content-title"},[t._v("正式挖矿")]),t._v(" "),n("div",{staticClass:"kuang-content-desc"},[t._v("\n                开启后，DJT 池为质押池，挖矿剩余：23333 枚 （总量 70%）质押池 7 周（49 天）的挖矿时间， 每 10 分钟作为一个单位时间发放挖矿收益，每周减产。\n            ")]),t._v(" "),n("div",{staticClass:"kuang-content-detail",on:{click:t.showKuang}},[t._v("\n                挖矿详情 >\n            ")]),t._v(" "),n("div",{staticClass:"djtIndex-content-title"},[t._v("DJT挖矿")]),t._v(" "),n("div",{staticClass:"kuang-content-number"},[t._v("\n                挖矿数量\n            ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"kuang-content-input-desc"},[t._v("需质押DJT数量739，USDT数量281")]),t._v(" "),n("div",{staticClass:"kuang-content-number"},[t._v("\n                挖矿时间\n            ")]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"kuang-content-submit"},[t._v("开始挖矿")])])]),t._v(" "),t.meanShow?n("div",{staticClass:"index_pop_content"},[n("div",{staticClass:"index_pop_top"},[t._m(3),t._v(" "),n("div",{on:{click:t.closeMean}},[n("img",{staticClass:"index_pop_top-right",attrs:{src:s("/TeD"),alt:""}})])]),t._v(" "),n("div",{staticClass:"index_pop_main_tab"},[n("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toIndex()}}},[t._m(4)]),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toKuang()}}},[t._m(6)]),t._v(" "),n("div",{staticClass:"index_pop_middle",on:{click:t.toOrder}},[t._m(7)]),t._v(" "),n("div",{staticClass:"index_pop_middle",on:{click:t.toWhite}},[t._m(8)]),t._v(" "),t._m(9)])]):t._e(),t._v(" "),t.maskShow?n("div",{staticClass:"index_mask"},[t._m(10),t._v(" "),n("div",{on:{click:function(e){return t.closeMask()}}},[n("img",{staticClass:"index_mask-close",attrs:{src:s("JXSh"),alt:""}})])]):t._e(),t._v(" "),t.langShow?n("div",{staticClass:"index_lang"},[n("div",{staticClass:"index_lang-button"},[t._v("中文")]),t._v(" "),n("div",{staticClass:"index_lang-button-active"},[t._v(" EN")])]):t._e(),t._v(" "),t.kuangShow?n("div",{staticClass:"index_kuang"},[t._m(11),t._v(" "),n("div",{on:{click:function(e){return t.closeKuang()}}},[n("img",{staticClass:"index_mask-close",attrs:{src:s("JXSh"),alt:""}})])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"djtIndex-top-mean-left"},[e("img",{staticClass:"djtIndex-top-mean-left-img",attrs:{src:s("iQH9"),alt:""}}),this._v(" "),e("span",{staticClass:"djtIndex-top-mean-left-text"},[this._v("Donald John Trump")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"kuang-content-input",attrs:{type:"text",placeholder:"请输入数量"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"kuang-content-button"},[e("div",{staticClass:"kuang-content-button1"},[this._v("25天")]),this._v(" "),e("div",{staticClass:"kuang-content-button2"},[this._v("49天")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"index_pop_top-left",attrs:{src:s("iQH9"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:s("+iNP"),alt:""}}),this._v(" "),e("span",[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle"},[e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:s("cS2Z"),alt:""}}),this._v(" "),e("span",[this._v("交换DJT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:s("JEyF"),alt:""}}),this._v(" "),e("span",[this._v("DJT挖矿")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:s("CpAf"),alt:""}}),this._v(" "),e("span",[this._v("挖矿记录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_middle_left"},[e("img",{attrs:{src:s("LWLN"),alt:""}}),this._v(" "),e("span",[this._v("白皮书")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_pop_bottom"},[e("div",{staticClass:"index_pop_bottom-left"},[e("img",{attrs:{src:s("2+6y"),alt:""}})]),this._v(" "),e("div",{staticClass:"index_pop_bottom-left"},[e("img",{attrs:{src:s("9TKO"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_mask-content"},[e("div",{staticClass:"index_mask-title"},[this._v("链接钱包")]),this._v(" "),e("img",{staticClass:"index_mask-img",attrs:{src:s("0RgF"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index_kuang-content"},[s("div",{staticClass:"index_kuang-title"},[t._v("DJT 质押池")]),t._v(" "),s("div",{staticClass:"index_kuang-desc"},[t._v("\n                第一周 26%（6066 枚，每十分钟=6.017857 枚）"),s("br"),t._v(" "),s("br"),t._v("\n                第二周 22%（5133 枚，每十分钟=5.0922619 枚）"),s("br"),t._v(" "),s("br"),t._v("\n                第三周 16%（3733 枚，每十分钟=3.70337302 枚） "),s("br"),t._v(" "),s("br"),t._v("\n                第四周 13%（3033 枚，每十分钟=3.00892857 枚） "),s("br"),t._v(" "),s("br"),t._v("\n                第五周 10%（2333 枚，每十分钟=2.31448413 枚） "),s("br"),t._v(" "),s("br"),t._v("\n                第六周 8%（1867 枚，每十分钟=1.85218254 枚） "),s("br"),t._v(" "),s("br"),t._v("\n                第七周 5%（1167 枚，每十分钟=1.1577381 枚）\n            ")])])}]},v=s("C7Lr")(u,_,!1,null,null,null);e.default=v.exports},gW9D:function(t,e,s){t.exports=s.p+"static/img/kuang-back.c80bf07.png"}});
//# sourceMappingURL=3.e213177d6c05bdfa6eb2.js.map