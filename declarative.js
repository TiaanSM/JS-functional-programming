const numbers = [1, 2, 3, 4, 5, 6];

for (let ii = 0; ii < numbers.length; ii++) {
    numbers[ii]
} // this is hard to read

numbers.forEach(function(item) {
    console.log(item);
}); // this is better to read


const output = item => console.log(item);

numbers.forEach(output);

forEach(output, numbers);  // for each item output these numbers.


// stay away from control structures(loops) => for, while, do while, if else, switch
// use ternary
const value = true ? 'this value' : 'that value';