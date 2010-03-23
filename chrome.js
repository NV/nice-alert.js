function main() {
/*> nice_alert.js */
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
document.documentElement.appendChild(script);
