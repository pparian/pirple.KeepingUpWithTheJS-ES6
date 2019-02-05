
const mainBody = document.body;

const containerDiv = document.createElement("div");
containerDiv.setAttribute("id","container");
containerDiv.setAttribute("class","container");

mainBody.appendChild(containerDiv);

const signUpButton = document.createElement("button");
signUpButton.setAttribute("class","startButton");
signUpButton.setAttribute("id","sign-up");
signUpButton.innerText = "Sign Up";
containerDiv.appendChild(signUpButton);

const logInButton = document.createElement("button");
logInButton.setAttribute("class","startButton");
logInButton.setAttribute("id","log-in");
logInButton.innerText = "Log In";
containerDiv.appendChild(logInButton);

function generateDashboard(email){
	let userData = JSON.parse(localStorage.getItem(email));

	// create dashboard div
	const dashboard = document.createElement("div");
	dashboard.setAttribute("class","dashboard");
	dashboard.setAttribute("id","dashboard");
	containerDiv.appendChild(dashboard);

	// create dashboard heading
	const dashboardHead = document.createElement("h1");
	dashboard.innerText = "Welcome to " + userData.firstName + "'s Dashboard!";

	// creating logOut button
	const logOutButton = document.createElement("button");
	logOutButton.setAttribute("class","logOutButton");
	logOutButton.setAttribute("id","log-out");
	logOutButton.innerText = "Log Out";
	dashboard.appendChild(logOutButton);

	// creating 'Create new to-do list' button
	const createListButtonPara = document.createElement("p");
	createListButtonPara.setAttribute("id","create-todo-list-button-paragraph");
	dashboard.appendChild(createListButtonPara);

	const createListButton = document.createElement("button");
	// createListButton.setAttribute("type","submit");
	createListButton.innerText = "Create To-Do List";
	createListButtonPara.appendChild(createListButton);

};

function generateSignUpForm(){
	// creating sign up form
	const signUpForm = document.createElement("form");
	signUpForm.setAttribute("class","signUpForm");
	signUpForm.setAttribute("id","sign-up-form");
	signUpForm.setAttribute("method","post");
	containerDiv.appendChild(signUpForm);

	// creating firstname input
	const fNamePara = document.createElement("p");
	fNamePara.setAttribute("id","first-name-paragraph");
	signUpForm.appendChild(fNamePara);

	const fNameLabel = document.createElement("label");
	fNameLabel.setAttribute("for","firstName");
	fNameLabel.innerText = "First Name: ";
	fNamePara.appendChild(fNameLabel);

	const firstName = document.createElement("input");
	firstName.setAttribute("type","text");
	firstName.setAttribute("name","firstName");
	firstName.setAttribute("id","firstName-signUp");
	firstName.setAttribute("required","true");
	fNamePara.appendChild(firstName);

	// creating lastname input
	const lNamePara = document.createElement("p");
	lNamePara.setAttribute("id","last-name-paragraph");
	signUpForm.appendChild(lNamePara);

	const lNameLabel = document.createElement("label");
	lNameLabel.setAttribute("for","lastName");
	lNameLabel.innerText = "Last Name: ";
	lNamePara.appendChild(lNameLabel);

	const lastName = document.createElement("input");
	lastName.setAttribute("type","text");
	lastName.setAttribute("name","lastName");
	lastName.setAttribute("id","lastName-signUp");
	lastName.setAttribute("required","true");
	lNamePara.appendChild(lastName);

	// creating email input
	const emailPara = document.createElement("p");
	emailPara.setAttribute("id","email-paragraph");
	signUpForm.appendChild(emailPara);

	const emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	emailLabel.innerText = "Email: ";
	emailPara.appendChild(emailLabel);

	const email = document.createElement("input");
	email.setAttribute("type","email");
	email.setAttribute("name","email");
	email.setAttribute("id","email-signUp");
	email.setAttribute("required","true");
	emailPara.appendChild(email);

	// creating password input
	const passwordPara = document.createElement("p");
	passwordPara.setAttribute("id","password-paragraph");
	signUpForm.appendChild(passwordPara);

	const passwordLabel = document.createElement("label");
	passwordLabel.setAttribute("for","password");
	passwordLabel.innerText = "Password: ";
	passwordPara.appendChild(passwordLabel);

	const password = document.createElement("input");
	password.setAttribute("type","password");
	password.setAttribute("name","password");
	password.setAttribute("id","password-signUp");
	password.setAttribute("required","true");
	passwordPara.appendChild(password);

	// creating terms checkbox input
	const termsPara = document.createElement("p");
	termsPara.setAttribute("id","terms-paragraph");
	signUpForm.appendChild(termsPara);

	const termsLabel = document.createElement("label");
	termsLabel.setAttribute("for","terms");
	termsLabel.innerText = "I agree to the Terms of Use: ";
	termsPara.appendChild(termsLabel);

	const terms = document.createElement("input");
	terms.setAttribute("type","checkbox");
	terms.setAttribute("name","terms");
	terms.setAttribute("id","terms-signUp");
	terms.setAttribute("required","true");
	termsPara.appendChild(terms);

	// creating submit button
	const submitButtonPara = document.createElement("p");
	submitButtonPara.setAttribute("id","submit-button-paragraph");
	signUpForm.appendChild(submitButtonPara);

	const submitButton = document.createElement("button");
	submitButton.setAttribute("type","submit");
	submitButton.innerText = "Submit";
	submitButtonPara.appendChild(submitButton);

	function logSignUpInput(event){
		event.preventDefault();
		let firstName = document.getElementById("firstName-signUp").value;
		let lastName = document.getElementById("lastName-signUp").value;
		let email = document.getElementById("email-signUp").value;
		let password = document.getElementById("password-signUp").value;
		let terms = document.getElementById("terms-signUp").value;
		let userInfo = {};

		userInfo.firstName = firstName;
		userInfo.lastName = lastName;
		userInfo.email = email;
		userInfo.password = password;
		userInfo.terms = terms;

		// console.log(email,localStorage.getItem(email));

		// console.log(userInfo);
		
		if (localStorage.getItem(email) === null){
			localStorage.setItem(email,JSON.stringify(userInfo));
			generateDashboard(email);
			signUp.style.display = "none";
		} else {
			alert("Email or Password does not match!");
		}		

	};

	const signUp = document.getElementById("sign-up-form");
	signUp.addEventListener("submit", logSignUpInput);

	

}

