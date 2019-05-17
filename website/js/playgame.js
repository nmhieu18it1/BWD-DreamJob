function hidecomment() {
	// body...
	var cmt = document.getElementById('comment');
	cmt.style.opacity = '0';
	var icon = document.getElementById('iconshow-comment'); 
	icon.style.display = 'block';
}
function showcomment() {
	// body...
	var cmt = document.getElementById('comment');
	cmt.style.opacity = '1';
	var icon = document.getElementById('iconshow-comment'); 
	icon.style.display = 'none';
}
function hidegametop() {
	// body...
	var cmt = document.getElementById('gametop');
	cmt.style.opacity = '0';
	var icon = document.getElementById('iconshow-gametop'); 
	icon.style.display = 'block';
}
function showgametop() {
	// body...
	var cmt = document.getElementById('gametop');
	cmt.style.opacity = '1';
	var icon = document.getElementById('iconshow-gametop'); 
	icon.style.display = 'none';
}