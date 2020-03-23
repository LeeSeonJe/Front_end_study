var user = "user01";
var userIdFlag = false;
var userPwdFlag = false;

function moveFocus(next) {
	if (event.keyCode == 13) {
		document.getElementById(next).focus();
		chkPwd();
	}
}

function inputName() {
	var userId = document.getElementById("userId"); 
	var chkMassage = document.getElementsByTagName('label')[1];
	if (user == userId.value) {
		chkMassage.style.color = "red"
		chkMassage.innerHTML = "이미 존재하는 아이디입니다."
		userIdFlag = false;
	} else if (user != userId.value) {
		chkMassage.style.color = "green"
		chkMassage.innerHTML = "사용 가능한 아이디입니다."
		userIdFlag = true;
	}
	if (isEmpty(userId)) {
		chkMassage.innerHTML = "";
		userIdFlag = false;
	}
}

function chkPwd() {
	var userPwd = document.getElementById("userPwd");
	var checkPwd = document.getElementById("checkPwd");
	var chkMassage = document.getElementsByTagName('label')[4];
	if (userPwd.value == checkPwd.value) {
		chkMassage.style.color = "green"
		chkMassage.innerHTML = "비밀번호가 일치합니다."
		userPwdFlag = true;
	} else {
		chkMassage.style.color = "red"
		chkMassage.innerHTML = "비밀번호가 일치하지 않습니다."
		userPwdFlag = false;
	}
	if (isEmpty(userPwd) || isEmpty(checkPwd)) {
		chkMassage.innerHTML = "";
		userPwdFlag = false;
	}
}

function singUp() {
	chkPwd();
	var userId = document.getElementById("userId");
	var userPwd = document.getElementById("userPwd");
	var checkPwd = document.getElementById("checkPwd");
	var userName = document.getElementById("userName");
	if (isEmpty(userId)) {
		alert("아이디를 입력하세요.");
		userId.focus();
	} else if (isEmpty(userPwd) || isEmpty(checkPwd)) {
		alert("비밀번호를 입력하세요.");
		userPwd.focus();
	} else if (isEmpty(userName)) {
		alert("이름을 입력하세요.");
		userName.focus();
	} else if (userIdFlag == false) {
		alert("사용할 수 없는 아이디입니다.")
		userId.focus();
		userId.value = "";
	} else if (userPwdFlag == false) {
		alert("비밀번호가 일치하지 않습니다.")
		checkPwd.focus();
		checkPwd.value = "";
	} else {
		alert("회원가입을 축하드립니다.")
	}
}

function isEmpty(input) {
	if (input.value.trim('') == "")
		return true;
	return false;
}