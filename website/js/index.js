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
	nav.innerHTML = "<h1 id='canhan' onclick='intext(this)'>Cá nhân</h1><h1 id='xahoi' onclick='intext(this)'>Xã hội</h1>";
	cont.innerHTML = "<p>Bạn đang ở phần Mục Đích...</p>"
};
function huongdan() {
	// body...
	nav.innerHTML = "<h1 id='dangnhap' onclick='intext(this)'>Đăng nhập</h1><h1 id='dangky' onclick='intext(this)'>Đăng ký</h1><h1 id='nhanqua' onclick='intext(this)'>Nhận quà</h1>";
	cont.innerHTML = "<p>Bạn đang ở phần Hướng Dẫn...</p>"
};
function quatang() {
	// body...
	nav.innerHTML = "<h1 id='thubong' onclick='intext(this)'>Thú Bông</h1><h1 id='mockhoa' onclick='intext(this)'>Móc Khóa</h1><h1 id='dongho' onclick='intext(this)'>Đồng Hồ</h1><h1 id='goi' onclick='intext(this)'>Gối</h1>";
	cont.innerHTML = "<p>Bạn đang ở phần Quà Tặng...</p>"
};
var mnr = -1;
function showmenures() {
	// body...
	mnr = -mnr;
	var menure = document.getElementById('menures');
	if (mnr == 1) {
	menure.style.opacity = '1';
	menure.style.zIndex = '99';
	}
	else {
	menure.style.opacity = '0';
	menure.style.zIndex = '-1';
	}
}
function hidemenures() {
	// body...
	var menure = document.getElementById('menures');
	mnr = -1;
	menure.style.opacity = '0';
	menure.style.zIndex = '-1';
}
function selected(obj) {
	// body...
	obj.style.border = '2px solid #CC66FF';
	obj.style.color = '#CC66FF';
}
