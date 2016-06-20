

/*
 * store a string a variable 
 */
var var_string_1 = 'My name is : ';
var var_string_2 = 'Bob!';


/*
 * concatenate and store the values of two variables in 
 * a third variable using 
 * string concatenation operator '+'
 */
var var_string_3 = var_string_1 + var_string_2;


/*
 * print the values
 */
console.log(var_string_1); // My name is :
console.log(var_string_2); // Bob!
console.log(var_string_3); // My name is : Bob!


/*
 * String functions
 *  Strings are immutable, therefore my_str.someFunction() will not change the original string
 *  Modified strings have to be assigned to some variable. my_str = my_str.someFunction() will work.
*/
var my_str = 'test string';


// length
my_str.length;


// access a character by its position in the string
my_str[0]  // first character
my_str[200]   // will return 'undefined' if character at index 200 (ie. character #201) does not exist
   //OR
my_str.charAt(0);
my_str.charAt(200);   // will return '' (no character) better; avoid undefined errors


// convert to upper case
my_str = my_str.toUpperCase();  
   // capitalize a letter
my_str = my_str.charAt(0).toUpperCase();


//convert to lower case
my_str.toLowerCase();


// slicing a string (forwards)
var new_str = my_str.slice(4); // slice( (number) ) the string will have 'number' characters removed from the start
// ie. first four characters removed


//slicing a string (backwards)
new_str = my_str.slice(-4) // slice( -number ) will have 'number' characters removed from the end of string
// ie. last 4 characters removed


// Capitalize the first letter of a string
my_str = my_str.charAt(0).toUpperCase() + my_str.slice(1);
// will capitalize the first letter of the string
// explaination: 
// Convert the character at the first letter of the string (index : 0) to uppercase
// and append it to the string sliced at position 1 (ie. the first character removed)
// = Capitalized first letter + (original string (minus) the first letter)


// capitalizations on other letters: 
// slice the stirng backwards, capitalize the letter, append the first portion, the capital letter, and the rest of string
