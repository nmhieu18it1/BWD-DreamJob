

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