function generateLogInForm(){
	// creating sign up form
	const logInForm = document.createElement("form");
	logInForm.setAttribute("class","logInForm");
	logInForm.setAttribute("id","log-in-form");
	logInForm.setAttribute("method","post");
	containerDiv.appendChild(logInForm);

	// creating email input
	const emailPara = document.createElement("p");
	emailPara.setAttribute("id","email-paragraph");
	logInForm.appendChild(emailPara);

	const emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	emailLabel.innerText = "Email: ";
	emailPara.appendChild(emailLabel);

	const email = document.createElement("input");
	email.setAttribute("type","email");
	email.setAttribute("name","email");
	email.setAttribute("id","email-logIn");
	email.setAttribute("required","true");
	emailPara.appendChild(email);

	// creating password input
	const passwordPara = document.createElement("p");
	passwordPara.setAttribute("id","password-paragraph");
	logInForm.appendChild(passwordPara);

	const passwordLabel = document.createElement("label");
	passwordLabel.setAttribute("for","password");
	passwordLabel.innerText = "Password: ";
	passwordPara.appendChild(passwordLabel);

	const password = document.createElement("input");
	password.setAttribute("type","password");
	password.setAttribute("name","password");
	password.setAttribute("id","password-logIn");
	password.setAttribute("required","true");
	passwordPara.appendChild(password);

	// creating submit button
	const submitButtonPara = document.createElement("p");
	submitButtonPara.setAttribute("id","submit-button-paragraph");
	logInForm.appendChild(submitButtonPara);

	const submitButton = document.createElement("button");
	submitButton.setAttribute("type","submit");
	submitButton.innerText = "Submit";
	submitButtonPara.appendChild(submitButton);

	function logLogInInput(event){
		event.preventDefault();
		let email = document.getElementById("email-logIn").value;
		let password = document.getElementById("password-logIn").value;

		let userData = JSON.parse(localStorage.getItem(email));

		if (localStorage.getItem(email) != null && password === userData.password){
			generateDashboard(email);
			logIn.style.display = "none";
		} else {
			alert("Email or Password does not match!");
		}		
	};

	const logIn = document.getElementById("log-in-form");
	logIn.addEventListener("submit", logLogInInput);
}

function triggerEvent(event){
	const target = event.target;
	if (target.className === "startButton"
		&& target.id === "sign-up"){
		console.log(target);
		generateSignUpForm();

	} else if (target.className === "startButton"
				&& target.id === "log-in"){
		console.log(target);
		generateLogInForm();
	}
	const buttons = document.getElementsByClassName("startButton");
	for(prop of buttons){
		prop.style.display = "none";
	}

};

document.addEventListener("mouseup",triggerEvent);