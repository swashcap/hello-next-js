(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(i.AmpStateContext))}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"2hOx":function(e,t,n){},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"5qA6":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),i=a(n("Xuae")),s=n("lwAK"),o=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var o=0,l=d.length;o<l;o++){var c=d[o];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=r.props[c],f=a[c]||new Set;f.has(u)?i=!1:(f.add(u),a[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var m=i.default();function p(e){var t=e.children;return r.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(m,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}p.rewind=m.rewind,t.default=p},Amuc:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),s=n.n(i),o=n("iuhU"),l=n("G3Ip"),c=n.n(l),u=s.a.createElement,d=function(e){var t=e.as,n=e.className,i=e.focusable,s=Object(r.a)(e,["as","className","focusable"]);return u(t||"span",Object(a.a)({className:Object(o.a)(c.a.VisuallyHidden,"bg-black bn dib pa1 tc white",i&&c.a["VisuallyHidden--focusable"],n)},s,{__source:{fileName:"/Users/creed/dev/hello-next-js/components/library/VisuallyHidden.tsx",lineNumber:33},__self:this}))};try{d.displayName="VisuallyHidden",d.__docgenInfo={description:"VisuallyHidden.\n\nMake content accessible to screen readers only.",displayName:"VisuallyHidden",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"T"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/library/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:d.__docgenInfo,name:"VisuallyHidden",path:"components/library/VisuallyHidden.tsx#VisuallyHidden"})}catch(f){}},G3Ip:function(e,t,n){e.exports={VisuallyHidden:"VisuallyHidden_VisuallyHidden__3X_ad","VisuallyHidden--focusable":"VisuallyHidden_VisuallyHidden--focusable__3b8aI"}},Xora:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),s=n.n(i),o=n("iuhU"),l=s.a.createElement,c=function(e){var t=e.className,n=Object(r.a)(e,["className"]);return l("p",Object(a.a)({className:Object(o.a)("mv3",t)},n,{__source:{fileName:"/Users/creed/dev/hello-next-js/components/styleguide/Body.tsx",lineNumber:7},__self:this}))};try{c.displayName="Body",c.__docgenInfo={description:"",displayName:"Body",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Body.tsx#Body"]={docgenInfo:c.__docgenInfo,name:"Body",path:"components/styleguide/Body.tsx#Body"})}catch(u){}},Xuae:function(e,t,n){"use strict";var a=n("/GRZ"),r=n("tCBg"),i=n("T0f4"),s=n("qXWd"),o=n("i2R6"),l=n("48fX"),c=n("mPvQ");Object.defineProperty(t,"__esModule",{value:!0});var u=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function u(e){var o;return a(this,u),o=r(this,i(u).call(this,e)),d&&(t.add(s(o)),n(s(o))),o}return l(u,c),o(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("/GRZ"),r=n("i2R6"),i=n("tCBg"),s=n("T0f4"),o=n("48fX"),l=n("AroE"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var u,d=c(n("q1tI")),f=n("QmWs"),m=n("g/15"),p=l(n("nOHt"));function _(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var h=new Map,y=window.IntersectionObserver,b={};function N(){return u||(y?u=new y((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var v=function(e){function t(e){var n;return a(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,a=null;return function(r,i){if(a&&r===t&&i===n)return a;var s=e(r,i);return t=r,n=i,a=s,s}}((function(e,t){return{href:_(e),as:t?_(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,o=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var l=window.location.pathname;s=(0,f.resolve)(l,s),o=o?(0,f.resolve)(l,o):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=o.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](s,o,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return o(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,r=(0,f.resolve)(e,n);return[r,a?(0,f.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=N();return n?(n.observe(e),h.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}h.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();p.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=r||a),d.default.cloneElement(i,s)}}]),t}(d.Component);t.default=v},cha2:function(e,t,n){"use strict";n.r(t);var a=n("Ff2n"),r=n("wx14"),i=n("q1tI"),s=n.n(i),o=n("7ljp"),l=(n("2hOx"),n("5qA6"),n("Xora")),c=n("FQVB"),u=n("iuhU"),d=n("LvDl"),f=n("twcq"),m=n.n(f),p="/Users/creed/dev/hello-next-js/components/styleguide/Heading.tsx",_=s.a.createElement,h=function(e){var t=e.children,n=e.className,i=e.id,s=e.variant,o=void 0===s?"1":s,l=Object(a.a)(e,["children","className","id","variant"]),c=i||Object(d.snakeCase)(t);return _("2"===o?"h2":"3"===o?"h3":"4"===o?"h4":"h1",Object(r.a)({className:Object(u.a)(m.a.Heading,"lh-title mb3 relative","1"===o&&"f1 fw8 mt3","2"===o&&"f2 fw5 mt4","3"===o&&"f3 fw5 mt4","4"===o&&"dark-gray f5 fw7 mt4 tracked ttu",n),id:c},l,{__source:{fileName:p,lineNumber:34},__self:this}),_("a",{"aria-label":"Link to header",className:Object(u.a)(m.a.HeadingAnchor,"absolute dark-red dib f5 fw4 no-underline pv1 tc"),href:"#".concat(c),__source:{fileName:p,lineNumber:47},__self:this},"#"),t)};try{h.displayName="Heading",h.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"1"},description:"",name:"variant",required:!1,type:{name:"HeadingVariant"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Heading.tsx#Heading"]={docgenInfo:h.__docgenInfo,name:"Heading",path:"components/styleguide/Heading.tsx#Heading"})}catch($){}var y=n("8Kt/"),b=n.n(y),N=n("nOHt"),v=s.a.createElement,O=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return v("hr",Object(r.a)({className:Object(u.a)("bb bl-0 br-0 bt-0 b--silver",t)},n,{__source:{fileName:"/Users/creed/dev/hello-next-js/components/styleguide/Divider.tsx",lineNumber:7},__self:this}))};try{O.displayName="Divider",O.__docgenInfo={description:"",displayName:"Divider",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Divider.tsx#Divider"]={docgenInfo:O.__docgenInfo,name:"Divider",path:"components/styleguide/Divider.tsx#Divider"})}catch($){}var g="/Users/creed/dev/hello-next-js/components/styleguide/Footer.tsx",S=s.a.createElement,x=function(e){e.children;var t=e.className,n=Object(a.a)(e,["children","className"]);return S("footer",Object(r.a)({className:Object(u.a)("bt b--silver dark-gray pv2",t),role:"contentinfo"},n,{__source:{fileName:g,lineNumber:11},__self:this}),S("div",{className:"flex justify-between",__source:{fileName:g,lineNumber:16},__self:this},S("small",{className:"f6 dib",__source:{fileName:g,lineNumber:17},__self:this},"Hello, Next.js!"),S("small",{className:"f6 dib",__source:{fileName:g,lineNumber:18},__self:this},"Source code"," ",S("a",{className:"color-inherit dim",href:"#",__source:{fileName:g,lineNumber:20},__self:this},"on GitHub"))))};try{x.displayName="Footer",x.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Footer.tsx#Footer"]={docgenInfo:x.__docgenInfo,name:"Footer",path:"components/styleguide/Footer.tsx#Footer"})}catch($){}var C=n("owbR"),j="/Users/creed/dev/hello-next-js/components/styleguide/layouts/FullPageLayout.tsx",w=s.a.createElement,E=function(e){var t=e.children,n=e.className;Object(a.a)(e,["children","className"]);return w(C.a,{className:Object(u.a)("flex-wrap",n),__source:{fileName:j,lineNumber:13},__self:this},w(C.a.Column,{className:"w-100 w-80-m w-80-l",__source:{fileName:j,lineNumber:14},__self:this},t))};try{E.displayName="FullPageLayout",E.__docgenInfo={description:"",displayName:"FullPageLayout",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/layouts/FullPageLayout.tsx#FullPageLayout"]={docgenInfo:E.__docgenInfo,name:"FullPageLayout",path:"components/styleguide/layouts/FullPageLayout.tsx#FullPageLayout"})}catch($){}var A=n("rePB"),R=n("YFqc"),k=n.n(R),T="/Users/creed/dev/hello-next-js/components/styleguide/Link.tsx",L=s.a.createElement;function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var H=function(e){var t=e.className,n=e.href,i=e.underline,s=Object(a.a)(e,["className","href","underline"]),o=Object(N.useRouter)().pathname,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:Object(u.a)("black dim",i?"underline":"no-underline",n===o&&"dark-red",t)},s);return L(k.a,{href:n,__source:{fileName:T,lineNumber:30},__self:this},L("a",Object(r.a)({},l,{__source:{fileName:T,lineNumber:31},__self:this})))};try{H.displayName="Link",H.__docgenInfo={description:"",displayName:"Link",props:{underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"Url"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"",name:"prefetch",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Link.tsx#Link"]={docgenInfo:H.__docgenInfo,name:"Link",path:"components/styleguide/Link.tsx#Link"})}catch($){}var B="/Users/creed/dev/hello-next-js/components/styleguide/Nav.tsx",V=s.a.createElement,P=function(e){var t=e.inline,n=e.links,i=Object(a.a)(e,["inline","links"]);return V("nav",Object(r.a)({},i,{__source:{fileName:B,lineNumber:15},__self:this}),V("ul",{className:Object(u.a)("list ma0 pa0",t?"flex":"nl2 nr2"),__source:{fileName:B,lineNumber:16},__self:this},n.map((function(e){var n=e.href,a=e.name;return V("li",{key:n,__source:{fileName:B,lineNumber:18},__self:this},V(H,{className:t?"dib ph2 pv3":"db ph2 pv1",href:n,__source:{fileName:B,lineNumber:19},__self:this},a))}))))};try{P.displayName="Nav",P.__docgenInfo={description:"",displayName:"Nav",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"{ href: string; name: string; }[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Nav.tsx#Nav"]={docgenInfo:P.__docgenInfo,name:"Nav",path:"components/styleguide/Nav.tsx#Nav"})}catch($){}var q="/Users/creed/dev/hello-next-js/components/styleguide/SearchForm.tsx",F=s.a.createElement,K=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return F("form",Object(r.a)({className:Object(u.a)("flex",t),role:"search"},n,{__source:{fileName:q,lineNumber:11},__self:this}),F("input",{className:"bb bl br-0 bt b--silver black db input-reset lh-copy ph2 pv1 sans-serif w-100",placeholder:"Component name\u2026",style:{flex:2},__source:{fileName:q,lineNumber:12},__self:this}),F("button",{className:"ba b--transparent bg-dark-gray button-reset dib dim lh-copy ph2 pv1 pointer sans-serif white",type:"submit",__source:{fileName:q,lineNumber:19},__self:this},"Search"))};try{K.displayName="SearchForm",K.__docgenInfo={description:"",displayName:"SearchForm",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/SearchForm.tsx#SearchForm"]={docgenInfo:K.__docgenInfo,name:"SearchForm",path:"components/styleguide/SearchForm.tsx#SearchForm"})}catch($){}var U="/Users/creed/dev/hello-next-js/components/styleguide/layouts/SidebarLayout.tsx",Y=s.a.createElement,M=function(e){var t=e.children,n=e.className,i=e.sidebar,s=Object(a.a)(e,["children","className","sidebar"]);return Y(C.a,Object(r.a)({className:Object(u.a)("flex-wrap",n)},s,{__source:{fileName:U,lineNumber:16},__self:this}),Y(C.a.Column,{className:"w-100 w-20-m w-20-l",__source:{fileName:U,lineNumber:17},__self:this},i),Y(C.a.Column,{className:"w-100 w-80-m w-80-l",__source:{fileName:U,lineNumber:18},__self:this},t))};try{M.displayName="SidebarLayout",M.__docgenInfo={description:"",displayName:"SidebarLayout",props:{sidebar:{defaultValue:null,description:"",name:"sidebar",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/layouts/SidebarLayout.tsx#SidebarLayout"]={docgenInfo:M.__docgenInfo,name:"SidebarLayout",path:"components/styleguide/layouts/SidebarLayout.tsx#SidebarLayout"})}catch($){}var D=n("Amuc"),X="/Users/creed/dev/hello-next-js/components/styleguide/Root.tsx",G=s.a.createElement,Q=function(e){var t=e.className,n=e.children,i=e.description,o=e.title,l=Object(a.a)(e,["className","children","description","title"]),c=Object(N.useRouter)().pathname;return G("div",Object(r.a)({className:Object(u.a)("flex flex-column",t),style:{minHeight:"100vh"}},l,{__source:{fileName:X,lineNumber:31},__self:this}),G(D.a,{as:"a",focusable:!0,href:"#content",__source:{fileName:X,lineNumber:36},__self:this},"Skip to content"),G(b.a,{__source:{fileName:X,lineNumber:39},__self:this},G("link",{rel:"icon",href:"/favicon.ico",__source:{fileName:X,lineNumber:40},__self:this}),G("title",{__source:{fileName:X,lineNumber:41},__self:this},o),!!i&&G("meta",{name:"description",content:i,__source:{fileName:X,lineNumber:42},__self:this})),G("header",{className:"bb b--silver items-center",role:"banner",__source:{fileName:X,lineNumber:44},__self:this},G(C.a,{className:"flex-wrap items-center",__source:{fileName:X,lineNumber:45},__self:this},G(C.a.Column,{className:"w-100 w-70-l",__source:{fileName:X,lineNumber:46},__self:this},G(H,{className:"fw7 pv3",href:"/",__source:{fileName:X,lineNumber:47},__self:this},"Hello, Next.js!"),G(P,{className:"inline-flex pl3",inline:!0,links:[{href:"/components",name:"Components"}],__source:{fileName:X,lineNumber:50},__self:this})),G(C.a.Column,{className:"w-100 w-30-l",__source:{fileName:X,lineNumber:61},__self:this},G(K,{__source:{fileName:X,lineNumber:62},__self:this})))),G("main",{style:{flex:2},__source:{fileName:X,lineNumber:66},__self:this},c.includes("components")?G(M,{sidebar:G(s.a.Fragment,null,G(P,{className:"mb2 mt3",links:[{href:"/components",name:"Getting Started"}],__source:{fileName:X,lineNumber:71},__self:this}),G(O,{className:"mv2",__source:{fileName:X,lineNumber:80},__self:this}),G(P,{className:"mv2",links:[{href:"/components/Alert",name:"Alert"},{href:"/components/Breadcrumb",name:"Breadcrumb"},{href:"/components/Button",name:"Button"},{href:"/components/Card",name:"Card"}],__source:{fileName:X,lineNumber:81},__self:this}),G(O,{className:"mv2",__source:{fileName:X,lineNumber:102},__self:this}),G(P,{className:"mv2",links:[{href:"/components/utilities",name:"Utilities"}],__source:{fileName:X,lineNumber:103},__self:this})),__source:{fileName:X,lineNumber:68},__self:this},G("article",{className:"mb4 mt3",id:"content",__source:{fileName:X,lineNumber:115},__self:this},n)):G(E,{id:"content",__source:{fileName:X,lineNumber:120},__self:this},n)),G(x,{__source:{fileName:X,lineNumber:123},__self:this}))};try{Q.displayName="Root",Q.__docgenInfo={description:"",displayName:"Root",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/styleguide/Root.tsx#Root"]={docgenInfo:Q.__docgenInfo,name:"Root",path:"components/styleguide/Root.tsx#Root"})}catch($){}var W="/Users/creed/dev/hello-next-js/pages/_app.tsx",J=s.a.createElement,Z={a:function(e){return J(H,Object(r.a)({underline:!0},e,{__source:{fileName:W,lineNumber:15},__self:this}))},h1:function(e){return J(h,Object(r.a)({},e,{__source:{fileName:W,lineNumber:16},__self:this}))},h2:function(e){return J(h,Object(r.a)({variant:"2"},e,{__source:{fileName:W,lineNumber:17},__self:this}))},h3:function(e){return J(h,Object(r.a)({variant:"3"},e,{__source:{fileName:W,lineNumber:18},__self:this}))},h4:function(e){return J(h,Object(r.a)({variant:"4"},e,{__source:{fileName:W,lineNumber:19},__self:this}))},p:function(e){return J(l.a,Object(r.a)({},e,{__source:{fileName:W,lineNumber:20},__self:this}))},pre:function(e){return J("div",Object(r.a)({},e,{__source:{fileName:W,lineNumber:21},__self:this}))},code:function(e){var t=e.children,n=e.className,i=Object(a.a)(e,["children","className"]),s=n.replace(/language-/,"");return J(c.a,Object(r.a)({className:"mv3",language:s},i,{__source:{fileName:W,lineNumber:30},__self:this}),t)}};t.default=function(e){var t=e.Component,n=e.pageProps;return J(o.a,{components:Z,__source:{fileName:W,lineNumber:39},__self:this},J(Q,{title:"Hello, Next.js!",__source:{fileName:W,lineNumber:40},__self:this},J(t,Object(r.a)({},n,{__source:{fileName:W,lineNumber:41},__self:this}))))};try{app.displayName="app",app.__docgenInfo={description:"",displayName:"app",props:{pageProps:{defaultValue:null,description:"",name:"pageProps",required:!0,type:{name:"any"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"NextComponentType<NextPageContext, any, {}>"}},router:{defaultValue:null,description:"",name:"router",required:!0,type:{name:"Router"}},__N_SSG:{defaultValue:null,description:"",name:"__N_SSG",required:!1,type:{name:"boolean"}},__N_SSP:{defaultValue:null,description:"",name:"__N_SSP",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["pages/_app.tsx#app"]={docgenInfo:app.__docgenInfo,name:"app",path:"pages/_app.tsx#app"})}catch($){}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.AmpStateContext=r.createContext({})},mPvQ:function(e,t,n){var a=n("5fIB"),r=n("rlHP"),i=n("kG2m");e.exports=function(e){return a(e)||r(e)||i()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},twcq:function(e,t,n){e.exports={Heading:"Heading_Heading__15zQX",HeadingAnchor:"Heading_HeadingAnchor__Dxt03"}}},[[0,0,1,3,4,2,5]]]);