(function e(i,t){if(typeof exports==="object"&&typeof module==="object")module.exports=t();else if(typeof define==="function"&&define.amd)define([],t);else if(typeof exports==="object")exports["H5video"]=t();else i["H5video"]=t()})(window,function(){return function(t){var n={};function r(e){if(n[e]){return n[e].exports}var i=n[e]={i:e,l:false,exports:{}};t[e].call(i.exports,i,i.exports,r);i.l=true;return i.exports}r.m=t;r.c=n;r.d=function(e,i,t){if(!r.o(e,i)){Object.defineProperty(e,i,{enumerable:true,get:t})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(i,e){if(e&1)i=r(i);if(e&8)return i;if(e&4&&typeof i==="object"&&i&&i.__esModule)return i;var t=Object.create(null);r.r(t);Object.defineProperty(t,"default",{enumerable:true,value:i});if(e&2&&typeof i!="string")for(var n in i)r.d(t,n,function(e){return i[e]}.bind(null,n));return t};r.n=function(i){var e=i&&i.__esModule?function e(){return i["default"]}:function e(){return i};r.d(e,"a",e);return e};r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)};r.p="";return r(r.s=0)}([function(e,i,t){e.exports=t(1).default},function(e,i,t){"use strict";t.r(i);
/*! npm.im/intervalometer */function n(i,t,n,r){var o;var a;function u(e){o=t(u,r);i(e-(a||e));a=e}return{start:function e(){if(!o){u(0)}},stop:function e(){n(o);o=null;a=0}}}function r(e){return n(e,requestAnimationFrame,cancelAnimationFrame)}function o(e,i){return n(e,setTimeout,clearTimeout,i)}
/*! npm.im/iphone-inline-video 2.2.2 */function a(i,t,n){function e(e){if(!n||n(i,t)){e.stopImmediatePropagation()}}i.addEventListener(t,e);return e}function u(e,i,t,n){function r(){return t[i]}function o(e){t[i]=e}if(n){o(e[i])}Object.defineProperty(e,i,{get:r,set:o})}function d(e,i,t){t.addEventListener(i,function(){return e.dispatchEvent(new Event(i))})}function s(e,i){Promise.resolve().then(function(){e.dispatchEvent(new Event(i))})}var f=typeof document==="object"&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches;var c="bfred-it:iphone-inline-video";var l="bfred-it:iphone-inline-video:event";var v="bfred-it:iphone-inline-video:nativeplay";var p="bfred-it:iphone-inline-video:nativepause";function y(e){var i=new Audio;d(e,"play",i);d(e,"playing",i);d(e,"pause",i);i.crossOrigin=e.crossOrigin;i.src=e.src||e.currentSrc||"data:";return i}var h=[];var m=0;var b;function g(e,i,t){if((b||0)+200<Date.now()){e[l]=true;b=Date.now()}if(!t){e.currentTime=i}h[++m%3]=i*100|0/100}function w(e){return e.driver.currentTime>=e.video.duration}function k(e){var i=this;if(i.video.readyState>=i.video.HAVE_FUTURE_DATA){if(!i.hasAudio){i.driver.currentTime=i.video.currentTime+e*i.video.playbackRate/1e3;if(i.video.loop&&w(i)){i.driver.currentTime=0}}g(i.video,i.driver.currentTime)}else if(i.video.networkState===i.video.NETWORK_IDLE&&i.video.buffered.length===0){i.video.load()}if(i.video.ended){delete i.video[l];i.video.pause(true)}}function T(){var e=this;var i=e[c];if(e.webkitDisplayingFullscreen){e[v]();return}if(i.driver.src!=="data:"&&i.driver.src!==e.src){g(e,0,true);i.driver.src=e.src}if(!e.paused){return}i.paused=false;if(e.buffered.length===0){e.load()}i.driver.play();i.updater.start();if(!i.hasAudio){s(e,"play");if(i.video.readyState>=i.video.HAVE_ENOUGH_DATA){s(e,"playing")}}}function E(e){var i=this;var t=i[c];t.driver.pause();t.updater.stop();if(i.webkitDisplayingFullscreen){i[p]()}if(t.paused&&!e){return}t.paused=true;if(!t.hasAudio){s(i,"pause")}if(i.ended&&!i.webkitDisplayingFullscreen){i[l]=true;s(i,"ended")}}function P(i,t){var n={};i[c]=n;n.paused=true;n.hasAudio=t;n.video=i;n.updater=r(k.bind(n));if(t){n.driver=y(i)}else{i.addEventListener("canplay",function(){if(!i.paused){s(i,"playing")}});n.driver={src:i.src||i.currentSrc||"data:",muted:true,paused:true,pause:function(){n.driver.paused=true},play:function(){n.driver.paused=false;if(w(n)){g(i,0)}},get ended(){return w(n)}}}i.addEventListener("emptied",function(){var e=!n.driver.src||n.driver.src==="data:";if(n.driver.src&&n.driver.src!==i.src){g(i,0,true);n.driver.src=i.src;if(e||!t&&i.autoplay){n.driver.play()}else{n.updater.stop()}}},false);i.addEventListener("webkitbeginfullscreen",function(){if(!i.paused){i.pause();i[v]()}else if(t&&n.driver.buffered.length===0){n.driver.load()}});if(t){i.addEventListener("webkitendfullscreen",function(){n.driver.currentTime=i.currentTime});i.addEventListener("seeking",function(){if(h.indexOf(i.currentTime*100|0/100)<0){n.driver.currentTime=i.currentTime}})}}function x(e){var i=e[l];delete e[l];return!e.webkitDisplayingFullscreen&&!i}function j(e){var i=e[c];e[v]=e.play;e[p]=e.pause;e.play=T;e.pause=E;u(e,"paused",i.driver);u(e,"muted",i.driver,true);u(e,"playbackRate",i.driver,true);u(e,"ended",i.driver);u(e,"loop",i.driver,true);a(e,"seeking",function(e){return!e.webkitDisplayingFullscreen});a(e,"seeked",function(e){return!e.webkitDisplayingFullscreen});a(e,"timeupdate",x);a(e,"ended",x)}function A(i,e){if(e===void 0)e={};if(i[c]){return}if(!e.everywhere){if(!f){return}if(!(e.iPad||e.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent)){return}}i.pause();var t=i.autoplay;i.autoplay=false;P(i,!i.muted);j(i);i.classList.add("IIV");if(i.muted&&t){i.play();i.addEventListener("playing",function e(){i.autoplay=true;i.removeEventListener("playing",e)})}if(!/iPhone|iPod|iPad/.test(navigator.platform)){console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}var L=A;t.d(i,"default",function(){return H});function O(e,i){if(!(e instanceof i)){throw new TypeError("Cannot call a class as a function")}}function D(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function S(e,i,t){if(i)D(e.prototype,i);if(t)D(e,t);return e}var _=navigator.userAgent;var I=/iphone/gi.test(_);var F=/android/gi.test(_);var H=function(){function t(e,i){O(this,t);this.options=i||{};this.container=document.querySelector(e)||document.body;this.src=i.src||"";this.poster=i.poster||"";this.controls=i.controls||false;this.canCover=i.canCover||false;this.iosInline=i.iosInline||false;this.video=null;this.init()}S(t,[{key:"init",value:function e(){var i;if(this.canCover){i='<video \n                id="h5video"\n                preload="auto" \n                playsInline="true" \n                src="'.concat(this.src,'" \n                poster="').concat(this.poster,'" \n                width="100%" \n                style="object-fit:fill;transform-origin: 0% 0% 0px;"\n                x-webkit-airplay="allow" \n                webkit-playsinline \n                x5-video-player-type="h5" \n                x5-video-orientation="portrait">\n            </video>')}else{i='<video \n                id="h5video" \n                preload="auto" \n                playsInline="true" \n                src="'.concat(this.src,'" \n                poster="').concat(this.poster,'" \n                width="100%"\n                style="object-fit:fill;transform-origin: 0% 0% 0px;"\n                x-webkit-airplay="allow"  \n                webkit-playsinline \n                x5-playsinline="true">\n            </video> ')}this.container.innerHTML+=i;this.video=document.getElementById("h5video");if(this.controls){this.video.controls=true}if(I&&this.iosInline){L(this.video)}}},{key:"play",value:function e(){this.video.play()}},{key:"pause",value:function e(){this.video.pause()}},{key:"status",value:function e(){if(this.video.paused){return"paused"}else{return"playing"}}},{key:"currentTime",value:function e(i){if(i){this.video.currentTime=i}else{return this.video.currentTime}}},{key:"onPlaying",value:function e(i){var t=this;var n=function e(){if(t.video.currentTime>.1){i&&i();t.video.removeEventListener("timeupdate",e)}};this.video.addEventListener("timeupdate",n)}},{key:"ended",value:function e(i){var t=this;this.video.addEventListener("ended",function(){if(F&&t.canCover){t.video.style.display="none"}i&&i()})}}]);return t}()}])});