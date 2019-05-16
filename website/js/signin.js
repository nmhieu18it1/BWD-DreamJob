var formsi = document.getElementById('formsignin');
var formsu = document.getElementById('formsignup');
var title = document.querySelector('#contenttext h1');
var content = document.querySelector('#contenttext p');
	// alert("Hello");
function show() {
	// body...
	formsi.style.opacity = '1';
	formsi.style.right = '-60px';
	formsi.style.zIndex = '999';
	formsu.style.opacity = '0';
	formsu.style.right = '100px';
	formsu.style.zIndex = '0';
	content.style.marginTop = '70px';
	title.innerHTML = 'Chào mừng bạn đến với <span>DreamJob</span>';
	content.innerHTML = '<q>&#160 Những ước mơ không chết chừng nào bạn còn nuôi dưỡng nó bằng niềm đam mê.&#160</q><span id="tacgia">- Nick Vujicic -</span>';
}
function hide() {
	// body...
	formsi.style.opacity = '0';
	formsi.style.right = '100px';
	formsi.style.zIndex = '0';
	formsu.style.opacity = '1';
	formsu.style.right = '-60px';
	formsu.style.zIndex = '999';
	content.style.marginTop = '40px';
	title.innerHTML = 'Một số lưu ý khi <span>Đăng Ký</span>';
	content.innerHTML = '<span>HỌC SINH:</span> Có thể chơi game - tích điểm - đổi quà.<br><br><span>PHỤ HUYNH:</span> Có thể theo dõi trẻ em được liên kết về xu hướng - hoạt động.<br><br><span>GIÁO VIÊN:</span> Có thể tạo ra trò chơi để kiểm tra xu hướng phát triển cho học sinh.';
}
function signin() {
	// body...
	alert('Đăng nhập thành công !');
	window.location="../html/index.html";
}
function signup() {
	var name = document.querySelector('.inputsignin #name').value;
	alert('Đăng ký thành công ! Xin chào ' + name + ' !');
	show();
}