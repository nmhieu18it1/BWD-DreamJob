function summory() {
	// body...
	var obj = document.querySelector('#backtop p');
	obj.style.opacity = '0.8';
	setTimeout(function() {
		obj.style.opacity = '0';
	}, 1000);

};