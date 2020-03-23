import React from 'react';
import { shallow } from 'enzyme';


describe.skip('Stats Component', () => {

    
    test('should render the stats component', () => {
        const stat = {
            sparks: 100000,
            embers: 5000,
            level: 34,
            tokens: {
                sparks: '../dist/img/spark-coin.svg',
                embers: '../dist/img/ember.png'
            }
        }
        const wrapper = shallow(<Stats walletStats={stat} />)
        expect(wrapper.exists());
    })


})