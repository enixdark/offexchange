!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),u=o(r);document.addEventListener("DOMContentLoaded",function(){u["default"].pageLoaded()}),window.onresize=function(){u["default"].windowResized()}},function(e,t){"use strict";function n(){var e=document.querySelectorAll("iframe"),t=Array.prototype.slice.call(e,0);return t.filter(function(e){var t=e.getAttribute("src");return!(!t||t.includes("http"))})}function o(e){e.style.height="auto",e.style.height=e.contentWindow.document.body.scrollHeight+"px"}function r(){var e=n();e.forEach(function(e){o(e)})}function u(){var e=n();e.forEach(function(e){e.onload=function(){o(e)}})}function i(){d&&clearInterval(d),d=setTimeout(r,500)}function c(){u()}Object.defineProperty(t,"__esModule",{value:!0});var d=null,a={windowResized:i,pageLoaded:c};t["default"]=a}]);
//# sourceMappingURL=site.js.map