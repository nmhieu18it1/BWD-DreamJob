var index = 0;
function right() {
	// body...
	index += 1;
	if (index > 3) {index = 0;}
	var slide = document.getElementById('content');
	slide.innerHTML = '';
	for (var i = index; i <= index + 4; i ++) {
		slide.innerHTML = slide.innerHTML + '<div class="item" index=0><h1>' +i+ '</h1></div>'
	}
}
function show() {
	// body...
	var obj = new Object();
	if (index > 3) {index = 0;}
	var slide = document.getElementsByClassName("item");
	for (var i = 0; i < 8; i++) {
		if (slide[i].getAttribute('index') == index) {
			obj = slide[i];
		}
	}
	obj.style.width = '0';
	obj.style.opacity = '0';
	index += 1;
}
function hide() {
	// body...
	var obj = document.getElementById('test');
	obj.style.marginLeft = '0';
	obj.style.opacity = '0';
}