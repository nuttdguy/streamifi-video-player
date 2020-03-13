import React from 'react';
import App from '../client/src/components/App.jsx';

import { shallow, mount, render } from 'enzyme';


describe('App component', () => {

    test('should render the <App /> component', () => {
        const wrapper = shallow( <App /> );
    })

    test('should have 4 children components', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.children()).toHaveLength(4);
    })

    // examples usage
    test('should mount in a full DOM', () => {
        expect(mount(<App />)).toHaveLength(1);
    })

    test('should render static HTML', () => {
        expect(render(<App />).text()).toContain('Video')
    })

})

