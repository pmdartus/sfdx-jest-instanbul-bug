import { createElement } from 'lwc';
import Foo from '../foo';

test('connectedCallback', () => {
    const elm = createElement('x-foo', { is: Foo });

    document.body.appendChild(elm);
})