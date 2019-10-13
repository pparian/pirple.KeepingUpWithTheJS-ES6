// Homework Assignment #11: Exceptions

// Details:
// For this assignment you're going to build a simple function and then reinforce it with 
// some defensive code (to bullet-proof it against throwing exceptions).
// The function should be called "reverseJsonArray" and it should accept one string, 
// and return either a string or false.

// When called successfully, the function:
// 1. Accepts one parameter: a string. A JSON-stringified version of a Javascript Array
// 2. Parses the JSON to obtain the Array
// 3. Reverses the order of the the items in the Array
// 4. JSON-stringifies the result, and returns it.

// If for some reason the function cannot do the above 
// (because it is passed a parameter that is not a JSON-stringified version of an array), 
// it should return false. The function should never throw an exception.

// For example: if we call like so:
//     reverseJsonArray('["a","b","c"]')
// We would expect this value to be returned:
//     '["c","b","a"]'
// Alternatively, if we called it like so:
//     reverseJsonArray(123);
// We would expect it to return false.

// Extra Credit:
// Below your function, include 10+ examples of how the function can be invoked and will 
// return the correct value. Specifically make sure you include examples of the function being called:
// 1. Without any arguments
// 2. With a boolean as the argument
// 3. With an Array (non-stringified) as the argument
// 4. With a string argument that is not properly formatted JSON
// 5. With a stringified-array that only has one value
// 6. With a stringified-array that is empty
// 7. With a stringified-array that has an even-number of values
// 8. With a stringified-array that has an odd-number of values

// If you're unfamiliar with JSON: 
// JSON stands of Javascript Object Notation, and it's a way of converting Javascript objects 
// (including Arrays) to strings. To convert items from JS to JSON, you can use this function:
//     JSON.stringify()
// To convert JSON back to Javascript use:
//     JSON.parse()

// Video Component:
// Make a screencast showing off the code you wrote for this assignment. 
// Walk us through your file(s), line by line, explaining what the code means and why you wrote it 
// the way you did. Then, execute your code within your IDE to show off the required functionality. 
// If you're comfortable doing so, please narrate as you go and explain what you're showing us.


let myArray = ["a","b","c"];
let jsonArray = JSON.stringify(myArray);

const reverseJsonArray = (jsonArray) => {
    let inputType = typeof(jsonArray);
    try {
        if (inputType === "string") {
            let inputParsed = JSON.parse(jsonArray);
            let objType = inputParsed.constructor.name;
            if (objType === "Array") {
                return JSON.stringify(inputParsed.reverse());
            } else {
                throw `Error. Stringified object is ${objType} format.`;
            }
        } else {
            throw "Error. Input not in string format.";
        }
    } catch (error) {
        console.log(error);
        return false;
    }

};

// 1. Without any arguments
console.log("1. Without any arguments");
console.log(reverseJsonArray());
// 2. With a boolean as the argument
console.log("2. With a boolean as the argument");
console.log(reverseJsonArray(true));
// 3. With an Array (non-stringified) as the argument
console.log("3. With an Array (non-stringified) as the argument");
console.log(reverseJsonArray([1,2,3]));
// 4. With a string argument that is not properly formatted JSON
console.log("4. With a string argument that is not properly formatted JSON");
let myJsonStringifed = JSON.stringify({first: "hello", second: "world"});
console.log(reverseJsonArray(myJsonStringifed));
// 5. With a stringified-array that only has one value
console.log("5. With a stringified-array that only has one value");
console.log(reverseJsonArray('["a"]'));
// 6. With a stringified-array that is empty
console.log("6. With a stringified-array that is empty");
console.log(reverseJsonArray('[]'));
// 7. With a stringified-array that has an even-number of values
console.log("7. With a stringified-array that has an even-number of values");
console.log(reverseJsonArray('[1,2,3,4]'));
// 8. With a stringified-array that has an odd-number of values
console.log("8. With a stringified-array that has an odd-number of values");
console.log(reverseJsonArray('["a","b","c","d","e"]'));