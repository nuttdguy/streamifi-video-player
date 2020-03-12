import React from 'react';
import App from '../client/src/components/App.jsx';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';


describe('App should render hello', () => {

    it('renders one <App /> component', () => {
        const wrapper = shallow( <App /> );

    
        expect(wrapper.html()).to.equal('<div>HELLO<li>child element</li></div>');
        expect(wrapper.children('li')).to.have.lengthOf(1);

    })

})