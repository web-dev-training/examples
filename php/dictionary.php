<?php

/*
 * Associative arrays are the same as arrays, the big
 * difference is that the key is a string, instead of a number
 *
 * The difference here is that you can reference a key by its name.
 * This also means the key name MUST be unique
 *
 * Example:
 */
$student = array( 'first_name' => 'Heather',
                  'last_name'  => 'Kim',
                );
//or
$student['first_name'] = 'Heather';
$student['last_name']  = 'Kim';

// Print the values
print $student['first_name']; // Heather
print $student['last_name'];  // Kim 

// Change first name to something else
$student['first_name'] = 'Bob';

// Print the values
print $student['first_name']; // Bob
print $student['last_name'];  // Kim
