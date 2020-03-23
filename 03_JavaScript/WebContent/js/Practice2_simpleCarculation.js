function calc() {
	var num1 = document.getElementById("num1").value;
	var category = document.getElementById('category');
	var index = category.options['selectedIndex'];
	var option = category.options[index].value
	var num2 = document.getElementById("num2").value;
	var resultDiv = document.getElementById("result")
	var result = 0;
	if (option == "+") {
		result = Number(num1) + Number(num2);
	} else if (option == "-") {
		result = Number(num1) - Number(num2);
	} else if (option == "*") {
		result = Number(num1) * Number(num2);
	} else if (option == "/") {
		result = Number(num1) / Number(num2);
	} else if (option == "%") {
		result = Number(num1) % Number(num2);
	}
	if (result == Infinity || result == -Infinity || isNaN(result)) {
		resultDiv.style.color = "white"
		resultDiv.value = "입력오류"
		resultDiv.style.backgroundColor = "red"
	} else {
		resultDiv.style.color = ""
		resultDiv.style.backgroundColor = ""
		resultDiv.value = result + " ";
	}
}