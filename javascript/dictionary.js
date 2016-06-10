
/*
 * Javascript, out of the box doesnt really have associative
 * arrays. Instead, it uses objects
 *
 * Although the syntax might look similar, the data is
 * stored and accessed differently
 *
 */
var student = []
student['first_name'] = 'Heather';
student['last_name']  = 'Kim';
//or
var student = { first_name: 'Heather',
                last_name:  'Kim' };

// Print the values
console.log( student['first_name']); //Heather
console.log( student['last_name']);  //Kim

//Change first name
student['first_name'] = 'Bob';

//Print the values
console.log( student['first_name']); //Bob
console.log( student['last_name']);  //Kim
