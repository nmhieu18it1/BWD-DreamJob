var checkform = 1;
function form01() {
	// body...
	checkform = -checkform;
	var form = document.getElementById('formsignin');
	// alert("Hello");
	if (checkform == 1) {show(form);}
	if (checkform == -1) {hide(form);}
	function show(f) {
		// body...
		f.style.opacity = '1';
		f.style.right = '0';
	}
	function hide(f) {
		// body...
		f.style.opacity = '0';
		f.style.right = '20%';
	}
};