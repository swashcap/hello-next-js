(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var r=a(t("q1tI")),o=t("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return t||r&&(void 0!==o&&o)}n.isInAmpMode=i,n.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))}},0:function(e,n,t){t("74v/"),e.exports=t("nOHt")},"2hOx":function(e,n,t){},"5fIB":function(e,n){e.exports=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},"5qA6":function(e,n,t){},"74v/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},"8Kt/":function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var r=a(t("q1tI")),o=a(t("Xuae")),i=t("lwAK"),l=t("FYa8"),s=t("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[r.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function u(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===r.default.Fragment?e.concat(r.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}n.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function p(e,n){return e.reduce((function(e,n){var t=r.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(u,[]).reverse().concat(c(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":n.has(r.type)?o=!1:n.add(r.type);break;case"meta":for(var l=0,s=d.length;l<s;l++){var c=d[l];if(r.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?o=!1:t.add(c);else{var u=r.props[c],p=a[c]||new Set;p.has(u)?o=!1:(p.add(u),a[c]=p)}}}return o}}()).reverse().map((function(e,n){var t=e.key||n;return r.default.cloneElement(e,{key:t})}))}var f=o.default();function m(e){var n=e.children;return r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(t){return r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:t,inAmpMode:s.isInAmpMode(e)},n)}))}))}m.rewind=f.rewind,n.default=m},Amuc:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("wx14"),r=t("Ff2n"),o=t("q1tI"),i=t.n(o),l=t("iuhU"),s=t("G3Ip"),c=t.n(s),u=i.a.createElement,d=function(e){var n=e.as,t=e.className,o=e.focusable,i=Object(r.a)(e,["as","className","focusable"]);return u(n||"span",Object(a.a)({className:Object(l.a)(c.a.VisuallyHidden,"bg-black bn dib pa1 tc white",o&&c.a["VisuallyHidden--focusable"],t)},i))};try{d.displayName="VisuallyHidden",d.__docgenInfo={description:"VisuallyHidden.\n\nMake content accessible to screen readers only.",displayName:"VisuallyHidden",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"T"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/library/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:d.__docgenInfo,name:"VisuallyHidden",path:"components/library/VisuallyHidden.tsx#VisuallyHidden"})}catch(p){}},G3Ip:function(e,n,t){e.exports={VisuallyHidden:"VisuallyHidden_VisuallyHidden__3X_ad","VisuallyHidden--focusable":"VisuallyHidden_VisuallyHidden--focusable__3b8aI"}},Xora:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("wx14"),r=t("Ff2n"),o=t("q1tI"),i=t.n(o),l=t("iuhU"),s=i.a.createElement,c=function(e){var n=e.className,t=Object(r.a)(e,["className"]);return s("p",Object(a.a)({className:Object(l.a)("mv3",n)},t))};try{c.displayName="Body",c.__docgenInfo={description:"",displayName:"Body",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Body.tsx#Body"]={docgenInfo:c.__docgenInfo,name:"Body",path:"components/styleguide/Body.tsx#Body"})}catch(u){}},Xuae:function(e,n,t){"use strict";var a=t("/GRZ"),r=t("tCBg"),o=t("T0f4"),i=t("qXWd"),l=t("i2R6"),s=t("48fX"),c=t("mPvQ");Object.defineProperty(n,"__esModule",{value:!0});var u=t("q1tI"),d=!1;n.default=function(){var e,n=new Set;function t(t){e=t.props.reduceComponentsToState(c(n),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return function(c){function u(e){var l;return a(this,u),l=r(this,o(u).call(this,e)),d&&(n.add(i(l)),t(i(l))),l}return s(u,c),l(u,null,[{key:"rewind",value:function(){var t=e;return e=void 0,n.clear(),t}}]),l(u,[{key:"componentDidMount",value:function(){n.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),t(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var a=t("/GRZ"),r=t("i2R6"),o=t("tCBg"),i=t("T0f4"),l=t("48fX"),s=t("AroE"),c=t("7KCV");n.__esModule=!0,n.default=void 0;var u,d=c(t("q1tI")),p=t("QmWs"),f=t("g/15"),m=s(t("nOHt"));function h(e){return e&&"object"===typeof e?(0,f.formatWithValidation)(e):e}var y=new Map,v=window.IntersectionObserver,b={};function _(){return u||(v?u=new v((function(e){e.forEach((function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){function n(e){var t;return a(this,n),(t=o(this,i(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,a=null;return function(r,o){if(a&&r===n&&o===t)return a;var i=e(r,o);return n=r,t=o,a=i,i}}((function(e,n){return{href:h(e),as:n?h(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,l=o.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,f.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var s=window.location.pathname;i=(0,p.resolve)(s,i),l=l?(0,p.resolve)(s,l):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,l,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return l(n,e),r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,a=n.as,r=(0,p.resolve)(e,t);return[r,a?(0,p.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var n=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=_();return t?(t.observe(e),y.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}y.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],e).catch((function(e){0})),b[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,r=t.as;"string"===typeof n&&(n=d.default.createElement("a",null,n));var o=d.Children.only(n),i={ref:function(n){e.handleRef(n),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(n):"object"===typeof o.ref&&(o.ref.current=n))},onMouseEnter:function(n){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),d.default.cloneElement(o,i)}}]),n}(d.Component);n.default=O},cha2:function(e,n,t){"use strict";t.r(n);var a=t("Ff2n"),r=t("wx14"),o=t("q1tI"),i=t.n(o),l=t("7ljp"),s=(t("2hOx"),t("5qA6"),t("Xora")),c=t("FQVB"),u=t("iuhU"),d=t("LvDl"),p=t("twcq"),f=t.n(p),m=i.a.createElement,h=function(e){var n=e.children,t=e.className,o=e.id,i=e.variant,l=void 0===i?"1":i,s=Object(a.a)(e,["children","className","id","variant"]),c=o||Object(d.snakeCase)(n);return m("2"===l?"h2":"3"===l?"h3":"4"===l?"h4":"h1",Object(r.a)({className:Object(u.a)(f.a.Heading,"lh-title mb3 relative","1"===l&&"f1 fw8 mt3","2"===l&&"f2 fw5 mt4","3"===l&&"f3 fw5 mt4","4"===l&&"dark-gray f5 fw7 mt4 tracked ttu",t),id:c},s),m("a",{"aria-label":"Link to header",className:Object(u.a)(f.a.HeadingAnchor,"absolute dark-red dib f5 fw4 no-underline pv1 tc"),href:"#".concat(c)},"#"),n)};try{h.displayName="Heading",h.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"1"},description:"",name:"variant",required:!1,type:{name:"HeadingVariant"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Heading.tsx#Heading"]={docgenInfo:h.__docgenInfo,name:"Heading",path:"components/styleguide/Heading.tsx#Heading"})}catch(M){}var y=t("8Kt/"),v=t.n(y),b=t("nOHt"),_=i.a.createElement,O=function(e){var n=e.className,t=Object(a.a)(e,["className"]);return _("hr",Object(r.a)({className:Object(u.a)("bb bl-0 br-0 bt-0 b--silver",n)},t))};try{O.displayName="Divider",O.__docgenInfo={description:"",displayName:"Divider",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Divider.tsx#Divider"]={docgenInfo:O.__docgenInfo,name:"Divider",path:"components/styleguide/Divider.tsx#Divider"})}catch(M){}var S=i.a.createElement,g=function(e){e.children;var n=e.className,t=Object(a.a)(e,["children","className"]);return S("footer",Object(r.a)({className:Object(u.a)("bt b--silver dark-gray pv2",n),role:"contentinfo"},t),S("div",{className:"flex justify-between"},S("small",{className:"f6 dib"},"Hello, Next.js!"),S("small",{className:"f6 dib"},"Source code"," ",S("a",{className:"color-inherit dim",href:"https://github.com/swashcap/hello-next-js"},"on GitHub"))))};try{g.displayName="Footer",g.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Footer.tsx#Footer"]={docgenInfo:g.__docgenInfo,name:"Footer",path:"components/styleguide/Footer.tsx#Footer"})}catch(M){}var N=t("owbR"),C=i.a.createElement,w=function(e){var n=e.children,t=e.className;Object(a.a)(e,["children","className"]);return C(N.a,{className:Object(u.a)("flex-wrap",t)},C(N.a.Column,{className:"w-100 w-80-m w-80-l"},n))};try{w.displayName="FullPageLayout",w.__docgenInfo={description:"",displayName:"FullPageLayout",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/layouts/FullPageLayout.tsx#FullPageLayout"]={docgenInfo:w.__docgenInfo,name:"FullPageLayout",path:"components/styleguide/layouts/FullPageLayout.tsx#FullPageLayout"})}catch(M){}var E=t("rePB"),A=t("YFqc"),j=t.n(A),R=i.a.createElement;function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var T=function(e){var n=e.className,t=e.href,r=e.underline,o=Object(a.a)(e,["className","href","underline"]),i=Object(b.useRouter)().pathname,l=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){Object(E.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({className:Object(u.a)("black dim",r?"underline":"no-underline",t===i&&"dark-red",n)},o);return R(j.a,{href:t},R("a",l))};try{T.displayName="Link",T.__docgenInfo={description:"",displayName:"Link",props:{underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"Url"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"",name:"prefetch",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Link.tsx#Link"]={docgenInfo:T.__docgenInfo,name:"Link",path:"components/styleguide/Link.tsx#Link"})}catch(M){}var k=i.a.createElement,I=function(e){var n=e.inline,t=e.links,r=Object(a.a)(e,["inline","links"]);return k("nav",r,k("ul",{className:Object(u.a)("list ma0 pa0",n?"flex":"nl2 nr2")},t.map((function(e){var t=e.href,a=e.name;return k("li",{key:t},k(T,{className:n?"dib ph2 pv3":"db ph2 pv1",href:t},a))}))))};try{I.displayName="Nav",I.__docgenInfo={description:"",displayName:"Nav",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"{ href: string; name: string; }[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Nav.tsx#Nav"]={docgenInfo:I.__docgenInfo,name:"Nav",path:"components/styleguide/Nav.tsx#Nav"})}catch(M){}var L=i.a.createElement,H=function(e){var n=e.className,t=Object(a.a)(e,["className"]);return L("form",Object(r.a)({className:Object(u.a)("flex",n),role:"search"},t),L("input",{className:"bb bl br-0 bt b--silver black db input-reset lh-copy ph2 pv1 sans-serif w-100",placeholder:"Component name\u2026",style:{flex:2}}),L("button",{className:"ba b--transparent bg-dark-gray button-reset dib dim lh-copy ph2 pv1 pointer sans-serif white",type:"submit"},"Search"))};try{H.displayName="SearchForm",H.__docgenInfo={description:"",displayName:"SearchForm",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/SearchForm.tsx#SearchForm"]={docgenInfo:H.__docgenInfo,name:"SearchForm",path:"components/styleguide/SearchForm.tsx#SearchForm"})}catch(M){}var B=i.a.createElement,V=function(e){var n=e.children,t=e.className,o=e.sidebar,i=Object(a.a)(e,["children","className","sidebar"]);return B(N.a,Object(r.a)({className:Object(u.a)("flex-wrap",t)},i),B(N.a.Column,{className:"w-100 w-20-m w-20-l"},o),B(N.a.Column,{className:"w-100 w-80-m w-80-l"},n))};try{V.displayName="SidebarLayout",V.__docgenInfo={description:"",displayName:"SidebarLayout",props:{sidebar:{defaultValue:null,description:"",name:"sidebar",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/layouts/SidebarLayout.tsx#SidebarLayout"]={docgenInfo:V.__docgenInfo,name:"SidebarLayout",path:"components/styleguide/layouts/SidebarLayout.tsx#SidebarLayout"})}catch(M){}var P=t("Amuc"),q=i.a.createElement,K=function(e){var n=e.className,t=e.children,o=e.description,l=e.title,s=Object(a.a)(e,["className","children","description","title"]),c=Object(b.useRouter)().pathname;return q("div",Object(r.a)({className:Object(u.a)("flex flex-column",n),style:{minHeight:"100vh"}},s),q(P.a,{as:"a",focusable:!0,href:"#content"},"Skip to content"),q(v.a,null,q("link",{rel:"icon",href:"/favicon.ico"}),q("title",null,l),!!o&&q("meta",{name:"description",content:o})),q("header",{className:"bb b--silver items-center",role:"banner"},q(N.a,{className:"flex-wrap items-center"},q(N.a.Column,{className:"w-100 w-70-l"},q(T,{className:"fw7 pv3",href:"/"},"Hello, Next.js!"),q(I,{className:"inline-flex pl3",inline:!0,links:[{href:"/components/",name:"Components"}]})),q(N.a.Column,{className:"w-100 w-30-l"},q(H,null)))),q("main",{style:{flex:2}},c.includes("components")?q(V,{sidebar:q(i.a.Fragment,null,q(I,{className:"mb2 mt3",links:[{href:"/components/",name:"Getting Started"}]}),q(O,{className:"mv2"}),q(I,{className:"mv2",links:[{href:"/components/Alert/",name:"Alert"},{href:"/components/Breadcrumb/",name:"Breadcrumb"},{href:"/components/Button/",name:"Button"},{href:"/components/Card/",name:"Card"}]}),q(O,{className:"mv2"}),q(I,{className:"mv2",links:[{href:"/components/utilities/",name:"Utilities"}]}))},q("article",{className:"mb4 mt3",id:"content"},t)):q(w,{id:"content"},t)),q(g,null))};try{K.displayName="Root",K.__docgenInfo={description:"",displayName:"Root",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Root.tsx#Root"]={docgenInfo:K.__docgenInfo,name:"Root",path:"components/styleguide/Root.tsx#Root"})}catch(M){}var F=i.a.createElement,Y={a:function(e){return F(T,Object(r.a)({underline:!0},e))},h1:function(e){return F(h,e)},h2:function(e){return F(h,Object(r.a)({variant:"2"},e))},h3:function(e){return F(h,Object(r.a)({variant:"3"},e))},h4:function(e){return F(h,Object(r.a)({variant:"4"},e))},p:function(e){return F(s.a,e)},pre:function(e){return F("div",e)},code:function(e){var n=e.children,t=e.className,o=Object(a.a)(e,["children","className"]),i=t.replace(/language-/,"");return F(c.a,Object(r.a)({className:"mv3",language:i},o),n)}};n.default=function(e){var n=e.Component,t=e.pageProps;return F(l.a,{components:Y},F(K,{title:"Hello, Next.js!"},F(n,t)))};try{app.displayName="app",app.__docgenInfo={description:"",displayName:"app",props:{pageProps:{defaultValue:null,description:"",name:"pageProps",required:!0,type:{name:"any"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"NextComponentType<NextPageContext, any, {}>"}},router:{defaultValue:null,description:"",name:"router",required:!0,type:{name:"Router"}},__N_SSG:{defaultValue:null,description:"",name:"__N_SSG",required:!1,type:{name:"boolean"}},__N_SSP:{defaultValue:null,description:"",name:"__N_SSP",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["pages/_app.tsx#app"]={docgenInfo:app.__docgenInfo,name:"app",path:"pages/_app.tsx#app"})}catch(M){}},kG2m:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,n,t){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var r=a(t("q1tI"));n.AmpStateContext=r.createContext({})},mPvQ:function(e,n,t){var a=t("5fIB"),r=t("rlHP"),o=t("kG2m");e.exports=function(e){return a(e)||r(e)||o()}},rlHP:function(e,n){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},twcq:function(e,n,t){e.exports={Heading:"Heading_Heading__15zQX",HeadingAnchor:"Heading_HeadingAnchor__Dxt03"}}},[[0,0,1,2,4,3,5]]]);