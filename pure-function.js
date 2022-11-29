// Pure function = easy to test, easy to predict. Always returns the same result & same input.

// Only works with the data passed to it, no external data.

function add(x, y) {
    return x + y;
}

add(1, 2); // 3
add(1, 2); // 3

// Impure
function add2(x, y) {  // external data = console, not passed to function.
    console.log(x + y);  // produces obseverable side effect = writes something to console.
    return x + y;
}

add(1, 2); // 3

// impure functions are ok, try to write pure functions as much as possible.