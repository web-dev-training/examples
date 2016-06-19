

/*
 * store an integer in a variable (whole number)
 */
var var_int_1 = 12;
var var_int_2 = 12;

/*
 * store a floating point in a variable
 */
var var_float = 12.5;

/*
 * Do some math
 */
var answer_1 = var_int_1 + var_int_2;
var answer_2 = var_int_1 + var_int_2 + var_float;

console.log( answer_1 ); // prints 24
console.log( answer_2 ); // prints 36.5 

/*
 * shorter math
*/
answer_1 += 10;   // same as: answer_1 = answer_1 + 10;
answer_1 -= 5;   // same as: answer_1 = answer_1 - 5;
answer_2 *= answer_1;   // same as  : answer_2 = answer_2 * answer_1;
answer_2 /= answer_1;   // same as : answer_2 = answer_2 / answer_1;

/*
 * unary operators - only 1 operand
*/

answer_1++;   // same as: answer_1 += 1;   OR   answer_1 = answer_1 + 1;
answer_2--;   // same as: answer_2 -= 1;   OR   answer_1 = answer_2 - 1;