const elem = tag => document.createElement(tag);

const el = R.compose(
    addClass('bg-light'),
    addClass('p-2')

)(elem('div'));

document.body.append(el);

function addClass(className) {
    return function(element) {
        element.classList.add(className);
        return element;
    }
}

function append(node, element) {
    element.appendChild(node);
    return element;
}

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