<?php
/*
 * push, pop, shift and unshift example
 *
 */
$m_array = [ 'element_1',
             'element_2',
             'element_3',
             'element_4',
             'element_5'
           ];

// SHIFT or Remove the first element
array_shift( $m_array );
// UNSHIFT or Add a new element to the beginning
array_unshift( $m_array, 'new_element_1' );
// POP or Remove the last element
array_pop($m_array);
// PUSH or Add a new element to the end
array_push($m_array, 'new_element_5');




