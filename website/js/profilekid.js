function search_fr() {
	// body...
	var obj  = document.getElementById('searchresult');
	obj.innerHTML = '<div class="search-item"><img src="../img/team/1.jpg"><div class="search-info"><h1><a href="">Mỹ Phương</a></h1><h2><i class="fab fa-pagelines"></i> 347</h2></div></div>'
					+ '<div class="search-item"><img src="../img/team/3.jpg"><div class="search-info"><h1><a href="">Mary</a></h1><h2><i class="fab fa-pagelines"></i> 254</h2></div></div>'
					+ '<div class="search-item"><img src="../img/team/5.jpg"><div class="search-info"><h1><a href="">Qúy Mạnh</a></h1><h2><i class="fab fa-pagelines"></i> 886</h2></div></div>'
					+ '<div class="search-item"><img src="../img/team/6.jpg"><div class="search-info"><h1><a href="">Phước Đại</a></h1><h2><i class="fab fa-pagelines"></i> 456</h2></div></div>';
}
function pointpay() {
	// body...
	var yourpoint = document.getElementById('yourpoint');
	var pointpay = document.getElementById('pointpay').parentElement;
	if (parseInt(yourpoint.innerHTML) > parseInt(pointpay.innerHTML)) {
		alert("Cảm ơn bạn đã tham gia! Chúng tôi sẽ gửi đến bạn món quà sớm nhất !");
		yourpoint.innerHTML = (parseInt(yourpoint.innerHTML)-parseInt(pointpay.innerHTML)).toString();
	}
	else {
		alert('Điểm của bạn không đủ, hãy cố gắng tích thêm thật nhiều điểm nhé !');
	}
}