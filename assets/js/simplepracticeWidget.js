"true"==='false'&&window.SPWidgetBase||(window.SPWidgetBase="https://clientsecure.me"),window.originalDefine=window.define,window.define=function(e,t,i){var n={};(i(n),window.SPWidget=n.default,window.SPWidgetInstances={},-1===navigator.userAgent.indexOf("MSIE"))&&document.querySelectorAll("[data-spwidget-autobind]").forEach((function(e){var t=e.getAttribute("data-spwidget-scope-id"),i=e.getAttribute("data-spwidget-scope-uri"),n=e.hasAttribute("data-spwidget-scope-global"),a=e.getAttribute("data-spwidget-application-id"),o=e.getAttribute("data-spwidget-channel"),r=e.getAttribute("data-spwidget-search-by-office"),s=e.getAttribute("data-spwidget-office-id"),c=e.getAttribute("data-spwidget-reference-id"),d=e.getAttribute("data-spwidget-covered-sessions"),l=e.getAttribute("data-spwidget-mld"),p=e.getAttribute("data-spwidget-clinician-id"),h=e.getAttribute("data-spwidget-cpt-code-id"),u=e.getAttribute("data-spwidget-selected-slot"),f=e.getAttribute("data-spwidget-client-type"),g=e.getAttribute("data-spwidget-first-name"),m=e.getAttribute("data-spwidget-last-name"),w=e.getAttribute("data-spwidget-email"),b=e.getAttribute("data-spwidget-phone-number"),y=e.getAttribute("data-spwidget-birth-date"),v=e.getAttribute("data-spwidget-other-first-name"),_=e.getAttribute("data-spwidget-other-last-name"),S=e.getAttribute("data-spwidget-other-email"),A=e.getAttribute("data-spwidget-other-phone-number"),P=e.getAttribute("data-spwidget-other-birth-date")
if(t&&a){if(!window.SPWidgetInstances[t]){var k=document.body.appendChild(document.createElement("div"))
window.SPWidgetInstances[t]=new window.SPWidget(k),window.SPWidgetInstances[t].init({scopeId:t,scopeUri:i,scopeGlobal:n,applicationId:a,channel:o,searchByOffice:r,officeId:s,referenceId:c,coveredSessions:d,mld:l,appearance:{fullScreen:!0},clinicianId:p,cptCodeId:h,selectedSlot:u,clientType:f,firstName:g,lastName:m,email:w,birthDate:y,phoneNumber:b,otherFirstName:v,otherLastName:_,otherEmail:S,otherBirthDate:P,otherPhoneNumber:A})}e.onclick=function(e){e.preventDefault(),window.SPWidgetInstances[t].reveal()}}}))},define("client-portal/integration",["exports"],(function(e){"use strict"
function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function i(e,i){for(var n=0;n<i.length;n++){var a=i[n]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,r=void 0,r=function(e,i){if("object"!==t(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var a=n.call(e,i||"default")
if("object"!==t(a))return a
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(o,"string"),"symbol"===t(r)?r:String(r)),a)}var o,r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n="\n  .spwidget--no-scroll {\n    overflow: hidden !important;\n    ".concat("undefined"!=typeof navigator&&navigator.userAgent.match(/(iPod|iPhone|iPad)/)?"\n      position: fixed;\n      width: 100%;\n      height: 100%;\n    ":"","\n  }\n\n  .spwidget--overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 999999998;\n    background: rgba(19, 25, 28, .5);\n    animation: fadeIn .3s ease-in-out;\n  }\n\n  .spwidget--preload {\n    display: none;\n  }\n\n  .spwidget--scroller {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 999999999;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .spwidget--scroller iframe {\n    transform: scale(1) translate3d(0, 0, 0);\n    animation: fadeInWidget .45s ease-in-out;\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes fadeInWidget {\n    0% {\n      opacity: 0;\n      transform: scale(.75) translate3d(0, 100%, 0);\n    }\n\n    100% {\n      opacity: 1;\n      transform: scale(1) translate3d(0, 0, 0);\n    }\n  }\n"),a=new RegExp(/^https?:\/\/(\S*\.)?(\S*\-)?(localhost|simplepractice\.test|clientsecure\.me|clientsite\.me)(:[0-9]{2,4})?$/i),o=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.node=t,this._onMessage=this._onMessage.bind(this),this._close=this._close.bind(this),this._insertCss(n),this._listen(),this._callbacks={}}var o,r,s
return o=e,r=[{key:"init",value:function(e){this._scopeUri=e.scopeUri,delete e.scopeUri,this._fullScreen=e.appearance&&e.appearance.fullScreen,this._callbacks.onOpen=e.onOpen,this._callbacks.onAppointmentRequest=e.onAppointmentRequest,this._fullScreen&&this.node.classList.add("spwidget--preload"),this.iframe?this.iframe.setAttribute("src",this._iframeURL(e)):this._insertIframe(this._iframeURL(e))}},{key:"reveal",value:function(){this.iframe.contentWindow.postMessage({scope:"client-portal-origin-to-iframe",action:"reveal"},"*"),this._fullScreen&&(this._initOverlay(),this.node.classList.remove("spwidget--preload")),this._performCallback("onOpen")}},{key:"_listen",value:function(){window.addEventListener("message",this._onMessage,!1)}},{key:"_onMessage",value:function(e){if(a.test(e.origin)){var t=e.data,i=t.action,n=t.params
if("client-portal-iframe-to-origin"===t.scope)switch(console&&console.log("SPWidget: outgoing message ".concat(JSON.stringify(t))),i){case"height":if(0===t.height)return
var o=this._positionAttributes(t.height),r=o.top,s=o.height,c=o.marginTop
this.iframe.style.top="".concat(r,"%"),this.iframe.style.height="".concat(s,"px"),this.iframe.style.marginTop="".concat(c,"px"),console&&console.log("SPWidget: setting height to ".concat(s))
break
case"scrollTop":this.node.scrollTop=e.data.top
break
case"close":this._close()
break
case"appointmentRequested":this._performCallback("onAppointmentRequest",n)}}}},{key:"_initOverlay",value:function(){document.querySelector("html").classList.add("spwidget--no-scroll"),document.querySelector("body").classList.add("spwidget--no-scroll"),this.overlay=this.node.parentNode.insertBefore(document.createElement("div"),this.node),this.overlay.classList.add("spwidget--overlay"),this.overlay.addEventListener("click",this._close),this.node.classList.add("spwidget--scroller"),this.node.addEventListener("click",this._close)}},{key:"_close",value:function(){var e,t
this.node.classList.remove("spwidget--scroller"),this.node.classList.add("spwidget--preload"),null===(e=this.overlay)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(this.overlay),document.querySelector("html").classList.remove("spwidget--no-scroll"),document.querySelector("body").classList.remove("spwidget--no-scroll")}},{key:"_serializeParams",value:function(e){return Object.keys(e).map((function(i){var n=encodeURIComponent(i),a=e[i]
if(a)return"object"===t(e[i])&&(a=JSON.stringify(e[i])),"".concat(n,"=").concat(encodeURIComponent(a))})).filter(Boolean).join("&")}},{key:"_iframeURL",value:function(e){if(window.SPWidgetRedirect){var t=this._serializeParams(this._sliceParams(e))
return t=t?"&".concat(t):"","".concat(window.SPWidgetRedirect).concat(t)}var i=window.SPWidgetBase
if(this._scopeUri&&this._scopeUri.length>0){var n=window.SPWidgetBase.split("://")
n.splice(1,0,"".concat(this._scopeUri,".")),n.splice(1,0,"://"),i=n.join("")}return"".concat(i,"/widget-redirect?").concat(this._serializeParams(e))}},{key:"_sliceParams",value:function(e){return{channel:e.channel,mld:e.mld,officeId:e.officeId,searchByOffice:e.searchByOffice,referenceId:e.referenceId,coveredSessions:e.coveredSessions,clinicianId:e.clinicianId,selectedSlot:e.selectedSlot,clientType:e.clientType,firstName:e.firstName,lastName:e.lastName,email:e.email,birthDate:e.birthDate,phoneNumber:e.phoneNumber,otherFirstName:e.otherFirstName,otherLastName:e.otherLastName,otherEmail:e.otherEmail,otherBirthDate:e.otherBirthDate,otherPhoneNumber:e.otherPhoneNumber,trackingSource:e.trackingSource,addMessage:e.addMessage}}},{key:"_isFullHeight",value:function(){return window.innerWidth<1001&&this._fullScreen}},{key:"_positionAttributes",value:function(e){if(this._isFullHeight())if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){var t=document.documentElement.clientWidth/window.innerWidth
e=window.innerHeight*t}else e=window.innerHeight
else e=Math.min(e,640)
var i=50,n=-e/2
return this._fullScreen&&!this._isFullHeight()||(i=0,n=0),{top:i,height:e,marginTop:n}}},{key:"_insertIframe",value:function(e){var t=this._positionAttributes(640),i=t.top,n=t.height,a=t.marginTop
this.iframe=document.createElement("iframe"),this.iframe.setAttribute("src",e),this.iframe.setAttribute("frameBorder","0"),this.iframe.setAttribute("allowtransparency","true"),this.iframe.setAttribute("allow","geolocation"),this.iframe.setAttribute("style",["display: block","position: relative","top: ".concat(i,"%"),"width: 100%","max-width: ".concat(1001,"px"),"height: ".concat(n,"px"),"margin: 0 auto","margin-top: ".concat(a,"px")].join("; ")),this.iframe.setAttribute("title","Request an Appointment"),this.node.appendChild(this.iframe)}},{key:"_insertCss",value:function(e){if(!document.querySelector("#spwidget-css")){var t=document.createElement("style")
t.id="spwidget-css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}}},{key:"_performCallback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this._callbacks[e]
"function"==typeof i&&i(t)}}],r&&i(o.prototype,r),s&&i(o,s),Object.defineProperty(o,"prototype",{writable:!1}),e}(),r=o
e.default=r})),window.define=window.originalDefine