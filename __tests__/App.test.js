import React from 'react';
import App from '../client/src/components/App.jsx';

import { shallow, mount, render } from 'enzyme';


describe('App component', () => {

    test('should render the <App /> component', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.exists())
    })

    test('should have children components', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.children().length).toBeGreaterThan(0);
    })

    // examples usage
    test('should mount in a full DOM', () => {
        expect(mount(<App />)).toHaveLength(1);
    })

    test('should render video html element', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('<video>'))
    })

})

