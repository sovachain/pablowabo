(this["webpackJsonppablo-wabo"]=this["webpackJsonppablo-wabo"]||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},33:function(e,t,a){e.exports=a.p+"static/media/logo.21e0f787.png"},34:function(e,t,a){e.exports=a.p+"static/media/avalanche.dde9be13.svg"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.5c3c6a18.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.2bcfbbb0.png"},40:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(20),r=a.n(l),s=a(8),o=a(7),c=a(5),m=a(2),d=["component","layout"],u=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,d);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},v=a(11),h=a(3),p=a.n(h),b=a(16),f=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(v.a)(a,2),r=l[0],s=l[1],o=Object(i.useState)([]),c=Object(v.a)(o,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var p=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){p(),h()}),30),E=Object(b.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){p(),h()}),[r]),n.a.createElement(n.a.Fragment,null,e.children())}));f.propTypes={children:p.a.func.isRequired};var E=f,g=a(13),N=a(1),w=a.n(N),O=["className","src","width","height","alt"],D=function(e){var t=e.className,a=e.src,l=e.width,r=e.height,s=e.alt,o=Object(m.a)(e,O),c=Object(i.useState)(!1),d=Object(v.a)(c,2),u=d[0],h=d[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:l,height:r,alt:s,onLoad:function(){h(!0)}}))};D.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var j=D,x=["className"],y=function(e){var t=e.className,i=Object(m.a)(e,x),l=w()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:l}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(s.b,{to:"/"},n.a.createElement(j,{src:a(33),alt:"Open",width:64,height:64}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,r=e.hideSignin,o=e.bottomOuterDivider,c=e.bottomDivider,d=Object(m.a)(e,k),u=Object(i.useState)(!1),h=Object(v.a)(u,2),p=h[0],b=h[1],f=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&g(),document.addEventListener("keydown",O),document.addEventListener("click",D),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",D),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},O=function(e){p&&27===e.keyCode&&N()},D=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==E.current&&N()},j=w()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},d,{className:j}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:w()("site-header-inner",c&&"has-bottom-divider")},n.a.createElement(y,null),!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:p?N:g},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:f,className:w()("header-nav",p&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:w()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0",onClick:N},"White Paper"))),!r&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Stake")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var A=C,L=["className"],P=function(e){var t=e.className,i=Object(m.a)(e,L),l=w()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:l}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(s.b,{to:"https://www.avax.network/"},n.a.createElement(j,{src:a(34),alt:"Open",width:250,height:85}))))},S=["className"],H=function(e){var t=e.className,a=Object(m.a)(e,S),i=w()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"Contact")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"Support"))))},B=["className"],F=function(e){var t=e.className,a=Object(m.a)(e,B),i=w()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://facebook.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Facebook"),n.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://google.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("g",null,n.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),n.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),n.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},M=["className","topOuterDivider","topDivider"],z=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(m.a)(e,M),r=w()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},l,{className:r}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:w()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(P,null),n.a.createElement(F,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(H,null),n.a.createElement("div",{className:"footer-copyright"},"Created by ",n.a.createElement("a",{href:"https://github.com/sovachain"},"SovaChain Labs"),".")))))};z.defaultProps={topOuterDivider:!1,topDivider:!1};var T=z,R=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(T,null))},I=a(4),q={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},W={types:Object(I.a)({},q.types),defaults:Object(I.a)({},q.defaults)},V={types:Object(I.a)(Object(I.a)({},q.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(I.a)(Object(I.a)({},q.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},_={types:Object(I.a)(Object(I.a)({},q.types),{},{pushLeft:p.a.bool}),defaults:Object(I.a)(Object(I.a)({},q.defaults),{},{pushLeft:!1})},G=["className"],U=function(e){var t=e.className,a=Object(m.a)(e,G),i=w()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},J=["className","tag","color","size","loading","wide","wideMobile","disabled"],K=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,r=e.loading,s=e.wide,o=e.wideMobile,c=e.disabled,d=Object(m.a)(e,J),u=w()("button",i&&"button-".concat(i),l&&"button-".concat(l),r&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:c}))};K.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Q=K,$=["className","children","handleClose","show","closeHidden","video","videoTag"],Z=function(e){var t=e.className,a=e.children,l=e.handleClose,r=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,d=Object(m.a)(e,$);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},h=function(e){e.stopPropagation()},p=w()("modal",r&&"is-active",o&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,r&&n.a.createElement("div",Object.assign({},d,{className:p,onClick:l}),n.a.createElement("div",{className:"modal-inner",onClick:h},o?n.a.createElement("div",{className:"responsive-video"},"iframe"===c?n.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:o})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),n.a.createElement("div",{className:"modal-content"},a)))))};Z.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var X=Z,Y=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ee=Object(I.a)({},W.defaults),te=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,d=e.invertColor,u=Object(m.a)(e,Y),h=Object(i.useState)(!1),p=Object(v.a)(h,2),b=p[0],f=p[1],E=w()("hero section center-content",l&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",d&&"invert-color",t),g=w()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},u,{className:E}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:g},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"PABLO ",n.a.createElement("span",{className:"text-color-primary"},"WABO")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"One of the most abundant Meme tokens ever to be created. Starting with an Initial supply of 1 Quadrillion, a total of 1 Quintillion tokens will be minted and distributed as the final total supply."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(U,null,n.a.createElement(Q,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Get WABO"),n.a.createElement(Q,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/sovachain/pablo-wabo-contracts"},"View on Github"))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},n.a.createElement(j,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),n.a.createElement(X,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};te.defaultProps=ee;var ae=te,ie=["className","data","children","tag"],ne=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,r=Object(m.a)(e,ie),s=w()("section-header",t),o=l;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},r,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(o,{className:w()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};ne.defaultProps={children:null,tag:"h2"};var le=ne,re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],se=Object(I.a)({},_.defaults),oe=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,re),v=w()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),h=w()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",s&&"has-bottom-divider"),p=w()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(le,{data:{title:"An amazing journey",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(j,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Token Created"),n.a.createElement("p",{className:"m-0 text-sm"},"On July 25, 2022 the Pablo Wabo contracts were ",n.a.createElement("a",{href:"https://snowtrace.io/tx/0x1ea379b9a24aa81aa94a2c6c4d4266c8f8a50e2f8da2b6244ead2f04b3a84189"},"deployed")," to Avalanche C Chain.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(j,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Auditing and Verification"),n.a.createElement("p",{className:"m-0 text-sm"},"Submitted for verification at ",n.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"snowtrace")," on 2022-07-27. Successfully ",n.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"verified"),".")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(j,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Distribution Strategy"),n.a.createElement("p",{className:"m-0 text-sm"},"Q3 2022. - Distribution plan and whitepaper are currently under development."))))))))};oe.defaultProps=se;var ce=oe,me=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],de=Object(I.a)({},V.defaults),ue=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(m.a)(e,me),b=w()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=w()("features-split-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),E=w()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},p,{className:b}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(le,{data:{title:"All about the fun",paragraph:"Light hearted and forever fun! Unlike Shibu Inu and Doge, Pablo Wabo does not have dreams of reaching $1, This token intends to remain abundant and plentiful."},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Native to Avalanche"),n.a.createElement("h3",{className:"mt-0 mb-12"},"A Meme token on the right network"),n.a.createElement("p",{className:"m-0"},"Pablo Wabo, while inspired by Doge and Shibi Inu has a mandate to only be native to the Avalanche network. Blazing fast and low cost transactions combined with an eco friendly proof of stake mechanism makes Avalanche the obvious choice for a Meme coin to remain light hearted and fun. Paying expensive gas fees to trade inexpensive Meme tokens is no fun at all.")),n.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(39),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Voting and Governance built  in"),n.a.createElement("h3",{className:"mt-0 mb-12"},"A Community DAO"),n.a.createElement("p",{className:"m-0"},"An ERC20 token built with advanced features such as voting via the ERC20Votes OpenZeppelin contract. In the future, token holders will be able to stake their tokens in exchange for the ability to vote and create proposals on the DAO. In the beginning a centralized approach will be taken to prove out and battle test the governance system. Ultimately, the desire is that this DAO will become completely decentralized.")),n.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(40),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A desire to Help animals"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Rescue Mission"),n.a.createElement("p",{className:"m-0"},"Pablo himself, as well as the creators of this project have a mandate to help animals. One of the requirements that is being built into the future staking plan will involve an allocation of tokens to be distributed to non profits. The selection of which non profits to donate to and the amount will be decided via governance that takes place within the DAO.")),n.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(41),alt:"Features split 03",width:528,height:396})))))))};ue.defaultProps=de;var ve=ue,he=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],pe=Object(I.a)({},_.defaults),be=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,he),u=w()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=w()("testimonial-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider"),h=w()("tiles-wrap",c&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(le,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName")))))))))};be.defaultProps=pe;var fe=be,Ee=["className","children","labelHidden","id"],ge=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,r=Object(m.a)(e,Ee),s=w()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},r,{className:s,htmlFor:l}),a)};ge.defaultProps={children:null,labelHidden:!1,id:null};var Ne=ge,we=["children","className","status"],Oe=function(e){var t=e.children,a=e.className,i=e.status,l=Object(m.a)(e,we),r=w()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},l,{className:r}),t)};Oe.defaultProps={children:null,status:!1};var De=Oe,je=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],xe=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,r=e.type,s=e.name,o=e.status,c=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(m.a)(e,je),g=w()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),N=w()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),O="textarea"===r?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(Ne,{labelHidden:l,id:E.id},i),n.a.createElement("div",{className:g},n.a.createElement(O,Object.assign({},E,{type:"textarea"!==r?r:null,className:N,name:s,disabled:c,value:d,placeholder:p,rows:"textarea"===r?b:null})),a),f&&n.a.createElement(De,{status:o},f))};xe.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ye=xe,ke=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ce=Object(I.a)(Object(I.a)({},W.defaults),{},{split:!1}),Ae=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,d=Object(m.a)(e,ke),u=w()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=w()("cta-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider",c&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"Participate in the Air Drop")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(ye,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Web3 Address"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};Ae.defaultProps=Ce;var Le=Ae,Pe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,{className:"illustration-section-01"}),n.a.createElement(ce,null),n.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(fe,{topDivider:!0}),n.a.createElement(Le,{split:!0}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/pablo-wabo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Se=function(){var e=Object(i.useRef)(),t=Object(c.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),n.a.createElement(E,{ref:e,children:function(){return n.a.createElement(c.c,null,n.a.createElement(u,{exact:!0,path:"/",component:Pe,layout:R}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);var He=Object(o.a)();r.a.render(n.a.createElement(s.a,{history:He},n.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4248eb21.chunk.js.map