
let userEmail;

const generateStartButtons = () => {
	document.getElementById("start-buttons-div").style.display = "inline";
}
const generateSignUpForm = () => {
	document.getElementById("sign-up-div").style.display = "inline";
};
const generateLogInForm = () => {
	document.getElementById("log-in-div").style.display = "inline";
};
const generateAccountSettingsForm = () => {
	document.getElementById("account-settings-div").style.display = "inline";
};
const generateCreateNewListForm = () => {
	document.getElementById("create-new-list-div").style.display = "inline";
};
const generateDashboard = async (email) => {
	document.getElementById("dashboard-div").style.display = "inline";
	const userData = await JSON.parse(localStorage.getItem(email));
	document.getElementById("dashboard-header").innerText = await "Welcome to your Dashboard "
		+ userData.firstName +"!";
};

const logSignUpData = async (event) => {
	event.preventDefault();
	const target = event.target;
	console.log(target);
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

	if (localStorage.getItem(email) === null){
		await localStorage.setItem(email,JSON.stringify(userInfo));
		generateDashboard(email);
		userEmail = email;
	} else {
		alert("Email already exists!");
	}	

	console.log(userInfo);
	document.getElementById("sign-up-div").style.display = "none";
};
const logLogInData = (event) => {
	event.preventDefault();
	const target = event.target;
	console.log(target);
	let email = document.getElementById("email-logIn").value;
	let password = document.getElementById("password-logIn").value;
	let userInfo = {};

	userInfo.email = email;
	userInfo.password = password;

	console.log(userInfo);
	if (localStorage.getItem(email) != null && password === userInfo.password){
		generateDashboard(email);
		document.getElementById("log-in-div").style.display = "none";
		userEmail = email;
	} else {
		alert("Email or Password does not match!");
	}	
};
const logAccountSettingsData = async (event) => {
	event.preventDefault();
	const target = event.target;
	console.log(target);
	let email = document.getElementById("email-accountSettings").value;
	let firstName = document.getElementById("firstName-accountSettings").value;
	let lastName = document.getElementById("lastName-accountSettings").value;
	let password = document.getElementById("password-accountSettings").value;
	let lists = {};
	let userInfo = {};

	userInfo.firstName = firstName;
	userInfo.lastName = lastName;
	userInfo.password = password;
	userInfo.lists = lists;

	console.log(userInfo);
	if (email === userEmail){
		await localStorage.setItem(email,JSON.stringify(userInfo));
		generateDashboard(email);
		document.getElementById("account-settings-div").style.display = "none";
	} else {
		alert("Email does not match!");
	}	
};
const addListName = async (event) => {
	event.preventDefault();
	const createNewListDiv = await document.getElementById("create-new-list-div");
	const newUL = await document.createElement("ul");
	await newUL.setAttribute("class","List");
	await newUL.setAttribute("id","new-list") 
	newUL.innerText = await document.getElementById("listName-createNewList").value;
	await createNewListDiv.appendChild(newUL);
	// await console.log(document.getElementById("listName-createNewList").value);
	// await console.log("Added ListName");
};
const addPoint = async (event) => {
	event.preventDefault();
	const newList = await document.getElementById("new-list");
	const newLI = await document.createElement("li");
	await newLI.setAttribute("class","Point");
	newLI.innerText = await document.getElementById("point-createNewList").value;
	await newList.appendChild(newLI);
	console.log("Added Point");
};
const logNewListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	const createNewListDiv = await document.getElementById("create-new-list-div");
	if (target.id === "save-createNewList") {
		const listToSave = document.getElementById("new-list");
		const listName = document.getElementById("new-list").innerText;
		console.log(listToSave);
		console.log(listName);
		console.log("Saved List");
		createNewListDiv.removeChild(listToSave);
	}
};
const cancelSignUpLogInAccountSettingsList = (event) => {
	const target = event.target;
	if (target.id === "cancel-signUp"){
		document.getElementById("sign-up-div").style.display = "none";
		generateStartButtons();
	} else if (target.id === "cancel-logIn"){
		document.getElementById("log-in-div").style.display = "none";
		generateStartButtons();
	} else if (target.id === "cancel-accountSettings"){
		document.getElementById("account-settings-div").style.display = "none";
		document.getElementById("dashboard-div").style.display = "inline";
	} else if (target.id === "cancel-createNewList"){
		document.getElementById("create-new-list-div").style.display = "none";
		document.getElementById("dashboard-div").style.display = "inline";
	} 
};

const dashboardDivEvent = (event) => {
	event.preventDefault();
	const target = event.target;
	if (target.id === "log-out") {
		userEmail = null;
		location.reload();
	} else if (target.id === "account-settings") {
		document.getElementById("dashboard-div").style.display = "none";
		generateAccountSettingsForm();
	} else if (target.id === "create-to-do-list") {
		document.getElementById("dashboard-div").style.display = "none";
		generateCreateNewListForm();
	}
};

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

// Event Listeners

// Start Up Buttons
document.getElementById("start-buttons-div").addEventListener("mouseup",triggerEvent);

// Sign Up Form
document.getElementById("sign-up-form").addEventListener("submit",logSignUpData);
document.getElementById("sign-up-form").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);

// Log In Form
document.getElementById("log-in-form").addEventListener("submit",logLogInData);
document.getElementById("log-in-form").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);

// Dashboard Buttons
document.getElementById("dashboard-div").addEventListener("mouseup",dashboardDivEvent);

// Account Settings Form
document.getElementById("account-settings-form").addEventListener("submit",logAccountSettingsData);
document.getElementById("account-settings-form").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);

// Create New List Form
document.getElementById("add-listname-form").addEventListener("submit",addListName);
document.getElementById("add-point-form").addEventListener("submit",addPoint);
document.getElementById("create-new-list-div").addEventListener("mouseup",logNewListData);
document.getElementById("create-new-list-div").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);