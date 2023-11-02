"use strict";function _createForOfIteratorHelper(e,t){var a,o,n,r,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return o=!(a=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return a=e.done,e},e:function(e){o=!0,n=e},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw n}}};if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),r=0,{s:t=function(){},n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var a;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(a="Object"===(a=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t,a,o;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),t=!0),t||(a=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=a,o})}(function(){function s(){for(var e=0,t={};e<arguments.length;e++){var a,o=arguments[e];for(a in o)t[a]=o[a]}return t}function l(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(d){function i(){}function a(e,t,a){if("undefined"!=typeof document){"number"==typeof(a=s({path:"/"},i.defaults,a)).expires&&(a.expires=new Date(+new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var o=JSON.stringify(t);/^[\{\[]/.test(o)&&(t=o)}catch(e){}t=d.write?d.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var n,r="";for(n in a)a[n]&&(r+="; "+n,!0!==a[n])&&(r+="="+a[n].split(";")[0]);return document.cookie=e+"="+t+r}}function t(e,t){if("undefined"!=typeof document){for(var a={},o=document.cookie?document.cookie.split("; "):[],n=0;n<o.length;n++){var r=o[n].split("="),i=r.slice(1).join("=");t||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var s=l(r[0]),i=(d.read||d)(i,s)||l(i);if(t)try{i=JSON.parse(i)}catch(e){}if(a[s]=i,e===s)break}catch(e){}}return e?a[e]:a}}return i.set=a,i.get=function(e){return t(e,!1)},i.getJSON=function(e){return t(e,!0)},i.remove=function(e,t){a(e,"",s(t,{expires:-1}))},i.defaults={},i.withConverter=e,i}(function(){})}),function(i,s){var d=s("body"),l=s("head"),u="#skin-theme",c=".nk-sidebar-bar",f=".nk-sidebar-main",m=["demo7","pharmacy","covid"],r=["style","aside","navside","skin","mode"],n="light-mode",p="dark-mode",y=".nk-opt-item",v=".nk-opt-list",h={demo7:{aside:"is-default",navside:"is-light",style:"ui-default"},pharmacy:{aside:"is-default",navside:"is-light",style:"ui-default"},covid:{aside:"is-default",navside:"is-light",style:"ui-default"}};i.Demo={save:function(e,t){Cookies.set(i.Demo.apps(e),t)},remove:function(e){Cookies.remove(i.Demo.apps(e))},current:function(e){return Cookies.get(i.Demo.apps(e))},apps:function(e){var t,a,o=window.location.pathname.split("/").map(function(e,t,a){return e.replace("-","")}),n=_createForOfIteratorHelper(m);try{for(n.s();!(a=n.n()).done;){var r=a.value;0<=o.indexOf(r)&&(t=r)}}catch(e){n.e(e)}finally{n.f()}return e?e+"_"+t:t},style:function(e,t){var a={mode:n+" "+p,style:"ui-default ui-softy",aside:"is-light is-default is-theme is-dark",navside:"is-light is-default is-theme is-dark"};return"all"===e?a[t]||"":"any"===e?a.mode+" "+a.style+" "+a.aside+" "+a.navside:"body"===e?a.mode+" "+a.style:"is-default"===e||"ui-default"===e?"":e},skins:function(e){return!e||"default"===e?"theme":"theme-"+e},defs:function(e){var t=i.Demo.apps(),t=h[t][e]||"";return i.Demo.current(e)?i.Demo.current(e):t},locked:function(e){!0===e?(s(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").addClass("disabled"),i.Demo.update("skin","default",!0),s(y+"[data-key=skin]").removeClass("active"),s(y+"[data-key=skin][data-update=default]").addClass("active")):s(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").removeClass("disabled")},apply:function(){i.Demo.apps();var e,t=_createForOfIteratorHelper(r);try{for(t.s();!(e=t.n()).done;){var a,o,n=e.value;"aside"!==n&&"navside"!==n&&"style"!==n||(a=i.Demo.defs(n),s(o="aside"===n?c:"navside"===n?f:d).removeClass(i.Demo.style("all",n)),"ui-default"!==a&&"is-default"!==a&&s(o).addClass(a)),"mode"===n&&i.Demo.update(n,i.Demo.current("mode")),"skin"===n&&i.Demo.update(n,i.Demo.current("skin"))}}catch(e){t.e(e)}finally{t.f()}i.Demo.update("dir",i.Demo.current("dir"))},update:function(e,t,a){var o,n=i.Demo.style(t,e),r=i.Demo.style("all",e);i.Demo.apps();"aside"!==e&&"navside"!==e||(s(o="navside"==e?f:c).removeClass(r),s(o).addClass(n)),"mode"===e&&(d.removeClass(r).removeAttr("theme"),n===p?(d.addClass(n).attr("theme","dark"),i.Demo.locked(!0)):(d.addClass(n).removeAttr("theme"),i.Demo.locked(!1))),"style"===e&&(d.removeClass(r),d.addClass(n)),"skin"===e&&(o=i.Demo.skins(n),r=s("#skin-default").attr("href").replace("theme","skins/"+o),"theme"===o?s(u).remove():0<s(u).length?s(u).attr("href",r):l.append('<link id="skin-theme" rel="stylesheet" href="'+r+'">')),!0===a&&i.Demo.save(e,t)},reset:function(){var e,t=i.Demo.apps(),a=(d.removeClass(i.Demo.style("body")).removeAttr("theme"),s(y).removeClass("active"),s(u).remove(),s(c).removeClass(i.Demo.style("all","aside")),s(f).removeClass(i.Demo.style("all","navside")),_createForOfIteratorHelper(r));try{for(a.s();!(e=a.n()).done;){var o=e.value;s("[data-key='"+o+"']").each(function(){var e=s(this).data("update");"aside"!==o&&"navside"!==o&&"style"!==o||e===h[t][o]&&s(this).addClass("active"),"mode"!==o&&"skin"!==o||e!==n&&"default"!==e||s(this).addClass("active")}),i.Demo.remove(o)}}catch(e){a.e(e)}finally{a.f()}s("[data-key='dir']").each(function(){s(this).data("update")===i.Demo.current("dir")&&s(this).addClass("active")}),i.Demo.apply()},load:function(){i.Demo.apply(),0<s(y).length&&s(y).each(function(){var e=s(this).data("update"),t=s(this).data("key");"aside"!==t&&"navside"!==t&&"style"!==t||e===i.Demo.defs(t)&&(s(this).parent(v).find(y).removeClass("active"),s(this).addClass("active")),"mode"!==t&&"skin"!==t&&"dir"!==t||e!=i.Demo.current("skin")&&e!=i.Demo.current("mode")&&e!=i.Demo.current("dir")||(s(this).parent(v).find(y).removeClass("active"),s(this).addClass("active"))})},trigger:function(){s(y).on("click",function(e){e.preventDefault();var e=s(this),t=e.parent(v),a=e.data("update"),o=e.data("key");i.Demo.update(o,a,!0),t.find(y).removeClass("active"),e.addClass("active"),"dir"==o&&setTimeout(function(){window.location.reload()},100)}),s(".nk-opt-reset > a").on("click",function(e){e.preventDefault(),i.Demo.reset()})},init:function(e){i.Demo.load(),i.Demo.trigger()}},i.coms.docReady.push(i.Demo.init),i.Promo=function(){var t=s(".pmo-st"),a=s(".pmo-lv"),e=s(".pmo-close");0<e.length&&e.on("click",function(){var e=Cookies.get("intm-offer");return a.removeClass("active"),t.addClass("active"),null==e&&Cookies.set("intm-offer","true",{expires:1,path:""}),!1}),s(window).on("load",function(){(null==Cookies.get("intm-offer")?a:t).addClass("active")})},i.coms.docReady.push(i.Promo)}(NioApp,jQuery);