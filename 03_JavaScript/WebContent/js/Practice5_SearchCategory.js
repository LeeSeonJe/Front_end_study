function sel(btn) {
	var titleDiv = document.getElementById("title");
	var termDiv = document.getElementById("term");
	var authorDiv = document.getElementById("author");
	if (btn.value == "title") {
		titleDiv.style.display = "block";
		termDiv.style.display = "none";
		authorDiv.style.display = "none";
	} else if (btn.value == "term") {
		titleDiv.style.display = "none";
		termDiv.style.display = "block";
		authorDiv.style.display = "none";
	} else if (btn.value == "author") {
		titleDiv.style.display = "none";
		termDiv.style.display = "none";
		authorDiv.style.display = "block";
	}
}