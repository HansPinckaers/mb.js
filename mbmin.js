function MB(g,o,r,b){if(typeof g=="string"){g=new Array(g)}if(this.mbSupport()){for(z=0;z<g.length;z++){if(typeof g[z]=="string"){el=document.getElementById(g[z])}else{el=g[z]}var h=this.getComputedStyle(el,"backgroundColor");el.style.background=o.join(", ");el.style.backgroundColor=h}return true}for(z=0;z<g.length;z++){var e=document.createElement("canvas");if(typeof g[z]=="string"){el=document.getElementById(g[z])}else{el=g[z]}e.id="_canvas";var o=o;var q=this.getComputedStyle(el,"position");var s=this.getComputedStyle(el,"paddingTop");var f=this.getComputedStyle(el,"paddingLeft");var l=this.getComputedStyle(el,"position");var a=this.getComputedStyle(el,"backgroundColor");var d=el.childNodes.length;for(y=0;y<d;y++){if(el.childNodes[y].id=="_canvas"){e=el.childNodes[y];var p=true}}if(r=="relative"){e.style.position="relative";e.width=el.offsetWidth;e.height=el.offsetHeight;e.style.top=-q-s+"px";e.style.left=-f+"px";e.style.marginBottom=-(q+s)+"px";el.style.height=q+"px"}else{if(l==""&&l!="fixed"||l=="static"){el.style.position="relative"}e.style.position="absolute";e.width=el.offsetWidth;e.height=el.offsetHeight;e.style.top="0px";e.style.left="0px"}e.style.zIndex="0";if(!p){var c=document.createElement("div");c.style.zIndex="1";c.style.position="relative";var d=el.childNodes.length;el.appendChild(c);for(y=0;y<d;y++){c.appendChild(el.firstChild)}if(/msie/i.test(navigator.userAgent)){el.appendChild(e);G_vmlCanvasManager.initElement(e);for(y=0;y<d;y++){if(el.childNodes[y]){if(el.childNodes[y].id=="_canvas"){var e=el.childNodes[y]}}}}}var k=[];var n=new RegExp(/url\((.*)\)/);var m=this;for(x=0;x<o.length;x++){k[x]=new Image();k[x].drawme=function(){if(this.complete){var t=m.css(o[k.indexOf(this)]);m.draw(el,t,this,e);var u=k.indexOf(this)-1;if(u>0||u==0){k[u].drawme()}else{m.exportToPNG(e,el)}}else{this.onload=function(){var v=m.css(o[k.indexOf(this)]);m.draw(el,v,this,e);var w=k.indexOf(this)-1;if(w>0||w==0){k[w].drawme()}else{m.exportToPNG(e,el)}}}};k[x].src=n.exec(o[x])[1]}k[o.length-1].drawme()}if(b){window.onresize=function(){new MB(g,o,r)}}}MB.prototype.draw=function(b,o,e,p){var p=p.getContext("2d");var g=b.offsetWidth;var h=b.offsetHeight;switch(o.repeat){case"no-repeat":var m=this.calculateX(o,g,e);var k=this.calculateY(o,h,e);p.drawImage(e,m,k,e.width,e.height);break;case"repeat-y":var f=Math.ceil(h/e.height)+1;var m=this.calculateX(o,g,e);var d=this.calculateMinusY(o,h,e,f);for(i=0;i<(f);i++){p.drawImage(e,m,(i*e.height)-d,e.width,e.height)}break;case"repeat-x":var f=Math.ceil(g/e.width)+1;var d=this.calculateMinusX(o,g,e,f);var k=this.calculateY(o,h,e);for(i=0;i<(f);i++){p.drawImage(e,(i*e.width)-d,k,e.width,e.height)}break;default:var c=Math.ceil(g/e.width)+1;var a=Math.ceil(h/e.height)+1;var n=this.calculateMinusX(o,g,e,c);var l=this.calculateMinusY(o,h,e,a);for(i=0;i<(c);i++){for(j=0;j<(a);j++){p.drawImage(e,(i*e.width)-n,(j*e.height)-l,e.width,e.height)}}}};MB.prototype.css=function(a){var b=new Object();var c=[0,0];c=new RegExp(/([\d]*)px ([\d]*)/).exec(a);a.split(" ").forEach(function(e,d,f){switch(e){case"no-repeat":b.repeat="no-repeat";break;case"repeat-x":b.repeat="repeat-x";break;case"repeat-y":b.repeat="repeat-y";break;default:if(!(c&&c[2]+"px")&&!(c&&c[1]+"px")){b[e]=true}}});if(c){if(c[1]&&(b.right||b.left)){b.y=c[1]}else{if(c[1]&&(cssbg.top||cssbg.bottom)){b.x=c[1]}}if(b.center&&a.indexOf(" center")<c.index){b.y=c[1]}else{if(b.center&&a.indexOf(" center")>c.index){b.x=c[1]}}if(c[1]&&c[2]){b.x=c[1];b.y=c[2]}}b.centerY=(b.center&&!b.top&&!b.bottom&&!b.y)?true:false;b.centerX=(b.center&&!b.right&&!b.left&&!b.x)?true:false;return b};MB.prototype.calculateX=function(c,a,b){return(c.left)?0:(c.right)?a-b.width:(c.centerX)?(a/2)-(b.width/2):(c.x)?parseFloat(c.x):false};MB.prototype.calculateY=function(b,c,a){return(b.top)?0:(b.bottom)?c-a.height:(b.centerY)?(c/2)-(a.height/2):(b.y)?parseFloat(b.y):false};MB.prototype.calculateMinusY=function(b,d,a,c){return(b.top)?0:(b.bottom)?c*a.height-d:(b.centerY)?(c*a.height-d)/2:(b.y)?a.height-parseFloat(b.y):false};MB.prototype.calculateMinusX=function(c,a,b,d){return(c.left)?0:(c.right)?d*b.width-a:(c.centerX)?(d*b.width-a)/2:(c.x)?b.width-parseFloat(c.x):false};MB.prototype.getComputedStyle=function(a,c){if(a.currentStyle){return a.currentStyle[c]}var b=document.defaultView.getComputedStyle(a,null);return(b)?b.getPropertyValue([c.hyphenate()]):null};MB.prototype.exportToPNG=function(a,b){try{a.toDataURL();b.style.background=backgroundcolor+" url("+sDataUrl+")"}catch(c){if(!/msie/i.test(navigator.userAgent)){b.appendChild(a)}}};MB.prototype.mbSupport=function(){var a=document.createElement("div");a.style.background="url(a.png) top no-repeat, url(a.png) bottom no-repeat";if(a.style.background.search(",")!=-1){return true}else{return false}};Array.prototype.forEach=function(c,d){for(var b=0,a=this.length;b<a;b++){c.call(d,this[b],b,this)}};String.prototype.hyphenate=function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase())})};