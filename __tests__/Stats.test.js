import React from 'react';
import Stats from '../client/src/components/redeemable/stats/Stats.jsx'
import { shallow } from 'enzyme';


describe('Stats Component', () => {
    
    test('should render the stats component', () => {
        const wrapper = shallow(<Stats />)
        expect(wrapper.exists());
    })


    
})