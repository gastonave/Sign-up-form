// JavaScript Document

let first = id("first"),
	last = id("last"),
	email = id("email"),
	pw = id("pw"),
	errorMsg = classes("error"),
	form = id("form");

form.addEventListener("submit", (e) =>) {
	e.preventDefault();
	
	engine(first, 0, "First name cannot be empty");
	engine(last, 1, "Last name cannot be empty");
	engine(email, 2, "Email cannot be empty");
	engine(pw, 3, "Password cannot be empty");
					  });

let engine = (id, serial, message) => {
	if (id.value.trim() === "") {
		errorMsg[serial].innerHTML = message;
	}
	else {
		errorMsg[serial].innerHTML = "";
	}
}

