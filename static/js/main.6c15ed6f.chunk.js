(this["webpackJsonppablo-wabo"]=this["webpackJsonppablo-wabo"]||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},33:function(e,t,a){e.exports=a.p+"static/media/logo.21e0f787.png"},34:function(e,t,a){e.exports=a.p+"static/media/avalanche.dde9be13.svg"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.5c3c6a18.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.2bcfbbb0.png"},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(20),o=a.n(r),l=a(10),s=a(7),c=a(4),m=a(2),d=["component","layout"],v=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,d);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},u=a(11),b=a(3),h=a.n(b),f=a(16),p=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(u.a)(a,2),o=r[0],l=r[1],s=Object(i.useState)([]),c=Object(u.a)(s,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",p),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",p),window.removeEventListener("resize",E))},p=Object(f.throttle)((function(){h(),b()}),30),E=Object(f.throttle)((function(){l(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[o]),n.a.createElement(n.a.Fragment,null,e.children())}));p.propTypes={children:h.a.func.isRequired};var E=p,g=a(13),N=a(1),O=a.n(N),w=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,r=e.width,o=e.height,l=e.alt,s=Object(m.a)(e,w),c=Object(i.useState)(!1),d=Object(u.a)(c,2),v=d[0],b=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){f(h.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:r,height:o,alt:l,onLoad:function(){b(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=j,D=["className"],C=function(e){var t=e.className,i=Object(m.a)(e,D),r=O()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(l.b,{to:"/"},n.a.createElement(y,{src:a(33),alt:"Open",width:64,height:64}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],x=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,o=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,d=Object(m.a)(e,k),v=Object(i.useState)(!1),b=Object(u.a)(v,2),h=b[0],f=b[1],p=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&g(),document.addEventListener("keydown",w),document.addEventListener("click",j),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",j),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",f(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),f(!1)},w=function(e){h&&27===e.keyCode&&N()},j=function(e){p.current&&h&&!p.current.contains(e.target)&&e.target!==E.current&&N()},y=O()("site-header",s&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},d,{className:y}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:O()("site-header-inner",c&&"has-bottom-divider")},n.a.createElement(C,null),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:h?N:g},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:p,className:O()("header-nav",h&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:O()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(l.b,{to:"#0",onClick:N},"White Paper"))),!o&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(l.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Stake")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var L=x,P=["className"],A=function(e){var t=e.className,i=Object(m.a)(e,P),r=O()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(l.b,{to:"https://www.avax.network/"},n.a.createElement(y,{src:a(34),alt:"Open",width:250,height:85}))))},S=["className"],B=function(e){var t=e.className,a=Object(m.a)(e,S),i=O()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"}))},T=["className","topOuterDivider","topDivider"],F=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(m.a)(e,T),o=O()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:o}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:O()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(A,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(B,null),n.a.createElement("div",{className:"footer-copyright"},"Created by ",n.a.createElement("a",{href:"https://github.com/sovachain"},"SovaChain Labs"),".")))))};F.defaultProps={topOuterDivider:!1,topDivider:!1};var M=F,W=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(M,null))},H=a(5),_={types:{topOuterDivider:h.a.bool,bottomOuterDivider:h.a.bool,topDivider:h.a.bool,bottomDivider:h.a.bool,hasBgColor:h.a.bool,invertColor:h.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},R={types:Object(H.a)({},_.types),defaults:Object(H.a)({},_.defaults)},z={types:Object(H.a)(Object(H.a)({},_.types),{},{invertMobile:h.a.bool,invertDesktop:h.a.bool,alignTop:h.a.bool,imageFill:h.a.bool}),defaults:Object(H.a)(Object(H.a)({},_.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(H.a)(Object(H.a)({},_.types),{},{pushLeft:h.a.bool}),defaults:Object(H.a)(Object(H.a)({},_.defaults),{},{pushLeft:!1})},q=["className"],J=function(e){var t=e.className,a=Object(m.a)(e,q),i=O()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},G=["className","tag","color","size","loading","wide","wideMobile","disabled"],K=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,o=e.loading,l=e.wide,s=e.wideMobile,c=e.disabled,d=Object(m.a)(e,G),v=O()("button",i&&"button-".concat(i),r&&"button-".concat(r),o&&"is-loading",l&&"button-block",s&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},d,{className:v,disabled:c}))};K.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Q=K,V=["className","children","handleClose","show","closeHidden","video","videoTag"],U=function(e){var t=e.className,a=e.children,r=e.handleClose,o=e.show,l=e.closeHidden,s=e.video,c=e.videoTag,d=Object(m.a)(e,V);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",b),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",b)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},b=function(e){e.stopPropagation()},h=O()("modal",o&&"is-active",s&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,o&&n.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:b},s?n.a.createElement("div",{className:"responsive-video"},"iframe"===c?n.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:s})):n.a.createElement(n.a.Fragment,null,!l&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};U.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var $=U,X=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],Y=Object(H.a)({},R.defaults),Z=function(e){var t=e.className,r=e.topOuterDivider,o=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,d=e.invertColor,v=Object(m.a)(e,X),b=Object(i.useState)(!1),h=Object(u.a)(b,2),f=h[0],p=h[1],E=O()("hero section center-content",r&&"has-top-divider",o&&"has-bottom-divider",c&&"has-bg-color",d&&"invert-color",t),g=O()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:E}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:g},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"PABLO ",n.a.createElement("span",{className:"text-color-primary"},"WABO")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"One of the most abundant Meme tokens ever to be created. Starting with an Initial supply of 1 Quadrillion, a total of 1 Quintillion tokens will be minted and distributed as the final total supply."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(J,null,n.a.createElement(Q,{tag:"a",color:"primary",wideMobile:!0,href:""},"Get WABO"),n.a.createElement(Q,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/sovachain/pablo-wabo-contracts"},"View on Github"))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),p(!0)}},n.a.createElement(y,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),n.a.createElement($,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),p(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};Z.defaultProps=Y;var ee=Z,te=["className","data","children","tag"],ae=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,o=Object(m.a)(e,te),l=O()("section-header",t),s=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},o,{className:l}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(s,{className:O()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};ae.defaultProps={children:null,tag:"h2"};var ie=ae,ne=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],re=Object(H.a)({},I.defaults),oe=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,d=e.pushLeft,v=Object(m.a)(e,ne),u=O()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),b=O()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",l&&"has-bottom-divider"),h=O()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},v,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:b},n.a.createElement(ie,{data:{title:"An amazing journey",paragraph:'Pablo the dog (Above) is the face of the Pablo Wabo project. Join him as we journey into the future of web3 and beyond. Please check back often to be part of each and every step as we embrace decentralization together! Can I get a "Woof" "Woof"? Pablo is also the official mascot of SovaChain Labs.'},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Token Created"),n.a.createElement("p",{className:"m-0 text-sm"},"On July 25, 2022 the Pablo Wabo contracts were ",n.a.createElement("a",{href:"https://snowtrace.io/tx/0x1ea379b9a24aa81aa94a2c6c4d4266c8f8a50e2f8da2b6244ead2f04b3a84189"},"deployed")," to Avalanche C Chain.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Auditing and Verification"),n.a.createElement("p",{className:"m-0 text-sm"},"Submitted for verification at ",n.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"snowtrace")," on 2022-07-27. Successfully ",n.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"verified"),".")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Distribution Strategy"),n.a.createElement("p",{className:"m-0 text-sm"},"Q3 2022. - Distribution plan and whitepaper are currently under development."))))))))};oe.defaultProps=re;var le=oe,se=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ce=Object(H.a)({},z.defaults),me=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,b=e.imageFill,h=Object(m.a)(e,se),f=O()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),p=O()("features-split-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),E=O()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:f}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(ie,{data:{title:"All about the fun",paragraph:"Light hearted and forever fun! Inspired by Shibu Inu and Doge, Pablo Wabo is meant for everyone and is here to stay. This token intends to remain abundant and plentiful for the foreseeable future."},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Native to Avalanche"),n.a.createElement("h3",{className:"mt-0 mb-12"},"A Meme token on the right network"),n.a.createElement("p",{className:"m-0"},"Pablo Wabo, while inspired by Doge and Shibi Inu has a mandate to only be native to the Avalanche network. Blazing fast and low cost transactions combined with an eco friendly proof of stake mechanism makes Avalanche the obvious choice for a Meme coin to remain light hearted and fun. Paying expensive gas fees to trade inexpensive Meme tokens is no fun at all.")),n.a.createElement("div",{className:O()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(39),alt:"Features split 01",width:528,height:396})))))))};me.defaultProps=ce;var de=me,ve=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],ue=Object(H.a)(Object(H.a)({},R.defaults),{},{split:!1}),be=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,c=e.split,d=Object(m.a)(e,ve),v=O()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),u=O()("cta-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider",c&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"Check back soon to participate in the upcoming Air Drop")),n.a.createElement("div",{className:"cta-action"}))))};be.defaultProps=ue;var he=be,fe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee,{className:"illustration-section-01"}),n.a.createElement(le,null),n.a.createElement(de,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(he,{split:!0}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/pablo-wabo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var pe=function(){var e=Object(i.useRef)(),t=Object(c.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),n.a.createElement(E,{ref:e,children:function(){return n.a.createElement(c.c,null,n.a.createElement(v,{exact:!0,path:"/",component:fe,layout:W}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var Ee=Object(s.a)();o.a.render(n.a.createElement(l.a,{history:Ee},n.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6c15ed6f.chunk.js.map