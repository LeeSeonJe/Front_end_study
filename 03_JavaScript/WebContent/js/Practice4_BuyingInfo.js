function getInform() {
	var buyList = document.getElementById("buyList");
	var text = buyList.getElementsByTagName('label');
	var inform = buyList.getElementsByTagName('input');
	var textarea = buyList.getElementsByTagName('textarea');
	var getInformDiv = document.getElementById("getInform");
	getInformDiv.innerHTML = "";
	var str = "";

	for (var i = 0; i < inform.length; i++) {
		str += text[i].textContent + inform[i].value + "<br>";
	}
	str += text[text.length - 1].textContent + textarea[0].value;
	getInformDiv.innerHTML = str;
}