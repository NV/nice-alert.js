// ==UserScript==
// @name        Nice alert
// @namespace   http://userscripts.ru/
// @include     *
// @description Not modal alert box
// @author      Nikita Vasilev
// @version     0.6
// @licence     GPL
// ==/UserScript==


(function(){

var w = window.wrappedJSObject || window;

if (!w.alert.isNice) {
		
	w.alert = function(msg){
	
		var alertStyles = '#nice_alert {\
			color: InfoText;\
			font: 14px/16px sans-serif;\
			position: fixed;\
			top: 0;\
			right: 0;\
			margin: 0;\
			padding: 0;\
			list-style-type: none;\
			float: left;\
			cursor: pointer;\
			text-align: left;\
			z-index: 99;\
		}\
		#nice_alert li {\
			background-color: InfoBackground;\
			border-bottom: 1px solid #ccc;\
			border-bottom: 1px solid rgba(0,0,0,0.3);\
			margin: 0;\
			opacity: 0;\
			float: right;\
			clear: both;\
			overflow: hidden;\
			font-size: 14px;\
			outline: 0;\
			-webkit-box-shadow: 0px 2px 8px rgba(0,0,0,0.2);\
			-moz-box-shadow: 0px 2px 8px rgba(0,0,0,0.3);\
		}';	
		var heads = document.evaluate('//head',document,null,XPathResult.ANY_TYPE,null);
		var head = heads.iterateNext();
		if (head) {
			var style = document.createElement("style");
			style.type = "text/css";
			style.appendChild(document.createTextNode(alertStyles));
			head.appendChild(style);
		}	
		var niceAlert = document.createElement('ol');
		niceAlert.id = 'nice_alert';	 
	
		if (document.body) {
			document.body.appendChild(niceAlert);
			niceAlert.addEventListener('click',function(e){
				var t = e.target //@cc_on || window.event.srcElement;
				if (t.tagName == 'LI') {
					var h = t.clientHeight - 18;
					t.style.height = h +'px';
					var closing = setInterval(function(){
						t.style.opacity -= 0.1;
						//t.style.fontSize = parseInt(t.style.fontSize) - 1 +'px';
						t.style.paddingTop = parseInt(t.style.paddingTop) - 1 +'px';
						t.style.paddingBottom = parseInt(t.style.paddingBottom) - 1 +'px';
						var currentHeight = parseInt(t.style.height) - h/10;
						t.style.height = (currentHeight < 0 ? 0 : currentHeight) +'px';
						if (t.style.opacity <= 0) {
							t.style.display = 'none';
							clearInterval(closing);
						}
					}, 30)
				}
			}, false)
		}
	
		var cache = document.createElement('li');
		cache.style.padding = '0px 16px';
		cache.tabIndex = 0;
		
		(w.alert = function(msg){
			w.alert.isNice = 'Of couse it is!';
			//if (niceAlert.childNodes.length > 99) return
			var li = cache.cloneNode(false);
			li.appendChild(document.createTextNode(msg));
			niceAlert.appendChild(li);
			var showing = setInterval(function(){
				li.style.opacity = li.style.opacity/1 + 0.1;
				li.style.paddingTop = parseInt(li.style.paddingTop) + 1 +'px';
				li.style.paddingBottom = parseInt(li.style.paddingBottom) + 1 +'px';
				if (li.style.opacity >= 0.9) {
					clearInterval(showing)
				}
			}, 30)
			return msg
		})(msg)
		
	}
	
}

})()
