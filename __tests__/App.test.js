import React from 'react';
import App from '../client/src/components/App.jsx';

import { shallow, mount, render } from 'enzyme';


describe('App component', () => {

    test('will render the <App /> component', () => {
        const wrapper = shallow( <App /> );
    })

    test('will have 4 children components', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.children()).toHaveLength(4);
    })

})

