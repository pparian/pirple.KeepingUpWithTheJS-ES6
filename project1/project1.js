
let userEmail = null;
let listToEdit = null;
let editFormActive = false;
console.log(userEmail);
console.log(listToEdit);

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
const saveEditField = (event) => {
	event.preventDefault();
	const target = event.target;
	const inputEdit = document.getElementById("edit-input").value;
	console.log(inputEdit);
	console.log("Saved Edit!");
	const editListItem = target.parentElement;
	const editListForm = document.getElementById("edit-form");
	const deleteEditListFormButton = document.getElementById("delete-editInput");
	const cancelEditListFormButton = document.getElementById("cancel-editInput");
	editListItem.innerText = inputEdit;
	editFormActive = false;
	// editListItem.removeChild(editListForm);
	// editListItem.removeChild(deleteEditListFormButton);
	// editListItem.removeChild(cancelEditListFormButton);
};
const deleteEditField = (event) => {
	event.preventDefault();
	const target = event.target;
	if (target.id === "delete-editInput") {
		const editListItem = target.parentElement;
		const editList = editListItem.parentElement;
		editList.removeChild(editListItem);
		console.log("Deleted Field!");
		editFormActive = false;
	}
};
const generateEditList = async (list) => {
	document.getElementById("edit-list-div").style.display = "inline";
	const editListDiv = document.getElementById("edit-list-div");
	console.log("Editting list name: " + list);
	const userData = await JSON.parse(localStorage.getItem(userEmail));
	let listName = await document.createElement("h3");
	await listName.setAttribute("class","editListName");
	await listName.setAttribute("id","edit-list-name");
	let listElement = document.createElement("ul");
	await listElement.setAttribute("class","editList");
	await listElement.setAttribute("id","edit-list");
	listName.innerText = await list;
	for (let item in userData.lists[list]) {
		console.log(userData.lists[list][item]);
		let listItem = document.createElement("li");
		await listItem.setAttribute("class","editListItem");
		await listItem.setAttribute("id",Math.floor(Math.random()*1000 + 1));
		listItem.innerText = userData.lists[list][item];
		listElement.appendChild(listItem);
	};
	await editListDiv.appendChild(listName);
	await editListDiv.appendChild(listElement);
};
const generateEditListForm = async (event) => {
	event.preventDefault();
	const target = await event.target;
	let targetId;
	if (target.className === "editListItem" && target.className !== "editForm") {
		if (!editFormActive){
			console.log("Clicked on Name.")
			console.log(target.id);
			editFormActive = true;
			targetId = target.id;
			const toBeEdited = document.getElementById(targetId);
			const editForm = document.createElement("form");
			editForm.setAttribute("class","editForm");
			editForm.setAttribute("id","edit-form");
			const editInput = document.createElement("input");
			editInput.setAttribute("type","text");
			editInput.setAttribute("id","edit-input");
			editInput.setAttribute("required","true");
			const saveEdit = document.createElement("button");
			saveEdit.setAttribute("type","submit");
			saveEdit.setAttribute("id","save-editInput");
			saveEdit.innerText = "Save";
			const removeEdit = document.createElement("button");
			removeEdit.setAttribute("type","button");
			removeEdit.setAttribute("id","delete-editInput");
			removeEdit.innerText = "Delete";
			const cancelEdit = document.createElement("button");
			cancelEdit.setAttribute("type","button");
			cancelEdit.setAttribute("id","cancel-editInput");
			cancelEdit.innerText = "Cancel";
			await editForm.appendChild(editInput);
			await editForm.appendChild(saveEdit);
			await toBeEdited.appendChild(editForm);
			await toBeEdited.appendChild(removeEdit);
			await toBeEdited.appendChild(cancelEdit);
			await editForm.addEventListener("submit",saveEditField);
		} else {
			alert("Complete current edit form!");
		}
	} else if (target.id === "edit-list-name" && target.className !== "editForm") {
		if (!editFormActive){
			console.log("Clicked on Name.")
			console.log(target.id);
			editFormActive = true;
			targetId = target.id;
			const toBeEdited = document.getElementById(targetId);
			const editForm = document.createElement("form");
			editForm.setAttribute("class","editForm");
			editForm.setAttribute("id","edit-form");
			const editInput = document.createElement("input");
			editInput.setAttribute("type","text");
			editInput.setAttribute("id","edit-input");
			editInput.setAttribute("required","true");
			const saveEdit = document.createElement("button");
			saveEdit.setAttribute("type","submit");
			saveEdit.setAttribute("id","save-editInput");
			saveEdit.innerText = "Save";
			const cancelEdit = document.createElement("button");
			cancelEdit.setAttribute("type","button");
			cancelEdit.setAttribute("id","cancel-editInput");
			cancelEdit.innerText = "Cancel";
			await editForm.appendChild(editInput);
			await editForm.appendChild(saveEdit);
			await toBeEdited.appendChild(editForm);
			await toBeEdited.appendChild(cancelEdit);
			await editForm.addEventListener("submit",saveEditField);
		} else {
			alert("Complete current edit form!");
		}
	}
};
const generateLists = (listObj) => {
	const dashboardListDiv = document.getElementById("dashboard-list-div");
	const userLists = listObj;
	async function buildList(list){
		let listDiv = document.createElement("div");
		listDiv.setAttribute("class","toDoList");
		listDiv.setAttribute("id",list);
		let listHeader = document.createElement("h3")
		let listElement = document.createElement("ul");
		let editListButton = document.createElement("button");
		editListButton.setAttribute("class","editListButton");
		editListButton.innerText = "Edit List";
		listHeader.innerText = list;
		listDiv.appendChild(listHeader);
		listDiv.appendChild(listElement);
		listDiv.appendChild(editListButton);
		for (let item in userLists[list]) {
			console.log(userLists[list][item]);
			let listItem = document.createElement("li");
			listItem.innerText = userLists[list][item];
			listElement.appendChild(listItem);
		};
		dashboardListDiv.appendChild(listDiv);
	};
	if(JSON.stringify(userLists) != "{}"){
		console.log("Lists have data!");
		dashboardListDiv.innerText = "";
		for (let list in userLists){
			console.log("The Title of this list is " + list);
			buildList(list);
		}
	} else {
		console.log("There are not lists");
		setTimeout(() => {
			dashboardListDiv.innerText = "There are no lists";
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
	const checkListName = await document.getElementById("listName-createNewList").value;
	const currentListNames = await JSON.parse(localStorage.getItem(userEmail)).lists;
	if (checkListName in currentListNames) {
		alert("List name exists. Pick another list name.")
	} else {
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
	}
};
const addPoint = async (event) => {
	event.preventDefault();
	try {
		const newUL = await document.getElementById("new-list");
		const newLI = await document.createElement("li");
		await newLI.setAttribute("class","Point");
		newLI.innerText = await document.getElementById("point-createNewList").value;
		await newUL.appendChild(newLI);
		console.log("Added Point");
	} catch (error) {
		console.log(error);
		alert("Add list name first.");
	}
};
const logNewListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	const createNewListDiv = await document.getElementById("create-new-list-div");
	if (target.id === "save-createNewList") {
		const listNameHeader = await document.getElementById("list-name");
		const listName = await listNameHeader.innerText;
		const listToSave = await document.getElementById("new-list");
		const listElements = await listToSave.getElementsByClassName("Point");
		if (listElements.length === 0) {
			alert("Add items before saving to-do list!");
		} else {
			const listArray = await [];
			for (i = 0; i < listElements.length; i++) {
				await listArray.push(listElements[i].innerText);
			}
			await console.log(listName);
			await console.log(listArray);
			await console.log("Saved List");
			await createNewListDiv.removeChild(listNameHeader);
			await createNewListDiv.removeChild(listToSave);
			const testObj = await {listName: listArray};
			await console.log(testObj);
			const userData = await JSON.parse(localStorage.getItem(userEmail));
			userData.lists[listName] = await listArray;
			console.log(userData.lists);
			await localStorage.setItem(userEmail,JSON.stringify(userData));
			document.getElementById("create-new-list-div").style.display = await "none";
			await generateDashboard(userEmail);
		}
	}
};
const editListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	if (target.className === "editListButton") {
		document.getElementById("dashboard-div").style.display = "none";
		listToEdit = target.parentElement.id;
		generateEditList(listToEdit);
	}	
};
const addPointEditList = async (event) => {
	event.preventDefault();
	const editUL = await document.getElementById("edit-list");
	const listElements = editUL.getElementsByClassName("editListItem");
	const editLI = await document.createElement("li");
	await editLI.setAttribute("class","editListItem");
	await editLI.setAttribute("id","newItem" + Math.floor(Math.random()*1000 + 1));
	editLI.innerText = await document.getElementById("point-editList").value;
	await editUL.appendChild(editLI);
	console.log("Added Point");
};
const logEditListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	if (target.id === "save-editList"){
		const checkListName = await document.getElementById("edit-list-name").value;
		const currentListNames = await JSON.parse(localStorage.getItem(userEmail)).lists;
		if (checkListName !== listToEdit && checkListName in currentListNames) {
			alert("New list name exists. Pick another list name.")
		} else {
			const editListDiv = document.getElementById("edit-list-div");
			console.log("Saved edited list!");
			const listNameHeader = document.getElementById("edit-list-name");
			const listName = listNameHeader.innerText;
			const listToSave = document.getElementById("edit-list");
			const listElements = listToSave.getElementsByClassName("editListItem");
			const listArray = [];
			for (i = 0; i < listElements.length; i++) {
				listArray.push(listElements[i].innerText);
			}
			editListDiv.removeChild(listNameHeader);
			editListDiv.removeChild(listToSave);
			const testObj = {listName: listArray};
			console.log(testObj);
			const userData = await JSON.parse(localStorage.getItem(userEmail));
			await delete userData.lists[listToEdit];
			userData.lists[listName] = await listArray;
			await localStorage.setItem(userEmail,JSON.stringify(userData));
			document.getElementById("edit-list-div").style.display = "none";
			generateDashboard(userEmail);
			listToEdit = null;
		}
	}
};
const deleteListData = async (event) => {
	await event.preventDefault();
	const target = await event.target;
	if (target.id === "delete-editList"){
		console.log("Deleted list!");
		const userData = await JSON.parse(localStorage.getItem(userEmail));
		await delete userData.lists[listToEdit];
		await localStorage.setItem(userEmail,JSON.stringify(userData));
		document.getElementById("edit-list-div").style.display = "none";
		generateDashboard(userEmail);
		listToEdit = null;
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
	} else if (target.id === "cancel-editList"){
		document.getElementById("edit-list-div").style.display = "none";
		const editListDiv = document.getElementById("edit-list-div");
		const listNameHeader = document.getElementById("edit-list-name");
		const listToSave = document.getElementById("edit-list");
		editListDiv.removeChild(listNameHeader);
		editListDiv.removeChild(listToSave);
		generateDashboard(userEmail);
		listToEdit = null;
	} else if (target.id === "cancel-editInput"){
		const editListItem = target.parentElement;
		const editListForm = document.getElementById("edit-form");
		const cancelEditListFormButton = document.getElementById("cancel-editInput");
		if (editListItem.className === "editListItem") {
			const deleteEditListFormButton = document.getElementById("delete-editInput");
			editListItem.removeChild(deleteEditListFormButton);	
		}
		editListItem.removeChild(editListForm);
		editListItem.removeChild(cancelEditListFormButton);
		editFormActive = false;
		console.log("Cancelled Edit!");
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
document.getElementById("dashboard-list-div").addEventListener("mouseup",editListData);

// Account Settings Form
document.getElementById("account-settings-form").addEventListener("submit",logAccountSettingsData);
document.getElementById("account-settings-form").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);

// Create New List Form
document.getElementById("add-listname-form").addEventListener("submit",addListName);
document.getElementById("add-point-form").addEventListener("submit",addPoint);
document.getElementById("create-new-list-div").addEventListener("mouseup",logNewListData);
document.getElementById("create-new-list-div").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);

// Edit List Form
document.getElementById("edit-list-div").addEventListener("mouseup",logEditListData);
document.getElementById("edit-list-div").addEventListener("mouseup",deleteListData);
document.getElementById("edit-list-div").addEventListener("mouseup",generateEditListForm);
document.getElementById("edit-list-div").addEventListener("mouseup",cancelSignUpLogInAccountSettingsList);
document.getElementById("edit-list-div").addEventListener("mouseup",deleteEditField);
document.getElementById("add-point-edit-list-form").addEventListener("submit",addPointEditList);
