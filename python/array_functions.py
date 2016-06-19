#
# Python doesnt have the same push, pop
# shift and unshift methods/functions.
# 
# So we have to use insert, append and pop
# instead
#
list_of_names = ['element_1',
                 'element_2',
                 'element_3',
                 'element_4',
                 'element_5'];

# Remove the first element (0)
list_of_names.pop(0);
# Insert an item in the beginning
list_of_names.insert(0, 'new_element_1')
# Remove an item from the end (length of list - 1)
list_of_names.pop(len(list_of_names)-1)
# Append an item to the end
list_of_names.append('new_element_5')
