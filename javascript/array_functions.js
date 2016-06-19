/*
 * push, pop, shift and unshift example
 *
 */
var m_array = [ 'element_1',
                'element_2',
                'element_3',
                'element_4',
                'element_5'
              ];

// FILL an array with default values:
var new_array = new Array(4);
new_array.fill( 0 );

// SHIFT or Remove the first element
m_array.shift();

// UNSHIFT or Add a new element to the beginning
m_array.unshift('new_element_1');

// POP or Remove the last element
m_array.pop();

// PUSH or Add a new element to the end
m_array.push('new_element_5');

// LENGTH / number of elements in the array 
var arr_len = m_array.length;

// indexOf an element in the array
// returns index of element if present, -1 if not present
var element_pos = m_array.indexOf('element_1');


// lastIndexOf : returns the index of the latest occurance of the value in the array
// returns -1 if element not present
var arr_lio = new Array(4);
arr_lio.fill('test');
arr_lio.lastIndexOf('test');   // returns 3    