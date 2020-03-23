import React from 'react';
import App from '../client/src/components/App.jsx';

import { shallow, mount, render } from 'enzyme';


describe.skip('App component', () => {

    test('should render the <App /> component', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.exists())
    })

    test('should have children components', () => {
        const wrapper = shallow( <App /> );
        expect(wrapper.children().length).toBeGreaterThan(0);
    })

    // examples usage
    // test('should mount in a full DOM', () => {
    //     expect(mount(<App />)).toHaveLength(1);
    // })

})

