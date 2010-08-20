if (!w.alert.is_nice) {

	w.alert = function alert(msg) {

		if (typeof GM_addStyle == 'undefined') {
			function GM_addStyle(css) {
				var head = document.head || document.getElementsByTagName('head')[0];
				if (head) {
					var style = document.createElement("style");
					style.type = "text/css";
					style.appendChild(document.createTextNode(css));
					head.appendChild(style);
				}
			}
		}

		GM_addStyle("/*> style.css */");

		var nice_alert = document.getElementById('nice_alert') || document.createElement('ALERTGROUP');
		nice_alert.id = 'nice_alert';
		document.documentElement.appendChild(nice_alert);
		nice_alert.addEventListener('click',function(e){
			var t = e.target;
			if (t.tagName == 'ALERTBOX') {
				var h = t.clientHeight - 18;
				t.style.height = h +'px';
				var i = 9;
				var closing = setInterval(function(){
					i--;
					t.style.opacity = i/10;
					t.style.paddingTop = parseInt(t.style.paddingTop) - 1 +'px';
					t.style.paddingBottom = parseInt(t.style.paddingBottom) - 1 +'px';
					var currentHeight = parseInt(t.style.height) - h/10;
					t.style.height = (currentHeight < 0 ? 0 : currentHeight) +'px';
					if (i < 1) {
						t.style.display = 'none';
						clearInterval(closing);
					}
				}, 30);
			}
		}, false);

		var cache = document.createElement('ALERTBOX');
		cache.style.padding = '0px 16px';
		cache.style.opacity = 0;
		cache.tabIndex = 0;

		(w.alert = function alert (msg) {
			w.alert.is_nice = 'Of course it is!';
			var box = cache.cloneNode(false);
			box.appendChild(document.createTextNode(msg));
			nice_alert.appendChild(box);
			var i = 1;
			var showing = setInterval(function(){
				box.style.opacity = i/10;
				i++;
				box.style.paddingTop = parseInt(box.style.paddingTop) + 1 +'px';
				box.style.paddingBottom = parseInt(box.style.paddingBottom) + 1 +'px';
				if (i > 9) {
					clearInterval(showing);
				}
			}, 30);
		})(msg);
	
	};
	
}
