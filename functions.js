// Details:
 
// Let's go back to your syllogism (logical argument) examples from Homework #3. 
// Now it's time to turn those loose bits of logic into functions. 
// Rather than having procedure that demonstrates that Socrates is mortal, 
// you should create a function that accepts a name and returns a boolean (True or False) 
// representing whether that name identifies a man who is mortal or not. 
// Your function to gracefully handle unexpected inputs 
// (such as an unrecognized name or a name that is a not a string at all) 
// without throwing an exception.


// Extra Credit:
// If you did the extra credit on Homework #3, 
// let's turn that example into a function as well. It should accept in 2 arguments:
// 1. An array of all cake possibilities (vanilla or chocolate)
// 2. A boolean representing whether or not the cake is chocolate.
// It should return a string indicating the actual flavor of the cake.


let men = ['Socrates','Peter','Paul'];
let nameCheck = 'Socrates';

function checkIfMan(name,menArray) {
	let _name = typeof(name) === 'string' ? name : false;
	let manResult;
	if(_name){
		if(menArray.indexOf(_name) > -1){
			manResult = true;
		}
		else {
			manResult = false
		}
	}
	else {
		console.log("Name given must be a string!")
		console.log("Name given is a " + typeof(name))
		manResult = false;
	}
	return manResult;
}

function printManCheck(name,menArray=men){
	var manResult = checkIfMan(name,menArray);
	if(manResult){
		console.log(name + " is a man!");
	}
	else {
		console.log(name + " is not a man!");
	}
}
printManCheck(nameCheck);
