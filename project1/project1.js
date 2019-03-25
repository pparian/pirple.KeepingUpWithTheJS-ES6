

const generateSignUpForm = () => {
	document.getElementById("sign-up-div").style.display = "inline";
};
const generateLogInForm = () => {
	document.getElementById("log-in-div").style.display = "inline";
};
const logSignUpData = (event) => {
	event.preventDefault();
	const target = event.target;
	console.log(target)
	let firstName = document.getElementById("firstName-signUp").value;
	let lastName = document.getElementById("lastName-signUp").value;
	let email = document.getElementById("email-signUp").value;
	let password = document.getElementById("password-signUp").value;
	let terms = document.getElementById("terms-signUp").value;
	let lists = {};
	let userInfo = {};

	userInfo.firstName = firstName;
	userInfo.lastName = lastName;
	userInfo.email = email;
	userInfo.password = password;
	userInfo.terms = terms;
	userInfo.lists = lists;

	console.log(userInfo);
	document.getElementById("sign-up-div").style.display = "none";
	document.getElementById("dashboard-div").style.display = "inline";
};
const logLogInData = (event) => {
	event.preventDefault();
	const target = event.target;
	console.log(target)
	let email = document.getElementById("email-logIn").value;
	let password = document.getElementById("password-logIn").value;
	let userInfo = {};

	userInfo.email = email;
	userInfo.password = password;

	console.log(userInfo);
	document.getElementById("log-in-div").style.display = "none";
	document.getElementById("dashboard-div").style.display = "inline";
};
const cancelSignUpLogIn = (event) => {
	const target = event.target;
	console.log(target)
	if (target.id === "cancel-signUp"){
		document.getElementById("sign-up-div").style.display = "none";
		document.getElementById("start-buttons-div").style.display = "inline";
	} else if (target.id === "cancel-logIn"){
		document.getElementById("log-in-div").style.display = "none";
		document.getElementById("start-buttons-div").style.display = "inline";
	} 
}

const triggerEvent = (event) => {
	const target = event.target;
	if (target.id === "sign-up"){
		console.log(target);
		document.getElementById("start-buttons-div").style.display = "none";
		generateSignUpForm();
	} else if (target.id === "log-in"){
		console.log(target);
		document.getElementById("start-buttons-div").style.display = "none";
		generateLogInForm();
	} 
};

document.getElementById("start-buttons-div").addEventListener("mouseup",triggerEvent);

document.getElementById("sign-up-form").addEventListener("submit",logSignUpData);
document.getElementById("sign-up-form").addEventListener("mouseup",cancelSignUpLogIn);

document.getElementById("log-in-form").addEventListener("submit",logLogInData);
document.getElementById("log-in-form").addEventListener("mouseup",cancelSignUpLogIn);