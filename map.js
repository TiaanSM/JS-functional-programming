let numbers = [1,2,3,4,5];

let doubled = numbers.map((number) => number * 2);  // [2, 4, 6, 8, 10]

function app(state, output) {
    R.compose(
     append(view(state)),
     clear()
    )(output)    
}

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}
 
function view(state) {
    const el = elem('div');
    const add = R.flip(append)(el);
    
    state.map(buildPerson)  // [] HTMLElements
    //.forEach(personElement => append(personElement, el))
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