var checkform = 1;
function form01() {
	// body...
	checkform = -checkform;
	var formsi = document.getElementById('formsignin');
	var formsu = document.getElementById('formsignup');
	var change = document.getElementById('buttonsign');
	// alert("Hello");
	if (checkform == 1) {show(formsi,formsu);}
	if (checkform == -1) {hide(formsi,formsu);}
	function show(f1,f2) {
		// body...
		f1.style.opacity = '1';
		f1.style.right = '0';
		f2.style.opacity = '0';
		f2.style.right = '20%';
		change.setAttribute('value','Sign Up');
	}
	function hide(f1,f2) {
		// body...
		f1.style.opacity = '0';
		f1.style.right = '20%';
		f2.style.opacity = '1';
		f2.style.right = '0';
		change.setAttribute('value','Sign In');
	}
};