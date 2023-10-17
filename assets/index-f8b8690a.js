function bC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r_={exports:{}},xl={},i_={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),DC=Symbol.for("react.portal"),LC=Symbol.for("react.fragment"),MC=Symbol.for("react.strict_mode"),UC=Symbol.for("react.profiler"),FC=Symbol.for("react.provider"),jC=Symbol.for("react.context"),$C=Symbol.for("react.forward_ref"),BC=Symbol.for("react.suspense"),zC=Symbol.for("react.memo"),WC=Symbol.for("react.lazy"),op=Symbol.iterator;function HC(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,a_={};function Li(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}Li.prototype.isReactComponent={};Li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l_(){}l_.prototype=Li.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}var Yd=qd.prototype=new l_;Yd.constructor=qd;o_(Yd,Li.prototype);Yd.isPureReactComponent=!0;var ap=Array.isArray,u_=Object.prototype.hasOwnProperty,Qd={current:null},c_={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u_.call(e,r)&&!c_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fo,type:t,key:s,ref:o,props:i,_owner:Qd.current}}function VC(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function KC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KC(""+t.key):e.toString(36)}function ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fo:case DC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gu(o,0):r,ap(i)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),ha(i,e,n,"",function(u){return u})):i!=null&&(Xd(i)&&(i=VC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+gu(s,a);o+=ha(s,e,n,l,i)}else if(l=HC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+gu(s,a++),o+=ha(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var r=[],i=0;return ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ge={current:null},fa={transition:null},qC={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Qd};B.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Li;B.Fragment=LC;B.Profiler=UC;B.PureComponent=qd;B.StrictMode=MC;B.Suspense=BC;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)u_.call(e,l)&&!c_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fo,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:jC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FC,_context:t},t.Consumer=t};B.createElement=d_;B.createFactory=function(t){var e=d_.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:$C,render:t}};B.isValidElement=Xd;B.lazy=function(t){return{$$typeof:WC,_payload:{_status:-1,_result:t},_init:GC}};B.memo=function(t,e){return{$$typeof:zC,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=fa.transition;fa.transition={};try{t()}finally{fa.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Ge.current.useCallback(t,e)};B.useContext=function(t){return Ge.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ge.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ge.current.useEffect(t,e)};B.useId=function(){return Ge.current.useId()};B.useImperativeHandle=function(t,e,n){return Ge.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ge.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ge.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ge.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ge.current.useReducer(t,e,n)};B.useRef=function(t){return Ge.current.useRef(t)};B.useState=function(t){return Ge.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ge.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ge.current.useTransition()};B.version="18.2.0";i_.exports=B;var m=i_.exports;const Nt=kl(m),YC=bC({__proto__:null,default:Nt},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QC=m,XC=Symbol.for("react.element"),JC=Symbol.for("react.fragment"),ZC=Object.prototype.hasOwnProperty,eS=QC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tS={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZC.call(e,r)&&!tS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XC,type:t,key:s,ref:o,props:i,_owner:eS.current}}xl.Fragment=JC;xl.jsx=h_;xl.jsxs=h_;r_.exports=xl;var f=r_.exports,vc={},f_={exports:{}},pt={},p_={exports:{}},m_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var M=k.length;k.push(D);e:for(;0<M;){var H=M-1>>>1,q=k[H];if(0<i(q,D))k[H]=D,k[M]=q,M=H;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],M=k.pop();if(M!==D){k[0]=M;e:for(var H=0,q=k.length,Ae=q>>>1;H<Ae;){var We=2*(H+1)-1,ve=k[We],Me=We+1,yn=k[Me];if(0>i(ve,M))Me<q&&0>i(yn,ve)?(k[H]=yn,k[Me]=M,H=Me):(k[H]=ve,k[We]=M,H=We);else if(Me<q&&0>i(yn,M))k[H]=yn,k[Me]=M,H=Me;else break e}}return D}function i(k,D){var M=k.sortIndex-D.sortIndex;return M!==0?M:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,_=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function E(k){if(w=!1,v(k),!y)if(n(l)!==null)y=!0,he(T);else{var D=n(u);D!==null&&ae(E,D.startTime-k)}}function T(k,D){y=!1,w&&(w=!1,g(I),I=-1),_=!0;var M=h;try{for(v(D),d=n(l);d!==null&&(!(d.expirationTime>D)||k&&!W());){var H=d.callback;if(typeof H=="function"){d.callback=null,h=d.priorityLevel;var q=H(d.expirationTime<=D);D=t.unstable_now(),typeof q=="function"?d.callback=q:d===n(l)&&r(l),v(D)}else r(l);d=n(l)}if(d!==null)var Ae=!0;else{var We=n(u);We!==null&&ae(E,We.startTime-D),Ae=!1}return Ae}finally{d=null,h=M,_=!1}}var S=!1,x=null,I=-1,A=5,O=-1;function W(){return!(t.unstable_now()-O<A)}function G(){if(x!==null){var k=t.unstable_now();O=k;var D=!0;try{D=x(!0,k)}finally{D?J():(S=!1,x=null)}}else S=!1}var J;if(typeof p=="function")J=function(){p(G)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,ie=R.port2;R.port1.onmessage=G,J=function(){ie.postMessage(null)}}else J=function(){C(G,0)};function he(k){x=k,S||(S=!0,J())}function ae(k,D){I=C(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,he(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return k()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=h;h=k;try{return D()}finally{h=M}},t.unstable_scheduleCallback=function(k,D,M){var H=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?H+M:H):M=H,k){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=M+q,k={id:c++,callback:D,priorityLevel:k,startTime:M,expirationTime:q,sortIndex:-1},M>H?(k.sortIndex=M,e(u,k),n(l)===null&&k===n(u)&&(w?(g(I),I=-1):w=!0,ae(E,M-H))):(k.sortIndex=q,e(l,k),y||_||(y=!0,he(T))),k},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(k){var D=h;return function(){var M=h;h=D;try{return k.apply(this,arguments)}finally{h=M}}}})(m_);p_.exports=m_;var nS=p_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=m,ft=nS;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var __=new Set,Ls={};function Mr(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Ls[t]=e,t=0;t<e.length;t++)__.add(e[t])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},cp={};function iS(t){return yc.call(cp,t)?!0:yc.call(up,t)?!1:rS.test(t)?cp[t]=!0:(up[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,Zd);Le[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,Zd);Le[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,Zd);Le[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),v_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),w_=Symbol.for("react.offscreen"),dp=Symbol.iterator;function Ji(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,_u;function ps(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var vu=!1;function yu(t,e){if(!t||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ps(t):""}function aS(t){switch(t.tag){case 5:return ps(t.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Qr:return"Portal";case wc:return"Profiler";case th:return"StrictMode";case Ec:return"Suspense";case Cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case v_:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:Sc(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return Sc(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=E_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=uS(t))}function C_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S_(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function Tc(t,e){S_(t,e);var n=qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&kc(t,e.type,qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kc(t,e,n){(e!=="number"||Ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ms=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(ms(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qn(n)}}function I_(t,e){var n=qn(e.value),r=qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ys[e]=ys[t]})});function x_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ys.hasOwnProperty(t)&&ys[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=x_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dS=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(t,e){if(e){if(dS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,di=null,hi=null;function gp(t){if(t=go(t)){if(typeof Oc!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Ol(e),Oc(t.stateNode,t.type,e))}}function N_(t){di?hi?hi.push(t):hi=[t]:di=t}function P_(){if(di){var t=di,e=hi;if(hi=di=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function A_(t,e){return t(e)}function O_(){}var wu=!1;function b_(t,e,n){if(wu)return t(e,n);wu=!0;try{return A_(t,e,n)}finally{wu=!1,(di!==null||hi!==null)&&(O_(),P_())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var bc=!1;if(ln)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{bc=!1}function hS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ws=!1,Na=null,Pa=!1,Dc=null,fS={onError:function(t){ws=!0,Na=t}};function pS(t,e,n,r,i,s,o,a,l){ws=!1,Na=null,hS.apply(fS,arguments)}function mS(t,e,n,r,i,s,o,a,l){if(pS.apply(this,arguments),ws){if(ws){var u=Na;ws=!1,Na=null}else throw Error(N(198));Pa||(Pa=!0,Dc=u)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _p(t){if(Ur(t)!==t)throw Error(N(188))}function gS(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _p(i),t;if(s===r)return _p(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function L_(t){return t=gS(t),t!==null?M_(t):null}function M_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M_(t);if(e!==null)return e;t=t.sibling}return null}var U_=ft.unstable_scheduleCallback,vp=ft.unstable_cancelCallback,_S=ft.unstable_shouldYield,vS=ft.unstable_requestPaint,_e=ft.unstable_now,yS=ft.unstable_getCurrentPriorityLevel,sh=ft.unstable_ImmediatePriority,F_=ft.unstable_UserBlockingPriority,Aa=ft.unstable_NormalPriority,wS=ft.unstable_LowPriority,j_=ft.unstable_IdlePriority,Rl=null,Wt=null;function ES(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:IS,CS=Math.log,SS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(CS(t)/SS|0)|0}var Vo=64,Ko=4194304;function gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=gs(a):(s&=o,s!==0&&(r=gs(s)))}else o=n&~i,o!==0?r=gs(o):s!==0&&(r=gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function TS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $_(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function xS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function B_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,ah,W_,H_,V_,Mc=!1,Go=[],Ln=null,Mn=null,Un=null,Fs=new Map,js=new Map,kn=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=go(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NS(t,e,n,r,i){switch(e){case"focusin":return Ln=es(Ln,t,e,n,r,i),!0;case"dragenter":return Mn=es(Mn,t,e,n,r,i),!0;case"mouseover":return Un=es(Un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fs.set(s,es(Fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,es(js.get(s)||null,t,e,n,r,i)),!0}return!1}function K_(t){var e=cr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){W_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=go(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function wp(t,e,n){pa(t)&&n.delete(e)}function PS(){Mc=!1,Ln!==null&&pa(Ln)&&(Ln=null),Mn!==null&&pa(Mn)&&(Mn=null),Un!==null&&pa(Un)&&(Un=null),Fs.forEach(wp),js.forEach(wp)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,PS)))}function $s(t){function e(i){return ts(i,t)}if(0<Go.length){ts(Go[0],t);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ln!==null&&ts(Ln,t),Mn!==null&&ts(Mn,t),Un!==null&&ts(Un,t),Fs.forEach(e),js.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)K_(n),n.blockedOn===null&&kn.shift()}var fi=mn.ReactCurrentBatchConfig,ba=!0;function AS(t,e,n,r){var i=Y,s=fi.transition;fi.transition=null;try{Y=1,lh(t,e,n,r)}finally{Y=i,fi.transition=s}}function OS(t,e,n,r){var i=Y,s=fi.transition;fi.transition=null;try{Y=4,lh(t,e,n,r)}finally{Y=i,fi.transition=s}}function lh(t,e,n,r){if(ba){var i=Uc(t,e,n,r);if(i===null)Au(t,e,r,Da,n),yp(t,r);else if(NS(i,t,e,n,r))r.stopPropagation();else if(yp(t,r),e&4&&-1<RS.indexOf(t)){for(;i!==null;){var s=go(i);if(s!==null&&z_(s),s=Uc(t,e,n,r),s===null&&Au(t,e,r,Da,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Au(t,e,r,null,n)}}var Da=null;function Uc(t,e,n,r){if(Da=null,t=ih(r),t=cr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Da=t,null}function G_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yS()){case sh:return 1;case F_:return 4;case Aa:case wS:return 16;case j_:return 536870912;default:return 16}default:return 16}}var On=null,uh=null,ma=null;function q_(){if(ma)return ma;var t,e=uh,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ma=i.slice(t,1<r?1-r:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Ep(){return!1}function mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Ep,this.isPropagationStopped=Ep,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=mt(Mi),mo=de({},Mi,{view:0,detail:0}),bS=mt(mo),Cu,Su,ns,Nl=de({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(Cu=t.screenX-ns.screenX,Su=t.screenY-ns.screenY):Su=Cu=0,ns=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Cp=mt(Nl),DS=de({},Nl,{dataTransfer:0}),LS=mt(DS),MS=de({},mo,{relatedTarget:0}),Iu=mt(MS),US=de({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=mt(US),jS=de({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=mt(jS),BS=de({},Mi,{data:0}),Sp=mt(BS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HS[t])?!!e[t]:!1}function dh(){return VS}var KS=de({},mo,{key:function(t){if(t.key){var e=zS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=mt(KS),qS=de({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=mt(qS),YS=de({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),QS=mt(YS),XS=de({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=mt(XS),ZS=de({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eI=mt(ZS),tI=[9,13,27,32],hh=ln&&"CompositionEvent"in window,Es=null;ln&&"documentMode"in document&&(Es=document.documentMode);var nI=ln&&"TextEvent"in window&&!Es,Y_=ln&&(!hh||Es&&8<Es&&11>=Es),Tp=String.fromCharCode(32),kp=!1;function Q_(t,e){switch(t){case"keyup":return tI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function rI(t,e){switch(t){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(kp=!0,Tp);case"textInput":return t=e.data,t===Tp&&kp?null:t;default:return null}}function iI(t,e){if(Jr)return t==="compositionend"||!hh&&Q_(t,e)?(t=q_(),ma=uh=On=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y_&&e.locale!=="ko"?null:e.data;default:return null}}var sI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sI[t.type]:e==="textarea"}function J_(t,e,n,r){N_(r),e=La(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Cs=null,Bs=null;function oI(t){uv(t,0)}function Pl(t){var e=ti(t);if(C_(e))return t}function aI(t,e){if(t==="change")return e}var Z_=!1;if(ln){var Tu;if(ln){var ku="oninput"in document;if(!ku){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),ku=typeof Rp.oninput=="function"}Tu=ku}else Tu=!1;Z_=Tu&&(!document.documentMode||9<document.documentMode)}function Np(){Cs&&(Cs.detachEvent("onpropertychange",ev),Bs=Cs=null)}function ev(t){if(t.propertyName==="value"&&Pl(Bs)){var e=[];J_(e,Bs,t,ih(t)),b_(oI,e)}}function lI(t,e,n){t==="focusin"?(Np(),Cs=e,Bs=n,Cs.attachEvent("onpropertychange",ev)):t==="focusout"&&Np()}function uI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(Bs)}function cI(t,e){if(t==="click")return Pl(e)}function dI(t,e){if(t==="input"||t==="change")return Pl(e)}function hI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:hI;function zs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yc.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=Pp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ra(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fI(t){var e=nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(r!==null&&fh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ap(n,s);var o=Ap(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pI=ln&&"documentMode"in document&&11>=document.documentMode,Zr=null,Fc=null,Ss=null,jc=!1;function Op(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||Zr==null||Zr!==Ra(r)||(r=Zr,"selectionStart"in r&&fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&zs(Ss,r)||(Ss=r,r=La(Fc,"onSelect"),0<r.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ei={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},xu={},rv={};ln&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Al(t){if(xu[t])return xu[t];if(!ei[t])return t;var e=ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rv)return xu[t]=e[n];return t}var iv=Al("animationend"),sv=Al("animationiteration"),ov=Al("animationstart"),av=Al("transitionend"),lv=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,e){lv.set(t,e),Mr(e,[t])}for(var Ru=0;Ru<bp.length;Ru++){var Nu=bp[Ru],mI=Nu.toLowerCase(),gI=Nu[0].toUpperCase()+Nu.slice(1);Jn(mI,"on"+gI)}Jn(iv,"onAnimationEnd");Jn(sv,"onAnimationIteration");Jn(ov,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(av,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_I=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Dp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mS(r,e,void 0,t),t.currentTarget=null}function uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,u),s=l}}}if(Pa)throw t=Dc,Pa=!1,Dc=null,t}function te(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var r=t+"__bubble";n.has(r)||(cv(e,t,2,!1),n.add(r))}function Pu(t,e,n){var r=0;e&&(r|=4),cv(n,t,r,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Qo]){t[Qo]=!0,__.forEach(function(n){n!=="selectionchange"&&(_I.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,Pu("selectionchange",!1,e))}}function cv(t,e,n,r){switch(G_(e)){case 1:var i=AS;break;case 4:i=OS;break;default:i=lh}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Au(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}b_(function(){var u=s,c=ih(n),d=[];e:{var h=lv.get(t);if(h!==void 0){var _=ch,y=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":_=GS;break;case"focusin":y="focus",_=Iu;break;case"focusout":y="blur",_=Iu;break;case"beforeblur":case"afterblur":_=Iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=QS;break;case iv:case sv:case ov:_=FS;break;case av:_=JS;break;case"scroll":_=bS;break;case"wheel":_=eI;break;case"copy":case"cut":case"paste":_=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ip}var w=(e&4)!==0,C=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=Us(p,g),E!=null&&w.push(Hs(p,E,v)))),C)break;p=p.return}0<w.length&&(h=new _(h,y,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Ac&&(y=n.relatedTarget||n.fromElement)&&(cr(y)||y[un]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?cr(y):null,y!==null&&(C=Ur(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(w=Cp,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Ip,E="onPointerLeave",g="onPointerEnter",p="pointer"),C=_==null?h:ti(_),v=y==null?h:ti(y),h=new w(E,p+"leave",_,n,c),h.target=C,h.relatedTarget=v,E=null,cr(c)===u&&(w=new w(g,p+"enter",y,n,c),w.target=v,w.relatedTarget=C,E=w),C=E,_&&y)t:{for(w=_,g=y,p=0,v=w;v;v=Kr(v))p++;for(v=0,E=g;E;E=Kr(E))v++;for(;0<p-v;)w=Kr(w),p--;for(;0<v-p;)g=Kr(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Kr(w),g=Kr(g)}w=null}else w=null;_!==null&&Lp(d,h,_,w,!1),y!==null&&C!==null&&Lp(d,C,y,w,!0)}}e:{if(h=u?ti(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=aI;else if(xp(h))if(Z_)T=dI;else{T=uI;var S=lI}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=cI);if(T&&(T=T(t,u))){J_(d,T,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&kc(h,"number",h.value)}switch(S=u?ti(u):window,t){case"focusin":(xp(S)||S.contentEditable==="true")&&(Zr=S,Fc=u,Ss=null);break;case"focusout":Ss=Fc=Zr=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Op(d,n,c);break;case"selectionchange":if(pI)break;case"keydown":case"keyup":Op(d,n,c)}var x;if(hh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Jr?Q_(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Y_&&n.locale!=="ko"&&(Jr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Jr&&(x=q_()):(On=c,uh="value"in On?On.value:On.textContent,Jr=!0)),S=La(u,I),0<S.length&&(I=new Sp(I,t,null,n,c),d.push({event:I,listeners:S}),x?I.data=x:(x=X_(n),x!==null&&(I.data=x)))),(x=nI?rI(t,n):iI(t,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(c=new Sp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}uv(d,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function La(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(t,n),s!=null&&r.unshift(Hs(t,s,i)),s=Us(t,e),s!=null&&r.push(Hs(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Us(n,s),l!=null&&o.unshift(Hs(n,l,a))):i||(l=Us(n,s),l!=null&&o.push(Hs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vI=/\r\n?/g,yI=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace(vI,`
`).replace(yI,"")}function Xo(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(N(425))}function Ma(){}var $c=null,Bc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,wI=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,EI=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(CI)}:Wc;function CI(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$s(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ui,Vs="__reactProps$"+Ui,un="__reactContainer$"+Ui,Hc="__reactEvents$"+Ui,SI="__reactListeners$"+Ui,II="__reactHandles$"+Ui;function cr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[un]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[Bt])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function go(t){return t=t[Bt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Ol(t){return t[Vs]||null}var Vc=[],ni=-1;function Zn(t){return{current:t}}function re(t){0>ni||(t.current=Vc[ni],Vc[ni]=null,ni--)}function ee(t,e){ni++,Vc[ni]=t.current,t.current=e}var Yn={},Be=Zn(Yn),et=Zn(!1),Cr=Yn;function Si(t,e){var n=t.type.contextTypes;if(!n)return Yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tt(t){return t=t.childContextTypes,t!=null}function Ua(){re(et),re(Be)}function jp(t,e,n){if(Be.current!==Yn)throw Error(N(168));ee(Be,e),ee(et,n)}function dv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,lS(t)||"Unknown",i));return de({},n,r)}function Fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yn,Cr=Be.current,ee(Be,t),ee(et,et.current),!0}function $p(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=dv(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,re(et),re(Be),ee(Be,t)):re(et),ee(et,n)}var Qt=null,bl=!1,bu=!1;function hv(t){Qt===null?Qt=[t]:Qt.push(t)}function TI(t){bl=!0,hv(t)}function er(){if(!bu&&Qt!==null){bu=!0;var t=0,e=Y;try{var n=Qt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,bl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),U_(sh,er),i}finally{Y=e,bu=!1}}return null}var ri=[],ii=0,ja=null,$a=0,gt=[],_t=0,Sr=null,Zt=1,en="";function sr(t,e){ri[ii++]=$a,ri[ii++]=ja,ja=t,$a=e}function fv(t,e,n){gt[_t++]=Zt,gt[_t++]=en,gt[_t++]=Sr,Sr=t;var r=Zt;t=en;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-Ot(e)+i|n<<i|r,en=s+t}else Zt=1<<s|n<<i|r,en=t}function ph(t){t.return!==null&&(sr(t,1),fv(t,1,0))}function mh(t){for(;t===ja;)ja=ri[--ii],ri[ii]=null,$a=ri[--ii],ri[ii]=null;for(;t===Sr;)Sr=gt[--_t],gt[_t]=null,en=gt[--_t],gt[_t]=null,Zt=gt[--_t],gt[_t]=null}var dt=null,ut=null,se=!1,kt=null;function pv(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ut=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ut=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(se){var e=ut;if(e){var n=e;if(!Bp(t,e)){if(Kc(t))throw Error(N(418));e=Fn(n.nextSibling);var r=dt;e&&Bp(t,e)?pv(r,n):(t.flags=t.flags&-4097|2,se=!1,dt=t)}}else{if(Kc(t))throw Error(N(418));t.flags=t.flags&-4097|2,se=!1,dt=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function Jo(t){if(t!==dt)return!1;if(!se)return zp(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=ut)){if(Kc(t))throw mv(),Error(N(418));for(;e;)pv(t,e),e=Fn(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=dt?Fn(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=ut;t;)t=Fn(t.nextSibling)}function Ii(){ut=dt=null,se=!1}function gh(t){kt===null?kt=[t]:kt.push(t)}var kI=mn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ba=Zn(null),za=null,si=null,_h=null;function vh(){_h=si=za=null}function yh(t){var e=Ba.current;re(Ba),t._currentValue=e}function qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){za=t,_h=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xe=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(za===null)throw Error(N(308));si=t,za.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var dr=null;function wh(t){dr===null?dr=[t]:dr.push(t)}function gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,cn(t,r)}function cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var In=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cn(t,n)}return i=r.interleaved,i===null?(e.next=e,wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,cn(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}function Wp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wa(t,e,n,r){var i=t.updateQueue;In=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,_=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(_,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(_,d,h):y,h==null)break e;d=de({},d,h);break e;case 2:In=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=_,l=d):c=c.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=d}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var vv=new g_.Component().refs;function Yc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Bn(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(bt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Bn(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(bt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ke(),r=Bn(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(bt(e,t,r,n),_a(e,t,r))}};function Vp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zs(n,r)||!zs(i,s):!0}function yv(t,e,n){var r=!1,i=Yn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=tt(e)?Cr:Be.current,r=e.contextTypes,s=(r=r!=null)?Si(t,i):Yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vv,Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=tt(e)?Cr:Be.current,i.context=Si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Wa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Zo(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function wv(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=zn(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,E){return p===null||p.tag!==6?(p=$u(v,g.mode,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,E){var T=v.type;return T===Xr?c(g,p,v.props.children,E,v.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Gp(T)===p.type)?(E=i(p,v.props),E.ref=rs(g,p,v),E.return=g,E):(E=Sa(v.type,v.key,v.props,null,g.mode,E),E.ref=rs(g,p,v),E.return=g,E)}function u(g,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Bu(v,g.mode,E),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,E,T){return p===null||p.tag!==7?(p=vr(v,g.mode,E,T),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$u(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zo:return v=Sa(p.type,p.key,p.props,null,g.mode,v),v.ref=rs(g,null,p),v.return=g,v;case Qr:return p=Bu(p,g.mode,v),p.return=g,p;case Sn:var E=p._init;return d(g,E(p._payload),v)}if(ms(p)||Ji(p))return p=vr(p,g.mode,v,null),p.return=g,p;Zo(g,p)}return null}function h(g,p,v,E){var T=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:return v.key===T?l(g,p,v,E):null;case Qr:return v.key===T?u(g,p,v,E):null;case Sn:return T=v._init,h(g,p,T(v._payload),E)}if(ms(v)||Ji(v))return T!==null?null:c(g,p,v,E,null);Zo(g,v)}return null}function _(g,p,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(p,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case zo:return g=g.get(E.key===null?v:E.key)||null,l(p,g,E,T);case Qr:return g=g.get(E.key===null?v:E.key)||null,u(p,g,E,T);case Sn:var S=E._init;return _(g,p,v,S(E._payload),T)}if(ms(E)||Ji(E))return g=g.get(v)||null,c(p,g,E,T,null);Zo(p,E)}return null}function y(g,p,v,E){for(var T=null,S=null,x=p,I=p=0,A=null;x!==null&&I<v.length;I++){x.index>I?(A=x,x=null):A=x.sibling;var O=h(g,x,v[I],E);if(O===null){x===null&&(x=A);break}t&&x&&O.alternate===null&&e(g,x),p=s(O,p,I),S===null?T=O:S.sibling=O,S=O,x=A}if(I===v.length)return n(g,x),se&&sr(g,I),T;if(x===null){for(;I<v.length;I++)x=d(g,v[I],E),x!==null&&(p=s(x,p,I),S===null?T=x:S.sibling=x,S=x);return se&&sr(g,I),T}for(x=r(g,x);I<v.length;I++)A=_(x,g,I,v[I],E),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?I:A.key),p=s(A,p,I),S===null?T=A:S.sibling=A,S=A);return t&&x.forEach(function(W){return e(g,W)}),se&&sr(g,I),T}function w(g,p,v,E){var T=Ji(v);if(typeof T!="function")throw Error(N(150));if(v=T.call(v),v==null)throw Error(N(151));for(var S=T=null,x=p,I=p=0,A=null,O=v.next();x!==null&&!O.done;I++,O=v.next()){x.index>I?(A=x,x=null):A=x.sibling;var W=h(g,x,O.value,E);if(W===null){x===null&&(x=A);break}t&&x&&W.alternate===null&&e(g,x),p=s(W,p,I),S===null?T=W:S.sibling=W,S=W,x=A}if(O.done)return n(g,x),se&&sr(g,I),T;if(x===null){for(;!O.done;I++,O=v.next())O=d(g,O.value,E),O!==null&&(p=s(O,p,I),S===null?T=O:S.sibling=O,S=O);return se&&sr(g,I),T}for(x=r(g,x);!O.done;I++,O=v.next())O=_(x,g,I,O.value,E),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?I:O.key),p=s(O,p,I),S===null?T=O:S.sibling=O,S=O);return t&&x.forEach(function(G){return e(g,G)}),se&&sr(g,I),T}function C(g,p,v,E){if(typeof v=="object"&&v!==null&&v.type===Xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:e:{for(var T=v.key,S=p;S!==null;){if(S.key===T){if(T=v.type,T===Xr){if(S.tag===7){n(g,S.sibling),p=i(S,v.props.children),p.return=g,g=p;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Gp(T)===S.type){n(g,S.sibling),p=i(S,v.props),p.ref=rs(g,S,v),p.return=g,g=p;break e}n(g,S);break}else e(g,S);S=S.sibling}v.type===Xr?(p=vr(v.props.children,g.mode,E,v.key),p.return=g,g=p):(E=Sa(v.type,v.key,v.props,null,g.mode,E),E.ref=rs(g,p,v),E.return=g,g=E)}return o(g);case Qr:e:{for(S=v.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Bu(v,g.mode,E),p.return=g,g=p}return o(g);case Sn:return S=v._init,C(g,p,S(v._payload),E)}if(ms(v))return y(g,p,v,E);if(Ji(v))return w(g,p,v,E);Zo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=$u(v,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return C}var Ti=wv(!0),Ev=wv(!1),_o={},Ht=Zn(_o),Ks=Zn(_o),Gs=Zn(_o);function hr(t){if(t===_o)throw Error(N(174));return t}function Ch(t,e){switch(ee(Gs,e),ee(Ks,t),ee(Ht,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}re(Ht),ee(Ht,e)}function ki(){re(Ht),re(Ks),re(Gs)}function Cv(t){hr(Gs.current);var e=hr(Ht.current),n=Rc(e,t.type);e!==n&&(ee(Ks,t),ee(Ht,n))}function Sh(t){Ks.current===t&&(re(Ht),re(Ks))}var ue=Zn(0);function Ha(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Ih(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var va=mn.ReactCurrentDispatcher,Lu=mn.ReactCurrentBatchConfig,Ir=0,ce=null,Ee=null,ke=null,Va=!1,Is=!1,qs=0,xI=0;function Ue(){throw Error(N(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function kh(t,e,n,r,i,s){if(Ir=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?AI:OI,t=n(r,i),Is){s=0;do{if(Is=!1,qs=0,25<=s)throw Error(N(301));s+=1,ke=Ee=null,e.updateQueue=null,va.current=bI,t=n(r,i)}while(Is)}if(va.current=Ka,e=Ee!==null&&Ee.next!==null,Ir=0,ke=Ee=ce=null,Va=!1,e)throw Error(N(300));return t}function xh(){var t=qs!==0;return qs=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ce.memoizedState=ke=t:ke=ke.next=t,ke}function Et(){if(Ee===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=ke===null?ce.memoizedState:ke.next;if(e!==null)ke=e,Ee=t;else{if(t===null)throw Error(N(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ke===null?ce.memoizedState=ke=t:ke=ke.next=t}return ke}function Ys(t,e){return typeof e=="function"?e(t):e}function Mu(t){var e=Et(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ir&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ce.lanes|=c,Tr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Lt(r,e.memoizedState)||(Xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,Tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=Et(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(Xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Sv(){}function Iv(t,e){var n=ce,r=Et(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,Xe=!0),r=r.queue,Rh(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Qs(9,kv.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(N(349));Ir&30||Tv(n,e,i)}return i}function Tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,r){e.value=n,e.getSnapshot=r,Rv(e)&&Nv(t)}function xv(t,e,n){return n(function(){Rv(e)&&Nv(t)})}function Rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Nv(t){var e=cn(t,1);e!==null&&bt(e,t,1,-1)}function qp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=PI.bind(null,ce,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pv(){return Et().memoizedState}function ya(t,e,n,r){var i=$t();ce.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Th(r,o.deps)){i.memoizedState=Qs(e,n,s,r);return}}ce.flags|=t,i.memoizedState=Qs(1|e,n,s,r)}function Yp(t,e){return ya(8390656,8,t,e)}function Rh(t,e){return Ll(2048,8,t,e)}function Av(t,e){return Ll(4,2,t,e)}function Ov(t,e){return Ll(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dv(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,bv.bind(null,e,t),n)}function Nh(){}function Lv(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return Ir&21?(Lt(n,e)||(n=$_(),ce.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xe=!0),t.memoizedState=n)}function RI(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Lu.transition;Lu.transition={};try{t(!1),e()}finally{Y=n,Lu.transition=r}}function Fv(){return Et().memoizedState}function NI(t,e,n){var r=Bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jv(t))$v(e,n);else if(n=gv(t,e,n,r),n!==null){var i=Ke();bt(n,t,r,i),Bv(n,e,r)}}function PI(t,e,n){var r=Bn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jv(t))$v(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,o)){var l=e.interleaved;l===null?(i.next=i,wh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gv(t,e,i,r),n!==null&&(i=Ke(),bt(n,t,r,i),Bv(n,e,r))}}function jv(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function $v(t,e){Is=Va=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}var Ka={readContext:wt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},AI={readContext:wt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ya(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return ya(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NI.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:Nh,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=RI.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=$t();if(se){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Ne===null)throw Error(N(349));Ir&30||Tv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yp(xv.bind(null,r,s,t),[t]),r.flags|=2048,Qs(9,kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Ne.identifierPrefix;if(se){var n=en,r=Zt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OI={readContext:wt,useCallback:Lv,useContext:wt,useEffect:Rh,useImperativeHandle:Dv,useInsertionEffect:Av,useLayoutEffect:Ov,useMemo:Mv,useReducer:Mu,useRef:Pv,useState:function(){return Mu(Ys)},useDebugValue:Nh,useDeferredValue:function(t){var e=Et();return Uv(e,Ee.memoizedState,t)},useTransition:function(){var t=Mu(Ys)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Iv,useId:Fv,unstable_isNewReconciler:!1},bI={readContext:wt,useCallback:Lv,useContext:wt,useEffect:Rh,useImperativeHandle:Dv,useInsertionEffect:Av,useLayoutEffect:Ov,useMemo:Mv,useReducer:Uu,useRef:Pv,useState:function(){return Uu(Ys)},useDebugValue:Nh,useDeferredValue:function(t){var e=Et();return Ee===null?e.memoizedState=t:Uv(e,Ee.memoizedState,t)},useTransition:function(){var t=Uu(Ys)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Iv,useId:Fv,unstable_isNewReconciler:!1};function xi(t,e){try{var n="",r=e;do n+=aS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DI=typeof WeakMap=="function"?WeakMap:Map;function zv(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qa||(qa=!0,ad=r),Xc(t,e)},n}function Wv(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xc(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qI.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var LI=mn.ReactCurrentOwner,Xe=!1;function Ve(t,e,n,r){e.child=t===null?Ev(e,null,n,r):Ti(e,t.child,n,r)}function Zp(t,e,n,r,i){n=n.render;var s=e.ref;return pi(e,i),r=kh(t,e,n,r,s,i),n=xh(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(se&&n&&ph(e),e.flags|=1,Ve(t,e,r,i),e.child)}function em(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hv(t,e,s,r,i)):(t=Sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(o,r)&&t.ref===e.ref)return dn(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Hv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zs(s,r)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xe=!0);else return e.lanes=t.lanes,dn(t,e,i)}return Jc(t,e,n,r,i)}function Vv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(ai,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(ai,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(ai,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(ai,lt),lt|=r;return Ve(t,e,i,n),e.child}function Kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jc(t,e,n,r,i){var s=tt(n)?Cr:Be.current;return s=Si(e,s),pi(e,i),n=kh(t,e,n,r,s,i),r=xh(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(se&&r&&ph(e),e.flags|=1,Ve(t,e,n,i),e.child)}function tm(t,e,n,r,i){if(tt(n)){var s=!0;Fa(e)}else s=!1;if(pi(e,i),e.stateNode===null)wa(t,e),yv(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?Cr:Be.current,u=Si(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kp(e,o,r,u),In=!1;var h=e.memoizedState;o.state=h,Wa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||et.current||In?(typeof c=="function"&&(Yc(e,n,c,r),l=e.memoizedState),(a=In||Vp(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_v(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=tt(n)?Cr:Be.current,l=Si(e,l));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Kp(e,o,r,l),In=!1,h=e.memoizedState,o.state=h,Wa(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||et.current||In?(typeof _=="function"&&(Yc(e,n,_,r),y=e.memoizedState),(u=In||Vp(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){Kv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$p(e,n,!1),dn(t,e,s);r=e.stateNode,LI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ti(e,t.child,null,s),e.child=Ti(e,null,a,s)):Ve(t,e,a,s),e.memoizedState=r.state,i&&$p(e,n,!0),e.child}function Gv(t){var e=t.stateNode;e.pendingContext?jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jp(t,e.context,!1),Ch(t,e.containerInfo)}function nm(t,e,n,r,i){return Ii(),gh(i),e.flags|=256,Ve(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function qv(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ue,i&1),t===null)return Gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fl(o,r,0,null),t=vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):Ph(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zn(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ph(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,r){return r!==null&&gh(r),Ti(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fu(Error(N(422))),ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fl({mode:"visible",children:r.children},i,0,null),s=vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ti(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Fu(s,r,void 0),ea(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xe||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cn(t,i),bt(r,t,i,-1))}return Mh(),r=Fu(Error(N(421))),ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=Fn(i.nextSibling),dt=e,se=!0,kt=null,t!==null&&(gt[_t++]=Zt,gt[_t++]=en,gt[_t++]=Sr,Zt=t.id,en=t.overflow,Sr=e),e=Ph(e,r.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qc(t.return,e,n)}function ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ve(t,e,r.children,n),r=ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ha(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ha(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UI(t,e,n){switch(e.tag){case 3:Gv(e),Ii();break;case 5:Cv(e);break;case 1:tt(e.type)&&Fa(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ue,ue.current&1),e.flags|=128,null):n&e.child.childLanes?qv(t,e,n):(ee(ue,ue.current&1),t=dn(t,e,n),t!==null?t.sibling:null);ee(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ue,ue.current),r)break;return null;case 22:case 23:return e.lanes=0,Vv(t,e,n)}return dn(t,e,n)}var Qv,nd,Xv,Jv;Qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Xv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hr(Ht.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=xc(t,i),r=xc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ma)}Nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ls.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ls.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Jv=function(t,e,n,r){n!==r&&(e.flags|=4)};function is(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FI(t,e,n){var r=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return tt(e.type)&&Ua(),Fe(e),null;case 3:return r=e.stateNode,ki(),re(et),re(Be),Ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(cd(kt),kt=null))),nd(t,e),Fe(e),null;case 5:Sh(e);var i=hr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Fe(e),null}if(t=hr(Ht.current),Jo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Vs]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)te(_s[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":hp(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":pp(r,s),te("invalid",r)}Nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",""+a]):Ls.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Wo(r),fp(r,s,!0);break;case"textarea":Wo(r),mp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ma)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[Vs]=r,Qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)te(_s[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":hp(t,r),i=Ic(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),te("invalid",t);break;case"textarea":pp(t,r),i=xc(t,r),te("invalid",t);break;default:i=r}Nc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ls.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&eh(t,s,l,o))}switch(n){case"input":Wo(t),fp(t,r,!1);break;case"textarea":Wo(t),mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fe(e),null;case 6:if(t&&e.stateNode!=null)Jv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=hr(Gs.current),hr(Ht.current),Jo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:Xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Fe(e),null;case 13:if(re(ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&ut!==null&&e.mode&1&&!(e.flags&128))mv(),Ii(),e.flags|=98560,s=!1;else if(s=Jo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Bt]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fe(e),s=!1}else kt!==null&&(cd(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?Se===0&&(Se=3):Mh())),e.updateQueue!==null&&(e.flags|=4),Fe(e),null);case 4:return ki(),nd(t,e),t===null&&Ws(e.stateNode.containerInfo),Fe(e),null;case 10:return yh(e.type._context),Fe(e),null;case 17:return tt(e.type)&&Ua(),Fe(e),null;case 19:if(re(ue),s=e.memoizedState,s===null)return Fe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)is(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ha(t),o!==null){for(e.flags|=128,is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>Ri&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ha(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Fe(e),null}else 2*_e()-s.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=ue.current,ee(ue,r?n&1|2:n&1),e):(Fe(e),null);case 22:case 23:return Lh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function jI(t,e){switch(mh(e),e.tag){case 1:return tt(e.type)&&Ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),re(et),re(Be),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(re(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(ue),null;case 4:return ki(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var ta=!1,je=!1,$I=typeof WeakSet=="function"?WeakSet:Set,b=null;function oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){fe(t,e,r)}}var im=!1;function BI(t,e){if($c=ba,t=nv(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:t,selectionRange:n},ba=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:It(e.type,w),C);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){fe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=im,im=!1,y}function Ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rd(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zv(t){var e=t.alternate;e!==null&&(t.alternate=null,Zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Vs],delete e[Hc],delete e[SI],delete e[II])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ey(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ma));else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Oe=null,Tt=!1;function wn(t,e,n){for(n=n.child;n!==null;)ty(t,e,n),n=n.sibling}function ty(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:je||oi(n,e);case 6:var r=Oe,i=Tt;Oe=null,wn(t,e,n),Oe=r,Tt=i,Oe!==null&&(Tt?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Tt?(t=Oe,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),$s(t)):Ou(Oe,n.stateNode));break;case 4:r=Oe,i=Tt,Oe=n.stateNode.containerInfo,Tt=!0,wn(t,e,n),Oe=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),i=i.next}while(i!==r)}wn(t,e,n);break;case 1:if(!je&&(oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,wn(t,e,n),je=r):wn(t,e,n);break;default:wn(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $I),e.forEach(function(r){var i=QI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,Tt=!1;break e;case 3:Oe=a.stateNode.containerInfo,Tt=!0;break e;case 4:Oe=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Oe===null)throw Error(N(160));ty(s,o,i),Oe=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ny(e,t),e=e.sibling}function ny(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),jt(t),r&4){try{Ts(3,t,t.return),Ml(3,t)}catch(w){fe(t,t.return,w)}try{Ts(5,t,t.return)}catch(w){fe(t,t.return,w)}}break;case 1:St(e,t),jt(t),r&512&&n!==null&&oi(n,n.return);break;case 5:if(St(e,t),jt(t),r&512&&n!==null&&oi(n,n.return),t.flags&32){var i=t.stateNode;try{Ms(i,"")}catch(w){fe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S_(i,s),Pc(a,o);var u=Pc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?R_(i,d):c==="dangerouslySetInnerHTML"?k_(i,d):c==="children"?Ms(i,d):eh(i,c,d,u)}switch(a){case"input":Tc(i,s);break;case"textarea":I_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ci(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vs]=s}catch(w){fe(t,t.return,w)}}break;case 6:if(St(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){fe(t,t.return,w)}}break;case 3:if(St(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(w){fe(t,t.return,w)}break;case 4:St(e,t),jt(t);break;case 13:St(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bh=_e())),r&4&&om(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||c,St(e,t),je=u):St(e,t),jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(h=b,_=h.child,h.tag){case 0:case 11:case 14:case 15:Ts(4,h,h.return);break;case 1:oi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:oi(h,h.return);break;case 22:if(h.memoizedState!==null){lm(d);continue}}_!==null?(_.return=h,b=_):lm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x_("display",o))}catch(w){fe(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){fe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:St(e,t),jt(t),r&4&&om(t);break;case 21:break;default:St(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ey(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var s=sm(t);od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sm(t);sd(t,a,o);break;default:throw Error(N(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zI(t,e,n){b=t,ry(t)}function ry(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ta;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=ta;var u=je;if(ta=o,(je=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?um(i):l!==null?(l.return=o,b=l):um(i);for(;s!==null;)b=s,ry(s),s=s.sibling;b=i,ta=a,je=u}am(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):am(t)}}function am(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$s(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}je||e.flags&512&&id(e)}catch(h){fe(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function lm(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function um(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{id(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{id(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var WI=Math.ceil,Ga=mn.ReactCurrentDispatcher,Ah=mn.ReactCurrentOwner,yt=mn.ReactCurrentBatchConfig,z=0,Ne=null,ye=null,De=0,lt=0,ai=Zn(0),Se=0,Xs=null,Tr=0,Ul=0,Oh=0,ks=null,Ye=null,bh=0,Ri=1/0,Yt=null,qa=!1,ad=null,$n=null,na=!1,bn=null,Ya=0,xs=0,ld=null,Ea=-1,Ca=0;function Ke(){return z&6?_e():Ea!==-1?Ea:Ea=_e()}function Bn(t){return t.mode&1?z&2&&De!==0?De&-De:kI.transition!==null?(Ca===0&&(Ca=$_()),Ca):(t=Y,t!==0||(t=window.event,t=t===void 0?16:G_(t.type)),t):1}function bt(t,e,n,r){if(50<xs)throw xs=0,ld=null,Error(N(185));po(t,n,r),(!(z&2)||t!==Ne)&&(t===Ne&&(!(z&2)&&(Ul|=n),Se===4&&xn(t,De)),nt(t,r),n===1&&z===0&&!(e.mode&1)&&(Ri=_e()+500,bl&&er()))}function nt(t,e){var n=t.callbackNode;kS(t,e);var r=Oa(t,t===Ne?De:0);if(r===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?TI(cm.bind(null,t)):hv(cm.bind(null,t)),EI(function(){!(z&6)&&er()}),n=null;else{switch(B_(r)){case 1:n=sh;break;case 4:n=F_;break;case 16:n=Aa;break;case 536870912:n=j_;break;default:n=Aa}n=dy(n,iy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iy(t,e){if(Ea=-1,Ca=0,z&6)throw Error(N(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=Oa(t,t===Ne?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qa(t,r);else{e=r;var i=z;z|=2;var s=oy();(Ne!==t||De!==e)&&(Yt=null,Ri=_e()+500,_r(t,e));do try{KI();break}catch(a){sy(t,a)}while(1);vh(),Ga.current=s,z=i,ye!==null?e=0:(Ne=null,De=0,e=Se)}if(e!==0){if(e===2&&(i=Lc(t),i!==0&&(r=i,e=ud(t,i))),e===1)throw n=Xs,_r(t,0),xn(t,r),nt(t,_e()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!HI(i)&&(e=Qa(t,r),e===2&&(s=Lc(t),s!==0&&(r=s,e=ud(t,s))),e===1))throw n=Xs,_r(t,0),xn(t,r),nt(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:or(t,Ye,Yt);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=bh+500-_e(),10<e)){if(Oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wc(or.bind(null,t,Ye,Yt),e);break}or(t,Ye,Yt);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WI(r/1960))-r,10<r){t.timeoutHandle=Wc(or.bind(null,t,Ye,Yt),r);break}or(t,Ye,Yt);break;case 5:or(t,Ye,Yt);break;default:throw Error(N(329))}}}return nt(t,_e()),t.callbackNode===n?iy.bind(null,t):null}function ud(t,e){var n=ks;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Qa(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&cd(e)),t}function cd(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function HI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Oh,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function cm(t){if(z&6)throw Error(N(327));mi();var e=Oa(t,0);if(!(e&1))return nt(t,_e()),null;var n=Qa(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=Xs,_r(t,0),xn(t,e),nt(t,_e()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Ye,Yt),nt(t,_e()),null}function Dh(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Ri=_e()+500,bl&&er())}}function kr(t){bn!==null&&bn.tag===0&&!(z&6)&&mi();var e=z;z|=1;var n=yt.transition,r=Y;try{if(yt.transition=null,Y=1,t)return t()}finally{Y=r,yt.transition=n,z=e,!(z&6)&&er()}}function Lh(){lt=ai.current,re(ai)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wI(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ua();break;case 3:ki(),re(et),re(Be),Ih();break;case 5:Sh(r);break;case 4:ki();break;case 13:re(ue);break;case 19:re(ue);break;case 10:yh(r.type._context);break;case 22:case 23:Lh()}n=n.return}if(Ne=t,ye=t=zn(t.current,null),De=lt=e,Se=0,Xs=null,Oh=Ul=Tr=0,Ye=ks=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}dr=null}return t}function sy(t,e){do{var n=ye;try{if(vh(),va.current=Ka,Va){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Va=!1}if(Ir=0,ke=Ee=ce=null,Is=!1,qs=0,Ah.current=null,n===null||n.return===null){Se=1,Xs=e,ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Xp(o);if(_!==null){_.flags&=-257,Jp(_,o,a,s,e),_.mode&1&&Qp(s,u,e),e=_,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Qp(s,u,e),Mh();break e}l=Error(N(426))}}else if(se&&a.mode&1){var C=Xp(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Jp(C,o,a,s,e),gh(xi(l,a));break e}}s=l=xi(l,a),Se!==4&&(Se=2),ks===null?ks=[s]:ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=zv(s,l,e);Wp(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Wv(s,a,e);Wp(s,E);break e}}s=s.return}while(s!==null)}ly(n)}catch(T){e=T,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function oy(){var t=Ga.current;return Ga.current=Ka,t===null?Ka:t}function Mh(){(Se===0||Se===3||Se===2)&&(Se=4),Ne===null||!(Tr&268435455)&&!(Ul&268435455)||xn(Ne,De)}function Qa(t,e){var n=z;z|=2;var r=oy();(Ne!==t||De!==e)&&(Yt=null,_r(t,e));do try{VI();break}catch(i){sy(t,i)}while(1);if(vh(),z=n,Ga.current=r,ye!==null)throw Error(N(261));return Ne=null,De=0,Se}function VI(){for(;ye!==null;)ay(ye)}function KI(){for(;ye!==null&&!_S();)ay(ye)}function ay(t){var e=cy(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?ly(t):ye=e,Ah.current=null}function ly(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jI(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,ye=null;return}}else if(n=FI(n,e,lt),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);Se===0&&(Se=5)}function or(t,e,n){var r=Y,i=yt.transition;try{yt.transition=null,Y=1,GI(t,e,n,r)}finally{yt.transition=i,Y=r}return null}function GI(t,e,n,r){do mi();while(bn!==null);if(z&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xS(t,s),t===Ne&&(ye=Ne=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,dy(Aa,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Y;Y=1;var a=z;z|=4,Ah.current=null,BI(t,n),ny(n,t),fI(Bc),ba=!!$c,Bc=$c=null,t.current=n,zI(n),vS(),z=a,Y=o,yt.transition=s}else t.current=n;if(na&&(na=!1,bn=t,Ya=i),s=t.pendingLanes,s===0&&($n=null),ES(n.stateNode),nt(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qa)throw qa=!1,t=ad,ad=null,t;return Ya&1&&t.tag!==0&&mi(),s=t.pendingLanes,s&1?t===ld?xs++:(xs=0,ld=t):xs=0,er(),null}function mi(){if(bn!==null){var t=B_(Ya),e=yt.transition,n=Y;try{if(yt.transition=null,Y=16>t?16:t,bn===null)var r=!1;else{if(t=bn,bn=null,Ya=0,z&6)throw Error(N(331));var i=z;for(z|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Ts(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var h=c.sibling,_=c.return;if(Zv(c),c===u){b=null;break}if(h!==null){h.return=_,b=h;break}b=_}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ts(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,b=g;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,b=v;else e:for(o=p;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(T){fe(a,a.return,T)}if(a===o){b=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,b=E;break e}b=a.return}}if(z=i,er(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{Y=n,yt.transition=e}}return!1}function dm(t,e,n){e=xi(n,e),e=zv(t,e,1),t=jn(t,e,1),e=Ke(),t!==null&&(po(t,1,e),nt(t,e))}function fe(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=xi(n,t),t=Wv(e,t,1),e=jn(e,t,1),t=Ke(),e!==null&&(po(e,1,t),nt(e,t));break}}e=e.return}}function qI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ke(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(De&n)===n&&(Se===4||Se===3&&(De&130023424)===De&&500>_e()-bh?_r(t,0):Oh|=n),nt(t,e)}function uy(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=Ke();t=cn(t,e),t!==null&&(po(t,e,n),nt(t,n))}function YI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uy(t,n)}function QI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),uy(t,n)}var cy;cy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Xe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xe=!1,UI(t,e,n);Xe=!!(t.flags&131072)}else Xe=!1,se&&e.flags&1048576&&fv(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wa(t,e),t=e.pendingProps;var i=Si(e,Be.current);pi(e,n),i=kh(null,e,r,t,i,n);var s=xh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(r)?(s=!0,Fa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(e),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,se&&s&&ph(e),Ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JI(r),t=It(r,t),i){case 0:e=Jc(null,e,r,t,n);break e;case 1:e=tm(null,e,r,t,n);break e;case 11:e=Zp(null,e,r,t,n);break e;case 14:e=em(null,e,r,It(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),tm(t,e,r,i,n);case 3:e:{if(Gv(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_v(t,e),Wa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xi(Error(N(423)),e),e=nm(t,e,r,n,i);break e}else if(r!==i){i=xi(Error(N(424)),e),e=nm(t,e,r,n,i);break e}else for(ut=Fn(e.stateNode.containerInfo.firstChild),dt=e,se=!0,kt=null,n=Ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===i){e=dn(t,e,n);break e}Ve(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Gc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),Kv(t,e),Ve(t,e,o,n),e.child;case 6:return t===null&&Gc(e),null;case 13:return qv(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ti(e,null,r,n):Ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Zp(t,e,r,i,n);case 7:return Ve(t,e,e.pendingProps,n),e.child;case 8:return Ve(t,e,e.pendingProps.children,n),e.child;case 12:return Ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Ba,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!et.current){e=dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=wt(i),r=r(i),e.flags|=1,Ve(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),em(t,e,r,i,n);case 15:return Hv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),wa(t,e),e.tag=1,tt(r)?(t=!0,Fa(e)):t=!1,pi(e,n),yv(e,r,i),Qc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return Yv(t,e,n);case 22:return Vv(t,e,n)}throw Error(N(156,e.tag))};function dy(t,e){return U_(t,e)}function XI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new XI(t,e,n,r)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JI(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===rh)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return vr(n.children,i,s,e);case th:o=8,i|=8;break;case wc:return t=vt(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=vt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Cc:return t=vt(19,n,e,i),t.elementType=Cc,t.lanes=s,t;case w_:return Fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v_:o=10;break e;case y_:o=9;break e;case nh:o=11;break e;case rh:o=14;break e;case Sn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Fl(t,e,n,r){return t=vt(22,t,r,e),t.elementType=w_,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,r,i,s,o,a,l){return t=new ZI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function eT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hy(t){if(!t)return Yn;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(tt(n))return dv(t,n,e)}return e}function fy(t,e,n,r,i,s,o,a,l){return t=Fh(n,r,!0,t,i,s,o,a,l),t.context=hy(null),n=t.current,r=Ke(),i=Bn(n),s=sn(r,i),s.callback=e??null,jn(n,s,i),t.current.lanes=i,po(t,i,r),nt(t,r),t}function jl(t,e,n,r){var i=e.current,s=Ke(),o=Bn(i);return n=hy(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,o),t!==null&&(bt(t,i,o,s),_a(t,i,o)),o}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jh(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function tT(){return null}var py=typeof reportError=="function"?reportError:function(t){console.error(t)};function $h(t){this._internalRoot=t}$l.prototype.render=$h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));jl(t,e,null,null)};$l.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){jl(null,t,null,null)}),e[un]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&K_(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fm(){}function nT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xa(o);s.call(u)}}var o=fy(e,r,t,0,null,!1,!1,"",fm);return t._reactRootContainer=o,t[un]=o.current,Ws(t.nodeType===8?t.parentNode:t),kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xa(l);a.call(u)}}var l=Fh(t,0,!1,null,null,!1,!1,"",fm);return t._reactRootContainer=l,t[un]=l.current,Ws(t.nodeType===8?t.parentNode:t),kr(function(){jl(e,l,n,r)}),l}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xa(o);a.call(l)}}jl(e,o,t,i)}else o=nT(n,e,t,i,r);return Xa(o)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gs(e.pendingLanes);n!==0&&(oh(e,n|1),nt(e,_e()),!(z&6)&&(Ri=_e()+500,er()))}break;case 13:kr(function(){var r=cn(t,1);if(r!==null){var i=Ke();bt(r,t,1,i)}}),jh(t,1)}};ah=function(t){if(t.tag===13){var e=cn(t,134217728);if(e!==null){var n=Ke();bt(e,t,134217728,n)}jh(t,134217728)}};W_=function(t){if(t.tag===13){var e=Bn(t),n=cn(t,e);if(n!==null){var r=Ke();bt(n,t,e,r)}jh(t,e)}};H_=function(){return Y};V_=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Oc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(N(90));C_(r),Tc(r,i)}}}break;case"textarea":I_(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};A_=Dh;O_=kr;var rT={usingClientEntryPoint:!1,Events:[go,ti,Ol,N_,P_,Dh]},ss={findFiberByHostInstance:cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iT={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L_(t),t===null?null:t.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Rl=ra.inject(iT),Wt=ra}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(N(200));return eT(t,e,null,n)};pt.createRoot=function(t,e){if(!Bh(t))throw Error(N(299));var n=!1,r="",i=py;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,r,i),t[un]=e.current,Ws(t.nodeType===8?t.parentNode:t),new $h(e)};pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=L_(e),t=t===null?null:t.stateNode,t};pt.flushSync=function(t){return kr(t)};pt.hydrate=function(t,e,n){if(!Bl(e))throw Error(N(200));return zl(null,t,e,!0,n)};pt.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=py;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fy(e,null,t,1,n??null,i,!1,s,o),t[un]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};pt.render=function(t,e,n){if(!Bl(e))throw Error(N(200));return zl(null,t,e,!1,n)};pt.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(N(40));return t._reactRootContainer?(kr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1};pt.unstable_batchedUpdates=Dh;pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return zl(t,e,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";function my(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(my)}catch(t){console.error(t)}}my(),f_.exports=pt;var gy=f_.exports;const li=kl(gy);var pm=gy;vc.createRoot=pm.createRoot,vc.hydrateRoot=pm.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Js(){return Js=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Js.apply(this,arguments)}var Dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dn||(Dn={}));const mm="popstate";function sT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return dd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ja(i)}return aT(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oT(){return Math.random().toString(36).substr(2,8)}function gm(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,r){return n===void 0&&(n=null),Js({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fi(e):e,{state:n,key:e&&e.key||r||oT()})}function Ja(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Dn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Js({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Dn.Pop;let C=c(),g=C==null?null:C-u;u=C,l&&l({action:a,location:w.location,delta:g})}function h(C,g){a=Dn.Push;let p=dd(w.location,C,g);n&&n(p,C),u=c()+1;let v=gm(p,u),E=w.createHref(p);try{o.pushState(v,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function _(C,g){a=Dn.Replace;let p=dd(w.location,C,g);n&&n(p,C),u=c();let v=gm(p,u),E=w.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function y(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Ja(C);return we(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mm,d),l=C,()=>{i.removeEventListener(mm,d),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:_,go(C){return o.go(C)}};return w}var _m;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_m||(_m={}));function lT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Fi(e):e,i=Wh(r.pathname||"/",n);if(i==null)return null;let s=_y(t);uT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vT(s[a],ET(i));return o}function _y(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_y(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vy(s.path))i(s,o,l)}),e}function vy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function uT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_T(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cT=/^:\w+$/,dT=3,hT=2,fT=1,pT=10,mT=-2,vm=t=>t==="*";function gT(t,e){let n=t.split("/"),r=n.length;return n.some(vm)&&(r+=mT),e&&(r+=hT),n.filter(i=>!vm(i)).reduce((i,s)=>i+(cT.test(s)?dT:s===""?fT:pT),r)}function _T(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Wn([i,c.pathname]),pathnameBase:TT(Wn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Wn([i,c.pathnameBase]))}return s}function yT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=CT(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ET(t){try{return decodeURI(t)}catch(e){return zh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function CT(t,e){try{return decodeURIComponent(t)}catch(n){return zh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Wh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ST(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fi(t):t;return{pathname:n?n.startsWith("/")?n:IT(n,e):e,search:kT(r),hash:xT(i)}}function IT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fi(t):(i=Js({},t),we(!i.pathname||!i.pathname.includes("?"),zu("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),zu("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),zu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=ST(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),TT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ey=["post","put","patch","delete"];new Set(Ey);const NT=["get",...Ey];new Set(NT);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}const Hh=m.createContext(null),PT=m.createContext(null),ji=m.createContext(null),Wl=m.createContext(null),Fr=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Cy=m.createContext(null);function AT(t,e){let{relative:n}=e===void 0?{}:e;vo()||we(!1);let{basename:r,navigator:i}=m.useContext(ji),{hash:s,pathname:o,search:a}=Iy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function vo(){return m.useContext(Wl)!=null}function Hl(){return vo()||we(!1),m.useContext(Wl).location}function Sy(t){m.useContext(ji).static||m.useLayoutEffect(t)}function tr(){let{isDataRoute:t}=m.useContext(Fr);return t?HT():OT()}function OT(){vo()||we(!1);let t=m.useContext(Hh),{basename:e,navigator:n}=m.useContext(ji),{matches:r}=m.useContext(Fr),{pathname:i}=Hl(),s=JSON.stringify(yy(r).map(l=>l.pathnameBase)),o=m.useRef(!1);return Sy(()=>{o.current=!0}),m.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=wy(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Wn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Iy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=m.useContext(Fr),{pathname:i}=Hl(),s=JSON.stringify(yy(r).map(o=>o.pathnameBase));return m.useMemo(()=>wy(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function bT(t,e){return DT(t,e)}function DT(t,e,n){vo()||we(!1);let{navigator:r}=m.useContext(ji),{matches:i}=m.useContext(Fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Hl(),u;if(e){var c;let w=typeof e=="string"?Fi(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||we(!1),u=w}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",_=lT(t,{pathname:h}),y=jT(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Wn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Wn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?m.createElement(Wl.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dn.Pop}},y):y}function LT(){let t=WT(),e=RT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:i},n):null,s)}const MT=m.createElement(LT,null);class UT extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m.createElement(Fr.Provider,{value:this.props.routeContext},m.createElement(Cy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FT(t){let{routeContext:e,match:n,children:r}=t,i=m.useContext(Hh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Fr.Provider,{value:e},r)}function jT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||we(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||MT);let h=e.concat(s.slice(0,u+1)),_=()=>{let y;return c?y=d:l.route.Component?y=m.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,m.createElement(FT,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?m.createElement(UT,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Ty=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ty||{}),el=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(el||{});function $T(t){let e=m.useContext(Hh);return e||we(!1),e}function BT(t){let e=m.useContext(PT);return e||we(!1),e}function zT(t){let e=m.useContext(Fr);return e||we(!1),e}function ky(t){let e=zT(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function WT(){var t;let e=m.useContext(Cy),n=BT(el.UseRouteError),r=ky(el.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function HT(){let{router:t}=$T(Ty.UseNavigateStable),e=ky(el.UseNavigateStable),n=m.useRef(!1);return Sy(()=>{n.current=!0}),m.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Za({fromRouteId:e},s)))},[t,e])}function Cn(t){we(!1)}function VT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dn.Pop,navigator:s,static:o=!1}=t;vo()&&we(!1);let a=e.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Fi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,y=m.useMemo(()=>{let w=Wh(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:h,key:_},navigationType:i}},[a,u,c,d,h,_,i]);return y==null?null:m.createElement(ji.Provider,{value:l},m.createElement(Wl.Provider,{children:n,value:y}))}function KT(t){let{children:e,location:n}=t;return bT(hd(e),n)}new Promise(()=>{});function hd(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,i)=>{if(!m.isValidElement(r))return;let s=[...e,i];if(r.type===m.Fragment){n.push.apply(n,hd(r.props.children,s));return}r.type!==Cn&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}function GT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YT(t,e){return t.button===0&&(!e||e==="_self")&&!qT(t)}const QT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],XT="startTransition",ym=YC[XT];function JT(t){let{basename:e,children:n,future:r,window:i}=t,s=m.useRef();s.current==null&&(s.current=sT({window:i,v5Compat:!0}));let o=s.current,[a,l]=m.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=m.useCallback(d=>{u&&ym?ym(()=>l(d)):l(d)},[l,u]);return m.useLayoutEffect(()=>o.listen(c),[o,c]),m.createElement(VT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const ZT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ek=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xy=m.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=GT(e,QT),{basename:h}=m.useContext(ji),_,y=!1;if(typeof u=="string"&&ek.test(u)&&(_=u,ZT))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Wh(v.pathname,h);v.origin===p.origin&&E!=null?u=E+v.search+v.hash:y=!0}catch{}let w=AT(u,{relative:i}),C=tk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||C(p)}return m.createElement("a",fd({},d,{href:_||w,onClick:y||s?r:g,ref:n,target:l}))});var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(wm||(wm={}));var Em;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function tk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=tr(),l=Hl(),u=Iy(t,{relative:o});return m.useCallback(c=>{if(YT(c,n)){c.preventDefault();let d=r!==void 0?r:Ja(l)===Ja(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Ry={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Ry);var nk=Ry.exports;const oe=kl(nk),rk=["as","disabled"];function ik(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sk(t){return!t||t.trim()==="#"}function Vh({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=h=>{if((e||t==="a"&&sk(n))&&h.preventDefault(),e){h.stopPropagation();return}o==null||o(h)},d=h=>{h.key===" "&&(h.preventDefault(),c(h))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:d},u]}const Ny=m.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=ik(t,rk);const[s,{tagName:o}]=Vh(Object.assign({tagName:n,disabled:r},i));return f.jsx(o,Object.assign({},i,s,{ref:e}))});Ny.displayName="Button";const ok=["xxl","xl","lg","md","sm","xs"],ak="xs",Py=m.createContext({prefixes:{},breakpoints:ok,minBreakpoint:ak});function Pe(t,e){const{prefixes:n}=m.useContext(Py);return t||n[e]||e}function lk(){const{dir:t}=m.useContext(Py);return t==="rtl"}const Ay=m.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const u=Pe(e,"btn"),[c,{tagName:d}]=Vh({tagName:t,disabled:s,...a}),h=d;return f.jsx(h,{...c,...a,ref:l,disabled:s,className:oe(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});Ay.displayName="Button";const Mt=Ay,uk=m.createContext(null),Kh=(t,e=null)=>t!=null?String(t):e||null,tl=uk;function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pd.apply(this,arguments)}function Oy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Cm(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function ck(t){var e=dk(t,"string");return typeof e=="symbol"?e:String(e)}function dk(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hk(t,e,n){var r=m.useRef(t!==void 0),i=m.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,m.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function by(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[Cm(r)],a=s[r],l=Oy(s,[Cm(r),r].map(ck)),u=e[r],c=hk(a,o,t[u]),d=c[0],h=c[1];return pd({},l,(i={},i[r]=d,i[u]=h,i))},t)}function md(t,e){return md=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},md(t,e)}function fk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,md(t,e)}var pk=/-(.)/g;function mk(t){return t.replace(pk,function(e,n){return n.toUpperCase()})}const gk=t=>t[0].toUpperCase()+mk(t).slice(1);function at(t,{displayName:e=gk(t),Component:n,defaultProps:r}={}){const i=m.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},d=Pe(o,t);return f.jsx(a,{ref:u,className:oe(s,d),...c})});return i.displayName=e,i}const Dy=m.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=Pe(t,"navbar-brand");const s=n||(r.href?"a":"span");return f.jsx(s,{...r,ref:i,className:oe(e,t)})});Dy.displayName="NavbarBrand";const _k=Dy;function Vl(t){return t&&t.ownerDocument||document}function vk(t){var e=Vl(t);return e&&e.defaultView||window}function yk(t,e){return vk(t).getComputedStyle(t,e)}var wk=/([A-Z])/g;function Ek(t){return t.replace(wk,"-$1").toLowerCase()}var Ck=/^ms-/;function ia(t){return Ek(t).replace(Ck,"-ms-")}var Sk=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Ik(t){return!!(t&&Sk.test(t))}function on(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(ia(e))||yk(t).getPropertyValue(ia(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(ia(i)):Ik(i)?r+=i+"("+s+") ":n+=ia(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var Ly={exports:{}},Tk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kk=Tk,xk=kk;function My(){}function Uy(){}Uy.resetWarningCache=My;var Rk=function(){function t(r,i,s,o,a,l){if(l!==xk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Uy,resetWarningCache:My};return n.PropTypes=n,n};Ly.exports=Rk();var Nk=Ly.exports;const Wu=kl(Nk),Sm={disabled:!1},Fy=Nt.createContext(null);var Pk=function(e){return e.scrollTop},vs="unmounted",Tn="exited",xt="entering",Xt="entered",Zs="exiting",gn=function(t){fk(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Tn,s.appearStatus=xt):l=Xt:r.unmountOnExit||r.mountOnEnter?l=vs:l=Tn,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===vs?{status:Tn}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==xt&&o!==Xt&&(s=xt):(o===xt||o===Xt)&&(s=Zs)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===xt){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:li.findDOMNode(this);o&&Pk(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Tn&&this.setState({status:vs})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[li.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),h=a?d.appear:d.enter;if(!i&&!o||Sm.disabled){this.safeSetState({status:Xt},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:xt},function(){s.props.onEntering(u,c),s.onTransitionEnd(h,function(){s.safeSetState({status:Xt},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:li.findDOMNode(this);if(!s||Sm.disabled){this.safeSetState({status:Tn},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Zs},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Tn},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:li.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===vs)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=Oy(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Nt.createElement(Fy.Provider,{value:null},typeof o=="function"?o(i,a):Nt.cloneElement(Nt.Children.only(o),a))},e}(Nt.Component);gn.contextType=Fy;gn.propTypes={};function Gr(){}gn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Gr,onEntering:Gr,onEntered:Gr,onExit:Gr,onExiting:Gr,onExited:Gr};gn.UNMOUNTED=vs;gn.EXITED=Tn;gn.ENTERING=xt;gn.ENTERED=Xt;gn.EXITING=Zs;const Ak=gn,$i=!!(typeof window<"u"&&window.document&&window.document.createElement);var gd=!1,_d=!1;try{var Hu={get passive(){return gd=!0},get once(){return _d=gd=!0}};$i&&(window.addEventListener("test",Hu,Hu),window.removeEventListener("test",Hu,!0))}catch{}function jy(t,e,n,r){if(r&&typeof r!="boolean"&&!_d){var i=r.once,s=r.capture,o=n;!_d&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,gd?r:s)}t.addEventListener(e,n,r)}function vd(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function nl(t,e,n,r){return jy(t,e,n,r),function(){vd(t,e,n,r)}}function Ok(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function bk(t){var e=on(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function Dk(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||Ok(t,"transitionend",!0)},e+n),s=nl(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function $y(t,e,n,r){n==null&&(n=bk(t)||0);var i=Dk(t,n,r),s=nl(t,"transitionend",e);return function(){i(),s()}}function Im(t,e){const n=on(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Gh(t,e){const n=Im(t,"transitionDuration"),r=Im(t,"transitionDelay"),i=$y(t,s=>{s.target===t&&(i(),e(s))},n+r)}function os(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function By(t){t.offsetHeight}const Tm=t=>!t||typeof t=="function"?t:e=>{t.current=e};function Lk(t,e){const n=Tm(t),r=Tm(e);return i=>{n&&n(i),r&&r(i)}}function yo(t,e){return m.useMemo(()=>Lk(t,e),[t,e])}function Mk(t){return t&&"setState"in t?li.findDOMNode(t):t??null}const Uk=Nt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const d=m.useRef(null),h=yo(d,l),_=S=>{h(Mk(S))},y=S=>x=>{S&&d.current&&S(d.current,x)},w=m.useCallback(y(t),[t]),C=m.useCallback(y(e),[e]),g=m.useCallback(y(n),[n]),p=m.useCallback(y(r),[r]),v=m.useCallback(y(i),[i]),E=m.useCallback(y(s),[s]),T=m.useCallback(y(o),[o]);return f.jsx(Ak,{ref:c,...u,onEnter:w,onEntered:g,onEntering:C,onExit:p,onExited:E,onExiting:v,addEndListener:T,nodeRef:d,children:typeof a=="function"?(S,x)=>a(S,{...x,ref:_}):Nt.cloneElement(a,{ref:_})})}),qh=Uk,Fk={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function jk(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=Fk[t];return r+parseInt(on(e,i[0]),10)+parseInt(on(e,i[1]),10)}const $k={[Tn]:"collapse",[Zs]:"collapsing",[xt]:"collapsing",[Xt]:"collapse show"},Bk=Nt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:d=!1,appear:h=!1,getDimensionValue:_=jk,...y},w)=>{const C=typeof a=="function"?a():a,g=m.useMemo(()=>os(S=>{S.style[C]="0"},t),[C,t]),p=m.useMemo(()=>os(S=>{const x=`scroll${C[0].toUpperCase()}${C.slice(1)}`;S.style[C]=`${S[x]}px`},e),[C,e]),v=m.useMemo(()=>os(S=>{S.style[C]=null},n),[C,n]),E=m.useMemo(()=>os(S=>{S.style[C]=`${_(C,S)}px`,By(S)},r),[r,_,C]),T=m.useMemo(()=>os(S=>{S.style[C]=null},i),[C,i]);return f.jsx(qh,{ref:w,addEndListener:Gh,...y,"aria-expanded":y.role?l:null,onEnter:g,onEntering:p,onEntered:v,onExit:E,onExiting:T,childRef:o.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:d,appear:h,children:(S,x)=>Nt.cloneElement(o,{...x,className:oe(s,o.props.className,$k[S],C==="width"&&"collapse-horizontal")})})}),zk=Bk,zy=m.createContext(null);zy.displayName="NavbarContext";const Bi=zy,Wy=m.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=Pe(e,"navbar-collapse");const i=m.useContext(Bi);return f.jsx(zk,{in:!!(i&&i.expanded),...n,children:f.jsx("div",{ref:r,className:e,children:t})})});Wy.displayName="NavbarCollapse";const Wk=Wy;function Hk(t){const e=m.useRef(t);return m.useEffect(()=>{e.current=t},[t]),e}function Qe(t){const e=Hk(t);return m.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Hy=m.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=Pe(t,"navbar-toggler");const{onToggle:l,expanded:u}=m.useContext(Bi)||{},c=Qe(d=>{s&&s(d),l&&l()});return i==="button"&&(o.type="button"),f.jsx(i,{...o,ref:a,onClick:c,"aria-label":r,className:oe(e,t,!u&&"collapsed"),children:n||f.jsx("span",{className:`${t}-icon`})})});Hy.displayName="NavbarToggle";const Vk=Hy,Kk=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Gk=typeof document<"u",yd=Gk||Kk?m.useLayoutEffect:m.useEffect,wd=new WeakMap,km=(t,e)=>{if(!t||!e)return;const n=wd.get(e)||new Map;wd.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function qk(t,e=typeof window>"u"?void 0:window){const n=km(t,e),[r,i]=m.useState(()=>n?n.matches:!1);return yd(()=>{let s=km(t,e);if(!s)return i(!1);let o=wd.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function Yk(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const l=r(a);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,u){let c;typeof a=="object"?(c=a,u=l,l=!0):(l=l||!0,c={[a]:l});let d=m.useMemo(()=>Object.entries(c).reduce((h,[_,y])=>((y==="up"||y===!0)&&(h=n(h,s(_))),(y==="down"||y===!0)&&(h=n(h,i(_))),h),""),[JSON.stringify(c)]);return qk(d,u)}return o}const Qk=Yk({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Vu(t){t===void 0&&(t=Vl());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function xm(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function Xk(){const t=m.useRef(!0),e=m.useRef(()=>t.current);return m.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function Jk(t){const e=m.useRef(t);return e.current=t,e}function Vy(t){const e=Jk(t);m.useEffect(()=>()=>e.current(),[])}function Zk(t){const e=m.useRef(null);return m.useEffect(()=>{e.current=t}),e.current}const ex="data-rr-ui-",tx="rrUi";function Kl(t){return`${ex}${t}`}function nx(t){return`${tx}${t}`}function rx(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Rm=Kl("modal-open");class ix{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return rx(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(on(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(Rm,""),on(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Rm),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Yh=ix,Ky=m.createContext($i?window:void 0);Ky.Provider;function Qh(){return m.useContext(Ky)}const Ku=(t,e)=>$i?t==null?(e||Vl()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function sx(t,e){const n=Qh(),[r,i]=m.useState(()=>Ku(t,n==null?void 0:n.document));if(!r){const s=Ku(t);s&&i(s)}return m.useEffect(()=>{e&&r&&e(r)},[e,r]),m.useEffect(()=>{const s=Ku(t);s!==r&&i(s)},[t,r]),r}function ox({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=m.useRef(null),o=m.useRef(e),a=Qe(n);m.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=yo(s,t.ref),u=m.cloneElement(t,{ref:l});return e?u:i||!o.current&&r?null:u}function ax({in:t,onTransition:e}){const n=m.useRef(null),r=m.useRef(!0),i=Qe(e);return yd(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),yd(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function lx({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=m.useState(!e);e&&s&&o(!1);const a=ax({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(c,d=>{throw u.in||o(!0),d})}}),l=yo(a,t.ref);return s&&!e?null:m.cloneElement(t,{ref:l})}function Nm(t,e,n){return t?f.jsx(t,Object.assign({},n)):e?f.jsx(lx,Object.assign({},n,{transition:e})):f.jsx(ox,Object.assign({},n))}function ux(t){return t.code==="Escape"||t.keyCode===27}const cx=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function dx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Gu;function hx(t){return Gu||(Gu=new Yh({ownerDocument:t==null?void 0:t.document})),Gu}function fx(t){const e=Qh(),n=t||hx(e),r=m.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:m.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:m.useCallback(i=>{r.current.backdrop=i},[])})}const Gy=m.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,runTransition:h,backdropTransition:_,runBackdropTransition:y,autoFocus:w=!0,enforceFocus:C=!0,restoreFocus:g=!0,restoreFocusOptions:p,renderDialog:v,renderBackdrop:E=le=>f.jsx("div",Object.assign({},le)),manager:T,container:S,onShow:x,onHide:I=()=>{},onExit:A,onExited:O,onExiting:W,onEnter:G,onEntering:J,onEntered:R}=t,ie=dx(t,cx);const he=Qh(),ae=sx(S),k=fx(T),D=Xk(),M=Zk(n),[H,q]=m.useState(!n),Ae=m.useRef(null);m.useImperativeHandle(e,()=>k,[k]),$i&&!M&&n&&(Ae.current=Vu(he==null?void 0:he.document)),n&&H&&q(!1);const We=Qe(()=>{if(k.add(),Hr.current=nl(document,"keydown",mu),Wr.current=nl(document,"focus",()=>setTimeout(Me),!0),x&&x(),w){var le,$o;const Xi=Vu((le=($o=k.dialog)==null?void 0:$o.ownerDocument)!=null?le:he==null?void 0:he.document);k.dialog&&Xi&&!xm(k.dialog,Xi)&&(Ae.current=Xi,k.dialog.focus())}}),ve=Qe(()=>{if(k.remove(),Hr.current==null||Hr.current(),Wr.current==null||Wr.current(),g){var le;(le=Ae.current)==null||le.focus==null||le.focus(p),Ae.current=null}});m.useEffect(()=>{!n||!ae||We()},[n,ae,We]),m.useEffect(()=>{H&&ve()},[H,ve]),Vy(()=>{ve()});const Me=Qe(()=>{if(!C||!D()||!k.isTopModal())return;const le=Vu(he==null?void 0:he.document);k.dialog&&le&&!xm(k.dialog,le)&&k.dialog.focus()}),yn=Qe(le=>{le.target===le.currentTarget&&(u==null||u(le),a===!0&&I())}),mu=Qe(le=>{l&&ux(le)&&k.isTopModal()&&(c==null||c(le),le.defaultPrevented||I())}),Wr=m.useRef(),Hr=m.useRef(),Yi=(...le)=>{q(!0),O==null||O(...le)};if(!ae)return null;const jo=Object.assign({role:r,ref:k.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ie,{style:s,className:i,tabIndex:-1});let Qi=v?v(jo):f.jsx("div",Object.assign({},jo,{children:m.cloneElement(o,{role:"document"})}));Qi=Nm(d,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:A,onExiting:W,onExited:Yi,onEnter:G,onEntering:J,onEntered:R,children:Qi});let ir=null;return a&&(ir=E({ref:k.setBackdropRef,onClick:yn}),ir=Nm(_,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ir})),f.jsx(f.Fragment,{children:li.createPortal(f.jsxs(f.Fragment,{children:[ir,Qi]}),ae)})});Gy.displayName="Modal";const qy=Object.assign(Gy,{Manager:Yh}),px={[xt]:"show",[Xt]:"show"},Yy=m.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=m.useCallback((l,u)=>{By(l),r==null||r(l,u)},[r]);return f.jsx(qh,{ref:s,addEndListener:Gh,...o,onEnter:a,childRef:e.ref,children:(l,u)=>m.cloneElement(e,{...u,className:oe("fade",t,e.props.className,px[l],n[l])})})});Yy.displayName="Fade";const Xh=Yy,mx=at("offcanvas-body"),gx={[xt]:"show",[Xt]:"show"},Qy=m.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=Pe(t,"offcanvas"),f.jsx(qh,{ref:l,addEndListener:Gh,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,c)=>m.cloneElement(n,{...c,className:oe(e,n.props.className,(u===xt||u===Zs)&&`${t}-toggling`,gx[u])})})));Qy.displayName="OffcanvasToggling";const _x=Qy,vx=m.createContext({onHide(){}}),Jh=vx,yx={"aria-label":Wu.string,onClick:Wu.func,variant:Wu.oneOf(["white"])},Zh=m.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>f.jsx("button",{ref:i,type:"button",className:oe("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Zh.displayName="CloseButton";Zh.propTypes=yx;const wx=Zh,Ex=m.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=m.useContext(Jh),l=Qe(()=>{a==null||a.onHide(),r==null||r()});return f.jsxs("div",{ref:o,...s,children:[i,n&&f.jsx(wx,{"aria-label":t,variant:e,onClick:l})]})}),Xy=Ex,Jy=m.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Pe(t,"offcanvas-header"),f.jsx(Xy,{ref:s,...i,className:oe(e,t),closeLabel:n,closeButton:r})));Jy.displayName="OffcanvasHeader";const Cx=Jy,Gl=t=>m.forwardRef((e,n)=>f.jsx("div",{...e,ref:n,className:oe(e.className,t)})),Sx=Gl("h5"),Ix=at("offcanvas-title",{Component:Sx});function Tx(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function kx(t,e){t.classList?t.classList.add(e):Tx(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var xx=Function.prototype.bind.call(Function.prototype.call,[].slice);function ar(t,e){return xx(t.querySelectorAll(e))}function Pm(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Rx(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Pm(t.className,e):t.setAttribute("class",Pm(t.className&&t.className.baseVal||"",e))}const qr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Zy extends Yh{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,on(n,{[e]:`${parseFloat(on(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],on(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(kx(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ar(n,qr.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),ar(n,qr.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),ar(n,qr.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Rx(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ar(n,qr.FIXED_CONTENT).forEach(s=>this.restore(r,s)),ar(n,qr.STICKY_CONTENT).forEach(s=>this.restore(i,s)),ar(n,qr.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let qu;function ew(t){return qu||(qu=new Zy(t)),qu}function Nx(t){return f.jsx(_x,{...t})}function Px(t){return f.jsx(Xh,{...t})}const tw=m.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:d,onHide:h,container:_,autoFocus:y=!0,enforceFocus:w=!0,restoreFocus:C=!0,restoreFocusOptions:g,onEntered:p,onExit:v,onExiting:E,onEnter:T,onEntering:S,onExited:x,backdropClassName:I,manager:A,renderStaticNode:O=!1,...W},G)=>{const J=m.useRef();t=Pe(t,"offcanvas");const{onToggle:R}=m.useContext(Bi)||{},[ie,he]=m.useState(!1),ae=Qk(s||"xs","up");m.useEffect(()=>{he(s?o&&!ae:o)},[o,s,ae]);const k=Qe(()=>{R==null||R(),h==null||h()}),D=m.useMemo(()=>({onHide:k}),[k]);function M(){return A||(u?(J.current||(J.current=new Zy({handleContainerOverflow:!1})),J.current):ew())}const H=(ve,...Me)=>{ve&&(ve.style.visibility="visible"),T==null||T(ve,...Me)},q=(ve,...Me)=>{ve&&(ve.style.visibility=""),x==null||x(...Me)},Ae=m.useCallback(ve=>f.jsx("div",{...ve,className:oe(`${t}-backdrop`,I)}),[I,t]),We=ve=>f.jsx("div",{...ve,...W,className:oe(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return f.jsxs(f.Fragment,{children:[!ie&&(s||O)&&We({}),f.jsx(Jh.Provider,{value:D,children:f.jsx(qy,{show:ie,ref:G,backdrop:a,container:_,keyboard:l,autoFocus:y,enforceFocus:w&&!u,restoreFocus:C,restoreFocusOptions:g,onEscapeKeyDown:c,onShow:d,onHide:k,onEnter:H,onEntering:S,onEntered:p,onExit:v,onExiting:E,onExited:q,manager:M(),transition:Nx,backdropTransition:Px,renderBackdrop:Ae,renderDialog:We})})]})});tw.displayName="Offcanvas";const Ax=Object.assign(tw,{Body:mx,Header:Cx,Title:Ix}),nw=m.forwardRef((t,e)=>{const n=m.useContext(Bi);return f.jsx(Ax,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});nw.displayName="NavbarOffcanvas";const Ox=nw,bx=at("navbar-text",{Component:"span"}),rw=m.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:d,onSelect:h,collapseOnSelect:_=!1,...y}=by(t,{expanded:"onToggle"}),w=Pe(n,"navbar"),C=m.useCallback((...v)=>{h==null||h(...v),_&&c&&(d==null||d(!1))},[h,_,c,d]);y.role===void 0&&u!=="nav"&&(y.role="navigation");let g=`${w}-expand`;typeof r=="string"&&(g=`${g}-${r}`);const p=m.useMemo(()=>({onToggle:()=>d==null?void 0:d(!c),bsPrefix:w,expanded:!!c,expand:r}),[w,c,r,d]);return f.jsx(Bi.Provider,{value:p,children:f.jsx(tl.Provider,{value:C,children:f.jsx(u,{ref:e,...y,className:oe(l,w,r&&g,i&&`${w}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});rw.displayName="Navbar";const sa=Object.assign(rw,{Brand:_k,Collapse:Wk,Offcanvas:Ox,Text:bx,Toggle:Vk}),iw=m.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=Pe(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return f.jsx(n,{ref:s,...i,className:oe(r,e?`${o}${a}`:o)})});iw.displayName="Container";const sw=iw;var Am={exports:{}},Ed={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,d){var h=u||"<<anonymous>>",_=d||l;if(a[l]==null)return o?new Error("Required "+c+" `"+_+"` was not specified "+("in `"+h+"`.")):null;for(var y=arguments.length,w=Array(y>6?y-6:0),C=6;C<y;C++)w[C-6]=arguments[C];return r.apply(void 0,[a,l,h,c,_].concat(w))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(Ed,Ed.exports);var Dx=Ed.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Dx,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,d=Array(c),h=0;h<c;h++)d[h]=arguments[h];var _=null;return a.forEach(function(y){if(_==null){var w=y.apply(void 0,d);w!=null&&(_=w)}}),_}return(0,r.default)(u)}t.exports=e.default})(Am,Am.exports);function Lx(){const[,t]=m.useReducer(e=>!e,!1);return t}const ow=m.createContext(null);ow.displayName="NavContext";const aw=ow,Mx=m.createContext(null),lw=Mx,Ux=["as","active","eventKey"];function Fx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uw({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=m.useContext(tl),a=m.useContext(aw),l=m.useContext(lw);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const d=a.getControllerId(t??null),h=a.getControlledId(t??null);c[Kl("event-key")]=t,c.id=d||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=h)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Qe(d=>{s||(e==null||e(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[c,{isActive:u}]}const cw=m.forwardRef((t,e)=>{let{as:n=Ny,active:r,eventKey:i}=t,s=Fx(t,Ux);const[o,a]=uw(Object.assign({key:Kh(i,s.href),active:r},s));return o[Kl("active")]=a.isActive,f.jsx(n,Object.assign({},s,o,{ref:e}))});cw.displayName="NavItem";const jx=cw,$x=["as","onSelect","activeKey","role","onKeyDown"];function Bx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Om=()=>{},bm=Kl("event-key"),dw=m.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=Bx(t,$x);const l=Lx(),u=m.useRef(!1),c=m.useContext(tl),d=m.useContext(lw);let h,_;d&&(s=s||"tablist",i=d.activeKey,h=d.getControlledId,_=d.getControllerId);const y=m.useRef(null),w=v=>{const E=y.current;if(!E)return null;const T=ar(E,`[${bm}]:not([aria-disabled=true])`),S=E.querySelector("[aria-selected=true]");if(!S||S!==document.activeElement)return null;const x=T.indexOf(S);if(x===-1)return null;let I=x+v;return I>=T.length&&(I=0),I<0&&(I=T.length-1),T[I]},C=(v,E)=>{v!=null&&(r==null||r(v,E),c==null||c(v,E))},g=v=>{if(o==null||o(v),!d)return;let E;switch(v.key){case"ArrowLeft":case"ArrowUp":E=w(-1);break;case"ArrowRight":case"ArrowDown":E=w(1);break;default:return}E&&(v.preventDefault(),C(E.dataset[nx("EventKey")]||null,v),u.current=!0,l())};m.useEffect(()=>{if(y.current&&u.current){const v=y.current.querySelector(`[${bm}][aria-selected=true]`);v==null||v.focus()}u.current=!1});const p=yo(e,y);return f.jsx(tl.Provider,{value:C,children:f.jsx(aw.Provider,{value:{role:s,activeKey:Kh(i),getControlledId:h||Om,getControllerId:_||Om},children:f.jsx(n,Object.assign({},a,{onKeyDown:g,ref:p,role:s}))})})});dw.displayName="Nav";const zx=Object.assign(dw,{Item:jx}),hw=m.createContext(null);hw.displayName="CardHeaderContext";const fw=hw,Wx=at("nav-item");function Hx(){return m.useState(null)}const Vx=["onKeyDown"];function Kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gx(t){return!t||t.trim()==="#"}const pw=m.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=Kx(t,Vx);const[i]=Vh(Object.assign({tagName:"a"},r)),s=Qe(o=>{i.onKeyDown(o),n==null||n(o)});return Gx(r.href)||r.role==="button"?f.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):f.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});pw.displayName="Anchor";const qx=pw,mw=m.forwardRef(({bsPrefix:t,className:e,as:n=qx,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=Pe(t,"nav-link");const[l,u]=uw({key:Kh(i,o.href),active:r,disabled:s,...o});return f.jsx(n,{...o,...l,ref:a,disabled:s,className:oe(e,t,s&&"disabled",u.isActive&&"active")})});mw.displayName="NavLink";const Yx=mw,gw=m.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:u,activeKey:c,...d}=by(t,{activeKey:"onSelect"}),h=Pe(r,"nav");let _,y,w=!1;const C=m.useContext(Bi),g=m.useContext(fw);return C?(_=C.bsPrefix,w=a??!0):g&&({cardHeaderBsPrefix:y}=g),f.jsx(zx,{as:n,ref:e,activeKey:c,className:oe(u,{[h]:!w,[`${_}-nav`]:w,[`${_}-nav-scroll`]:w&&l,[`${y}-${i}`]:!!y,[`${h}-${i}`]:!!i,[`${h}-fill`]:s,[`${h}-justified`]:o}),...d})});gw.displayName="Nav";const Yu=Object.assign(gw,{Item:Wx,Link:Yx});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw zi(e)},zi=function(t){return new Error("Firebase Database ("+_w.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Xx;const h=s<<2|a>>4;if(r.push(h),u!==64){const _=a<<4&240|u>>2;if(r.push(_),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yw=function(t){const e=vw(t);return ef.encodeByteArray(e,!0)},rl=function(t){return yw(t).replace(/\./g,"")},il=function(t){try{return ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){return ww(void 0,t)}function ww(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zx(n)||(t[n]=ww(t[n],e[n]));return t}function Zx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return tR()||nR()||rR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ew=t=>{var e,n;return(n=(e=ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cw=t=>{const e=Ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=ql())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=ql())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function iR(){var t;const e=(t=ql())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sR(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){return _w.NODE_ADMIN===!0}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function oR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aR,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,r)}}function lR(t,e){return t.replace(uR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=eo(il(s[0])||""),n=eo(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cR=function(t){const e=Aw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dR=function(t){const e=Aw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function to(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dm(s)&&Dm(o)){if(!to(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function fR(t,e){const n=new pR(t,e);return n.subscribe.bind(n)}class pR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qu),i.error===void 0&&(i.error=Qu),i.complete===void 0&&(i.complete=Qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qu(){}function nf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ql=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=1e3,vR=2,yR=4*60*60*1e3,wR=.5;function Lm(t,e=_R,n=vR){const r=e*Math.pow(n,t),i=Math.round(wR*r*(Math.random()-.5)*2);return Math.min(yR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Ct{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SR(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CR(t){return t===lr?void 0:t}function SR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ER(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const TR={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},kR=Q.INFO,xR={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},RR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=kR,this._logHandler=RR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const NR=(t,e)=>e.some(n=>t instanceof n);let Mm,Um;function PR(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AR(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Sd=new WeakMap,bw=new WeakMap,Xu=new WeakMap,rf=new WeakMap;function OR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ow.set(n,t)}).catch(()=>{}),rf.set(e,t),e}function bR(t){if(Sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sd.set(t,e)}let Id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DR(t){Id=t(Id)}function LR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ju(this),e,...n);return bw.set(r,e.sort?e.sort():[e]),Hn(r)}:AR().includes(t)?function(...e){return t.apply(Ju(this),e),Hn(Ow.get(this))}:function(...e){return Hn(t.apply(Ju(this),e))}}function MR(t){return typeof t=="function"?LR(t):(t instanceof IDBTransaction&&bR(t),NR(t,PR())?new Proxy(t,Id):t)}function Hn(t){if(t instanceof IDBRequest)return OR(t);if(Xu.has(t))return Xu.get(t);const e=MR(t);return e!==t&&(Xu.set(t,e),rf.set(e,t)),e}const Ju=t=>rf.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],jR=["put","add","delete","clear"],Zu=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zu.set(e,s),s}DR(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",jm="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Xl("@firebase/app"),zR="@firebase/app-compat",WR="@firebase/analytics-compat",HR="@firebase/analytics",VR="@firebase/app-check-compat",KR="@firebase/app-check",GR="@firebase/auth",qR="@firebase/auth-compat",YR="@firebase/database",QR="@firebase/database-compat",XR="@firebase/functions",JR="@firebase/functions-compat",ZR="@firebase/installations",e1="@firebase/installations-compat",t1="@firebase/messaging",n1="@firebase/messaging-compat",r1="@firebase/performance",i1="@firebase/performance-compat",s1="@firebase/remote-config",o1="@firebase/remote-config-compat",a1="@firebase/storage",l1="@firebase/storage-compat",u1="@firebase/firestore",c1="@firebase/firestore-compat",d1="firebase",h1="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="[DEFAULT]",f1={[Td]:"fire-core",[zR]:"fire-core-compat",[HR]:"fire-analytics",[WR]:"fire-analytics-compat",[KR]:"fire-app-check",[VR]:"fire-app-check-compat",[GR]:"fire-auth",[qR]:"fire-auth-compat",[YR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[XR]:"fire-fn",[JR]:"fire-fn-compat",[ZR]:"fire-iid",[e1]:"fire-iid-compat",[t1]:"fire-fcm",[n1]:"fire-fcm-compat",[r1]:"fire-perf",[i1]:"fire-perf-compat",[s1]:"fire-rc",[o1]:"fire-rc-compat",[a1]:"fire-gcs",[l1]:"fire-gcs-compat",[u1]:"fire-fst",[c1]:"fire-fst-compat","fire-js":"fire-js",[d1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map,xd=new Map;function p1(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(xd.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of ol.values())p1(n,t);return!0}function nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new jr("app","Firebase",m1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=h1;function Dw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=Sw()),!n)throw Vn.create("no-options");const s=ol.get(i);if(s){if(to(n,s.options)&&to(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new IR(i);for(const l of xd.values())o.addComponent(l);const a=new g1(n,r,o);return ol.set(i,a),a}function Jl(t=kd){const e=ol.get(t);if(!e&&t===kd&&Sw())return Dw();if(!e)throw Vn.create("no-app",{appName:t});return e}function rt(t,e,n){var r;let i=(r=f1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}Ut(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="firebase-heartbeat-database",v1=1,no="firebase-heartbeat-store";let ec=null;function Lw(){return ec||(ec=UR(_1,v1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(no)}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),ec}async function y1(t){try{return await(await Lw()).transaction(no).objectStore(no).get(Mw(t))}catch(e){if(e instanceof Ft)xr.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function $m(t,e){try{const r=(await Lw()).transaction(no,"readwrite");await r.objectStore(no).put(e,Mw(t)),await r.done}catch(n){if(n instanceof Ft)xr.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function Mw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1024,E1=30*24*60*60*1e3;class C1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=E1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bm(),{heartbeatsToSend:n,unsentEntries:r}=S1(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bm(){return new Date().toISOString().substring(0,10)}function S1(t,e=w1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class I1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await y1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){Ut(new Ct("platform-logger",e=>new $R(e),"PRIVATE")),Ut(new Ct("heartbeat",e=>new C1(e),"PRIVATE")),rt(Td,jm,t),rt(Td,jm,"esm2017"),rt("fire-js","")}T1("");var k1="firebase",x1="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(k1,x1,"app");const Wm="@firebase/database",Hm="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uw="";function R1(t){Uw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:eo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new N1(e)}}catch{}return new P1},fr=Fw("localStorage"),Rd=Fw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Xl("@firebase/database"),A1=function(){let t=1;return function(){return t++}}(),jw=function(t){const e=gR(t),n=new hR;n.update(e);const r=n.digest();return ef.encodeByteArray(r)},wo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=wo.apply(null,r):typeof r=="object"?e+=Re(r):e+=r,e+=" "}return e};let yr=null,Vm=!0;const O1=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gi.logLevel=Q.VERBOSE,yr=gi.log.bind(gi),e&&Rd.set("logging_enabled",!0)):typeof t=="function"?yr=t:(yr=null,Rd.remove("logging_enabled"))},$e=function(...t){if(Vm===!0&&(Vm=!1,yr===null&&Rd.get("logging_enabled")===!0&&O1(!0)),yr){const e=wo.apply(null,t);yr(e)}},Eo=function(t){return function(...e){$e(t,...e)}},Nd=function(...t){const e="FIREBASE INTERNAL ERROR: "+wo(...t);gi.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${wo(...t)}`;throw gi.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+wo(...t);gi.warn(e)},b1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$w=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},D1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pi="[MIN_NAME]",Rr="[MAX_NAME]",Hi=function(t,e){if(t===e)return 0;if(t===Pi||e===Rr)return-1;if(e===Pi||t===Rr)return 1;{const n=Km(t),r=Km(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},L1=function(t,e){return t===e?0:t<e?-1:1},as=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},sf=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Re(e[r]),n+=":",n+=sf(t[e[r]]);return n+="}",n},Bw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zw=function(t){P(!$w(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},M1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},U1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function F1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const j1=new RegExp("^-?(0*)\\d{1,10}$"),$1=-2147483648,B1=2147483647,Km=function(t){if(j1.test(t)){const e=Number(t);if(e>=$1&&e<=B1)return e}return null},Vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},z1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class _i{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_i.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="5",Ww="v",Hw="s",Vw="r",Kw="f",Gw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qw="ls",Yw="p",Pd="ac",Qw="websocket",Xw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function V1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zw(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===Qw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);V1(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc={},nc={};function af(t){const e=t.toString();return tc[e]||(tc[e]=new K1),tc[e]}function G1(t,e){const n=t.toString();return nc[n]||(nc[n]=e()),nc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="start",Y1="close",Q1="pLPCommand",X1="pRTLPCB",e0="id",t0="pw",n0="ser",J1="cb",Z1="seg",eN="ts",tN="d",nN="dframe",r0=1870,i0=30,rN=r0-i0,iN=25e3,sN=3e4;class ui{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Eo(e),this.stats_=af(n),this.urlFn=l=>(this.appCheckToken&&(l[Pd]=this.appCheckToken),Zw(n,Xw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new q1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sN)),D1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gm)this.id=a,this.password=l;else if(o===Y1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gm]="t",r[n0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[J1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ww]=of,this.transportSessionId&&(r[Hw]=this.transportSessionId),this.lastSessionId&&(r[qw]=this.lastSessionId),this.applicationId&&(r[Yw]=this.applicationId),this.appCheckToken&&(r[Pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gw.test(location.hostname)&&(r[Vw]=Kw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M1()&&!U1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yw(n),i=Bw(r,rN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nN]="t",r[e0]=e,r[t0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=A1(),window[Q1+this.uniqueCallbackIdentifier]=e,window[X1+this.uniqueCallbackIdentifier]=n,this.myIFrame=lf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[e0]=this.myID,e[t0]=this.myPW,e[n0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+i0+r.length<=r0;){const o=this.pendingSegs.shift();r=r+"&"+Z1+i+"="+o.seg+"&"+eN+i+"="+o.ts+"&"+tN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=16384,aN=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class Rt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Eo(this.connId),this.stats_=af(n),this.connURL=Rt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ww]=of,typeof location<"u"&&location.hostname&&Gw.test(location.hostname)&&(o[Vw]=Kw),n&&(o[Hw]=n),r&&(o[qw]=r),i&&(o[Pd]=i),s&&(o[Yw]=s),Zw(e,Qw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fr.set("previous_websocket_failure",!0);try{let r;Rw(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!Rt.forceDisallow_}static previouslyFailed(){return fr.isInMemoryStorage||fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=eo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bw(n,oN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rt&&Rt.isAvailable();let r=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rt];else{const i=this.transports_=[];for(const s of ro.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ro.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ro.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=6e4,uN=5e3,cN=10*1024,dN=100*1024,rc="t",qm="d",hN="s",Ym="r",fN="e",Qm="o",Xm="a",Jm="n",Zm="p",pN="h";class mN{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Eo("c:"+this.id+":"),this.transportManager_=new ro(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rc in e){const n=e[rc];n===Xm?this.upgradeIfSecondaryHealthy_():n===Ym?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=as("t",e),r=as("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=as("t",e),r=as("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=as(rc,e);if(qm in e){const r=e[qm];if(n===pN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hN?this.onConnectionShutdown_(r):n===Ym?this.onReset_(r):n===fN?Nd("Server Error: "+r):n===Qm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),of!==r&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends o0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ll}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=32,tg=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new X("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function a0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function l0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function u0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function Ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Je(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uf(t,e){if(Qn(t)!==Qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qn(t)>Qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _N{constructor(e,n){this.errorPrefix_=n,this.parts_=l0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ql(this.parts_[r]);c0(this)}}function vN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ql(e),c0(t)}function yN(t){const e=t.parts_.pop();t.byteLength_-=Ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function c0(t){if(t.byteLength_>tg)throw new Error(t.errorPrefix_+"has a key path longer than "+tg+" bytes ("+t.byteLength_+").");if(t.parts_.length>eg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eg+") or object contains a cycle "+ur(t))}function ur(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends o0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new cf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=1e3,wN=60*5*1e3,ng=30*1e3,EN=1.3,CN=3e4,SN="server_kill",rg=3;class an extends s0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=Eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=wN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Rw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Re(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Yl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=Ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ng)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nd("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CN&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new mN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{it(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(SN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&it(d),l())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>sf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rg&&(this.reconnectDelay_=ng,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uw.replace(/\./g,"-")]=1,tf()?e["framework.cordova"]=1:xw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Pi,e),i=new j(Pi,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;class d0 extends Zl{static get __EMPTY_NODE(){return oa}static set __EMPTY_NODE(e){oa=e}compare(e,n){return Hi(e.name,n.name)}isDefinedOn(e){throw zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Rr,oa)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,oa)}toString(){return".key"}}const vi=new d0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??Ze.EMPTY_NODE,this.right=s??Ze.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class IN{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new aa(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new IN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e){return Hi(t.name,e.name)}function df(t,e){return Hi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;function kN(t){Ad=t}const h0=function(t){return typeof t=="number"?"number:"+zw(t):"string:"+t},f0=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else P(t===Ad||t.isEmpty(),"priority of unexpected type.");P(t===Ad||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),f0(this.priorityNode_)}static set __childrenNodeConstructor(e){ig=e}static get __childrenNodeConstructor(){return ig}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:F(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+h0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zw(this.value_):e+=this.value_,this.lazyHash_=jw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),s=Te.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p0,m0;function xN(t){p0=t}function RN(t){m0=t}class NN extends Zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Rr,new Te("[PRIORITY-POST]",m0))}makePost(e,n){const r=p0(e);return new j(n,new Te("[PRIORITY-POST]",r))}toString(){return".priority"}}const pe=new NN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=Math.log(2);class AN{constructor(e){const n=s=>parseInt(Math.log(s)/PN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ul=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new xe(h,d.node,xe.BLACK,null,null);{const _=parseInt(c/2,10)+l,y=i(l,_),w=i(_+1,u);return d=t[_],h=n?n(d):d,new xe(h,d.node,xe.BLACK,y,w)}},s=function(l){let u=null,c=null,d=t.length;const h=function(y,w){const C=d-y,g=d;d-=y;const p=i(C+1,g),v=t[C],E=n?n(v):v;_(new xe(E,v.node,w,null,p))},_=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));w?h(C,xe.BLACK):(h(C,xe.BLACK),h(C,xe.RED))}return c},o=new AN(t.length),a=s(o);return new Ze(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;const Yr={};class tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Yr&&pe,"ChildrenNode.ts has not been loaded"),ic=ic||new tn({".priority":Yr},{".priority":pe}),ic}get(e){const n=Ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){P(e!==vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ul(r,e.getCompare()):a=Yr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new tn(c,u)}addToIndexes(e,n){const r=sl(this.indexes_,(i,s)=>{const o=Ni(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ul(a,o.getCompare())}else return Yr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=sl(this.indexes_,i=>{if(i===Yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&f0(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return us||(us=new L(new Ze(df),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||us}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?us:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?us:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{P(F(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+h0(this.getPriority().val())+":"),this.forEachChild(pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pe),i=n.getIterator(pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vi?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ON extends L{constructor(){super(new Ze(df),L.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Co=new ON;Object.defineProperties(j,{MIN:{value:new j(Pi,L.EMPTY_NODE)},MAX:{value:new j(Rr,Co)}});d0.__EMPTY_NODE=L.EMPTY_NODE;Te.__childrenNodeConstructor=L;kN(Co);RN(Co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=!0;function be(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,be(e))}if(!(t instanceof Array)&&bN){const n=[];let r=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=ul(n,TN,o=>o.name,df);if(r){const o=ul(n,pe.getCompare());return new L(s,be(e),new tn({".priority":o},{".priority":pe}))}else return new L(s,be(e),tn.Default)}else{let n=L.EMPTY_NODE;return ot(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}xN(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN extends Zl{constructor(e){super(),this.indexPath_=e,P(!$(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hi(e.name,n.name):s}makePost(e,n){const r=be(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Co);return new j(Rr,e)}toString(){return l0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN extends Zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=be(e);return new j(n,r)}toString(){return".value"}}const MN=new LN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){return{type:"value",snapshotNode:t}}function Ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function io(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function so(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(io(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ai(n,r)):o.trackChildChange(so(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,s)=>{n.hasChild(i)||r.trackChildChange(io(i,s))}),n.isLeafNode()||n.forEachChild(pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(so(i,s,o))}else r.trackChildChange(Ai(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.indexedFilter_=new hf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oo.getStartPost_(e),this.endPost_=oo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(pe,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new oo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(so(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(io(n,d));const w=a.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ai(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(io(u.name,u.node)),s.trackChildChange(Ai(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jN(t){return t.loadsAllData()?new hf(t.getIndex()):t.hasLimit()?new FN(t):new oo(t)}function sg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===MN?n="$value":t.index_===vi?n="$key":(P(t.index_ instanceof DN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Re(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Re(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Re(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function og(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends s0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Eo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cl.getListenId_(e,r),a={};this.listens_[o]=a;const l=sg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ni(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sg(e._queryParams),r=e._path.toString(),i=new Yl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=eo(a.responseText)}catch{it("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return{value:null,children:new Map}}function _0(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,dl());const i=t.children.get(r);e=Z(e),_0(i,e,n)}}function Od(t,e,n){t.value!==null?n(e,t.value):BN(t,(r,i)=>{const s=new X(e.toString()+"/"+r);Od(i,s,n)})}function BN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=10*1e3,WN=30*1e3,HN=5*60*1e3;class VN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zN(e);const r=ag+(WN-ag)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*HN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function v0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=v0()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new hl(V(),n,this.revert)}}else return P(F(this.path)===e,"operationForChild called for unrelated child."),new hl(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new ao(this.source,V()):new ao(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return $(this.path)?new Nr(this.source,V(),this.snap.getImmediateChild(e)):new Nr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Nr(this.source,V(),n.value):new lo(this.source,V(),n)}else return P(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(UN(o.childName,o.snapshotNode))}),cs(t,i,"child_removed",e,r,n),cs(t,i,"child_added",e,r,n),cs(t,i,"child_moved",s,r,n),cs(t,i,"child_changed",e,r,n),cs(t,i,"value",e,r,n),i}function cs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>YN(t,a,l)),o.forEach(a=>{const l=qN(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function qN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YN(t,e,n){if(e.childName==null||n.childName==null)throw zi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){return{eventCache:t,serverCache:e}}function Ns(t,e,n,r){return eu(new Pr(e,n,r),t.serverCache)}function y0(t,e,n,r){return eu(t.eventCache,new Pr(e,n,r))}function bd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;const QN=()=>(sc||(sc=new Ze(L1)),sc);class ne{constructor(e,n=QN()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return ot(e,(r,i)=>{n=n.set(new X(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if($(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:Ce(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ne(null)}}set(e,n){if($(e))return new ne(n,this.children);{const r=F(e),s=(this.children.get(r)||new ne(null)).set(Z(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if($(e))return n;{const r=F(e),s=(this.children.get(r)||new ne(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),Ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),Ce(n,i),r):new ne(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new ne(null))}}function Ps(t,e,n){if($(e))return new Dt(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Je(i,e);return s=s.updateChild(o,n),new Dt(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new Dt(s)}}}function lg(t,e,n){let r=t;return ot(n,(i,s)=>{r=Ps(r,Ce(e,i),s)}),r}function ug(t,e){if($(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Dt(n)}}function Dd(t,e){return Br(t,e)!=null}function Br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function cg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function Kn(t,e){if($(e))return t;{const n=Br(t,e);return n!=null?new Dt(new ne(n)):new Dt(t.writeTree_.subtree(e))}}function Ld(t){return t.writeTree_.isEmpty()}function Oi(t,e){return w0(V(),t.writeTree_,e)}function w0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=w0(Ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){return I0(e,t)}function XN(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ps(t.visibleWrites,e,n)),t.lastWriteId=r}function JN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eP(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return tP(t),!0;if(r.snap)t.visibleWrites=ug(t.visibleWrites,r.path);else{const a=r.children;ot(a,l=>{t.visibleWrites=ug(t.visibleWrites,Ce(r.path,l))})}return!0}else return!1}function eP(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(Ce(t.path,n),e))return!0;return!1}function tP(t){t.visibleWrites=E0(t.allWrites,nP,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nP(t){return t.visible}function E0(t,e,n){let r=Dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pt(n,o)?(a=Je(n,o),r=Ps(r,a,s.snap)):Pt(o,n)&&(a=Je(o,n),r=Ps(r,V(),s.snap.getChild(a)));else if(s.children){if(Pt(n,o))a=Je(n,o),r=lg(r,a,s.children);else if(Pt(o,n))if(a=Je(o,n),$(a))r=lg(r,V(),s.children);else{const l=Ni(s.children,F(a));if(l){const u=l.getChild(Z(a));r=Ps(r,V(),u)}}}else throw zi("WriteRecord should have .snap or .children")}}return r}function C0(t,e,n,r,i){if(!r&&!i){const s=Br(t.visibleWrites,e);if(s!=null)return s;{const o=Kn(t.visibleWrites,e);if(Ld(o))return n;if(n==null&&!Dd(o,V()))return null;{const a=n||L.EMPTY_NODE;return Oi(o,a)}}}else{const s=Kn(t.visibleWrites,e);if(!i&&Ld(s))return n;if(!i&&n==null&&!Dd(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Pt(u.path,e)||Pt(e,u.path))},a=E0(t.allWrites,o,e),l=n||L.EMPTY_NODE;return Oi(a,l)}}}function rP(t,e,n){let r=L.EMPTY_NODE;const i=Br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Kn(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=Oi(Kn(s,new X(o)),a);r=r.updateImmediateChild(o,l)}),cg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Kn(t.visibleWrites,e);return cg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iP(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ce(e,n);if(Dd(t.visibleWrites,s))return null;{const o=Kn(t.visibleWrites,s);return Ld(o)?i.getChild(n):Oi(o,i.getChild(n))}}function sP(t,e,n,r){const i=Ce(e,n),s=Br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Kn(t.visibleWrites,i);return Oi(o,r.getNode().getImmediateChild(n))}else return null}function oP(t,e){return Br(t.visibleWrites,e)}function aP(t,e,n,r,i,s,o){let a;const l=Kn(t.visibleWrites,e),u=Br(l,V());if(u!=null)a=u;else if(n!=null)a=Oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function lP(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function fl(t,e,n,r){return C0(t.writeTree,t.treePath,e,n,r)}function _f(t,e){return rP(t.writeTree,t.treePath,e)}function dg(t,e,n,r){return iP(t.writeTree,t.treePath,e,n,r)}function pl(t,e){return oP(t.writeTree,Ce(t.treePath,e))}function uP(t,e,n,r,i,s){return aP(t.writeTree,t.treePath,e,n,r,i,s)}function vf(t,e,n){return sP(t.writeTree,t.treePath,e,n)}function S0(t,e){return I0(Ce(t.treePath,e),t.writeTree)}function I0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,so(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,io(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ai(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,so(r,e.snapshotNode,i.oldSnap));else throw zi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const T0=new dP;class yf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),s=uP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return{filter:t}}function fP(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pP(t,e,n,r,i){const s=new cP;let o,a;if(n.type===At.OVERWRITE){const u=n;u.source.fromUser?o=Md(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=ml(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===At.MERGE){const u=n;u.source.fromUser?o=gP(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ud(t,e,u.path,u.children,r,i,a,s))}else if(n.type===At.ACK_USER_WRITE){const u=n;u.revert?o=yP(t,e,u.path,r,i,s):o=_P(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===At.LISTEN_COMPLETE)o=vP(t,e,n.path,r,s);else throw zi("Unknown operation type: "+n.type);const l=s.getChanges();return mP(e,o,l),{viewCache:o,changes:l}}function mP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=bd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(g0(bd(e)))}}function k0(t,e,n,r,i,s){const o=e.eventCache;if(pl(r,n)!=null)return e;{let a,l;if($(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ar(e),c=u instanceof L?u:L.EMPTY_NODE,d=_f(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=fl(r,Ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){P(Qn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=dg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Z(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=dg(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=vf(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ns(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function ml(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if($(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),_,null)}else{const _=F(n);if(!l.isCompleteForPath(n)&&Qn(n)>1)return e;const y=Z(n),C=l.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?u=c.updatePriority(l.getNode(),C):u=c.updateChild(l.getNode(),_,C,y,T0,null)}const d=y0(e,u,l.isFullyInitialized()||$(n),c.filtersNodes()),h=new yf(i,d,s);return k0(t,d,n,i,h,a)}function Md(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new yf(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ns(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ns(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=Z(n),_=a.getNode().getImmediateChild(d);let y;if($(h))y=r;else{const w=c.getCompleteChild(d);w!=null?a0(h)===".priority"&&w.getChild(u0(h)).isEmpty()?y=w:y=w.updateChild(h,r):y=L.EMPTY_NODE}if(_.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,h,c,o);l=Ns(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function hg(t,e){return t.eventCache.isCompleteForChild(e)}function gP(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ce(n,l);hg(e,F(c))&&(a=Md(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ce(n,l);hg(e,F(c))||(a=Md(t,a,c,u,i,s,o))}),a}function fg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ud(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;$(n)?u=r:u=new ne(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=fg(t,_,h);l=ml(t,l,new X(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),w=fg(t,y,h);l=ml(t,l,new X(d),w,i,s,o,a)}}),l}function _P(t,e,n,r,i,s,o){if(pl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ml(t,e,n,l.getNode().getChild(n),i,s,a,o);if($(n)){let u=new ne(null);return l.getNode().forEachChild(vi,(c,d)=>{u=u.set(new X(c),d)}),Ud(t,e,n,u,i,s,a,o)}else return e}else{let u=new ne(null);return r.foreach((c,d)=>{const h=Ce(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Ud(t,e,n,u,i,s,a,o)}}function vP(t,e,n,r,i){const s=e.serverCache,o=y0(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return k0(t,o,n,r,T0,i)}function yP(t,e,n,r,i,s){let o;if(pl(r,n)!=null)return e;{const a=new yf(r,e,i),l=e.eventCache.getNode();let u;if($(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=fl(r,Ar(e));else{const d=e.serverCache.getNode();P(d instanceof L,"serverChildren would be complete if leaf node"),c=_f(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=F(n);let d=vf(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Z(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,Z(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fl(r,Ar(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||pl(r,V())!=null,Ns(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new hf(r.getIndex()),s=jN(r);this.processor_=hP(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new Pr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Pr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=eu(d,c),this.eventGenerator_=new KN(this.query_)}get query(){return this.query_}}function EP(t){return t.viewCache_.serverCache.getNode()}function CP(t,e){const n=Ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function pg(t){return t.eventRegistrations_.length===0}function SP(t,e){t.eventRegistrations_.push(e)}function mg(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gg(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(P(Ar(t.viewCache_),"We should always have a full cache before handling merges"),P(bd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pP(t.processor_,i,e,n,r);return fP(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,x0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function IP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(s,o)=>{r.push(Ai(s,o))}),n.isFullyInitialized()&&r.push(g0(n.getNode())),x0(t,r,n.getNode(),e)}function x0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return GN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class TP{constructor(){this.views=new Map}}function kP(t){P(!gl,"__referenceConstructor has already been defined"),gl=t}function xP(){return P(gl,"Reference.ts has not been loaded"),gl}function RP(t){return t.views.size===0}function wf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),gg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gg(o,e,n,r));return s}}function NP(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=fl(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=_f(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=eu(new Pr(a,l,!1),new Pr(r,i,!1));return new wP(e,u)}return o}function PP(t,e,n,r,i,s){const o=NP(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),SP(o,n),IP(o,n)}function AP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Xn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(mg(u,n,r)),pg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(mg(l,n,r)),pg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Xn(t)&&s.push(new(xP())(e._repo,e._path)),{removed:s,events:o}}function R0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yi(t,e){let n=null;for(const r of t.views.values())n=n||CP(r,e);return n}function N0(t,e){if(e._queryParams.loadsAllData())return tu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function P0(t,e){return N0(t,e)!=null}function Xn(t){return tu(t)!=null}function tu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;function OP(t){P(!_l,"__referenceConstructor has already been defined"),_l=t}function bP(){return P(_l,"Reference.ts has not been loaded"),_l}let DP=1;class _g{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=lP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function A0(t,e,n,r,i){return XN(t.pendingWriteTree_,e,n,r,i),i?So(t,new Nr(v0(),e,n)):[]}function pr(t,e,n=!1){const r=JN(t.pendingWriteTree_,e);if(ZN(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set(V(),!0):ot(r.children,o=>{s=s.set(new X(o),!0)}),So(t,new hl(r.path,s,n))}else return[]}function nu(t,e,n){return So(t,new Nr(pf(),e,n))}function LP(t,e,n){const r=ne.fromObject(n);return So(t,new lo(pf(),e,r))}function MP(t,e){return So(t,new ao(pf(),e))}function UP(t,e,n){const r=Cf(t,n);if(r){const i=Sf(r),s=i.path,o=i.queryId,a=Je(s,e),l=new ao(mf(o),a);return If(t,s,l)}else return[]}function Fd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||P0(o,e))){const l=AP(o,e,n,r);RP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Xn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=$P(h);for(let y=0;y<_.length;++y){const w=_[y],C=w.query,g=D0(t,w);t.listenProvider_.startListening(As(C),vl(t,C),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(As(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(ru(h));t.listenProvider_.stopListening(As(h),_)}))}BP(t,u)}return a}function FP(t,e,n,r){const i=Cf(t,r);if(i!=null){const s=Sf(i),o=s.path,a=s.queryId,l=Je(o,e),u=new Nr(mf(a),l,n);return If(t,o,u)}else return[]}function jP(t,e,n,r){const i=Cf(t,r);if(i){const s=Sf(i),o=s.path,a=s.queryId,l=Je(o,e),u=ne.fromObject(n),c=new lo(mf(a),l,u);return If(t,o,c)}else return[]}function vg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const y=Je(h,i);s=s||yi(_,y),o=o||Xn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Xn(a),s=s||yi(a,V())):(a=new TP,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const w=yi(y,V());w&&(s=s.updateImmediateChild(_,w))}));const u=P0(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=ru(e);P(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=zP();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=gf(t.pendingWriteTree_,i);let d=PP(a,e,n,c,s,l);if(!u&&!o&&!r){const h=N0(a,e);d=d.concat(WP(t,e,h))}return d}function Ef(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),u=yi(a,l);if(u)return u});return C0(i,e,s,n,!0)}function So(t,e){return O0(e,t.syncPointTree_,null,gf(t.pendingWriteTree_,V()))}function O0(t,e,n,r){if($(t.path))return b0(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=yi(i,V()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=S0(r,o);s=s.concat(O0(a,l,u,c))}return i&&(s=s.concat(wf(i,t,r,n))),s}}function b0(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=yi(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=S0(r,o),c=t.operationForChild(o);c&&(s=s.concat(b0(c,a,l,u)))}),i&&(s=s.concat(wf(i,t,r,n))),s}function D0(t,e){const n=e.query,r=vl(t,n);return{hashFn:()=>(EP(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?UP(t,n._path,r):MP(t,n._path);{const s=F1(i,n);return Fd(t,n,null,s)}}}}function vl(t,e){const n=ru(e);return t.queryToTagMap.get(n)}function ru(t){return t._path.toString()+"$"+t._queryIdentifier}function Cf(t,e){return t.tagToQueryMap.get(e)}function Sf(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function If(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=gf(t.pendingWriteTree_,e);return wf(r,n,i,null)}function $P(t){return t.fold((e,n,r)=>{if(n&&Xn(n))return[tu(n)];{let i=[];return n&&(i=R0(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function As(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bP())(t._repo,t._path):t}function BP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ru(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zP(){return DP++}function WP(t,e,n){const r=e._path,i=vl(t,e),s=D0(t,n),o=t.listenProvider_.startListening(As(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Xn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!$(u)&&c&&Xn(c))return[tu(c).query];{let h=[];return c&&(h=h.concat(R0(c).map(_=>_.query))),ot(d,(_,y)=>{h=h.concat(y)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(As(c),vl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tf(n)}node(){return this.node_}}class kf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new kf(this.syncTree_,n)}node(){return Ef(this.syncTree_,this.path_)}}const HP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yg=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KP(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},KP=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},GP=function(t,e,n,r){return xf(e,new kf(n,t),r)},L0=function(t,e,n){return xf(t,new Tf(e),n)};function xf(t,e,n){const r=t.getPriority().val(),i=yg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=yg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Te(a,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Te(i))),o.forEachChild(pe,(a,l)=>{const u=xf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Nf(t,e){let n=e instanceof X?e:new X(e),r=t,i=F(n);for(;i!==null;){const s=Ni(r.node.children,i)||{children:{},childCount:0};r=new Rf(i,r,s),n=Z(n),i=F(n)}return r}function Ki(t){return t.node.value}function M0(t,e){t.node.value=e,jd(t)}function U0(t){return t.node.childCount>0}function qP(t){return Ki(t)===void 0&&!U0(t)}function iu(t,e){ot(t.node.children,(n,r)=>{e(new Rf(n,t,r))})}function F0(t,e,n,r){n&&!r&&e(t),iu(t,i=>{F0(i,e,!0,r)}),n&&r&&e(t)}function YP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Io(t){return new X(t.parent===null?t.name:Io(t.parent)+"/"+t.name)}function jd(t){t.parent!==null&&QP(t.parent,t.name,t)}function QP(t,e,n){const r=qP(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=/[\[\].#$\/\u0000-\u001F\u007F]/,JP=/[\[\].#$\u0000-\u001F\u007F]/,oc=10*1024*1024,j0=function(t){return typeof t=="string"&&t.length!==0&&!XP.test(t)},$0=function(t){return typeof t=="string"&&t.length!==0&&!JP.test(t)},ZP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$0(t)},B0=function(t,e,n,r){r&&e===void 0||Pf(nf(t,"value"),e,n)},Pf=function(t,e,n){const r=n instanceof X?new _N(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ur(r));if(typeof e=="function")throw new Error(t+"contains a function "+ur(r)+" with contents = "+e.toString());if($w(e))throw new Error(t+"contains "+e.toString()+" "+ur(r));if(typeof e=="string"&&e.length>oc/3&&Ql(e)>oc)throw new Error(t+"contains a string greater than "+oc+" utf8 bytes "+ur(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!j0(o)))throw new Error(t+" contains an invalid key ("+o+") "+ur(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vN(r,o),Pf(t,a,r),yN(r)}),i&&s)throw new Error(t+' contains ".value" child '+ur(r)+" in addition to actual children.")}},z0=function(t,e,n,r){if(!(r&&n===void 0)&&!$0(n))throw new Error(nf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),z0(t,e,n,r)},Af=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!j0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZP(n))throw new Error(nf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Of(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!uf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function W0(t,e,n){Of(t,n),H0(t,r=>uf(r,e))}function fn(t,e,n){Of(t,n),H0(t,r=>Pt(r,e)||Pt(e,r))}function H0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yr&&$e("event: "+n.toString()),Vi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="repo_interrupt",sA=25;class oA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Rf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aA(t,e,n){if(t.stats_=af(t.repoInfo_),t.forceRestClient_||z1())t.server_=new cl(t.repoInfo_,(r,i,s,o)=>{wg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new an(t.repoInfo_,e,(r,i,s,o)=>{wg(t,r,i,s,o)},r=>{Eg(t,r)},r=>{lA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=G1(t.repoInfo_,()=>new VN(t.stats_,t.server_)),t.infoData_=new $N,t.infoSyncTree_=new _g({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=nu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Df(t,"connected",!1),t.serverSyncTree_=new _g({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);fn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function V0(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bf(t){return HP({timestamp:V0(t)})}function wg(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=sl(n,u=>be(u));o=jP(t.serverSyncTree_,s,l,i)}else{const l=be(n);o=FP(t.serverSyncTree_,s,l,i)}else if(r){const l=sl(n,u=>be(u));o=LP(t.serverSyncTree_,s,l)}else{const l=be(n);o=nu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=su(t,s)),fn(t.eventQueue_,a,o)}function Eg(t,e){Df(t,"connected",e),e===!1&&cA(t)}function lA(t,e){ot(e,(n,r)=>{Df(t,n,r)})}function Df(t,e,n){const r=new X("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=nu(t.infoSyncTree_,r,i);fn(t.eventQueue_,r,s)}function K0(t){return t.nextWriteId_++}function uA(t,e,n,r,i){Lf(t,"set",{path:e.toString(),value:n,priority:r});const s=bf(t),o=be(n,r),a=Ef(t.serverSyncTree_,e),l=L0(o,a,s),u=K0(t),c=A0(t.serverSyncTree_,e,l,u,!0);Of(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const y=h==="ok";y||it("set at "+e+" failed: "+h);const w=pr(t.serverSyncTree_,u,!y);fn(t.eventQueue_,e,w),fA(t,i,h,_)});const d=X0(t,e);su(t,d),fn(t.eventQueue_,d,[])}function cA(t){Lf(t,"onDisconnectEvents");const e=bf(t),n=dl();Od(t.onDisconnect_,V(),(i,s)=>{const o=GP(i,s,t.serverSyncTree_,e);_0(n,i,o)});let r=[];Od(n,V(),(i,s)=>{r=r.concat(nu(t.serverSyncTree_,i,s));const o=X0(t,i);su(t,o)}),t.onDisconnect_=dl(),fn(t.eventQueue_,V(),r)}function dA(t,e,n){let r;F(e._path)===".info"?r=vg(t.infoSyncTree_,e,n):r=vg(t.serverSyncTree_,e,n),W0(t.eventQueue_,e._path,r)}function $d(t,e,n){let r;F(e._path)===".info"?r=Fd(t.infoSyncTree_,e,n):r=Fd(t.serverSyncTree_,e,n),W0(t.eventQueue_,e._path,r)}function hA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iA)}function Lf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function fA(t,e,n,r){e&&Vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function G0(t,e,n){return Ef(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Mf(t,e=t.transactionQueueTree_){if(e||ou(t,e),Ki(e)){const n=Y0(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pA(t,Io(e),n)}else U0(e)&&iu(e,n=>{Mf(t,n)})}function pA(t,e,n){const r=n.map(u=>u.currentWriteId),i=G0(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Je(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Lf(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(pr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ou(t,Nf(t.transactionQueueTree_,e)),Mf(t,t.transactionQueueTree_),fn(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Vi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{it("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}su(t,e)}},o)}function su(t,e){const n=q0(t,e),r=Io(n),i=Y0(t,n);return mA(t,i,r),r}function mA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Je(n,l.path);let c=!1,d;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(pr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sA)c=!0,d="maxretry",i=i.concat(pr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=G0(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){Pf("transaction failed: Data returned ",_,l.path);let y=be(_);typeof _=="object"&&_!=null&&_n(_,".priority")||(y=y.updatePriority(h.getPriority()));const C=l.currentWriteId,g=bf(t),p=L0(y,h,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=K0(t),o.splice(o.indexOf(C),1),i=i.concat(A0(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(pr(t.serverSyncTree_,C,!0))}else c=!0,d="nodata",i=i.concat(pr(t.serverSyncTree_,l.currentWriteId,!0))}fn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ou(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Vi(r[a]);Mf(t,t.transactionQueueTree_)}function q0(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Ki(r)===void 0;)r=Nf(r,n),e=Z(e),n=F(e);return r}function Y0(t,e){const n=[];return Q0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Q0(t,e,n){const r=Ki(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);iu(e,i=>{Q0(t,i,n)})}function ou(t,e){const n=Ki(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,M0(e,n.length>0?n:void 0)}iu(e,r=>{ou(t,r)})}function X0(t,e){const n=Io(q0(t,e)),r=Nf(t.transactionQueueTree_,e);return YP(r,i=>{ac(t,i)}),ac(t,r),F0(r,i=>{ac(t,i)}),n}function ac(t,e){const n=Ki(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(pr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?M0(e,void 0):n.length=s+1,fn(t.eventQueue_,Io(e),i);for(let o=0;o<r.length;o++)Vi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _A(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cg=function(t,e){const n=vA(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},vA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=gA(t.substring(c,d)));const h=_A(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Sg.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sg.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Z0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:a0(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=sf(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Uf))return!1;const n=this._repo===e._repo,r=uf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gN(this._path)}}class vn extends Uf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=u0(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class uo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=bi(this.ref,e);return new uo(this._node.getChild(n),r,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new uo(i,bi(this.ref,r),pe)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gt(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?bi(t._root,e):t._root}function bi(t,e){return t=Ie(t),F(t._path)===null?eA("child","path",e,!1):z0("child","path",e,!1),new vn(t._repo,Ce(t._path,e))}function To(t,e){t=Ie(t),Af("push",t._path),B0("push",e,t._path,!0);const n=V0(t._repo),r=yA(n),i=bi(t,r),s=bi(t,r);let o;return e!=null?o=zr(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ko(t){return Af("remove",t._path),zr(t,null)}function zr(t,e){t=Ie(t),Af("set",t._path),B0("set",e,t._path,!1);const n=new Yl;return uA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class au{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new J0("value",this,new uo(e.snapshotNode,new vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Z0(this,e,n):null}matches(e){return e instanceof au?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class lu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Z0(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=bi(new vn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new J0(e.type,this,new uo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof lu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{$d(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new eE(n,s||void 0),a=e==="value"?new au(o):new lu(e,o);return dA(t._repo,t,a),()=>$d(t._repo,t,a)}function xo(t,e,n,r){return wA(t,"value",e,n,r)}function Ro(t,e,n){let r=null;const i=n?new eE(n):null;e==="value"?r=new au(i):e&&(r=new lu(e,i)),$d(t._repo,t,r)}kP(vn);OP(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FIREBASE_DATABASE_EMULATOR_HOST",Bd={};let CA=!1;function SA(t,e,n,r){t.repoInfo_=new Jw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function IA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[EA]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Cg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new _i(_i.OWNER):new H1(t.name,t.options,e);tA("Invalid Firebase Database URL",o),$(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kA(a,t,c,new W1(t.name,n));return new xA(d,t)}function TA(t,e){const n=Bd[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hA(t),delete n[t.key]}function kA(t,e,n,r){let i=Bd[e.name];i||(i={},Bd[e.name]=i);let s=i[t.toURLString()];return s&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oA(t,CA,n,r),i[t.toURLString()]=s,s}class xA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function Gi(t=Jl(),e){const n=nr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Cw("database");r&&RA(n,...r)}return n}function RA(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new _i(_i.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Tw(r.mockUserToken,t.app.options.projectId);s=new _i(o)}SA(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){R1($r),Ut(new Ct("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return IA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rt(Wm,Hm,t),rt(Wm,Hm,"esm2017")}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NA();const PA=(t,e)=>e.some(n=>t instanceof n);let Ig,Tg;function AA(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OA(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tE=new WeakMap,zd=new WeakMap,nE=new WeakMap,lc=new WeakMap,Ff=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tE.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function DA(t){if(zd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zd.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LA(t){Wd=t(Wd)}function MA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return nE.set(r,e.sort?e.sort():[e]),Gn(r)}:OA().includes(t)?function(...e){return t.apply(uc(this),e),Gn(tE.get(this))}:function(...e){return Gn(t.apply(uc(this),e))}}function UA(t){return typeof t=="function"?MA(t):(t instanceof IDBTransaction&&DA(t),PA(t,AA())?new Proxy(t,Wd):t)}function Gn(t){if(t instanceof IDBRequest)return bA(t);if(lc.has(t))return lc.get(t);const e=UA(t);return e!==t&&(lc.set(t,e),Ff.set(e,t)),e}const uc=t=>Ff.get(t);function FA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jA=["get","getKey","getAll","getAllKeys","count"],$A=["put","add","delete","clear"],cc=new Map;function kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cc.set(e,s),s}LA(t=>({...t,get:(e,n,r)=>kg(e,n)||t.get(e,n,r),has:(e,n)=>!!kg(e,n)||t.has(e,n)}));const rE="@firebase/installations",jf="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1e4,sE=`w:${jf}`,oE="FIS_v2",BA="https://firebaseinstallations.googleapis.com/v1",zA=60*60*1e3,WA="installations",HA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Or=new jr(WA,HA,VA);function aE(t){return t instanceof Ft&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE({projectId:t}){return`${BA}/projects/${t}/installations`}function uE(t){return{token:t.token,requestStatus:2,expiresIn:GA(t.expiresIn),creationTime:Date.now()}}async function cE(t,e){const r=(await e.json()).error;return Or.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KA(t,{refreshToken:e}){const n=dE(t);return n.append("Authorization",qA(e)),n}async function hE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GA(t){return Number(t.replace("s","000"))}function qA(t){return`${oE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lE(t),i=dE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:oE,appId:t.appId,sdkVersion:sE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:uE(u.authToken)}}else throw await cE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=/^[cdef][\w-]{21}$/,Hd="";function JA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZA(t);return XA.test(n)?n:Hd}catch{return Hd}}function ZA(t){return QA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Map;function mE(t,e){const n=uu(t);gE(n,e),eO(n,e)}function gE(t,e){const n=pE.get(t);if(n)for(const r of n)r(e)}function eO(t,e){const n=tO();n&&n.postMessage({key:t,fid:e}),nO()}let mr=null;function tO(){return!mr&&"BroadcastChannel"in self&&(mr=new BroadcastChannel("[Firebase] FID Change"),mr.onmessage=t=>{gE(t.data.key,t.data.fid)}),mr}function nO(){pE.size===0&&mr&&(mr.close(),mr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="firebase-installations-database",iO=1,br="firebase-installations-store";let dc=null;function $f(){return dc||(dc=FA(rO,iO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}})),dc}async function yl(t,e){const n=uu(t),i=(await $f()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mE(t,e.fid),e}async function _E(t){const e=uu(t),r=(await $f()).transaction(br,"readwrite");await r.objectStore(br).delete(e),await r.done}async function cu(t,e){const n=uu(t),i=(await $f()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t){let e;const n=await cu(t.appConfig,r=>{const i=sO(r),s=oO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Hd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sO(t){const e=t||{fid:JA(),registrationStatus:0};return vE(e)}function oO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Or.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=aO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lO(t)}:{installationEntry:e}}async function aO(t,e){try{const n=await YA(t,e);return yl(t.appConfig,n)}catch(n){throw aE(n)&&n.customData.serverCode===409?await _E(t.appConfig):await yl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lO(t){let e=await xg(t.appConfig);for(;e.registrationStatus===1;)await fE(100),e=await xg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bf(t);return r||n}return e}function xg(t){return cu(t,e=>{if(!e)throw Or.create("installation-not-found");return vE(e)})}function vE(t){return uO(t)?{fid:t.fid,registrationStatus:0}:t}function uO(t){return t.registrationStatus===1&&t.registrationTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO({appConfig:t,heartbeatServiceProvider:e},n){const r=dO(t,n),i=KA(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:sE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hE(()=>fetch(r,a));if(l.ok){const u=await l.json();return uE(u)}else throw await cE("Generate Auth Token",l)}function dO(t,{fid:e}){return`${lE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e=!1){let n;const r=await cu(t.appConfig,s=>{if(!yE(s))throw Or.create("not-registered");const o=s.authToken;if(!e&&pO(o))return s;if(o.requestStatus===1)return n=hO(t,e),s;{if(!navigator.onLine)throw Or.create("app-offline");const a=gO(s);return n=fO(t,a),a}});return n?await n:r.authToken}async function hO(t,e){let n=await Rg(t.appConfig);for(;n.authToken.requestStatus===1;)await fE(100),n=await Rg(t.appConfig);const r=n.authToken;return r.requestStatus===0?zf(t,e):r}function Rg(t){return cu(t,e=>{if(!yE(e))throw Or.create("not-registered");const n=e.authToken;return _O(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fO(t,e){try{const n=await cO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await yl(t.appConfig,r),n}catch(n){if(aE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _E(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yl(t.appConfig,r)}throw n}}function yE(t){return t!==void 0&&t.registrationStatus===2}function pO(t){return t.requestStatus===2&&!mO(t)}function mO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zA}function gO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _O(t){return t.requestStatus===1&&t.requestTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bf(e);return r?r.catch(console.error):zf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e=!1){const n=t;return await wO(n),(await zf(n,e)).token}async function wO(t){const{registrationPromise:e}=await Bf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){if(!t||!t.options)throw hc("App Configuration");if(!t.name)throw hc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hc(t){return Or.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="installations",CO="installations-internal",SO=t=>{const e=t.getProvider("app").getImmediate(),n=EO(e),r=nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IO=t=>{const e=t.getProvider("app").getImmediate(),n=nr(e,wE).getImmediate();return{getId:()=>vO(n),getToken:i=>yO(n,i)}};function TO(){Ut(new Ct(wE,SO,"PUBLIC")),Ut(new Ct(CO,IO,"PRIVATE"))}TO();rt(rE,jf);rt(rE,jf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="analytics",kO="firebase_id",xO="origin",RO=60*1e3,NO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Xl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ht=new jr("analytics","Analytics",PO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t){if(!t.startsWith(Wf)){const e=ht.create("invalid-gtag-resource",{gtagURL:t});return st.warn(e.message),""}return t}function EE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function bO(t,e){const n=OO("firebase-js-sdk-policy",{createScriptURL:AO}),r=document.createElement("script"),i=`${Wf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await EE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){st.error(a)}t("config",i,s)}async function MO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await EE(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){st.error(s)}}function UO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await MO(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await LO(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){st.error(a)}}return i}function FO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=UO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function jO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=30,BO=1e3;class zO{constructor(e={},n=BO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const CE=new zO;function WO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:WO(r)},s=NO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function VO(t,e=CE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qO;return setTimeout(async()=>{a.abort()},n!==void 0?n:RO),SE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function SE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=CE){var s;const{appId:o,measurementId:a}=t;try{await KO(r,e)}catch(l){if(a)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await HO(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!GO(u)){if(i.deleteThrottleMetadata(o),a)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Lm(n,i.intervalMillis,$O):Lm(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),st.debug(`Calling attemptFetch again in ${c} millis`),SE(t,d,r,i)}}function KO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GO(t){if(!(t instanceof Ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(){if(Nw())try{await Pw()}catch(t){return st.warn(ht.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return st.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XO(t,e,n,r,i,s,o){var a;const l=VO(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>st.error(_)),e.push(l);const u=QO().then(_=>{if(_)return r.getId()}),[c,d]=await Promise.all([l,u]);jO(s)||bO(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[xO]="firebase",h.update=!0,d!=null&&(h[kO]=d),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},Ng=[];const Pg={};let fc="dataLayer",ZO="gtag",Ag,IE,Og=!1;function eb(){const t=[];if(kw()&&t.push("This is a browser extension environment."),oR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ht.create("invalid-analytics-context",{errorInfo:e});st.warn(n.message)}}function tb(t,e,n){eb();const r=t.options.appId;if(!r)throw ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(Os[r]!=null)throw ht.create("already-exists",{id:r});if(!Og){DO(fc);const{wrappedGtag:s,gtagCore:o}=FO(Os,Ng,Pg,fc,ZO);IE=s,Ag=o,Og=!0}return Os[r]=XO(t,Ng,Pg,e,Ag,fc,n),new JO(t)}function nb(t=Jl()){t=Ie(t);const e=nr(t,wl);return e.isInitialized()?e.getImmediate():rb(t)}function rb(t,e={}){const n=nr(t,wl);if(n.isInitialized()){const i=n.getImmediate();if(to(e,n.getOptions()))return i;throw ht.create("already-initialized")}return n.initialize({options:e})}function ib(t,e,n,r){t=Ie(t),YO(IE,Os[t.app.options.appId],e,n,r).catch(i=>st.error(i))}const bg="@firebase/analytics",Dg="0.10.0";function sb(){Ut(new Ct(wl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tb(r,i,n)},"PUBLIC")),Ut(new Ct("analytics-internal",t,"PRIVATE")),rt(bg,Dg),rt(bg,Dg,"esm2017");function t(e){try{const n=e.getProvider(wl).getImmediate();return{logEvent:(r,i,s)=>ib(n,r,i,s)}}catch(n){throw ht.create("interop-component-reg-failed",{reason:n})}}}sb();function Hf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function TE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ob=TE,kE=new jr("auth","Firebase",TE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Xl("@firebase/auth");function ab(t,...e){El.logLevel<=Q.WARN&&El.warn(`Auth (${$r}): ${t}`,...e)}function Ia(t,...e){El.logLevel<=Q.ERROR&&El.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Vf(t,...e)}function Vt(t,...e){return Vf(t,...e)}function xE(t,e,n){const r=Object.assign(Object.assign({},ob()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function lb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),xE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kE.create(t,...e)}function U(t,e,...n){if(!t)throw Vf(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function pn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ub(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||kw()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=tf()||xw()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new No(3e4,6e4);function NE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Po(t,e,n,r,i={}){return PE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),RE.fetch()(AE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function PE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hb),e);try{const i=new mb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw la(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xE(t,c,u);qt(t,c)}}catch(i){if(i instanceof Ft)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function pb(t,e,n,r,i={}){const s=await Po(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`}class mb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),fb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return Po(t,"POST","/v1/accounts:delete",e)}async function _b(t,e){return Po(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=Gf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(pc(i.auth_time)),issuedAtTime:bs(pc(i.iat)),expirationTime:bs(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yb(t){const e=Gf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,_b(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ib(s.providerUserInfo):[],a=Sb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new OE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Cb(t){const e=Ie(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ib(t){return t.map(e=>{var{providerId:n}=e,r=Hf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){const n=await PE(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Eb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new OE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vb(this,e)}reload(){return Cb(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await co(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:S,stsTokenManager:x}=n;U(v&&x,e,"internal-error");const I=ho.fromJSON(this.name,x);U(typeof v=="string",e,"internal-error"),En(d,e.name),En(h,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),En(_,e.name),En(y,e.name),En(w,e.name),En(C,e.name),En(g,e.name),En(p,e.name);const A=new wr({uid:v,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:T,photoURL:y,phoneNumber:_,tenantId:w,stsTokenManager:I,createdAt:g,lastLoginAt:p});return S&&Array.isArray(S)&&(A.providerData=S.map(O=>Object.assign({},O))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function rn(t){pn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bE.type="NONE";const Ug=bE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ta("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(rn(Ug),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(Ug);const o=Ta(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=wr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new wi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ME(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FE(e))return"Blackberry";if(jE(e))return"Webos";if(qf(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(UE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DE(t=ze()){return/firefox\//i.test(t)}function qf(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=ze()){return/crios\//i.test(t)}function ME(t=ze()){return/iemobile/i.test(t)}function UE(t=ze()){return/android/i.test(t)}function FE(t=ze()){return/blackberry/i.test(t)}function jE(t=ze()){return/webos/i.test(t)}function du(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kb(t=ze()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xb(){return sR()&&document.documentMode===10}function $E(t=ze()){return du(t)||UE(t)||jE(t)||FE(t)||/windows phone/i.test(t)||ME(t)}function Rb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e=[]){let n;switch(t){case"Browser":n=Fg(ze());break;case"Worker":n=`${Fg(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e={}){return Po(t,"GET","/v2/passwordPolicy",NE(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=6;class Ob{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ab,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new Nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pb(this),n=new Ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ab(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hu(t){return Ie(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=fR(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Lb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Db().appendChild(r)})}function Mb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){const n=nr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(to(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jb(t,e,n){const r=hu(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zE(e),{host:o,port:a}=$b(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bb()}function zE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $b(t){const e=zE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$g(o)}}}function $g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return pb(t,"POST","/v1/accounts:signInWithIdp",NE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="http://localhost";class Dr extends WE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ao{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ao{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=Bg(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bg(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Ft{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sl(e,n,r,i)}}function HE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(t,s,e,r):s})}async function Wb(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await co(t,HE(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Gf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e,n=!1){const r="signIn",i=await HE(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Kb(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function Gb(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function qb(t){return Ie(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){const t=ze();return qf(t)||du(t)}const Qb=1e3,Xb=10;class KE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yb()&&Rb(),this.fallbackToPolling=$E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const Jb=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GE.type="SESSION";const qE=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Zb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function tD(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function nD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iD(){return YE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",sD=1,Tl="firebaseLocalStorage",XE="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function oD(){const t=indexedDB.deleteDatabase(QE);return new Oo(t).toPromise()}function Kd(){const t=indexedDB.open(QE,sD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:XE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await oD(),e(await Kd()))})})}async function zg(t,e,n){const r=pu(t,!0).put({[XE]:e,value:n});return new Oo(r).toPromise()}async function aD(t,e){const n=pu(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Wg(t,e){const n=pu(t,!0).delete(e);return new Oo(n).toPromise()}const lD=800,uD=3;class JE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(iD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nD(),!this.activeServiceWorker)return;this.sender=new eD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kd();return await zg(e,Il,"1"),await Wg(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JE.type="LOCAL";const cD=JE;new No(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t,e){return e?rn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends WE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dD(t){return Vb(t.auth,new Xf(t),t.bypassAuthState)}function hD(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Hb(n,new Xf(t),t.bypassAuthState)}async function fD(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Wb(n,new Xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dD;case"linkViaPopup":case"linkViaRedirect":return fD;case"reauthViaPopup":case"reauthViaRedirect":return hD;default:qt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=new No(2e3,1e4);async function mD(t,e,n){const r=hu(t);lb(t,e,Yf);const i=ZE(r,n);return new gr(r,"signInViaPopup",e,i).executeNotNull()}class gr extends eC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pD.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="pendingRedirect",ka=new Map;class _D extends eC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await vD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vD(t,e){const n=ED(e),r=wD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yD(t,e){ka.set(t._key(),e)}function wD(t){return rn(t._redirectPersistence)}function ED(t){return Ta(gD,t.config.apiKey,t.name)}async function CD(t,e,n=!1){const r=hu(t),i=ZE(r,e),o=await new _D(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=10*60*1e3;class ID{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e={}){return Po(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RD=/^https?/;async function ND(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kD(t);for(const n of e)try{if(PD(n))return}catch{}qt(t,"unauthorized-domain")}function PD(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RD.test(n))return!1;if(xD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new No(3e4,6e4);function Vg(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OD(t){return new Promise((e,n)=>{var r,i,s;function o(){Vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vg(),n(Vt(t,"network-request-failed"))},timeout:AD.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)o();else{const a=Mb("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},Lb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xa=null,e})}let xa=null;function bD(t){return xa=xa||OD(t),xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=new No(5e3,15e3),LD="__/auth/iframe",MD="emulator/auth/iframe",UD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jD(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,MD):`https://${t.config.authDomain}/${LD}`,r={apiKey:e.apiKey,appName:t.name,v:$r},i=FD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wi(r).slice(1)}`}async function $D(t){const e=await bD(t),n=Kt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:jD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Kt().setTimeout(()=>{s(o)},DD.get());function l(){Kt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zD=500,WD=600,HD="_blank",VD="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KD(t,e,n,r=zD,i=WD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=LE(u)?HD:n),DE(u)&&(e=e||VD,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(kb(u)&&a!=="_self")return GD(e||"",a),new Kg(null);const d=window.open(e||"",a,c);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Kg(d)}function GD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="__/auth/handler",YD="emulator/auth/handler",QD=encodeURIComponent("fac");async function Gg(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(e instanceof Yf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ao){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${QD}=${encodeURIComponent(l)}`:"";return`${XD(t)}?${Wi(a).slice(1)}${u}`}function XD({config:t}){return t.emulator?Kf(t,YD):`https://${t.authDomain}/${qD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class JD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=CD,this._overrideRedirectResult=yD}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gg(e,n,r,Vd(),i);return KD(e,o,Qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gg(e,n,r,Vd(),i);return tD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $D(e),r=new ID(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ND(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $E()||qf()||du()}}const ZD=JD;var qg="@firebase/auth",Yg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nL(t){Ut(new Ct("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(t)},u=new bb(r,i,s,l);return Fb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new Ct("auth-internal",e=>{const n=hu(e.getProvider("auth").getImmediate());return(r=>new eL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(qg,Yg,tL(t)),rt(qg,Yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=5*60,iL=Iw("authIdTokenMaxAge")||rL;let Qg=null;const sL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iL)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oL(t=Jl()){const e=nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:ZD,persistence:[cD,Jb,qE]}),r=Iw("authTokenSyncURL");if(r){const s=sL(r);Gb(n,s,()=>s(n.currentUser)),Kb(n,o=>s(o))}const i=Ew("auth");return i&&jb(n,`http://${i}`),n}nL("Browser");const aL={apiKey:"AIzaSyDPPfxtywJfwNPZWpjRzwKpgsxq8zRBz_Y",authDomain:"terminal-3-9ed78.firebaseapp.com",databaseURL:"https://terminal-3-9ed78-default-rtdb.europe-west1.firebasedatabase.app",projectId:"terminal-3-9ed78",storageBucket:"terminal-3-9ed78.appspot.com",messagingSenderId:"102238779622",appId:"1:102238779622:web:7204ca1557e3945ba0a327",measurementId:"G-N2XWX1SM91"},Jf=Dw(aL);Gi(Jf);const rr=oL(Jf);nb(Jf);const lL=new Jt;function qi({title:t,links:e}){const[n,r]=m.useState(!1),i=()=>{qb(rr).then(()=>{localStorage.clear(),r(!1),window.location.pathname="/login"})};return f.jsx(sa,{bg:"dark",variant:"dark",expand:"lg",children:f.jsxs(sw,{children:[f.jsx(sa.Brand,{href:"/",children:t}),f.jsx(sa.Toggle,{"aria-controls":"basic-navbar-nav"}),f.jsxs(sa.Collapse,{id:"basic-navbar-nav",children:[f.jsx(Yu,{className:"me-auto",children:e.map(s=>f.jsx(Yu.Link,{href:s.url,children:s.text},s.id))}),f.jsxs(Yu,{className:"ml-auto",children:[" ",f.jsx(xy,{to:"/login",className:"login-button",children:f.jsx(Mt,{variant:"outline-light",style:{borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Material Symbols Outlined"},children:"👤"})}),f.jsx("button",{onClick:i,children:"log out"})]})]})]})})}const nC=m.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=Pe(t,"card-img");return f.jsx(r,{ref:s,className:oe(n?`${o}-${n}`:o,e),...i})});nC.displayName="CardImg";const uL=nC,rC=m.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Pe(t,"card-header"),o=m.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return f.jsx(fw.Provider,{value:o,children:f.jsx(n,{ref:i,...r,className:oe(e,s)})})});rC.displayName="CardHeader";const cL=rC,dL=Gl("h5"),hL=Gl("h6"),iC=at("card-body"),fL=at("card-title",{Component:dL}),pL=at("card-subtitle",{Component:hL}),mL=at("card-link",{Component:"a"}),gL=at("card-text",{Component:"p"}),_L=at("card-footer"),vL=at("card-img-overlay"),sC=m.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...l},u)=>{const c=Pe(t,"card");return f.jsx(a,{ref:u,...l,className:oe(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?f.jsx(iC,{children:o}):o})});sC.displayName="Card";const ds=Object.assign(sC,{Img:uL,Title:fL,Subtitle:pL,Body:iC,Link:mL,Text:gL,Header:cL,Footer:_L,ImgOverlay:vL}),bo=({title:t,content:e,buttonText:n,onDeleteClick:r,imageUrl:i})=>{const s=rr.currentUser;return f.jsxs(ds,{style:{width:"18rem",marginLeft:"50px"},children:[f.jsx(ds.Img,{variant:"top",src:i}),f.jsxs(ds.Body,{style:{display:"flex",flexDirection:"column"},children:[f.jsx(ds.Title,{children:t}),f.jsx(ds.Text,{children:e}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[f.jsx(xy,{to:"/order",children:f.jsx(Mt,{variant:"success",children:"Book"})}),r&&s&&f.jsx(Mt,{variant:"danger",style:{margin:"4px"},onClick:r,children:"Delete"})]})]})]})};var ua;function Xg(t){if((!ua&&ua!==0||t)&&$i){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),ua=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return ua}const yL=at("modal-body"),oC=m.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},u)=>{t=Pe(t,"modal");const c=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return f.jsx("div",{...l,ref:u,className:oe(c,e,i&&`${t}-${i}`,r&&`${c}-centered`,a&&`${c}-scrollable`,s&&d),children:f.jsx("div",{className:oe(`${t}-content`,n),children:o})})});oC.displayName="ModalDialog";const aC=oC,wL=at("modal-footer"),lC=m.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Pe(t,"modal-header"),f.jsx(Xy,{ref:s,...i,className:oe(e,t),closeLabel:n,closeButton:r})));lC.displayName="ModalHeader";const EL=lC,CL=Gl("h4"),SL=at("modal-title",{Component:CL});function IL(t){return f.jsx(Xh,{...t,timeout:null})}function TL(t){return f.jsx(Xh,{...t,timeout:null})}const uC=m.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=aC,"aria-labelledby":a,"aria-describedby":l,"aria-label":u,show:c=!1,animation:d=!0,backdrop:h=!0,keyboard:_=!0,onEscapeKeyDown:y,onShow:w,onHide:C,container:g,autoFocus:p=!0,enforceFocus:v=!0,restoreFocus:E=!0,restoreFocusOptions:T,onEntered:S,onExit:x,onExiting:I,onEnter:A,onEntering:O,onExited:W,backdropClassName:G,manager:J,...R},ie)=>{const[he,ae]=m.useState({}),[k,D]=m.useState(!1),M=m.useRef(!1),H=m.useRef(!1),q=m.useRef(null),[Ae,We]=Hx(),ve=yo(ie,We),Me=Qe(C),yn=lk();t=Pe(t,"modal");const mu=m.useMemo(()=>({onHide:Me}),[Me]);function Wr(){return J||ew({isRTL:yn})}function Hr(K){if(!$i)return;const Vr=Wr().getScrollbarWidth()>0,sp=K.scrollHeight>Vl(K).documentElement.clientHeight;ae({paddingRight:Vr&&!sp?Xg():void 0,paddingLeft:!Vr&&sp?Xg():void 0})}const Yi=Qe(()=>{Ae&&Hr(Ae.dialog)});Vy(()=>{vd(window,"resize",Yi),q.current==null||q.current()});const jo=()=>{M.current=!0},Qi=K=>{M.current&&Ae&&K.target===Ae.dialog&&(H.current=!0),M.current=!1},ir=()=>{D(!0),q.current=$y(Ae.dialog,()=>{D(!1)})},le=K=>{K.target===K.currentTarget&&ir()},$o=K=>{if(h==="static"){le(K);return}if(H.current||K.target!==K.currentTarget){H.current=!1;return}C==null||C()},Xi=K=>{_?y==null||y(K):(K.preventDefault(),h==="static"&&ir())},xC=(K,Vr)=>{K&&Hr(K),A==null||A(K,Vr)},RC=K=>{q.current==null||q.current(),x==null||x(K)},NC=(K,Vr)=>{O==null||O(K,Vr),jy(window,"resize",Yi)},PC=K=>{K&&(K.style.display=""),W==null||W(K),vd(window,"resize",Yi)},AC=m.useCallback(K=>f.jsx("div",{...K,className:oe(`${t}-backdrop`,G,!d&&"show")}),[d,G,t]),ip={...n,...he};ip.display="block";const OC=K=>f.jsx("div",{role:"dialog",...K,style:ip,className:oe(e,t,k&&`${t}-static`,!d&&"show"),onClick:h?$o:void 0,onMouseUp:Qi,"aria-label":u,"aria-labelledby":a,"aria-describedby":l,children:f.jsx(o,{...R,onMouseDown:jo,className:r,contentClassName:i,children:s})});return f.jsx(Jh.Provider,{value:mu,children:f.jsx(qy,{show:c,ref:ve,backdrop:h,container:g,keyboard:!0,autoFocus:p,enforceFocus:v,restoreFocus:E,restoreFocusOptions:T,onEscapeKeyDown:Xi,onShow:w,onHide:C,onEnter:xC,onEntering:NC,onEntered:S,onExit:RC,onExiting:I,onExited:PC,manager:Wr(),transition:d?IL:void 0,backdropTransition:d?TL:void 0,renderBackdrop:AC,renderDialog:OC})})});uC.displayName="Modal";const hs=Object.assign(uC,{Body:yL,Header:EL,Title:SL,Footer:wL,Dialog:aC,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Do=({show:t,handleClose:e,onSaveClick:n,title:r,children:i})=>f.jsxs(hs,{show:t,onHide:e,children:[f.jsx(hs.Header,{closeButton:!0,children:f.jsx(hs.Title,{children:r})}),f.jsx(hs.Body,{children:i}),f.jsxs(hs.Footer,{children:[f.jsx(Mt,{variant:"secondary",onClick:e,children:"Close"}),f.jsx(Mt,{variant:"primary",onClick:n,children:"Save"})]})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firebasestorage.googleapis.com",dC="storageBucket",kL=2*60*1e3,xL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Ft{constructor(e,n,r=0){super(gc(e),`Firebase Storage: ${n} (${gc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function gc(t){return"storage/"+t}function Zf(){const t="An unknown error occurred, please check the error payload for server response.";return new ge(me.UNKNOWN,t)}function RL(t){return new ge(me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NL(t){return new ge(me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(me.UNAUTHENTICATED,t)}function AL(){return new ge(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OL(t){return new ge(me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function bL(){return new ge(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DL(){return new ge(me.CANCELED,"User canceled the upload/download.")}function LL(t){return new ge(me.INVALID_URL,"Invalid URL '"+t+"'.")}function ML(t){return new ge(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UL(){return new ge(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dC+"' property when initializing the app?")}function FL(){return new ge(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jL(){return new ge(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $L(t){return new ge(me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gd(t){return new ge(me.INVALID_ARGUMENT,t)}function hC(){return new ge(me.APP_DELETED,"The Firebase app was deleted.")}function BL(t){return new ge(me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ds(t,e){return new ge(me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fs(t){throw new ge(me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(r.path==="")return r;throw ML(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},w=n===cC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${C}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:_,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],S=T.regex.exec(e);if(S){const x=S[T.indices.bucket];let I=S[T.indices.path];I||(I=""),r=new ct(x,I),T.postModify(r);break}}if(r==null)throw LL(e);return r}}class zL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(_,l())},C)}function h(){s&&clearTimeout(s)}function _(C,...g){if(u){h();return}if(C){h(),c.call(null,C,...g);return}if(l()||o){h(),c.call(null,C,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let y=!1;function w(C){y||(y=!0,h(),!u&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function HL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return t!==void 0}function KL(t){return typeof t=="object"&&!Array.isArray(t)}function ep(t){return typeof t=="string"||t instanceof String}function Jg(t){return tp()&&t instanceof Blob}function tp(){return typeof Blob<"u"&&!iR()}function Zg(t,e,n,r){if(r<e)throw Gd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function fC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Er||(Er={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ca(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Er.NO_ERROR,l=s.getStatus();if(!a||GL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Er.ABORT;r(!1,new ca(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ca(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());VL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Zf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?hC():DL();o(l)}else{const l=bL();o(l)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=WL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZL(t,e,n,r,i,s,o=!0){const a=fC(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return XL(u,e),YL(u,n),QL(u,s),JL(u,r),new qL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tM(...t){const e=eM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tp())return new Blob(t);throw new ge(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t){if(typeof atob>"u")throw $L("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _c{constructor(e,n){this.data=e,this.contentType=n||null}}function iM(t,e){switch(t){case zt.RAW:return new _c(pC(e));case zt.BASE64:case zt.BASE64URL:return new _c(mC(t,e));case zt.DATA_URL:return new _c(oM(e),aM(e))}throw Zf()}function pC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sM(t){let e;try{e=decodeURIComponent(t)}catch{throw Ds(zt.DATA_URL,"Malformed data URL.")}return pC(e)}function mC(t,e){switch(t){case zt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ds(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ds(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rM(e)}catch(i){throw i.message.includes("polyfill")?i:Ds(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class gC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ds(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=lM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oM(t){const e=new gC(t);return e.base64?mC(zt.BASE64,e.rest):sM(e.rest)}function aM(t){return new gC(t).contentType}function lM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){let r=0,i="";Jg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Jg(this.data_)){const r=this.data_,i=nM(r,e,n);return i===null?null:new An(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new An(r,!0)}}static getBlob(...e){if(tp()){const n=e.map(r=>r instanceof An?r.data_:r);return new An(tM.apply(null,n))}else{const n=e.map(o=>ep(o)?iM(zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new An(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){let e;try{e=JSON.parse(t)}catch{return null}return KL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function vC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t,e){return e}class He{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dM}}let da=null;function hM(t){return!ep(t)||t.length<2?t:vC(t)}function yC(){if(da)return da;const t=[];t.push(new He("bucket")),t.push(new He("generation")),t.push(new He("metageneration")),t.push(new He("name","fullPath",!0));function e(s,o){return hM(o)}const n=new He("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new He("size");return i.xform=r,t.push(i),t.push(new He("timeCreated")),t.push(new He("updated")),t.push(new He("md5Hash",null,!0)),t.push(new He("cacheControl",null,!0)),t.push(new He("contentDisposition",null,!0)),t.push(new He("contentEncoding",null,!0)),t.push(new He("contentLanguage",null,!0)),t.push(new He("contentType",null,!0)),t.push(new He("metadata","customMetadata",!0)),da=t,da}function fM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function pM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return fM(r,t),r}function wC(t,e,n){const r=_C(e);return r===null?null:pM(t,r,n)}function mM(t,e,n,r){const i=_C(e);if(i===null||!ep(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),_=np(h,n,r),y=fC({alt:"media",token:u});return _+y})[0]}function gM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class EC{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){if(!t)throw Zf()}function _M(t,e){function n(r,i){const s=wC(t,i,e);return CC(s!==null),s}return n}function vM(t,e){function n(r,i){const s=wC(t,i,e);return CC(s!==null),mM(s,i,t.host,t._protocol)}return n}function SC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=AL():i=PL():n.getStatus()===402?i=NL(t.bucket):n.getStatus()===403?i=OL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yM(t){const e=SC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=RL(t.path)),s.serverResponse=i.serverResponse,s}return n}function wM(t,e,n){const r=e.fullServerUrl(),i=np(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new EC(i,s,vM(t,n),o);return a.errorHandler=yM(e),a}function EM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EM(null,e)),r}function SM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=CM(e,r,i),c=gM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",_=An.getBlob(d,r,h);if(_===null)throw FL();const y={name:u.fullPath},w=np(s,t.host,t._protocol),C="POST",g=t.maxUploadRetryTime,p=new EC(w,C,_M(t,n),g);return p.urlParams=y,p.headers=o,p.body=_.uploadData(),p.errorHandler=SC(e),p}class IM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Er.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Er.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Er.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw fs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TM extends IM{initXhr(){this.xhr_.responseType="text"}}function IC(){return new TM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lr(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vC(this._location.path)}get storage(){return this._service}get parent(){const e=uM(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Lr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BL(e)}}function kM(t,e,n){t._throwIfRoot("uploadBytes");const r=SM(t.storage,t._location,yC(),new An(e,!0),n);return t.storage.makeRequestWithTokens(r,IC).then(i=>({metadata:i,ref:t}))}function xM(t){t._throwIfRoot("getDownloadURL");const e=wM(t.storage,t._location,yC());return t.storage.makeRequestWithTokens(e,IC).then(n=>{if(n===null)throw jL();return n})}function RM(t,e){const n=cM(t._location.path,e),r=new ct(t._location.bucket,n);return new Lr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){return/^[A-Za-z]+:\/\//.test(t)}function PM(t,e){return new Lr(t,e)}function TC(t,e){if(t instanceof rp){const n=t;if(n._bucket==null)throw UL();const r=new Lr(n,n._bucket);return e!=null?TC(r,e):r}else return e!==void 0?RM(t,e):t}function AM(t,e){if(e&&NM(e)){if(t instanceof rp)return PM(t,e);throw Gd("To use ref(service, url), the first argument must be a Storage instance.")}else return TC(t,e)}function e_(t,e){const n=e==null?void 0:e[dC];return n==null?null:ct.makeFromBucketSpec(n,t)}function OM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tw(i,t.app.options.projectId))}class rp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=cC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kL,this._maxUploadRetryTime=xL,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=e_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=e_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zL(hC());{const o=ZL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const t_="@firebase/storage",n_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="storage";function Lo(t,e,n){return t=Ie(t),kM(t,e,n)}function Mo(t){return t=Ie(t),xM(t)}function Uo(t,e){return t=Ie(t),AM(t,e)}function Fo(t=Jl(),e){t=Ie(t);const r=nr(t,kC).getImmediate({identifier:e}),i=Cw("storage");return i&&bM(r,...i),r}function bM(t,e,n,r={}){OM(t,e,n,r)}function DM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new rp(n,r,i,e,$r)}function LM(){Ut(new Ct(kC,DM,"PUBLIC").setMultipleInstances(!0)),rt(t_,n_,""),rt(t_,n_,"esm2017")}LM();const MM=()=>{const t=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}],e=rr.currentUser,[n,r]=m.useState(!1),[i,s]=m.useState(""),[o,a]=m.useState(""),[l,u]=m.useState(""),[c,d]=m.useState(""),[h,_]=m.useState(""),[y,w]=m.useState(""),[C,g]=m.useState(""),[p,v]=m.useState(""),E=Gi(),T=Gt(E,"deals");let S=tr();const x=async()=>{const R=To(T),ie={city:i,country:o,from:l,to:c,hotel:h,car:y,price:C};p&&(ie.imageUrl=p),await zr(R,ie),S("/"),s(""),a(""),u(""),d(""),_(""),w(""),g(""),v(""),r(!1)},I=()=>{x()},A=()=>r(!0),[O,W]=m.useState([]);m.useEffect(()=>{const R=ie=>{if(ie.exists()){const he=ie.val(),ae=Object.keys(he).map(k=>({...he[k],id:k}));W(ae)}else console.log("No data available")};return xo(T,R),()=>{Ro(T,R)}},[]);const G=async R=>{await ko(Gt(E,"deals/"+R)),S("/")},J=async R=>{if(R){const ie=Fo(),ae=Uo(ie,`deals/${R.name}`);try{await Lo(ae,R);const k=await Mo(ae);v(k),console.log("Image uploaded:",k)}catch(k){console.error("Error uploading image:",k),v("")}}};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{className:"navbar",title:"TERMINAL 3",links:t}),f.jsx("h2",{children:"Deals"}),e&&(e.email==="dib552884@gmail.com"||e.email==="david552884@gmail.com"||e.email==="sagiv.ort@gmail.com")&&f.jsx("div",{className:"button-container",children:f.jsx(Mt,{variant:"primary",onClick:A,children:"Add a new Attraction"})}),f.jsxs(Do,{show:n,handleClose:()=>r(!1),onSaveClick:I,title:"Add a new deal",children:[f.jsx("label",{children:"City:"}),f.jsx("input",{type:"text",id:"city",onChange:R=>s(R.target.value),value:i}),f.jsx("br",{}),f.jsx("label",{children:"Country:"}),f.jsx("input",{type:"text",id:"country",onChange:R=>a(R.target.value),value:o}),f.jsx("br",{}),f.jsx("label",{children:"From:"}),f.jsx("input",{type:"date",id:"from",onChange:R=>u(R.target.value),value:l}),f.jsx("br",{}),f.jsx("label",{children:"To:"}),f.jsx("input",{type:"date",id:"to",onChange:R=>d(R.target.value),value:c}),f.jsx("br",{}),f.jsx("label",{children:"Hotel:"}),f.jsxs("select",{id:"hotel",name:"hotel",onChange:R=>_(R.target.value),value:h,children:[f.jsx("option",{value:"",children:"Select a hotel rating"}),f.jsx("option",{value:"1 Star",children:"1 Star"}),f.jsx("option",{value:"2 Stars",children:"2 Stars"}),f.jsx("option",{value:"3 Stars",children:"3 Stars"}),f.jsx("option",{value:"4 Stars",children:"4 Stars"}),f.jsx("option",{value:"5 Stars",children:"5 Stars"})]}),f.jsx("br",{}),f.jsx("label",{children:"Car:"}),f.jsxs("select",{id:"car",name:"car",onChange:R=>w(R.target.value),value:y,children:[f.jsx("option",{value:"",children:"Select a car type"}),f.jsx("option",{value:"Economy",children:"Economy"}),f.jsx("option",{value:"Midsize",children:"Midsize"}),f.jsx("option",{value:"Luxury",children:"Luxury"}),f.jsx("option",{value:"SUV",children:"SUV"})]}),f.jsx("br",{}),f.jsx("label",{children:"Price:"}),f.jsx("input",{type:"number",id:"price",onChange:R=>g(R.target.value),value:C}),f.jsx("br",{}),f.jsx("label",{children:"Upload Image:"}),f.jsx("input",{type:"file",accept:"image/*",onChange:R=>J(R.target.files[0])})]}),f.jsx("div",{className:"App",children:O.map(R=>f.jsx(bo,{title:`City: ${R.city}, Country: ${R.country}`,content:`From: ${R.from}, To: ${R.to}, Hotel: ${R.hotel}, Car: ${R.car}, Price: ${R.price}`,onDeleteClick:()=>G(R.id),imageUrl:R.imageUrl,children:R.imageUrl&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:R.imageUrl,alt:`Deal in ${R.city}`}),f.jsxs("p",{children:["Image URL: ",R.imageUrl]})]})},R.id))})]})};function UM(){const t=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}],e=rr.currentUser,[n,r]=m.useState(!1),[i,s]=m.useState(""),[o,a]=m.useState(""),[l,u]=m.useState(""),[c,d]=m.useState(""),[h,_]=m.useState(""),y=Gi(),w=Gt(y,"flights");let C=tr();const g=async()=>{const I=To(w),A={city:i,country:o,from:l,to:c};h&&(A.imageUrl=h),await zr(I,A),C("/flights"),s(""),a(""),u(""),d(""),_(""),r(!1)},p=()=>{g()},v=()=>r(!0),[E,T]=m.useState([]);m.useEffect(()=>{const I=A=>{if(A.exists()){const O=A.val(),W=Object.keys(O).map(G=>({...O[G],id:G}));T(W)}else console.log("No data available")};return xo(w,I),()=>{Ro(w,I)}},[]);const S=async I=>{await ko(Gt(y,"flights/"+I)),C("/flights")},x=async I=>{if(I){const A=Fo(),W=Uo(A,`flights/${I.name}`);try{await Lo(W,I);const G=await Mo(W);_(G),console.log("Image uploaded:",G)}catch(G){console.error("Error uploading image:",G),_("")}}};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{title:"TERMINAL 3",links:t}),f.jsx("h2",{children:"Flights"}),e&&(e.email==="dib552884@gmail.com"||e.email==="david552884@gmail.com"||e.email==="sagiv.ort@gmail.com")&&f.jsx("div",{className:"button-container",children:f.jsx(Mt,{variant:"primary",onClick:v,children:"Add a new Attraction"})}),f.jsxs(Do,{show:n,handleClose:()=>r(!1),onSaveClick:p,title:"Add a new Flight",children:[f.jsx("label",{children:"City:"}),f.jsx("input",{type:"text",id:"city",onChange:I=>s(I.target.value),value:i}),f.jsx("br",{}),f.jsx("label",{children:"Country:"}),f.jsx("input",{type:"text",id:"country",onChange:I=>a(I.target.value),value:o}),f.jsx("br",{}),f.jsx("label",{children:"from:"}),f.jsx("input",{type:"date",onChange:I=>u(I.target.value),value:l}),f.jsx("br",{}),f.jsx("label",{children:"To:"}),f.jsx("input",{type:"date",onChange:I=>d(I.target.value),value:c}),f.jsx("br",{}),f.jsx("label",{children:"Upload Image:"}),f.jsx("input",{type:"file",accept:"image/*",onChange:I=>x(I.target.files[0])})]}),f.jsx("div",{className:"App",children:E.map(I=>f.jsx(bo,{title:`Country: ${I.country}`,content:`City: ${I.city}, From: ${I.from}, to: ${I.to} `,onDeleteClick:()=>S(I.id),imageUrl:I.imageUrl,children:I.imageUrl&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:I.imageUrl,alt:`Flight to ${I.to}`}),f.jsxs("p",{children:["Image URL: ",I.imageUrl]})]})},I.id))})]})}function FM(){const t=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}],e=rr.currentUser,[n,r]=m.useState(!1),[i,s]=m.useState(""),[o,a]=m.useState(""),[l,u]=m.useState(""),[c,d]=m.useState(""),h=Gi(),_=Gt(h,"cars"),y=tr(),[w,C]=m.useState([]);m.useEffect(()=>{const S=x=>{if(x.exists()){const I=x.val(),A=Object.keys(I).map(O=>({...I[O],id:O}));C(A)}else console.log("No data available")};return xo(_,S),()=>{Ro(_,S)}},[]);const g=()=>{r(!1);const S=To(_),x={type:i,price:o,insurance:l};c&&(x.imageUrl=c),zr(S,x),y("/car-rental")},p=async S=>{await ko(Gt(h,"cars/"+S)),y("/car-rental")},v=()=>{r(!1)},E=()=>r(!0),T=async S=>{if(S){const x=Fo(),A=Uo(x,`cars/${S.name}`);try{await Lo(A,S);const O=await Mo(A);d(O),console.log("Image uploaded:",O)}catch(O){console.error("Error uploading image:",O),d("")}}};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{title:"TERMINAL 3",links:t}),f.jsx("h2",{children:"Cars"}),e&&f.jsx("div",{className:"button-container",children:f.jsx(Mt,{variant:"primary",onClick:E,children:"Add a new Car"})}),f.jsxs(Do,{show:n,handleClose:v,onSaveClick:g,title:"Add a new Car",children:[f.jsx("label",{children:"Type:"}),f.jsxs("select",{id:"type",name:"type",onChange:S=>s(S.target.value),value:i,children:[f.jsx("option",{value:"",children:"Select a car type"}),f.jsx("option",{value:"Economy",children:"Economy"}),f.jsx("option",{value:"Midsize",children:"Midsize"}),f.jsx("option",{value:"Luxury",children:"Luxury"}),f.jsx("option",{value:"SUV",children:"SUV"})]}),f.jsx("br",{}),f.jsx("label",{children:"Price:"}),f.jsx("input",{type:"number",id:"price",name:"price",onChange:S=>a(S.target.value),value:o}),f.jsx("br",{}),f.jsx("label",{children:"Insurance:"}),f.jsxs("select",{id:"insurance",name:"insurance",onChange:S=>u(S.target.value),value:l,children:[f.jsx("option",{value:"including",children:"Including"}),f.jsx("option",{value:"not including",children:"Not Including"})]}),f.jsx("br",{}),f.jsx("label",{children:"Upload Image:"}),f.jsx("input",{type:"file",accept:"image/*",onChange:S=>T(S.target.files[0])})]}),f.jsx("div",{className:"App",children:w.map(S=>f.jsx(bo,{title:`Type: ${S.type}`,content:`Price: ${S.price}, Insurance: ${S.insurance}`,onDeleteClick:()=>p(S.id),imageUrl:S.imageUrl,children:S.imageUrl&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:S.imageUrl,alt:`Car Type: ${S.type}`}),f.jsxs("p",{children:["Image URL: ",S.imageUrl]})]})},S.id))})]})}function jM(){const t=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}],e=rr.currentUser,[n,r]=m.useState(!1),[i,s]=m.useState(""),[o,a]=m.useState(""),[l,u]=m.useState(""),[c,d]=m.useState(""),[h,_]=m.useState(""),y=Gi(),w=Gt(y,"attractions");let C=tr();const g=()=>{p(),r(!1)},p=async()=>{const A=To(w),O={city:i,country:o,name:l,description:c};h&&(O.imageUrl=h),await zr(A,O),C("/attractions"),s(""),a(""),u(""),d(""),_("")},v=()=>r(!1),E=()=>r(!0),[T,S]=m.useState([]);m.useEffect(()=>{const A=O=>{if(O.exists()){const W=O.val(),G=Object.keys(W).map(J=>({...W[J],id:J}));S(G)}else console.log("No data available")};return xo(w,A),()=>{Ro(w,A)}},[]);const x=async A=>{await ko(Gt(y,"attractions/"+A)),C("/attractions")},I=async A=>{if(A){const O=Fo(),G=Uo(O,`attractions/${A.name}`);try{await Lo(G,A);const J=await Mo(G);_(J),console.log("Image uploaded:",J)}catch(J){console.error("Error uploading image:",J),_("")}}};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{title:"TERMINAL 3",links:t}),f.jsx("h2",{children:"Attractions"}),e&&(e.email==="dib552884@gmail.com"||e.email==="david552884@gmail.com"||e.email==="sagiv.ort@gmail.com")&&f.jsx("div",{className:"button-container",children:f.jsx(Mt,{variant:"primary",onClick:E,children:"Add a new Attraction"})}),f.jsxs(Do,{show:n,handleClose:v,onSaveClick:g,title:"Add a new Attraction",children:[f.jsx("label",{children:"City:"}),f.jsx("input",{type:"text",id:"city",name:"city",onChange:A=>s(A.target.value),value:i}),f.jsx("br",{}),f.jsx("label",{children:"Country:"}),f.jsx("input",{type:"text",id:"country",name:"country",onChange:A=>a(A.target.value),value:o}),f.jsx("br",{}),f.jsx("label",{children:"Name:"}),f.jsx("input",{type:"text",id:"name",name:"name",onChange:A=>u(A.target.value),value:l}),f.jsx("br",{}),f.jsx("label",{children:"Description:"}),f.jsx("input",{type:"text",id:"description",name:"description",onChange:A=>d(A.target.value),value:c}),f.jsx("br",{}),f.jsx("label",{children:"Upload Image:"}),f.jsx("input",{type:"file",accept:"image/*",onChange:A=>I(A.target.files[0])})]}),f.jsx("div",{className:"App",children:T.map(A=>f.jsx(bo,{title:`Name: ${A.name}`,content:`City: ${A.city},  Country: ${A.country}, Description: ${A.description}`,onDeleteClick:()=>x(A.id),imageUrl:A.imageUrl,children:A.imageUrl&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:A.imageUrl,alt:`Attraction: ${A.name}`}),f.jsxs("p",{children:["Image URL: ",A.imageUrl]})]})},A.id))})]})}function $M(){const t=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}],e=rr.currentUser,[n,r]=m.useState(!1),[i,s]=m.useState(""),[o,a]=m.useState(""),[l,u]=m.useState(""),[c,d]=m.useState(""),[h,_]=m.useState(""),[y,w]=m.useState(""),[C,g]=m.useState(""),[p,v]=m.useState(""),E=Gi(),T=Gt(E,"hotels");let S=tr();const x=async()=>{const R=To(T),ie={city:i,country:o,name:l,pool:c,wifi:h,breakfast:y,price:C};p&&(ie.imageUrl=p),await zr(R,ie),S("/hotels"),s(""),a(""),u(""),d(""),_(""),w(""),g(""),v(""),r(!1)},I=()=>{x()},A=()=>r(!0),[O,W]=m.useState([]);m.useEffect(()=>{const R=ie=>{if(ie.exists()){const he=ie.val(),ae=Object.keys(he).map(k=>({...he[k],id:k}));W(ae)}else console.log("No data available")};return xo(T,R),()=>{Ro(T,R)}},[]);const G=async R=>{await ko(Gt(E,"hotels/"+R)),S("/hotels")},J=async R=>{if(R){const ie=Fo(),ae=Uo(ie,`hotels/${R.name}`);try{await Lo(ae,R);const k=await Mo(ae);v(k),console.log("Image uploaded:",k)}catch(k){console.error("Error uploading image:",k),v("")}}};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{title:"TERMINAL 3",links:t}),f.jsx("h2",{children:"Hotels"}),e&&(e.email==="dib552884@gmail.com"||e.email==="david552884@gmail.com"||e.email==="sagiv.ort@gmail.com")&&f.jsx("div",{className:"button-container",children:f.jsx(Mt,{variant:"primary",onClick:A,children:"Add a new Attraction"})}),f.jsxs(Do,{show:n,handleClose:()=>r(!1),onSaveClick:I,title:"Add a new Hotel",children:[f.jsx("label",{children:"City:"}),f.jsx("input",{type:"text",id:"city",onChange:R=>s(R.target.value),value:i}),f.jsx("br",{}),f.jsx("label",{children:"Country:"}),f.jsx("input",{type:"text",id:"country",onChange:R=>a(R.target.value),value:o}),f.jsx("br",{}),f.jsx("label",{children:"Name:"}),f.jsx("input",{type:"text",onChange:R=>u(R.target.value),value:l}),f.jsx("br",{}),f.jsx("label",{children:"Pool:"}),f.jsxs("select",{id:"pool",name:"pool",onChange:R=>d(R.target.value),value:c,children:[f.jsx("option",{value:"",children:"Select an option"}),f.jsx("option",{value:"Including",children:"Including"}),f.jsx("option",{value:"Not Including",children:"Not Including"})]}),f.jsx("br",{}),f.jsx("label",{children:"Free Wifi:"}),f.jsxs("select",{id:"wifi",name:"wifi",onChange:R=>_(R.target.value),value:h,children:[f.jsx("option",{value:"",children:"Select an option"}),f.jsx("option",{value:"Including",children:"Including"}),f.jsx("option",{value:"Not Including",children:"Not Including"})]}),f.jsx("br",{}),f.jsx("label",{children:"Breakfast:"}),f.jsxs("select",{id:"breakfast",name:"breakfast",onChange:R=>w(R.target.value),value:y,children:[f.jsx("option",{value:"",children:"Select an option"}),f.jsx("option",{value:"Including",children:"Including"}),f.jsx("option",{value:"Not Including",children:"Not Including"})]}),f.jsx("br",{}),f.jsx("label",{children:"Price:"}),f.jsx("input",{type:"number",id:"price",onChange:R=>g(R.target.value),value:C}),f.jsx("br",{}),f.jsx("label",{children:"Upload Image:"}),f.jsx("input",{type:"file",accept:"image/*",onChange:R=>J(R.target.files[0])})]}),f.jsx("div",{className:"App",children:O.map(R=>f.jsx(bo,{title:`Name: ${R.name}`,content:`City: ${R.city}, Country: ${R.country}, Pool: ${R.pool}, Wifi: ${R.wifi}, Breakfast: ${R.breakfast}, Price: ${R.price}`,onDeleteClick:()=>G(R.id),imageUrl:R.imageUrl,children:R.imageUrl&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:R.imageUrl,alt:`Hotel in ${R.city}`}),f.jsxs("p",{children:["Image URL: ",R.imageUrl]})]})},R.id))})]})}function BM({setIsAuth:t}){const e=[{id:1,url:"/Flights",text:"Flights"},{id:2,url:"/car-rental",text:"Car Rental"},{id:3,url:"/hotels",text:"Hotels"},{id:4,url:"/attractions",text:"Attractions"}];let n=tr();const r=()=>{mD(rr,lL).then(i=>{localStorage.setItem("isAuth",!0),t(!0),n("/")})};return f.jsxs(f.Fragment,{children:[f.jsx(qi,{title:"TERMINAL 3",links:e}),f.jsxs("div",{className:"login-container",children:[" ",f.jsxs("div",{className:"login-content",children:[f.jsx("h1",{children:"Welcome to Terminal 3"}),f.jsxs("button",{className:"google-login-button",onClick:r,children:[f.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google logo",width:"20",height:"20"}),"Login with Google"]})]})]})]})}function zM(){const t=tr();return f.jsx("div",{style:WM,children:f.jsxs(sw,{style:HM,children:[f.jsx("h2",{style:VM,children:"Order Successful!"}),f.jsx("p",{style:KM,children:"Your order has been placed successfully. Thank you for choosing us!"}),f.jsx(Mt,{style:GM,onClick:()=>t("/"),children:"Back to Home"})]})})}const WM={backgroundColor:"#007bff",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},HM={background:"rgba(255, 255, 255, 0.8)",padding:"30px",borderRadius:"10px",textAlign:"center"},VM={fontSize:"36px",margin:"20px"},KM={fontSize:"24px",margin:"20px"},GM={backgroundColor:"#28a745",color:"white",border:"none",padding:"15px 30px",borderRadius:"5px",fontSize:"20px",cursor:"pointer"};function qM(){const[t,e]=m.useState(!1);return f.jsx(f.Fragment,{children:f.jsx(JT,{children:f.jsxs(KT,{children:[f.jsx(Cn,{path:"/",element:f.jsx(MM,{})}),f.jsx(Cn,{path:"/flights",element:f.jsx(UM,{})}),f.jsx(Cn,{path:"/car-rental",element:f.jsx(FM,{})}),f.jsx(Cn,{path:"/attractions",element:f.jsx(jM,{})}),f.jsx(Cn,{path:"/order",element:f.jsx(zM,{})}),f.jsx(Cn,{path:"/hotels",element:f.jsx($M,{})}),f.jsx(Cn,{path:"/login",element:f.jsx(BM,{setIsAuth:e})})]})})})}vc.createRoot(document.getElementById("root")).render(f.jsx(Nt.StrictMode,{children:f.jsx(qM,{})}));
