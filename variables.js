
// Details:
// What are the differences between let, const and var? When would each be appropriate too use? In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. If English is not your native language, feel free to write in whatever language you prefer. Just please note which language it is at the top of the assignment, so we know how to translate it
// Create a file called variables.js and add your explanation as comments at the top of the page.
// Then, within the document write 3 code examples (1 for var, 1 for const and 1 for let) showcasing the use-cases you explained above.

// Extra Credit:
// To earn extra credit, add an explanation of "hoisting" to the top of your document. What is hoisting? What does the word mean, and how does hoisting work in Javascript?

var, let and const are signals that define how a object (everything is an object in JS) operates.

let and const are new to ES6.

var was the only signal prior to ES6.

/********************************************************************/
/********************************************************************/
// Var
var when defined globally can be called everywhere.
eg.
Running the below code:
	var myName = "Peter";

	function sayMyName(myName) {
		console.log(myName);
	};

	sayMyName(myName);

Results in the below output:
	Peter

var when defined within a 'scope'/function cannot be called globally (unless specified).
eg. 
Running the below code:
	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		var reallyChangeName = true;
		if (reallyChangeName) {
			var myName = "Paul";
		}
	};

	changeMyName();
	sayMyName(myName);

Results in the below output:
	ReferenceError: myName is not defined

if sayMyName function was called within changeMyName function, then we would get the desired output.
eg. 
Running the below code:
	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		var reallyChangeName = true;
		if (reallyChangeName) {
			var myName = "Paul";
		}
		sayMyName(myName);
	};

	changeMyName();

Results in the below output:
	Paul


some unwanted side effects can occur when define a var as myName globally, then defined another var as myName within a function.
eg.
Running the below code:
	var myName = "Peter";

	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		var reallyChangeName = true;
		if (reallyChangeName) {
			var myName = "Paul";
		}
	};

	changeMyName();
	sayMyName(myName);

Results in the below output:
	Peter

this is because when myName is defined within a function, it bound to that scope.

/********************************************************************/
/********************************************************************/
// Let
let is more strict that var in the sense that in can only be called within it's block it has been defined in.
this makes it easier to control how our code will operate
eg. 
Running the below code:
	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		let reallyChangeName = true;
		if (reallyChangeName) {
			let myName = "Paul";
		}
		sayMyName(myName);
	};

	changeMyName();

Results in the below output:
	ReferenceError: myName is not defined

if sayMyName function was called within the if statement block, then we would get the desired output.
eg. 
Running the below code:
	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		let reallyChangeName = true;
		if (reallyChangeName) {
			let myName = "Paul";
			sayMyName(myName);
		}		
	};

	changeMyName();

Results in the below output:
	Paul

another way to do this is to define the variable within the outer block of the function
eg. 
Running the below code:
	function sayMyName(myName) {
		console.log(myName);
	};
	function changeMyName() {
		let reallyChangeName = true;
		let myName
		if (reallyChangeName) {
			myName = "Paul";			
		}
		sayMyName(myName);
	};

changeMyName();

Results in the below output:
	Paul

/********************************************************************/
/********************************************************************/
// Const
const operates similar to let, however once defined as const, the identifier cannot be reassigned another value.
most common place to use const is when defining dependencies in your code via require
eg. 
	const Module1 = require('./Module1');

if the identifier is then assigned value, it will result in an error.
eg.
Running the below code:
	const MY_CONSTANT = 2;
	MY_CONSTANT = 3;

Results in the below output:
	TypeError: Assignment to constant variable.

but once defined, the identifier can by mutated (ie. strings, arrays, objects);
eg.
Running the below code:
	const myPerson = {
		name: "Peter"
	};
	myPerson.name = "Paul"
	myPerson.height = "175cm"
	
	console.log(myPerson);

Results in the below output:
	{ name: 'Paul', height: '175cm' }
