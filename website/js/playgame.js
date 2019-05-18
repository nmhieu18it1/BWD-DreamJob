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
function complete() {
	// body...
	var check = confirm("Bạn được: 30 điểm, bạn có muốn kết thúc game không ?");
	if (check == true) {
		alert('Cảm ơn bạn đã tham gia cùng chúng tôi, bạn được công thêm: 30 điểm vào tổng điểm !');
		window.location.assign('../html/playgame.html');
	}
	else {
		alert('Hãy cố gắng hơn nữa nhé ! Chúc bạn thành công !');
	}
}
var checklist = -1;
function addlist() {
	// body...
	checklist = -checklist;
	if (checklist == 1) {
		alert('Đã thêm game này vào danh sách ...');
		var obj = document.getElementById('addlist');
		obj.innerHTML = '<i class="fas fa-check"></i> &#160&#160Xóa khỏi danh sách';
	}
	else {
		alert('Đã xóa game này khỏi danh sách ...');
		var obj = document.getElementById('addlist');
		obj.innerHTML = '<i class="fas fa-plus"></i> &#160&#160Thêm vào danh sách';
	}
}