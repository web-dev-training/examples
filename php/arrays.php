<?php

/*
 * Example of an array (ordered list) of names
 *
 * 0 = bob
 * 1 = heather
 * 2 = john
 * 3 = jen
 *
 * Arrays can be created in different ways,
 * such as:
 */
$list_of_names = array( 'bob', 'heather','john','jen' );
// or this 
$list_of_names = ['bob','heather','john','jen'];
// or this
$list_of_names[0] = 'bob';
$list_of_names[1] = 'heather';
$list_of_names[2] = 'john';
$list_of_names[3] = 'jen';

/*
 * print the first element
 */
print $list_of_names[0] . "\n"; // bob
print $list_of_names[3] . "\n"; // jen 
