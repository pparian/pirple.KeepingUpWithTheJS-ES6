
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
const generateLists = (listObj) => {
	const listDiv = document.getElementById("dashboard-list-div");
	const userLists = listObj;
	async function buildList(list){
		let listElement = document.createElement("ul");
		listElement.setAttribute("class","to-do-list");
		listElement.setAttribute("id",list);
		listElement.innerText = list;
		listDiv.appendChild(listElement);
		for (let item in userLists[list]) {
			console.log(userLists[list][item]);
			let listItem = document.createElement("li");
			listItem.innerText = userLists[list][item];
			listElement.appendChild(listItem);
		};
	};
	if(JSON.stringify(userLists) != "{}"){
		console.log("Lists have data!");
		listDiv.innerText = "";
		for (let list in userLists){
			console.log("The Title of this list is " + list);
			buildList(list);
		}
	} else {
		console.log("There are not lists");
		setTimeout(() => {
			listDiv.innerText = "There are no lists";
		}, 20);
	}
}
const generateDashboard = async (email) => {
	document.getElementById("dashboard-div").style.display = "inline";
	const userData = await JSON.parse(localStorage.getItem(email));
	console.log(userData);
	document.getElementById("dashboard-header").innerText = await "Welcome to your Dashboard "
		+ userData.firstName +"!";
	generateLists(userData.lists);
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
	const userData = await JSON.parse(localStorage.getItem(userEmail));
	let email = document.getElementById("email-accountSettings").value;
	let firstName = document.getElementById("firstName-accountSettings").value;
	let lastName = document.getElementById("lastName-accountSettings").value;
	let password = document.getElementById("password-accountSettings").value;

	userData.firstName = firstName;
	userData.lastName = lastName;
	userData.password = password;

	console.log(userData);
	if (email === userEmail){
		await localStorage.setItem(email,JSON.stringify(userData));
		generateDashboard(email);
		document.getElementById("account-settings-div").style.display = "none";
	} else {
		alert("Email does not match!");
	}	
};
const addListName = async (event) => {
	event.preventDefault();
	const createNewListDiv = await document.getElementById("create-new-list-div");
	const listName = await document.createElement("h3");
	await listName.setAttribute("class","listName");
	await listName.setAttribute("id","list-name");
	listName.innerText = await document.getElementById("listName-createNewList").value;
	await createNewListDiv.appendChild(listName);
	const newUL = await document.createElement("ul");
	await newUL.setAttribute("class","List");
	await newUL.setAttribute("id","new-list");
	await createNewListDiv.appendChild(newUL);
};
const addPoint = async (event) => {
	event.preventDefault();
	const newUL = await document.getElementById("new-list");
	const newLI = await document.createElement("li");
	await newLI.setAttribute("class","Point");
	newLI.innerText = await document.getElementById("point-createNewList").value;
	await newUL.appendChild(newLI);
	console.log("Added Point");
};
const logNewListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	const createNewListDiv = await document.getElementById("create-new-list-div");
	if (target.id === "save-createNewList") {
		const listNameHeader = document.getElementById("list-name");
		const listName = listNameHeader.innerText;
		const listToSave = document.getElementById("new-list");
		const listElements = listToSave.getElementsByClassName("Point");
		const listArray = [];
		for (i = 0; i < listElements.length; i++) {
			listArray.push(listElements[i].innerText);
		}
		console.log(listName);
		console.log(listArray);
		console.log("Saved List");
		createNewListDiv.removeChild(listNameHeader);
		createNewListDiv.removeChild(listToSave);
		const testObj = {listName: listArray};
		console.log(testObj);
		const userData = await JSON.parse(localStorage.getItem(userEmail));
		userData.lists[listName] = await listArray;
		await localStorage.setItem(userEmail,JSON.stringify(userData));
		document.getElementById("create-new-list-div").style.display = "none";
		generateDashboard(userEmail);
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
		generateDashboard(userEmail);
	} else if (target.id === "cancel-createNewList"){
		document.getElementById("create-new-list-div").style.display = "none";
		generateDashboard(userEmail);
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