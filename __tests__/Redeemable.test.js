import React from 'react';
import Redeemable from '../client/src/components/redeemable/Redeemable.jsx';

import { shallow } from 'enzyme';


describe('Redeemable Component ', () => {

    test('should render Redeemable Component', () => {
        const wrapper = shallow(<Redeemable />);
        expect(wrapper.exists());
    })


    test('on mount, should redeemables state of type array', () => {
        const wrapper = shallow(<Redeemable />);

        expect(wrapper.state('redeemables')).toBeDefined();
        expect(wrapper.state('redeemables')).toBeInstanceOf(Array);

    })

    test('should get redeemable json object and set on mount', () => {
        const wrapper = shallow(<Redeemable />);
        const redeemableInstance = wrapper.instance();
        redeemableInstance.componentDidMount();

        expect(wrapper.state('redeemables')).toBeInstanceOf(Array);
    })

    test('should render an <ul> and <li> in redeemables html template', () => {
        const wrapper = shallow(<Redeemable />);

        expect(wrapper.containsAnyMatchingElements(['<ul /> <li />']));
    })

})