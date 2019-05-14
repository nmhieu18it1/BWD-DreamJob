function conf(f) {
	// body...
	var inp = document.getElementById("inp");	
	inp.setAttribute('value',f.innerHTML);
	var scrdown = document.getElementById('scroll');
	scrdown.style.height = '0px';
}
function showscroll() {
	var scrdown = document.getElementById('scroll');
	scrdown.style.height = '100px';
}