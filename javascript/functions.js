/*
 * Lets define a function. As in the previous post/example
 * we use the keyword, give the function a name and put some
 * meat in the body
 *
 */
function showWord() {
    console.log('Hello World');
}


//Call the function
showWord(); // Hello World


/*
 * Now lets modify the function, and pass an argument
 */
function showWordAgain( word_to_print ) {
    console.log( word_to_print ); //print the argument
}


//Call the function, with an argument
showWordAgain('Hello Again'); // prints "Hello Again"


// inner / nested functions
function outer_function() {          //parent of inner_function ()
    var test = 10;                   // outer_function()'s variable ie. parent function variable and parameters

    function inner_function() {      // nested / inner functions have access to the parent function's variables
        test = 30;                   // modifying parent function's variable
    }

    console.log(test);                // prints outer_function() test value -> 10
    inner_function();                 // call to inner_function()
    console.log(test);                // prints outer_function() test value -> 30 (modified by inner function)
}
outer_function();    //call to outer_function()



// inner / nested functions with parameter
function outer_function(param_var) {          //parent of inner_function ()
    var test = param_var;                   // outer_function()'s variable = parameter 

    function inner_function() {      // nested / inner functions have access to the parent function's variables and parameters
        test = 30;                               // modifying parent function's variable
        var test_2 = param_var;                  // using parent function's parameter
        console.log(test_2);                     // prints parameter to parent function from within child function
    }

    console.log(test);                // prints outer_function() test value -> 40
    inner_function();                 // call to inner_function()
    console.log(test);                // prints outer_function() test value -> 30 (modified by inner function)
}
outer_function('40');    //call to outer_function() with 40 as parameter
