import React from 'react';
import Stats from '../client/src/components/redeemable/stats/Stats.jsx'
import { shallow } from 'enzyme';


describe('Stats Component', () => {
    
    test('should render the stats component', () => {
        const wrapper = shallow(<Stats />)
        expect(wrapper.exists());
    })

    test('should set state on componentDidMount', () => {
        const stat = {
            sparks: 100000,
            embers: 5000,
            level: 34,
            tokens: {
                sparks: '../dist/img/spark-coin.svg',
                embers: '../dist/img/ember.png'
            }
        }
        const wrapper = shallow(<Stats />)
        wrapper.setState(stat);

        expect(wrapper.state('sparks')).toEqual(100000);
        expect(wrapper.state('embers')).toEqual(5000);
        expect(wrapper.state('level')).toEqual(34);

        const token = wrapper.state('tokens');
        expect(token['sparks']).toEqual('../dist/img/spark-coin.svg');
        expect(token['embers']).toEqual('../dist/img/ember.png');
    })


})