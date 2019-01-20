// Details:
// You're about to do an assignment called "Fizz Buzz", 
// which is one of the classic programming challenges. 
// It is a favorite for interviewers, 
// and a shocking number of job-applicants can't get it right. 
// But you won't be one of those people. 
// Here are the rules for the assignment (as specified by Imran Gory):
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number 
// and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
// The one hint you'll likely need is: 
// There is a Javascript operator called "remainder" 
// but often referred to as "modulus" or "modulo". 
// It is represented by the percentage sign (%) 
// and it gives you the remainder left over after division. So for example:
// 6 % 3 
// Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:
// 6 % 4
// Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.
// If that was confusing, don't worry. It will make more sense as you use it. 
// The point is: the remainder operator is useful for finding out if X 
// is a multiple of Y. If it is, then X % Y will yield zero. 
// Knowing this should help you complete this assignment without any issue.


// Extra Credit:
// Instead of only printing "fizz", "buzz", and "fizzbuzz", 
// add a fourth print statement: "prime". 
// You should print this whenever you encounter a number that is prime 
// (divisible only by itself and one). 
// As you implement this, don't worry about the efficiency of the algorithm 
// you use to check for primes. It's okay for it to be slow.


function fizzBuzz(maxNum,fizz,buzz){
	function checkPrime(number) {
		let outcome = false;
		const maxLoop = number/2;
		let factorArray = [];
		if (number > 2) {
			for (let i = 2; i <= maxLoop ; i++ ) {
				if (number % i === 0) {
					factorArray.push(i);
				}
			}
			outcome = factorArray.length === 0 ? true : false;
		} else if (number === 2){
			outcome = true;
		}
		return outcome;
	};
	function checkFizzBuzzPrime(number,fizz,buzz) {
		let fizzCheck = number % fizz === 0 ? 'fizz' : false;
		let buzzCheck = number % buzz === 0 ? 'buzz' : false;
		let primeCheck = checkPrime(number) ? 'prime' : false;
		let finalValue;

		if (primeCheck) {
			finalValue = primeCheck;
		} else if (fizzCheck && buzzCheck) {
			finalValue = fizzCheck + buzzCheck;
		} else if (fizzCheck && !buzzCheck) {
			finalValue = fizzCheck;
		} else if (!fizzCheck && buzzCheck) {
			finalValue = buzzCheck;
		} else {
			finalValue = number;
		}
		return finalValue;
	};	

	let num = 1;
	while (num <= maxNum) {
		let result = checkFizzBuzzPrime(num,fizz,buzz);
		console.log(result);
		num += 1;
	}
};

fizzBuzz(100,3,5);



