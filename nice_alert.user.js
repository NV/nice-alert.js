// ==UserScript==
// @name        Nice alert
// @namespace   http://userscripts.ru/
// @include     *
// @description Not modal alert box
// @author      Nikita Vasilyev
// @version     0.72
// @licence     GPL
// ==/UserScript==


(function(){

  var w = window.wrappedJSObject || window;

  if (w.alert.is_nice) return;

  w.alert = function(msg){

    if (typeof GM_addStyle == 'undefined') {
      /**
       * @param css String like '* {color:red}'
       */
      function GM_addStyle(css) {
        var head = document.getElementsByTagName('head')[0];
        if (head) {
          var style = document.createElement("style");
          style.type = "text/css";
          style.appendChild(document.createTextNode(css));
          head.appendChild(style);
        }
      }
    }

    GM_addStyle('#nice_alert {\
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
      white-space: pre-wrap;\
      outline: 0;\
      -webkit-box-shadow: 0px 2px 8px rgba(0,0,0,0.2);\
      -moz-box-shadow: 0px 2px 8px rgba(0,0,0,0.3);\
    }');

    var nice_alert = document.getElementById('nice_alert') || document.createElement('ol');
    nice_alert.id = 'nice_alert';
    document.body.appendChild(nice_alert);
    nice_alert.addEventListener('click',function(e){
      var t = e.target;
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
        }, 30);
      }
    }, false);

    var cache = document.createElement('li');
    cache.style.padding = '0px 16px';
    cache.tabIndex = 0;
    
    (w.alert = function(msg){
      w.alert.is_nice = 'Of couse it is!';
      //if (nice_alert.childNodes.length > 99) return;
      var li = cache.cloneNode(false);
      li.appendChild(document.createTextNode(msg));
      nice_alert.appendChild(li);
      var showing = setInterval(function(){
        li.style.opacity = li.style.opacity/1 + 0.1;
        li.style.paddingTop = parseInt(li.style.paddingTop) + 1 +'px';
        li.style.paddingBottom = parseInt(li.style.paddingBottom) + 1 +'px';
        if (li.style.opacity >= 0.9) {
          clearInterval(showing);
        }
      }, 30);
      return w.alert;
    })(msg);
    
  };

})();
