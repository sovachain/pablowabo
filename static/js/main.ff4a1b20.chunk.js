(this["webpackJsonppablo-wabo"]=this["webpackJsonppablo-wabo"]||[]).push([[0],{25:function(e,t,a){e.exports=a(49)},41:function(e,t,a){e.exports=a.p+"static/media/logo.21e0f787.png"},42:function(e,t,a){e.exports=a.p+"static/media/avalanche.dde9be13.svg"},43:function(e,t,a){e.exports=a.p+"static/media/PabloHeroAirDrop.7d255223.png"},44:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},46:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},47:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.2bcfbbb0.png"},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(22),o=a.n(n),c=a(10),s=a(7),l=a(13),m=a(4),d=a(2),v=["component","layout","metamask"],u=function(e){var t=e.component,a=e.layout,i=e.metamask,n=Object(d.a)(e,v);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(m.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,{metamask:i},r.a.createElement(t,Object.assign({metamask:i},e)))}}))},b=a(11),h=a(3),f=a.n(h),p=a(17),E=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(b.a)(a,2),o=n[0],c=n[1],s=Object(i.useState)([]),l=Object(b.a)(s,2),m=l[0],d=l[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},u=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),u())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),u()}),30),E=Object(p.throttle)((function(){c(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),u()}),[o]),r.a.createElement(r.a.Fragment,null,e.children())}));E.propTypes={children:f.a.func.isRequired};var g=E,N=a(14),O=a(1),w=a.n(O),j=["className","src","width","height","alt"],D=function(e){var t=e.className,a=e.src,n=e.width,o=e.height,c=e.alt,s=Object(d.a)(e,j),l=Object(i.useState)(!1),m=Object(b.a)(l,2),v=m[0],u=m[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){f(h.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:n,height:o,alt:c,onLoad:function(){u(!0)}}))};D.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=D,k=["className"],C=function(e){var t=e.className,i=Object(d.a)(e,k),n=w()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(c.b,{to:"/"},r.a.createElement(y,{src:a(41),alt:"Open",width:64,height:64}))))},x=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider","metamask"],L=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,o=e.hideSignin,s=e.bottomOuterDivider,l=e.bottomDivider,m=e.metamask,v=Object(d.a)(e,x);console.log("metamask",m);var u=m.status,h=m.connect,f=Object(i.useState)(!1),p=Object(b.a)(f,2),E=p[0],g=p[1],N=Object(i.useRef)(null),O=Object(i.useRef)(null);Object(i.useEffect)((function(){return E&&j(),document.addEventListener("keydown",y),document.addEventListener("click",k),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",k),D()}}));var j=function(){document.body.classList.add("off-nav-is-active"),N.current.style.maxHeight=N.current.scrollHeight+"px",g(!0)},D=function(){document.body.classList.remove("off-nav-is-active"),N.current&&(N.current.style.maxHeight=null),g(!1)},y=function(e){E&&27===e.keyCode&&D()},k=function(e){N.current&&E&&!N.current.contains(e.target)&&e.target!==O.current&&D()},L=w()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},v,{className:L}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:w()("site-header-inner",l&&"has-bottom-divider")},r.a.createElement(C,null),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:O,className:"header-nav-toggle",onClick:E?D:j},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:N,className:w()("header-nav",E&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:w()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(c.b,{to:"#0",onClick:D},"White Paper"))),r.a.createElement("ul",{className:w()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(c.b,{to:"#0",onClick:D},"White Paper"))),!o&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:"notConnected"===u?h:function(){console.log("some other function")}},"notConnected"===u?"Connect":"Disconnect")))))))))};L.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var A=L,P=["className"],T=function(e){var t=e.className,i=Object(d.a)(e,P),n=w()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(c.b,{to:"https://www.avax.network/"},r.a.createElement(y,{src:a(42),alt:"Open",width:250,height:85}))))},S=["className"],B=function(e){var t=e.className,a=Object(d.a)(e,S),i=w()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"}))},F=["className","topOuterDivider","topDivider"],M=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(d.a)(e,F),o=w()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:o}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:w()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(T,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(B,null),r.a.createElement("div",{className:"footer-copyright"},"Created by ",r.a.createElement("a",{href:"https://github.com/sovachain"},"SovaChain Labs"),".")))))};M.defaultProps={topOuterDivider:!1,topDivider:!1};var q=M,H=function(e){var t=e.children,a=t&&t.props&&t.props.metamask?t.props.metamask:{};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{navPosition:"right",className:"reveal-from-bottom",metamask:a}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(q,null))},W=a(5),_={types:{topOuterDivider:f.a.bool,bottomOuterDivider:f.a.bool,topDivider:f.a.bool,bottomDivider:f.a.bool,hasBgColor:f.a.bool,invertColor:f.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},R={types:Object(W.a)({},_.types),defaults:Object(W.a)({},_.defaults)},z={types:Object(W.a)(Object(W.a)({},_.types),{},{invertMobile:f.a.bool,invertDesktop:f.a.bool,alignTop:f.a.bool,imageFill:f.a.bool}),defaults:Object(W.a)(Object(W.a)({},_.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(W.a)(Object(W.a)({},_.types),{},{pushLeft:f.a.bool}),defaults:Object(W.a)(Object(W.a)({},_.defaults),{},{pushLeft:!1})},U=["className"],Q=function(e){var t=e.className,a=Object(d.a)(e,U),i=w()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},G=["className","tag","color","size","loading","wide","wideMobile","disabled"],J=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,o=e.loading,c=e.wide,s=e.wideMobile,l=e.disabled,m=Object(d.a)(e,G),v=w()("button",i&&"button-".concat(i),n&&"button-".concat(n),o&&"is-loading",c&&"button-block",s&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},m,{className:v,disabled:l}))};J.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var K=J,V=["className","children","handleClose","show","closeHidden","video","videoTag"],$=function(e){var t=e.className,a=e.children,n=e.handleClose,o=e.show,c=e.closeHidden,s=e.video,l=e.videoTag,m=Object(d.a)(e,V);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",b),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",b)}})),Object(i.useEffect)((function(){v()}),[m.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&n(e)},b=function(e){e.stopPropagation()},h=w()("modal",o&&"is-active",s&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("div",Object.assign({},m,{className:h,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:b},s?r.a.createElement("div",{className:"responsive-video"},"iframe"===l?r.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:s})):r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};$.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var X=$,Y=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],Z=Object(W.a)({},R.defaults),ee=function(e){var t=e.className,n=e.topOuterDivider,o=e.bottomOuterDivider,c=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,v=Object(d.a)(e,Y),u=Object(i.useState)(!1),h=Object(b.a)(u,2),f=h[0],p=h[1],E=w()("hero section center-content",n&&"has-top-divider",o&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t),g=w()("hero-inner section-inner",c&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:E}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"PABLO ",r.a.createElement("span",{className:"text-color-primary"},"WABO")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"One of the most abundant Meme tokens ever to be created. With over Three hundred ",r.a.createElement("a",{href:"https://www.google.com/search?q=quadrillion&oq=quadrillion&aqs=chrome..69i57j0i512l9.3401j0j15&sourceid=chrome&ie=UTF-8"},"Quadrillion")," already distributed, a ",r.a.createElement("a",{href:"https://www.google.com/search?q=quintillion&oq=quintillion&aqs=chrome..69i57j0i512l6j46i512j0i512l2.4880j0j15&sourceid=chrome&ie=UTF-8"},"Quintillion tokens")," will be minted as the final total supply."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(Q,null,r.a.createElement(K,{tag:"a",color:"primary",wideMobile:!0,href:""},"Get WABO"),r.a.createElement(K,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/sovachain/pablo-wabo-contracts"},"View on Github"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),p(!0)}},r.a.createElement(y,{className:"has-shadow",src:a(43),alt:"Hero",width:896,height:504}))),r.a.createElement(X,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),p(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};ee.defaultProps=Z;var te=ee,ae=["className","data","children","tag"],ie=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,o=Object(d.a)(e,ae),c=w()("section-header",t),s=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},o,{className:c}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(s,{className:w()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};ie.defaultProps={children:null,tag:"h2"};var re=ie,ne=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],oe=Object(W.a)({},I.defaults),ce=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,c=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.pushLeft,v=Object(d.a)(e,ne),u=w()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),b=w()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",c&&"has-bottom-divider"),h=w()("tiles-wrap center-content",m&&"push-left");return r.a.createElement("section",Object.assign({},v,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:b},r.a.createElement(re,{data:{title:"A dog with a plan",paragraph:"This project has two objectives. To build a community and to help animals. Pablo (The dog above) is the face of this project and the official mascot of SovaChain Labs."},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(44),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Token Created"),r.a.createElement("p",{className:"m-0 text-sm"},"On July 25, 2022 the Pablo Wabo contracts were ",r.a.createElement("a",{href:"https://snowtrace.io/tx/0x1ea379b9a24aa81aa94a2c6c4d4266c8f8a50e2f8da2b6244ead2f04b3a84189"},"deployed")," to Avalanche C Chain.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(45),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Auditing and Verification"),r.a.createElement("p",{className:"m-0 text-sm"},"Submitted for verification at ",r.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"snowtrace")," on 2022-07-27. Successfully ",r.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"verified"),".")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(46),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Distribution Strategy"),r.a.createElement("p",{className:"m-0 text-sm"},"Q3 2022. - Distribution plan and whitepaper are currently under development."))))))))};ce.defaultProps=oe;var se=ce,le=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],me=Object(W.a)({},z.defaults),de=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,c=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.invertMobile,v=e.invertDesktop,u=e.alignTop,b=e.imageFill,h=Object(d.a)(e,le),f=w()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),p=w()("features-split-inner section-inner",o&&"has-top-divider",c&&"has-bottom-divider"),E=w()("split-wrap",m&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:f}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(re,{data:{title:"Upcoming Air Drop",paragraph:"To participate in our air drop, you need to already be a user of the avalanche network and love animals. Air drop campaign is scheduled to begin Q4, 2022."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Native to Avalanche"),r.a.createElement("h3",{className:"mt-0 mb-12"},"A Meme token on the right network"),r.a.createElement("p",{className:"m-0"},"Pablo Wabo, has a mandate to be native to the Avalanche network. ",r.a.createElement("a",{href:"https://www.avax.network/"},"Blazing fast")," and ",r.a.createElement("a",{href:"https://www.avax.network/"},"low cost")," transactions combined with an eco friendly ",r.a.createElement("a",{href:"https://www.avax.network/"},"proof of stake")," mechanism makes Avalanche the obvious choice for a Meme coin to remain light hearted and ",r.a.createElement("a",{href:"https://www.avax.network/"},"fun.")," No bridge required.")),r.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(y,{src:a(47),alt:"Features split 01",width:528,height:396})))))))};de.defaultProps=me;var ve=de,ue=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],be=Object(W.a)(Object(W.a)({},R.defaults),{},{split:!1}),he=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,s=e.invertColor,l=e.split,m=Object(d.a)(e,ue),v=w()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",c&&"has-bg-color",s&&"invert-color",t),u=w()("cta-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider",l&&"cta-split");return r.a.createElement("section",Object.assign({},m,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Contract Address:",r.a.createElement("br",null),"0xdbb18c0a2b8a 41e40587923bd1 abed37c11c22fc")),r.a.createElement("div",{className:"cta-action"},r.a.createElement("button",{className:"button button-primary button-wide-mobile button-sm","aria-label":"close",onClick:function(){navigator.clipboard.writeText("0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc")}})))))};he.defaultProps=be;var fe=he,pe=function(e){var t=e.metamask;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{className:"illustration-section-01",metamask:t}),r.a.createElement(se,{metamask:t}),r.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02",metamask:t}),r.a.createElement(fe,{split:!0,metamask:t}))};N.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Ee=function(){var e=Object(i.useRef)(),t=Object(m.f)(),a=Object(l.useMetaMask)(),n=a.status,o=a.connect,c=a.account,s=a.chainId,d=a.ethereum;return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){N.a.set({page:e}),N.a.pageview(e)}(a)}),[t]),r.a.createElement(g,{ref:e,children:function(){return r.a.createElement(m.c,null,r.a.createElement(u,{exact:!0,path:"/",component:pe,layout:H,metamask:{status:n,connect:o,account:c,chainId:s,ethereum:d}}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);var ge=Object(s.a)();o.a.render(r.a.createElement(c.a,{history:ge},r.a.createElement(l.MetaMaskProvider,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.ff4a1b20.chunk.js.map