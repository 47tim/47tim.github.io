/*! For license information please see 272.7a159e5c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproject_condor_landing=self.webpackChunkproject_condor_landing||[]).push([[272],{5272:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,l=10*-f,v=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){l=(0,o.u)(t),E(t)},L=function(){clearTimeout(i),i=void 0,e&&(T(!1),e=void 0)},w=function(t){e||g(a(t),t)},E=function(t){g(void 0,t)},g=function(t,n){if(!t||t!==e){clearTimeout(i),i=void 0;var a=(0,o.p)(n),c=a.x,d=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||b(e,c,d),T(!0)}if(t){var f=h.get(t);f&&(clearTimeout(f),h.delete(t));var l=r(t)?0:u;t.classList.remove(s),i=setTimeout((function(){b(t,c,d),i=void 0}),l)}e=t}},b=function(t,e,o){v=Date.now(),t.classList.add(s);var i=p&&c(t);i&&i.addRipple&&(k(),n=i.addRipple(e,o))},k=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},T=function(t){k();var n=e;if(n){var o=d-Date.now()+v;if(t&&o>0&&!r(n)){var i=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,i)}else n.classList.remove(s)}},R=document;R.addEventListener("ionGestureCaptured",L),R.addEventListener("touchstart",(function(t){l=(0,o.u)(t),w(t)}),!0),R.addEventListener("touchcancel",m,!0),R.addEventListener("touchend",m,!0),R.addEventListener("pointercancel",L,!0),R.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,o.u)(t)-f;l<e&&w(t)}}),!0),R.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-f;l<e&&E(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=272.7a159e5c.chunk.js.map