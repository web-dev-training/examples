<?php

/*
 * Constants are similar to variables in that they
 * hold a value. The BIG DIFFERENCE is that the value
 * of a constant CANNOT change during a script
 *
 */

// Make sure the constant starts with a letter from a-z
define('THIS_IS_VALID'    , 'Yup, it works');   // VALID
define('THIS_IS_VALID_TOO', 'This also works'); // VALID
define('123_NOT_VALID'    , 'This wont work');  // INVALID 

print THIS_IS_VALID      ."\n"; //Yup, it works
print THIS_IS_VALID_TOO  ."\n"; //This also works
