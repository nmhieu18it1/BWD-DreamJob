
function checksign(a) {
	// body...
	var obj = document.getElementById('menu3');
	if (a== 0) {
		obj.innerHTML = 'Đăng Nhập';
	}
	else if (a == 1) {
		obj.innerHTML = 'Trang cá nhân <i class="fas fa-seedling"></i>';
	}
	else {
		obj.innerHTML = 'Trang cá nhân <i class="fab fa-pagelines"></i>';
	}
}
function signin() {
	// body...
	var obj = document.getElementById('emailsignin');
	var objbody = document.getElementsByTagName('body');
	alert(objbody.innerHTML);
	if (obj.value == 'hocsinh@gmail.com') {
		alert('Đăng nhập thành công !');
		window.location.assign("../html/index.html");
		objbody.setAttribute('onload','checksign(1);');
	}
	else if (obj.value == 'phuhuynh@gmail.com') {
		alert('Đăng nhập thành công !');
		window.location.assign("../html/index.html");
		objbody.setAttribute('onload','checksign(2);');
	}
	else {
		alert('Đăng nhập thất bại !');
	}
}