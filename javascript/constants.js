
/*
 * Constants are similar to variables in that they
 * hold a value. The BIG DIFFERENCE is that the value
 * of a constant CANNOT change during a script
 *
 */

// Make sure the constant starts with a letter from a-z
const THIS_IS_VALID     = 'Yup, it works';   // VALID
const THIS_IS_VALID_TOO = 'This also works'; // VALID
const 123_NOT_VALID     = 'This wont work';  // INVALID 

console.log( THIS_IS_VALID )    ; //Yup, it works
console.log( THIS_IS_VALID_TOO ); //This also works
