// Details:

// Let's look at a popular logical argument (a syllogism)

// All men are mortal
// Socrates is a man.
// Therefore, socrates is mortal.

// Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.


// Extra Credit:

// Got the hang of creating a logical argument? Want to try another one? Try this one as well:

// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.

let socrates = {
	name: "Socrates",
	man: true,
}

function checkIfMan(obj) {
	let manObj = typeof(obj) === 'object' ? obj : false;
	let manName;
	let manMortal;

	if(manObj){
		console.log('All men are mortal');
		manName = typeof(obj.name) === 'string' ? obj.name : false;
		manFlag = typeof(obj.man) === 'boolean' ? obj.man : undefined;

		if(manName && typeof(manFlag) !== 'undefined'){

			if (manFlag){
				console.log(manName + " is a man.");
				manMortal = true;
				manObj.mortal = manMortal;
				console.log("Therefore, "+ manName +" is a mortal.")
			}
			else {
				console.log(manName + " is not a man.");
			}

		}
		else {
			console.log('Person has incorrect keys.');
			console.log('Person.name must exist and be a string.');
			console.log('Person.man must exist and be a boolean.');
		}
		
	}
	else {
		console.log('Person needs to be object');
	}

};

checkIfMan(socrates);