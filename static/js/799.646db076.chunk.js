(self.webpackChunktito_portfolio=self.webpackChunktito_portfolio||[]).push([[799],{1867:function(e,n,t){"use strict";t.d(n,{zx:function(){return O}});var r=t(4942),a=t(1413),i=t(4925),o=t(9439),c=t(2791);function l(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){l(n,e)}))}}function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,c.useMemo)((function(){return s.apply(void 0,n)}),n)}var d=t(9610),f=t(2965),p=t(2680),m=t(9194),h=["children","className"],g=["label","placement","spacing","children","className","__css"],v=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],y=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],b=["icon","children","isRound","aria-label"],k=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},Z=function(e){return e?"":void 0},E=(0,p.k)({strict:!1,name:"ButtonGroupContext"}),_=(0,o.Z)(E,2),S=_[0],N=_[1];function x(e){var n=e.children,t=e.className,r=(0,i.Z)(e,h),o=(0,c.isValidElement)(n)?(0,c.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=k("chakra-button__icon",t);return c.createElement(d.m$.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:l}),o)}function w(e){var n=e.label,t=e.placement,o=e.spacing,l=void 0===o?"0.5rem":o,s=e.children,u=void 0===s?c.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):s,f=e.className,p=e.__css,h=(0,i.Z)(e,g),v=k("chakra-button__spinner",f),y="start"===t?"marginEnd":"marginStart",b=(0,c.useMemo)((function(){var e;return(0,a.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,r.Z)(e,y,n?l:0),(0,r.Z)(e,"fontSize","1em"),(0,r.Z)(e,"lineHeight","normal"),e),p)}),[p,n,y,l]);return c.createElement(d.m$.div,(0,a.Z)((0,a.Z)({className:v},h),{},{__css:b}),u)}x.displayName="ButtonIcon",w.displayName="ButtonSpinner";var O=(0,d.Gp)((function(e,n){var t=N(),r=(0,d.mq)("Button",(0,a.Z)((0,a.Z)({},t),e)),l=(0,f.Lr)(e),s=l.isDisabled,p=void 0===s?null==t?void 0:t.isDisabled:s,m=l.isLoading,h=l.isActive,g=l.children,y=l.leftIcon,b=l.rightIcon,E=l.loadingText,_=l.iconSpacing,S=void 0===_?"0.5rem":_,x=l.type,O=l.spinner,z=l.spinnerPlacement,T=void 0===z?"start":z,C=l.className,L=l.as,j=(0,i.Z)(l,v),A=(0,c.useMemo)((function(){var e=(0,a.Z)((0,a.Z)({},null==r?void 0:r._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},r),!!t&&{_focus:e})}),[r,t]),P=function(e){var n=(0,c.useState)(!e),t=(0,o.Z)(n,2),r=t[0],a=t[1];return{ref:(0,c.useCallback)((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(L),R=P.ref,B=P.type,M={rightIcon:b,leftIcon:y,iconSpacing:S,children:g};return c.createElement(d.m$.button,(0,a.Z)({disabled:p||m,ref:u(n,R),as:L,type:null!==x&&void 0!==x?x:B,"data-active":Z(h),"data-loading":Z(m),__css:A,className:k("chakra-button",C)},j),m&&"start"===T&&c.createElement(w,{className:"chakra-button__spinner--start",label:E,placement:"start",spacing:S},O),m?E||c.createElement(d.m$.span,{opacity:0},c.createElement(I,(0,a.Z)({},M))):c.createElement(I,(0,a.Z)({},M)),m&&"end"===T&&c.createElement(w,{className:"chakra-button__spinner--end",label:E,placement:"end",spacing:S},O))}));function I(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,n&&c.createElement(x,{marginEnd:a},n),r,t&&c.createElement(x,{marginStart:a},t))}O.displayName="Button",(0,d.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,l=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,f=e.isAttached,p=e.isDisabled,m=(0,i.Z)(e,y),h=k("chakra-button__group",l),g=(0,c.useMemo)((function(){return{size:t,colorScheme:r,variant:o,isDisabled:p}}),[t,r,o,p]),v={display:"inline-flex"};return v=f?(0,a.Z)((0,a.Z)({},v),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,a.Z)((0,a.Z)({},v),{},{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(S,{value:g},c.createElement(d.m$.div,(0,a.Z)({ref:n,role:"group",__css:v,className:h,"data-attached":f?"":void 0},m)))})).displayName="ButtonGroup",(0,d.Gp)((function(e,n){var t=e.icon,r=e.children,o=e.isRound,l=e["aria-label"],s=(0,i.Z)(e,b),u=t||r,d=(0,c.isValidElement)(u)?(0,c.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(O,(0,a.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":l},s),d)})).displayName="IconButton"},4828:function(e,n,t){"use strict";t.d(n,{Ee:function(){return p}});var r=t(1413),a=t(4925),i=t(9439),o=t(7762),c=t(2791),l=t(9610),s=t(8104),u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var f=(0,l.Gp)((function(e,n){var t=e.htmlWidth,i=e.htmlHeight,o=e.alt,l=(0,a.Z)(e,u);return c.createElement("img",(0,r.Z)({width:t,height:i,ref:n,alt:o},l))}));f.displayName="NativeImage";var p=(0,l.Gp)((function(e,n){var t=e.fallbackSrc,u=e.fallback,p=e.src,m=e.srcSet,h=e.align,g=e.fit,v=e.loading,y=e.ignoreFallback,b=e.crossOrigin,k=e.fallbackStrategy,Z=void 0===k?"beforeLoadOrError":k,E=e.referrerPolicy,_=(0,a.Z)(e,d),S=null!=v||y||!(void 0!==t||void 0!==u),N=function(e){var n=e.loading,t=e.src,r=e.srcSet,a=e.onLoad,o=e.onError,l=e.crossOrigin,u=e.sizes,d=e.ignoreFallback,f=(0,c.useState)("pending"),p=(0,i.Z)(f,2),m=p[0],h=p[1];(0,c.useEffect)((function(){h(t?"loading":"pending")}),[t]);var g=(0,c.useRef)(),v=(0,c.useCallback)((function(){if(t){y();var e=new Image;e.src=t,l&&(e.crossOrigin=l),r&&(e.srcset=r),u&&(e.sizes=u),n&&(e.loading=n),e.onload=function(e){y(),h("loaded"),null==a||a(e)},e.onerror=function(e){y(),h("failed"),null==o||o(e)},g.current=e}}),[t,l,r,u,a,o,n]),y=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,s.G)((function(){if(!d)return"loading"===m&&v(),function(){y()}}),[m,v,d]),d?"loaded":m}((0,r.Z)((0,r.Z)({},e),{},{ignoreFallback:S})),x=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(N,Z),w=(0,r.Z)({ref:n,objectFit:g,objectPosition:h},S?_:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=(0,o.Z)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(c){a.e(c)}finally{a.f()}return r}(_,["onError","onLoad"]));return x?u||c.createElement(l.m$.img,(0,r.Z)({as:f,className:"chakra-image__placeholder",src:t},w)):c.createElement(l.m$.img,(0,r.Z)({as:f,src:p,srcSet:m,crossOrigin:b,loading:v,referrerPolicy:E,className:"chakra-image"},w))}));p.displayName="Image";(0,l.Gp)((function(e,n){return c.createElement(l.m$.img,(0,r.Z)({ref:n,as:f,className:"chakra-image"},e))}))},3077:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(2791),a=t(2007),i=t.n(a),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},c=["color","size","strokeWidth","children"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var s=function(e,n){var t=(0,r.forwardRef)((function(t,a){var i,s=t.color,u=void 0===s?"currentColor":s,d=t.size,f=void 0===d?24:d,p=t.strokeWidth,m=void 0===p?2:p,h=t.children,g=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(t,c);return(0,r.createElement)("svg",l({ref:a},o,{width:f,height:f,stroke:u,strokeWidth:m,className:"lucide lucide-"+(i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())},g),[].concat(n.map((function(e){var n=e[0],t=e[1];return(0,r.createElement)(n,t)})),h||[]))}));return t.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),strokeWidth:i().oneOfType([i().string,i().number])},t.displayName=""+e,t}},6686:function(e,n,t){"use strict";var r=(0,t(3077).Z)("Book",[["path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20",key:"126fyg"}],["path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",key:"1msh16"}]]);n.Z=r},3244:function(e,n,t){"use strict";var r=(0,t(3077).Z)("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",y1:"13",x2:"8",y2:"13",key:"7g4hpw"}],["line",{x1:"16",y1:"17",x2:"8",y2:"17",key:"1nzzn0"}],["line",{x1:"10",y1:"9",x2:"8",y2:"9",key:"13jkcr"}]]);n.Z=r},4525:function(e,n,t){"use strict";var r=(0,t(3077).Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);n.Z=r},6507:function(e,n,t){"use strict";var r=(0,t(3077).Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{x:"2",y:"9",width:"4",height:"12",key:"fu1a4h"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);n.Z=r},1801:function(e,n,t){"use strict";var r=(0,t(3077).Z)("Mail",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);n.Z=r},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=799.646db076.chunk.js.map