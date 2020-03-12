import React from 'react';
import App from '../client/src/components/App.jsx';

import { shallow, mount, render } from 'enzyme';


describe('App should render hello', () => {

    it('renders one <App /> component', () => {
        const wrapper = shallow( <App /> );

        expect(wrapper.html()).toContain('<div>Video Player</div>');
        // expect(wrapper.children('li')).equal.lengthOf(1);

    })

})