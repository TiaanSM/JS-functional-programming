const numbers = [1,2,3,4,5];
let even = numbers.filter((number) => number % 2 === 0); // [2,4]

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
    const el = elem('div');
    const add = R.flip(append)(el);
    
    state
    .filter(person => person.age > 30)
    .map(buildPerson)  // [] HTMLElements
    .forEach(add);

    return el;
    
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