const indexes = Object.freeze([0, 1, 2, 3, 4, 5]);

function addElement(arr) {
    // indexes.push(arr.length);  /=> cannot add, introduces inconsistency

    // create new array to add element.
    return Object.freeze([...arr, arr.length]);
} 

addElement(indexes);  // returns a new array that has  7 items in it.

addElement(addElement(indexes));  // return new array with 8 ...