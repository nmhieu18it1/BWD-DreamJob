
var tf = 1;
function showhide() {
	// body...
	var btn = document.getElementById("btnshowhide");
	var ct = document.querySelector("#div01 h2");
	if (btn.getAttribute("value") == "Show") {
		btn.setAttribute("value","Hide");
	}
	else {
		btn.setAttribute("value","Show");
	}
	if (ct.getAttribute("class") == "show") {
		ct.setAttribute("class", "hide");
	}
	else {
		ct.setAttribute("class","show");
	}
}
function inner() {
	// body...
	tf = -tf;
	var obj = document.querySelector('#div01 h2');
	if (tf == -1) {
		obj.innerHTML = "Today is not a good day !"
	}
	else {
		obj.innerHTML = "Today is a good day !"
	}
// console.log(obj.outerHTML);
}
function conf() {
			// body...
			var result = confirm("Are You Sure ?");
			if (result == true) {
				alert("You choose OK !");
			}
			else {
				alert("You choose Cancel !");
			}
		};
		function prom() {
			// body...
			var result = prompt("Please tell me your AGE ?" , "0");
			var con = confirm("You age: " + result + ", Is it right?");
			if (con == true) {
				alert("Thank You !");
			}
			else {
				alert("Could You Reinput?");
			}
		};
		function str() {
			// body...
			var str1 = new String("Minh Hieu...");
			var str2 = "Nguyen Minh Hieu.";
			console.log(str1);
			console.log(str2.toLowerCase());
			// var result = confirm("Do you want to log str2 ?");
			// if(result == true) {
			// 	console.log(str2);
			// }
			// var result02 = prompt("How long do you want for str2 ?" , str2.length);
			// for (var i = 0; i <= result02; i ++) {
			// 	console.log(str2[i]);
			// }
			var result03 = prompt("What are you looking for ?");
			console.log(str2.indexOf(result03));
		};
		
		function love() {
			// body...
			// var choose = prompt("Who do you love ?\n 1. James Bond\n 2. Huge Jackman\n 3. Chris Evans");
			var message = {
				first: "James",
				last: "Bond",
				showName: function() {
					return this.first + " " + this.last;
				}
			}
			console.log(message.showName());
		};

		function datelog() {
			var date = new Date('09/20/2017');
			console.log(date);
			console.log(date.getDay());
		};
		function arr() {
			var ar01 = [1, 2, 3, 7, 10];
			var ar02 = new Array('one', 'two', 'three');
			for (var i = 0; i < ar01.length; i ++) {
				console.log(ar01[i]);
			}
			for (var i = 0; i < ar02.length; i ++) {
				console.log(ar02[i]);
			}
			console.log(ar02.join('-'));
		};
		function cal() {
			// body...
			function add(a, b) {
				return a+b;
			}
			return add;
		};
		function calcu() {
			// body...
			var a = cal();
			console.log(a(10,20));
		};