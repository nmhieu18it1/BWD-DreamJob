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
	
}