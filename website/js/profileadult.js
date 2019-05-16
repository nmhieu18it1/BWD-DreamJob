
function showlistkid01() {
	// body...
	var listkid = document.getElementById('listkid');
	listkid.style.height = '280px';
	listkid.style.width = '200px';
	listkid.style.opacity = '1';
	var iconkid = document.getElementById('iconkid');
	iconkid.style.opacity = '1';
	iconkid.style.backgroundColor = 'white';
	var iconkid01 = document.querySelector('#iconkid i');
	iconkid01.style.color = '#222222';
}
function hidelistkid01() {
	var listkid = document.getElementById('listkid');
	listkid.style.height = '0';
	listkid.style.width = '0px';
	listkid.style.opacity = '0';
	var iconkid = document.getElementById('iconkid');
	iconkid.style.opacity = '0.5';
	iconkid.style.backgroundColor = '#222222';
	var iconkid01 = document.querySelector('#iconkid i');
	iconkid01.style.color = 'white';	
}

function amnhac() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Âm nhạc';
	dacdiem.innerHTML = 'Bạn có thể chơi một nhạc cụ<br>Bạn thường nghe nhạc ở nhà<br>Bạn thường hay gõ nhịp theo điệu nhạc<br>Bạn thường hay huýt sao hay nhẩm theo một giai điệu<br>Bạn thích có nhạc khi đang làm việc';
	xuhuong.innerHTML = '&#8249&#8249 Đây là những người luôn có cảm hứng và bắt nhịp tốt với nhịp điệu, giai điệu và âm sắc. Họ có năng khiếu hát, chơi nhạc cụ hay soạn nhạc như nhạc sỹ, ca sỹ. &#8250&#8250';
	congviec.innerHTML = '- Nhạc sĩ, ca sĩ, giáo viên âm nhạc, nhà soạn nhạc<br>- Chuyên viên trị liệu bằng âm nhạc<br>- Giám đốc sản xuất âm nhạc';
}
function khonggian() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Không gian';
	dacdiem.innerHTML = 'Bạn thường hiểu và trân trọng các môn nghệ thuật<br>Bạn thường ghi nhận những sự kiện quan trọng bằng máy chụp hình và máy quay phim<br>Bạn thường vẽ vời khi phải ghi chép hoặc suy nghĩ<br>Bạn thích chơi các game về hình ảnh như ghép hình và mê cung<br>Bạn thường chia sẻ quan điểm của mình bằng sơ đồ hoặc hình ảnh<br>Bạn thích đọc những tài liệu có hình ảnh minh họa';
	xuhuong.innerHTML = '&#8249&#8249 Những người thông minh về không gian có khả năng khái niệm hóa và thao tác giỏi trong các môn về không gian có quy mô lớn như phi công, thủy thủ, hoặc các dạng không gian dạng khu vực đơn giản hơn như kiến trúc sư, người chơi cờ vua… &#8250&#8250';
	congviec.innerHTML = '- Trang trí nội thất, Thiết kế đồ họa, Thiết kế thời trang<br>- Nhiếp ảnh gia, Họa sĩ, Quay phim<br>- Hướng dẫn viên du lịch';
}
function thiennhien() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Thiên nhiên';
	dacdiem.innerHTML = 'Bạn có hoặc thích thú nuôi trong nhà<br>Bạn có thể nhận ra và nhớ tên nhiều loại cây và hoa khác nhau<br>Bạn thích chăm sóc cây cảnh, vườn tượt<br>Bạn am hiểu và có hứng thú đối với những vấn đề về môi trường toàn cầu<br>Bạn cho rằng bảo toàn tài nguyên và đạt được sự phát triển bền vững là những vấn đề lớn lao nhất của con người hiện nay';
	xuhuong.innerHTML = '&#8249&#8249 Những người này có khả năng phân biệt được những liên quan, tác động của mọi sự việc đến môi trường tự nhiên. Họ yêu thích khám phá, và luôn tìm hiểu về thiên nhiên, thích làm những công việc gắn bó với thiên nhiên. &#8250&#8250';
	congviec.innerHTML = '- Hướng dẫn viên du lịch, Người huấn luyện thú<br>- Bác sĩ thú y, Nhà bảo tồn học<br>- Đầu bếp';
}
function ngonngu() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Ngôn ngữ';
	dacdiem.innerHTML = 'Đối với bạn các môn ngoại ngữ như tiếng Anh rât đơn giản.<br>Cảm thấy mình là người giỏi kể chuyện hoặc viết văn giỏi.<br>Trong trường bạn thích nhất các môn như tiếng anh và các môn xã hội<br>Bạn thường chiếm ưu thế trong các cuộc tranh luận hoặc cãi vã<br>Bạn thích nói chuyện để giải quyết vấn đề, giải thích cho những giải pháp cũng như đặt nhiều câu hỏi';
	xuhuong.innerHTML = '&#8249&#8249 Những người thuộc dạng này luôn nhạy cảm với ý nghĩa của từ, trật tự giữa các từ, âm thanh, nhịp điệu, vần luật như người viết văn, nhà thơ, nhà báo, các biên tập viên. &#8250&#8250';
	congviec.innerHTML = '- Nhà thơ, nhà báo, nhà văn<br>- Giáo viên dạy ngôn ngữ<br>- Diễn viên hài, phát thanh viên, bình luận viên';
}
function noitam() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Nội tâm';
	dacdiem.innerHTML = 'Bạn viết một cuốn nhật ký hay blog để ghi lại những suy nghĩ của mình<br>Bạn thường dành những thời gian yên tĩnh syu nghĩ những vấn đề quan trọng trong cuộc sống của mình<br>Bạn thích tự mình đi câu cá hay léo núi, bạn thấy thoải mái khi ở một mình<br>Bạn làm việc cho chính mình hoặc rất tập trung suy ngẫm khi làm những việc của bản thân';
	xuhuong.innerHTML = '&#8249&#8249 Nhóm người này khá nhạy cảm với cảm xúc, mục tiêu của chính họ. Có thể nói họ giỏi phát triển điểm mạnh của bản thân. Những người này không thể hiện ở nghề nghiệp cụ thể, nhưng họ có thể tự đưa ra những quyết định của riêng mình trong tương lai, và luôn chấp nhận đối mặt với kết quả của nó dù là tốt hay xấu. &#8250&#8250';
	congviec.innerHTML = '- Tâm lý học, Nhà trị liệu, Triết gia<br>- Lãnh đạo tổ chức, Chủ doanh nghiệp<br>- Chuyên viên chăm sóc sức khỏe thần kinh';
}
function logic() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Logic - Toán học';
	dacdiem.innerHTML = 'Bạn thích làm việc với những con số và tính nhẩm rất tốt<brBạn có nhiều hứng thú với các tiến bộ khoa học mới nhất<br>Bạn thích thú với những thức thách của các trò chơi trí tuệ hoặc toán đố cần nhiều suy nghĩ logic<br>Bạn thường là người tìm ra các điểm vô lý trong những việc người nói hoặc làm<br>Toán và các môn tự nhiên là những môn học yêu thích của bạn trong trường';
	xuhuong.innerHTML = '&#8249&#8249 Những người có tính logic về toán học thì họ luôn có khả năng khái niệm hóa mối quan hệ giữa các hành động hoặc biểu tượng một cách logic như nhà toán học hay các nhà khoa học. &#8250&#8250';
	congviec.innerHTML = '- Lập trình viên, kỹ sư máy tính<br>- Kế toán, ngân hàng, bảo hiểm<br>- Nghiên cứu khoa học, Công tố viên, nhà logic học';
}
function tuongtac() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Tương tác';
	dacdiem.innerHTML = 'Bạn rất tự tin làm quen với một người chưa từng gặp, đặc biệt là bạn khác giới.<br>Bạn thích làm việc với những người khác trong một nhóm<br>Bạn thích trò chơi có sự tham gia của nhiều người như cờ tỷ phú, cá ngựa<br>Bạn là một người thích giao tiếp. bạn thích tham dự một bữa tiệc hơn là ở nhà xem ti vi một mình';
	xuhuong.innerHTML = '&#8249&#8249 Những người này luôn có khả năng liên kết, hòa nhập tốt với người khác, dễ dàng bắt được cảm xúc, tâm trạng và chủ động trong mối quan hệ của họ, những người này có thể là nhà tâm lý học, những người đàm phán. &#8250&#8250';
	congviec.innerHTML = '- Lãnh đạo tổ chức, Chủ doanh nghiệp<br>- Chuyên viên chăm sóc sức khỏe thần kinh';
}
function vandong() {
	// body...
	var title = document.querySelector('#inteltitle');
	var dacdiem = document.getElementById('dacdiem');
	var xuhuong = document.getElementById('xuhuong');
	var congviec = document.getElementById('congviec');
	title.innerHTML = 'Vận động';
	dacdiem.innerHTML = 'Bạn tham gia thể thao hoặc tham gia biểu diễn múa thể dục, võ hoặc những môn tương tự<br>Bạn có xu hướng tự tay thực hiện những việc thủ công lắp ráp<br>Bạn thích suy nghĩ những vấn đề khi đang chạy hoặc đi bộ<br>Bạn không ngại nhảy trước một đám đông<br>Bạn thích những trò chơi mạo hiểm tại các hội chợ/ trung tâm vui chơi giải trí<br>Môn học thích thú nhất tại trường của bạn là môn thể dục & thủ công kỹ thuật<br>Bạn thích chơi những trò chơi nghịch ngợm và phá bĩnh với trẻ con';
	xuhuong.innerHTML = '&#8249&#8249 Những người này có khả năng phân biệt được những liên quan, tác động của mọi sự việc đến môi trường tự nhiên. Họ yêu thích khám phá, và luôn tìm hiểu về thiên nhiên, thích làm những công việc gắn bó với thiên nhiên. &#8250&#8250';
	congviec.innerHTML = '- Hướng dẫn viên du lịch, Người huấn luyện thú<br>- Bác sĩ thú y, Nhà bảo tồn học<br>- Đầu bếp';
}
function muaqua() {
	// body...
	var tenevent = document.getElementById('tenevent');
	var thoigian = document.getElementById('thoigian');
	var ngay = document.getElementById('ngay');
	var noidung = document.getElementById('noidung');
	tenevent.innerHTML = 'Mua quà';
	thoigian.innerHTML = '15h00';
	ngay.innerHTML = '13/06/2019';
	noidung.innerHTML = 'Mua một món quà có ý nghĩa dành tặng bạn Mary nhân ngày sinh nhật.';
}
function sinhnhat() {
	// body...
	var tenevent = document.getElementById('tenevent');
	var thoigian = document.getElementById('thoigian');
	var ngay = document.getElementById('ngay');
	var noidung = document.getElementById('noidung');
	tenevent.innerHTML = 'Sinh nhật bạn';
	thoigian.innerHTML = '20h00';
	ngay.innerHTML = '14/06/2019';
	noidung.innerHTML = 'Sinh nhật Jackie 36/4 Hà Nội. Nhớ đi đúng giờ.';
}
function vietthu() {
	// body...
	var tenevent = document.getElementById('tenevent');
	var thoigian = document.getElementById('thoigian');
	var ngay = document.getElementById('ngay');
	var noidung = document.getElementById('noidung');
	tenevent.innerHTML = 'Viết thư';
	thoigian.innerHTML = '21h00';
	ngay.innerHTML = '10/06/2019';
	noidung.innerHTML = 'Viết thư cho bố mẹ.';
}
