function checkedAll() {
	var chkAll = document.getElementById('chkAll');
	var chk = document.getElementsByName('chk');
	if (chkAll.checked) {
		for ( var i in chk) {
			chk[i].checked = true;
		}
	} else {
		for ( var i in chk) {
			chk[i].checked = false;
		}
	}
}

function categorySel() {
	var category = document.getElementById('category');
	category.innerHTML = "";
	var chk = document.getElementsByName('chk');
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].checked) {
			category.innerHTML += chk[i].value + " ";
		}
	}
}

function isChk() {
	var chk = document.getElementsByName('chk');
	var chkAll = document.getElementById('chkAll');
	var count = 0;
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].checked) {
			count++;
		}
	}
	if (count == chk.length) {
		chkAll.checked = true;
	} else {
		chkAll.checked = false;

	}
}