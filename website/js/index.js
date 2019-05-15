function summory() {
	// body...
	var obj = document.querySelector('#backtop p');
	obj.style.opacity = '0.8';
	setTimeout(function() {
		obj.style.opacity = '0';
	}, 1000);

};
function hidesummory() {
	// body...
	var obj = document.querySelector('#backtop p');
	obj.style.opacity = '0';
};
function conf() {
	// body...
	var obj = document.querySelector('#inputemail #email');
	if (obj.value == "") {
		alert('Bạn chưa nhập email. Vui lòng nhập email để chúng tôi có thể hỗ trợ bạn.');
	}
	else {
		confirm("Email của bạn là: " + obj.value + ". Cảm ơn bạn đã tin tưởng chúng tôi.");
	}
	
};
function intext(obj) {
	// body...
	var khung = document.querySelector('#content');
	khung.innerHTML = obj.innerHTML;
};
var nav = document.querySelector('#navguide');
var cont = document.querySelector('#content');
function mucdich() {
	// body...
	nav.innerHTML = "<h1 id='canhan'>Cá nhân</h1><h1 id='xahoi'>Xã hội</h1>";
	cont.innerHTML = "<p>Bạn đang ở phần Mục Đích...</p>"
};
function huongdan() {
	// body...
	nav.innerHTML = "<h1 id='dangnhap'>Đăng nhập</h1><h1 id='dangky'>Đăng ký</h1><h1 id='nhanqua'>Nhận quà</h1>";
	cont.innerHTML = "<p>Bạn đang ở phần Hướng Dẫn...</p>"
};
function quatang() {
	// body...
	nav.innerHTML = "";
	cont.innerHTML = "<p>Bạn đang ở phần Quà Tặng...</p>"
};
