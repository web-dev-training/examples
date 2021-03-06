/*
 * Lets define a function. As in the previous post/example
 * we use the keyword, give the function a name and put some
 * meat in the body
 *
 */
function showWord()
{
    console.log('Hello World');
}

//Call the function
showWord(); // Hello World

/*
 * Now lets modify the function, and pass an argument
 */
function showWordAgain( word_to_print )
{
    console.log( word_to_print ); //print the argument
}

//Call the function, with an argument
showWordAgain('Hello Again'); // prints "Hello Again"
