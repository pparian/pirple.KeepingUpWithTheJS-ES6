// Details:
 
// Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 
// The function should accept 4 parameters:
// value1, label1, value2, label2
// - value1 and value2 should accept positive integers  
// - label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
// For example your function may be called in any of the following ways:
// timeAdder(1,"minute",3,"minutes")
// timeAdder(5,"days",25,"hours")
// timeAdder(1,"minute",240,"seconds")



// Requirements:
// 1. Your function should include at least one switch
// 2. Your function must accept any possible combination of inputs 
// 3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
// return [5,"minutes"]; 
// The exact label you choose to return for label3 ("minutes" for example) is up to you.
// 4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
// timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
// timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
// timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

// Extra Credit:
// Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value
// For example if someone calls:
// timeAdder(20,"hours",4,"hours")
// You could return: [1,"day"] rather than [24,"hours"]
// But if they called
// timeAdder(20,"hours",5,"hours")
// You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.


function timeAdder(value1,label1,value2,label2) {
	// defining an array of possible label values
	const LABELVALUES = ["seconds","minutes","hours","days","second","minute","hour","day"];

	function checkLabel(value,label) {
		switch(label){
			case "second":
				if (value === 1) {
					return true;
				} else {
					return false;
				}
			case "minute":
				if (value === 1) {
					return true;
				} else {
					return false;
				}
			case "hour":
				if (value === 1) {
					return true;
				} else {
					return false;
				}
			case "day":
				if (value === 1) {
					return true;
				} else {
					return false;
				}
			case "seconds":
				if (value >= 1) {
					return true;
				} else {
					return false;
				}
			case "minutes":
				if (value >= 1) {
					return true;
				} else {
					return false;
				}
			case "hours":
				if (value >= 1) {
					return true;
				} else {
					return false;
				}
			case "days":
				if (value >= 1) {
					return true;
				} else {
					return false;
				}
			default:
				return false;;
		}
	};
	function checkInputs(value1,label1,value2,label2) {
		// checking validity of values
		const _value1 = typeof(value1) === 'number' && value1 % 1 === 0 && value1 >= 0 ? value1 : false;
		const _value2 = typeof(value2) === 'number' && value2 % 1 === 0 && value2 >= 0 ? value2 : false;

		// checking validity of labels
		const _label1 = typeof(label1) === 'string' && LABELVALUES.indexOf(label1.toLowerCase()) > -1 ? label1.toLowerCase() : false;
		const _label2 = typeof(label2) === 'string' && LABELVALUES.indexOf(label2.toLowerCase()) > -1 ? label2.toLowerCase() : false;
		if (_value1 && _label1 && _value2 && _label2) {

			const validValue1Label1 = checkLabel(_value1,_label1);
			const validValue2Label2 = checkLabel(_value2,_label2);

			if (validValue1Label1) {
				console.log('Inputs for value1 & label1 to timeAdder are valid');
			} else {
				console.log('Inputs for value1 & label1 to timeAdder are invalid');

			}
			if (validValue2Label2) {
				console.log('Inputs for value2 & label2 to timeAdder are valid');
			} else {
				console.log('Inputs for value2 & label2 to timeAdder are invalid');
			}

			if (validValue1Label1 && validValue2Label2){
				return true;
			} else {
				return false;
			}
			
		} else {
			console.log("Inputs to timeAdder are invalid.");
			if(!_value1 || !_value2){
				console.log("value1 and value2 must be positive integers.");
			}
			if(!_label1 || !_label2){
				console.log("label1 and label2 must be strings that are in the array: ", LABELVALUES);
			}	
			return false;
		}
	};
	function convertToSeconds(value,label) {
		switch(label){
			case "second":
				return value;
			case "minute":
				return value * 60;
			case "hour":
				return value * 60 * 60;
			case "day":
				return value * 60 * 60 * 24;
			case "seconds":
				return value;
			case "minutes":
				return value * 60;
			case "hours":
				return value * 60 * 60;
			case "days":
				return value * 60 * 60 * 24;
			default:
				return false;
		}
	};
	function convertToLargestIntLabel (seconds) {
		let _day = seconds % (60 * 60 * 24) === 0 ? seconds / (60 * 60 * 24) : false;
		let _hour = seconds % (60 * 60) === 0 ? seconds / (60 * 60) : false;
		let _minute = seconds % 60 === 0 ? seconds / 60 : false;
		let _second = seconds % 1 === 0 ? seconds / 1 : false;

		if (_day) {
			switch (_day){
				case 1:
					return [_day,"day"];
				default:
					return [_day,"days"];
			}
		} else if (_hour) {
			switch (_hour){
				case 1:
					return [_hour,"hour"];
				default:
					return [_hour,"hours"];
			}
		} else if (_minute) {
			switch (_minute){
				case 1:
					return [_minute,"minute"];
				default:
					return [_minute,"minutes"];
			}
		} else if (_second) {
			switch (_second){
				case 1:
					return [_second,"second"];
				default:
					return [_second,"seconds"];
			}
		} else {
			return false;
		}
	};
	if (checkInputs(value1,label1,value2,label2)) {
		let _seconds1 = convertToSeconds(value1,label1);
		let _seconds2 = convertToSeconds(value2,label2);
		let totalSeconds = _seconds1 + _seconds2;
		return convertToLargestIntLabel(totalSeconds);
	}
};
let value1 = 2;
let label1 = 'days';
let value2 = 24;
let label2 = 'hours';
console.log('Result of timeAdder(' + value1 + ',' + label1 + ',' + value2 + ',' + label2 + ') is ' + timeAdder(value1,label1,value2,label2));
