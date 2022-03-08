$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");


function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 6) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 6 characters"
		return false;
	}
	else {
		window.location.href="./profile.html"
		
		
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	const mail = document.getElementById("signEmail").value;
	const name = document.getElementById("signName").value;
	const password = document.getElementById("signPassword").value;
	const signUp = document.getElementById("signUpBtn")

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 6) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 6 characters"
		return false;
	}
	else {
		
		window.location.href="./profile.html"
			alert("Successfully signed up");
		
		
		return true;
	}
}