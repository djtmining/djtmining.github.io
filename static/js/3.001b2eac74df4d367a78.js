webpackJsonp([3],{VxV6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gw1m"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"djtIndex-top"},[a("img",{staticClass:"djtIndex-top-back",attrs:{src:n("gW9D"),alt:""}}),t._v(" "),a("div",{staticClass:"djtIndex-top-mean"},[t._m(0),t._v(" "),a("div",{staticClass:"djtIndex-top-mean-right"},[t.address?t._e():[a("span",{staticClass:"djtIndex-top-mean-right-text",on:{click:function(e){return t.showMask()}}},[t._v(t._s(t.short_address))])],t._v(" "),t.address?[a("span",{staticClass:"djtIndex-top-mean-right-text"},[t._v(t._s(t.short_address))])]:t._e(),t._v(" "),a("img",{staticClass:"djtIndex-top-mean-right-img1",attrs:{src:n("2IZu"),alt:""},on:{click:function(e){return t.showLang()}}}),t._v(" "),a("img",{staticClass:"djtIndex-top-mean-right-img2",attrs:{src:n("+auw"),alt:""},on:{click:t.showMean}})],2)]),t._v(" "),a("div",{staticClass:"kuang-content"},[a("div",{staticClass:"djtIndex-content-title"},[t._v(t._s(t.lang_list.kuang_title))]),t._v(" "),a("div",{staticClass:"kuang-content-desc"},[t._v("\n                "+t._s(t.lang_list.kuang_desc1)+"\n            ")]),t._v(" "),a("div",{staticClass:"kuang-content-detail",on:{click:t.showKuang}},[t._v("\n                "+t._s(t.lang_list.kuang_detail)+" >\n            ")]),t._v(" "),a("div",{staticClass:"djtIndex-content-title"},[t._v(t._s(t.lang_list.kuang_desc2))]),t._v(" "),a("div",{staticClass:"kuang-content-number"},[t._v("\n                "+t._s(t.lang_list.kuang_desc3)+"\n            ")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.activeNum,expression:"activeNum"}],staticClass:"kuang-content-input",attrs:{type:"number",placeholder:t.lang_list.kuang_desc4},domProps:{value:t.activeNum},on:{keyup:function(e){return t.tochangeNum()},afterpaste:function(e){return t.checkInt()},input:function(e){e.target.composing||(t.activeNum=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"kuang-content-input-desc"},[t._v(t._s(t.lang_list.kuang_desc5)+t._s(t.activeDjt)+"，"+t._s(t.lang_list.kuang_desc6)+t._s(t.activeUsdt))]),t._v(" "),a("div",{staticClass:"kuang-content-number"},[t._v("\n                "+t._s(t.lang_list.kuang_time)+"\n            ")]),t._v(" "),a("div",{staticClass:"kuang-content-button"},[a("div",{class:1==t.activeTime?"kuang-content-button1":"kuang-content-button2",on:{click:function(e){return t.switchTime(1)}}},[t._v("25 "+t._s(t.lang_list.kuang_day))]),t._v(" "),a("div",{class:2==t.activeTime?"kuang-content-button1":"kuang-content-button2",on:{click:function(e){return t.switchTime(2)}}},[t._v("49 "+t._s(t.lang_list.kuang_day))])]),t._v(" "),a("div",{staticClass:"kuang-content-submit",on:{click:function(e){return t.submitKuang(e)}}},[t._v(t._s(t.lang_list.kuang_button))])])]),t._v(" "),t.meanShow?a("div",{staticClass:"index_pop_content"},[a("div",{staticClass:"index_pop_top"},[t._m(1),t._v(" "),a("div",{on:{click:t.closeMean}},[a("img",{staticClass:"index_pop_top-right",attrs:{src:n("/TeD"),alt:""}})])]),t._v(" "),a("div",{staticClass:"index_pop_main_tab"},[a("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toIndex()}}},[a("div",{staticClass:"index_pop_middle_left"},[a("img",{attrs:{src:n("+iNP"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang_list.index_mean1))])])]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toBuyDjt()}}},[a("div",{staticClass:"index_pop_middle_left"},[a("img",{attrs:{src:n("cS2Z"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang_list.index_mean2))])])]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toKuang()}}},[a("div",{staticClass:"index_pop_middle_left"},[a("img",{attrs:{src:n("JEyF"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang_list.index_mean3))])])]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:t.toOrder}},[a("div",{staticClass:"index_pop_middle_left"},[a("img",{attrs:{src:n("CpAf"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang_list.index_mean4))])])]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:t.toWhite}},[a("div",{staticClass:"index_pop_middle_left"},[a("img",{attrs:{src:n("LWLN"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang_list.index_mean5))])])]),t._v(" "),a("div",{staticClass:"index_pop_bottom"},[a("div",{staticClass:"index_pop_bottom-left",on:{click:function(e){return t.toTwitte()}}},[a("img",{attrs:{src:n("2+6y"),alt:""}})]),t._v(" "),a("div",{staticClass:"index_pop_bottom-left",on:{click:function(e){return t.todian()}}},[a("img",{attrs:{src:n("9TKO"),alt:""}})])])])]):t._e(),t._v(" "),t.maskShow?a("div",{staticClass:"index_mask"},[a("div",{staticClass:"index_mask-content"},[a("div",{staticClass:"index_mask-title"},[t._v(t._s(t.lang_list.index_mask))]),t._v(" "),a("img",{staticClass:"index_mask-img",attrs:{src:n("0RgF"),alt:""}})]),t._v(" "),a("div",{on:{click:function(e){return t.closeMask()}}},[a("img",{staticClass:"index_mask-close",attrs:{src:n("JXSh"),alt:""}})])]):t._e(),t._v(" "),t.langShow?a("div",{staticClass:"index_lang"},[a("div",{class:"zh"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(e){return t.switchLang("zh")}}},[t._v("中文")]),t._v(" "),a("div",{class:"en"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(e){return t.switchLang("en")}}},[t._v("EN")])]):t._e(),t._v(" "),t.kuangShow?a("div",{staticClass:"index_kuang"},[a("div",{staticClass:"index_kuang-content"},[a("div",{staticClass:"index_kuang-title"},[t._v(t._s(t.lang_list.kuang_chi))]),t._v(" "),a("div",{staticClass:"index_kuang-desc"},[t._v("\n                "+t._s(t.lang_list.kuang_item1)),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item2)),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item3)+" "),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item4)+" "),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item5)+" "),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item6)+" "),a("br"),t._v(" "),a("br"),t._v("\n                "+t._s(t.lang_list.kuang_item7)+"\n            ")])]),t._v(" "),a("div",{on:{click:function(e){return t.closeKuang()}}},[a("img",{staticClass:"index_mask-close",attrs:{src:n("JXSh"),alt:""}})])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"djtIndex-top-mean-left"},[e("img",{staticClass:"djtIndex-top-mean-left-img",attrs:{src:n("iQH9"),alt:""}}),this._v(" "),e("span",{staticClass:"djtIndex-top-mean-left-text"},[this._v("Donald John Trump")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"index_pop_top-left",attrs:{src:n("iQH9"),alt:""}})])}]},i=n("C7Lr")(a.a,s,!1,null,null,null);e.default=i.exports},gW9D:function(t,e,n){t.exports=n.p+"static/img/kuang-back.c80bf07.png"},gw1m:function(t,e,n){"use strict";(function(t){var a=n("lC5x"),s=n.n(a),i=n("J0Oq"),r=n.n(i),c=n("aYx4"),o=(n.n(c),void 0),f=void 0,l=void 0,u=void 0,d=void 0,_=void 0,g=void 0;e.a={data:function(){return{lang:"zh",lang_list:{},langShow:!1,address:"",short_address:"connect",parents:"",meanShow:!1,maskShow:!1,kuangShow:!1,djtBanner:0,usdtBanner:0,activeNum:"",activeDjt:0,activeUsdt:0,activeTime:1,rate:.00125,disable:!1}},created:function(){},mounted:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lang=sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):"en",t.lang_list=t.en,e.t0=t.lang,e.next="zh"===e.t0?5:"en"===e.t0?7:9;break;case 5:return t.lang_list=t.zh,e.abrupt("break",9);case 7:return t.lang_list=t.en,e.abrupt("break",9);case 9:t.checkNet(),new c.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){},scrollContainer:null}).init();case 12:case"end":return e.stop()}},e,t)}))()},methods:{submitKuang:function(e){var n=this;return r()(s.a.mark(function a(){var i,c,f,u;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(i=n,!(n.activeDjt>n.djtBanner)){a.next=4;break}return i.$toast(i.lang_list.kuang_warn1),a.abrupt("return",!1);case 4:if(!(n.activeUsdt<=0||n.activeUsdt>n.usdtBanner)){a.next=7;break}return i.$toast(i.lang_list.kuang_warn2),a.abrupt("return",!1);case 7:if(!n.disable){a.next=9;break}return a.abrupt("return",!1);case 9:return n.disable=!0,c=e.currentTarget,t(c).css("background","#dddddd"),a.prev=12,a.next=15,o.getGasPrice();case 15:return f=a.sent,u=ethers.utils.parseEther(i.activeUsdt.toString()),a.next=19,_.allowance(l,i.api.conAddress).then(function(){var t=r()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:d.allowance(l,i.api.conAddress).then(function(){var t=r()(s.a.mark(function t(a){var r,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(parseFloat(ethers.utils.formatEther(e))>0&&parseFloat(ethers.utils.formatEther(a))>0)){t.next=7;break}return t.next=3,g.investment(u,i.activeTime,{gasPrice:f,gasLimit:8e5});case 3:t.sent&&(i.disable=!1,i.$toast(i.lang_list.kuang_warn3),setTimeout(function(){location.reload()},3e3)),t.next=40;break;case 7:if(!(parseFloat(ethers.utils.formatEther(e))>0)){t.next=18;break}return t.next=10,d.approve(i.api.conAddress,"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasPrice:f,gasLimit:25e4});case 10:if(!t.sent){t.next=16;break}return t.next=14,g.investment(u,i.activeTime,{gasPrice:f,gasLimit:8e5});case 14:t.sent&&(i.disable=!1,i.$toast(i.lang_list.kuang_warn3),setTimeout(function(){location.reload()},3e3));case 16:t.next=40;break;case 18:if(!(parseFloat(ethers.utils.formatEther(a))>0)){t.next=29;break}return t.next=21,_.approve(i.api.conAddress,"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasPrice:f,gasLimit:25e4});case 21:if(!t.sent){t.next=27;break}return t.next=25,g.investment(u,i.activeTime,{gasPrice:f,gasLimit:8e5});case 25:t.sent&&(i.disable=!1,i.$toast(i.lang_list.kuang_warn3),setTimeout(function(){location.reload()},3e3));case 27:t.next=40;break;case 29:return t.next=31,_.approve(i.api.conAddress,"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasPrice:f,gasLimit:25e4});case 31:return r=t.sent,t.next=34,d.approve(i.api.conAddress,"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasPrice:f,gasLimit:25e4});case 34:if(c=t.sent,!r||!c){t.next=40;break}return t.next=38,g.investment(u,i.activeTime,{gasPrice:f,gasLimit:8e5});case 38:t.sent&&(i.disable=!1,i.$toast(i.lang_list.kuang_warn3),setTimeout(function(){location.reload()},3e3));case 40:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return i.disable=!1,i.$toast(i.lang_list.kuang_warn4),setTimeout(function(){location.reload()},3e3),!1});case 1:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return i.disable=!1,i.$toast(i.lang_list.kuang_warn4),setTimeout(function(){location.reload()},3e3),!1});case 19:a.next=27;break;case 21:return a.prev=21,a.t0=a.catch(12),i.$toast(i.lang_list.kuang_warn4),i.disable=!1,setTimeout(function(){location.reload()},3e3),a.abrupt("return",!1);case 27:case"end":return a.stop()}},a,n,[[12,21]])}))()},checkInt:function(){1==this.activeNum.length?this.activeNum=this.activeNum.replace(/[^1-9]/g,"0"):this.activeNum=this.activeNum.replace(/\D/g,"")},tochangeNum:function(){1==this.activeNum.length?this.activeNum=this.activeNum.replace(/[^1-9]/g,"0"):this.activeNum=this.activeNum.replace(/\D/g,""),this.activeNum>0?(this.activeUsdt=parseFloat(this.activeNum)/2,this.activeDjt=parseFloat(this.activeUsdt)*parseFloat(this.rate)):(this.activeDjt=0,this.activeUsdt=0)},switchTime:function(t){this.activeTime=t},todian:function(){window.open("https://t.me/DJT_Group","_self")},toTwitte:function(){window.open("https://twitter.com/DJTsystem","_self")},toBuyDjt:function(){window.open("https://pancakeswap.finance/swap?outputCurrency=0x41D8675E6C64939c3245908EEaf827A995Fc47Ff&inputCurrency=0x55d398326f99059ff775485246999027b3197955&utm_source=tokenpocket","_self")},toContract:function(){window.open("https://bscscan.com/address/"+this.api.djtAddress,"_self")},toWhite:function(){window.open("/static/djt.pdf")},closeKuang:function(){this.kuangShow=!1},showKuang:function(){this.kuangShow=!0},toIndex:function(){this.$router.push({name:"home",params:{}}),this.meanShow=!1},toOrder:function(){this.$router.push({name:"order",params:{}}),this.meanShow=!1},toKuang:function(){this.$router.push({name:"kuang",params:{}}),this.meanShow=!1},switchLang:function(t){switch(t){case"zh":sessionStorage.setItem("lang","zh");break;case"en":sessionStorage.setItem("lang","en")}location.reload()},showLang:function(){this.langShow?this.langShow=!1:this.langShow=!0},showMask:function(){this.maskShow=!0},closeMask:function(){this.maskShow=!1},showMean:function(){this.meanShow=!0},closeMean:function(){this.meanShow=!1},connectWallet:function(){this.address?this.short_address=this.address.substr(0,3)+"..."+this.address.substr(this.address.length-3):this.checkNet()},getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},checkNet:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t;try{o=new ethers.providers.Web3Provider(web3.currentProvider),f=o.getSigner(),n.checkLogin()}catch(t){n.$toast(n.lang_list.index_warn)}case 2:case"end":return e.stop()}},e,t)}))()},checkLogin:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,setInterval(function(){window.ethereum.enable().then(function(t){(0!=t.length||""==l)&&0!=t.length?t[0]!=l&&(l=t[0],window.location.reload(),console.log("account change, start bat updateData!")):window.location.reload()}).catch(function(t){console.log("User rejected provider access"===t)})},1e3),window.ethereum.enable().then(function(){var t=r()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.length){t.next=3;break}return console.log("33333"),t.abrupt("return");case 3:if(l=e[0],console.log("defaultAccount: ",l),1!=(u=window.ethereum.networkVersion)){t.next=12;break}return n.type="ETH",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 12:if(42!=u){t.next=18;break}return n.type="ETH",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 18:if(128!=u){t.next=24;break}return n.type="HT",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 24:if(256!=u){t.next=30;break}return n.type="HT",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 30:if(56!=u){t.next=34;break}n.type="BNB",t.next=36;break;case 34:return n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 36:d=new ethers.Contract(n.api.usdtAddress,usdtAbi,f),_=new ethers.Contract(n.api.djtAddress,djtAbi,f),g=new ethers.Contract(n.api.conAddress,conAbi,f),""!=l&&(n.address=l,n.getBanner());case 40:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),setTimeout(function(){l&&(n.address=l,n.short_address=n.address.substr(0,3)+"..."+n.address.substr(n.address.length-3))},500);case 4:case"end":return e.stop()}},e,t)}))()},getBanner:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,d.balanceOf(l).then(function(t){n.usdtBanner=Math.floor(100*parseFloat(ethers.utils.formatEther(t)))/100,console.log(n.usdtBanner)}).catch(function(t){console.log(t)});case 3:return e.next=5,_.balanceOf(l).then(function(t){n.djtBanner=Math.floor(100*parseFloat(1e9*ethers.utils.formatEther(t)))/100,console.log(n.djtBanner)}).catch(function(t){console.log(t)});case 5:return e.next=7,g.Price().then(function(t){n.rate=parseFloat(1e13*ethers.utils.formatEther(t))}).catch(function(t){console.log(t)});case 7:case"end":return e.stop()}},e,t)}))()}}}}).call(e,n("zREj"))}});
//# sourceMappingURL=3.001b2eac74df4d367a78.js.map