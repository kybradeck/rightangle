function radioButtonGroup(e){e.addEventListener("click",function(t){matchesSelector(t.target,"button")&&(e.querySelector(".is-checked").classList.remove("is-checked"),t.target.classList.add("is-checked"))})}var gallery=document.querySelector(".gallery"),iso=new Isotope(gallery,{itemSelector:".gallery-item",percentPosition:!0,masonry:{columnWidth:".gallery-sizer",gutter:".gallery-gutter"}});imagesLoaded(gallery).on("progress",function(){iso.layout()});var filtersElem=document.querySelector(".filter-button-group");filtersElem.addEventListener("click",function(e){if(matchesSelector(e.target,"button")){var t=e.target.getAttribute("data-filter");iso.arrange({filter:t})}});for(var buttonGroups=document.querySelectorAll(".filter-button-group"),i=0,len=buttonGroups.length;i<len;i++){var buttonGroup=buttonGroups[i];radioButtonGroup(buttonGroup)}var initPhotoSwipeFromDOM=function(e){for(var t=function(e){for(var t=e.childNodes,r=t.length,n=[],o,i,l,a,u=0;u<r;u++){if(o=t[u],console.log("loop entered"),"FIGURE"!==o.nodeName){continue;console.log("continued!")}i=o.children[0],l=i.getAttribute("data-size").split("x"),a={src:i.getAttribute("href"),w:parseInt(l[0],10),h:parseInt(l[1],10)},i.children.length>0&&(a.msrc=i.children[0].getAttribute("src"),a.title=i.getAttribute("title")),a.el=o,n.push(a)}return n},r=function e(t,r){return t&&(r(t)?t:e(t.parentNode,r))},n=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,n=r(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(n){for(var o=n.parentNode,l=n.parentNode.childNodes,a=l.length,u=0,s,c=0;c<a;c++)if("FIGURE"===l[c].nodeName){if(l[c]===n){s=u;break}u++}return s>=0&&i(s,o),!1}},o=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var r=e.split("&"),n=0;n<r.length;n++)if(r[n]){var o=r[n].split("=");o.length<2||(t[o[0]]=o[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},i=function(e,r,n,o){var i=document.querySelectorAll(".pswp")[0],l,a,u;if(u=t(r),a={galleryUID:r.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=u[e].el.getElementsByTagName("img")[0],r=window.pageYOffset||document.documentElement.scrollTop,n=t.getBoundingClientRect();return{x:n.left,y:n.top+r,w:n.width}}},o)if(a.galleryPIDs){for(var s=0;s<u.length;s++)if(u[s].pid==e){a.index=s;break}}else a.index=parseInt(e,10)-1;else a.index=parseInt(e,10);isNaN(a.index)||(n&&(a.showAnimationDuration=0),a.shareEl=!1,l=new PhotoSwipe(i,PhotoSwipeUI_Default,u,a),l.init())},l=document.querySelectorAll(e),a=0,u=l.length;a<u;a++)l[a].setAttribute("data-pswp-uid",a+1),l[a].onclick=n;var s=o();s.pid&&s.gid&&i(s.pid,l[s.gid-1],!0,!0)};initPhotoSwipeFromDOM(".photoswipe");