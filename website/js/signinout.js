
function signin() {
	// body...
	var obj = document.getElementById('emailsignin');
	if (obj.value == 'hocsinh@gmail.com') {
		alert('Đăng nhập thành công !');
		// window.location.assign("../html/index.html");
		window.location.href = '../html/indexkid.html';
	}
	else if (obj.value == 'phuhuynh@gmail.com') {
		alert('Đăng nhập thành công !');
		window.location.href = '../html/indexadult.html';
	}
	else {
		alert('Đăng nhập thất bại !');
	}
}