

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
 var list_of_names = new Array( 'bob', 'heather', 'john', 'jen' );
 // or this
     list_of_names = ['bob','heather','john','jen'];
 // or this
     list_of_names[0] = 'bob'; 
     list_of_names[1] = 'heather'; 
     list_of_names[2] = 'john'; 
     list_of_names[3] = 'jen'; 

 console.log( list_of_names[0] );
 console.log( list_of_names[3] );
