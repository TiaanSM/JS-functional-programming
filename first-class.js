function add(x, y) {
    return x + y;
}

const add = function(x, y) {
    return x + y;
}

function greet(salutation, firstname) {
    return `${salutation} ${firstname}`;
}

const greet = function(salutation) {
    return function(firstname) {
        return `${salutation} ${firstname}`;
    }
};

const howdy = greet('Howdy');
const hello = greet('Hello');

hello('Jim');
howdy('Ben');

// Think of Functions as being objects,
// can store within a variable,
// pass to other functions,
// return it from other functions