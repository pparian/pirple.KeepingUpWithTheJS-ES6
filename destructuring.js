// Homework Assignment #10: Destructuring

// Details:
// What is the differences between destructuring an object and destructuring an array? 
// When would each be appropriate too use? In your own words, 
// write 1 - 2 paragraphs explaining the different use-cases for each. 
// If English is not your native language, feel free to write in whatever language you prefer. 
// Just please note which language it is at the top of the assignment, so we know how to translate it.

// Create a file called destructuring.js and add your explanation as comments at the top of the page.

// Then, within the document write 2 code examples (1 for objects, 1 for arrays) 
// showcasing the use-cases you explained above.

// Extra Credit:
// To earn extra credit, add explanations and examples for destructuring nested objects 
// (objects within objects), and nested arrays (arrays within arrays).

// Video Component:
// Make a screencast showing off the code examples you wrote for this assignment. 
// Walk us through your file(s), line by line, explaining what the code means and why you wrote it 
// the way you did. 
// If you're comfortable doing so, please narrate as you go and explain what you're showing us.

/********************/

// Destructuring
/*
  Destructuring is a method of extracting values from data stored in objects and arrays.

  When destructuring an object, the left-hand side also needs to be written with curly brackets.
  This is called the object pattern of destructuring.
  i.e. 
  const myObj = {first: "Peter", last: "Parian"};
  const {first, last} = myObj;
        // first = "Peter", last = "Parian"
  
  Keys must always be used whenever extracting data from an object.
  However, the key can be mapped to a new variable name.
  i.e.
  const myObj = {first: "Peter", last: "Parian"};
  const {first: f, last: l} = myObj;
        // f = "Peter", l = "Parian"    

  When destructuring an array, the left-hand side is written with square brackets.
  This is called the array pattern of destructuring.
  i.e. 
  const myArr = ["Peter", "Parian'];
  const [first, last] = myArr;
        // first = "Peter", last = "Parian"
  
  Arrays also do not have keys, so the data in arrays can be extracted and assigned to any variable.
  i.e. 
  const myArr = ["Peter", "Parian'];
  const [f, l] = myArr;
        // f = "Peter", l = "Parian"

  The example code shown so far (for both objects and arrays) uses destructuring for variable assignments.
  Other use cases include:
   - Selecting what is needed from array or object
     i.e.
     Object Destructuring
     const myObj = {first: 'Peter', last: 'Parian'};
     const {first} = myObj;
        // first = 'Peter', last = undefined
     
     Array Destructuring
     const myArr = [1, 2, 3, 4];
     const [,, c, d];
        // c = 3, d = 4

   - Splitting arrays
     i.e.
     const myArr = [1, 2, 3];
     const [a, ...b] = [myArr];
        // a = 1, b = [2, 3]
  
  Special cases include:
   - Source property extraction
     You can use the object pattern of destructuring to access the properties of variable.
     The object pattern coerces the source into an object, then is used to get the properties.
     i.e.
     const {length: len} = 'abc';
        // len = 3
     const {toString: s} = 123;
        // s = Number.prototype.toString;
*/
