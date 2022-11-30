let numbers = [1,2,3,4,5];
let total = 0;

for (let ii = 0; ii < numbers.length; ii++) {
    total = total + numbers[ii];
} // 15

// reduce
let total2 = numbers.reduce((total, number) => total + number, 0);  // 0 = initial value for total 


function app(state, output) {
    R.compose(
     append(view(state)),
     clear()
    )(output)    
}

function fullName({firstName, lastName, age}) {
    return `${firstName} ${lastName} (${age})`;
}
 
function view(state) {
    const add = R.flip(append);
    
    state
    .filter(person => person.age > 30)
    .map(buildPerson)  // [] HTMLElements
    .reduce(add(), el)
    // function(parentElement, childNode)
    
}
 
 function buildPerson(person, index) {
     return R.compose(
         append(text(fullName(person))),
         attr('data-message', index),
         addClass('text-white'),
         addClass('bg-secondary'),
         addClass('p-3')
     
     )(elem('div'));
 }
 

 
app(
     Object.freeze([{
        firstName: 'Jane',
        lastName: 'Doe',
        age: 34
    },{
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    }, {
        firstName: 'Jim',
        lastName: 'Smith',
        age: 52
    }
    ]),
     getElem('message-list'),
     buttonClick
);