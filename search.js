(function() {

	var wnd = document.createElement('div');
	wnd.style.cssText = 'position: absolute; background: white; border: 3px solid #ccc; min-width: 80px; padding: 10px; height: 15px; border-radius: 4px; box-shadow: 0 0 5px black;';

	var lnk = document.createElement('a');
	wnd.appendChild(lnk);

	document.addEventListener('mouseup', function(e) {
		var txt = window.getSelection().toString().trim();
		if (txt) {
			lnk.innerHTML = 'Hledat: ' + txt;
			lnk.href = 'http://www.google.com/search?q=%s&sourceid=opera&num=%i&ie=utf-8&oe=utf-8'.replace('%s', txt);
			wnd.style.left = e.pageX - 40 + 'px';
			wnd.style.top = e.pageY - 50 + 'px';
			document.body.appendChild(wnd);
		} 
	});

	document.addEventListener('mousedown', function(e) {
		if (wnd.parentNode && !isAncestor(e.target, wnd)) {
			document.body.removeChild(wnd);
		}
	});

	function isAncestor(what, test) {
		if (what.isSameNode(test)) {
			return true;
		} else if (!what.parentNode) {
			return false;
		} else {
			return isAncestor(what.parentNode, test);
		}
	}

})();

