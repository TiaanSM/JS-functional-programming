function app(state, output, dispatch) {
   R.compose(
    append(view(state)),
    clear()
   )(output)
    
    const stop = dispatch((e) => {
        stop();
        const newText = getText();

        const newState = [
            ...state,
            newText
        ];

        setText('');

        app(newState, output, dispatch);
    });
   
}

function view(state) {
    const el = elem('div');

    return state.length > 0 ? R.pipe(
        ...state.map((content, index) => append(message(content, index)))
    )(elem('div')) : el;
}

function message(content) {
    return R.compose(
        append(text(content)),
        attr('data-message', index),
        addClass('bg-warning'),
        addClass('p-3')
    
    )(elem('div'));
}

const buttonClick = on('click', getElem('message-button'));

app(
    Object.freeze([]),
    getElem('message-list'),
    buttonClick()
)


/*
(new Element('div'))
    .addClass('css-class')
    .addClass('another-class')
    .append(new Text('content to display'));


    compose( // reads from right to left, bottom up
        append(new Text('content to display'), elem),
        addClass('another-class', elem),
        addClass('css-class', elem)
    )(elem)

    pipe( // reads left to right
        addClass('css-class', elem),
        addClass('another-class', elem),
        append(new Text('content to display'), elem),
    )(elem)
*/