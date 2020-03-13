import React from 'react';
import Redeemable from '../client/src/components/redeemable/Redeemable.jsx';

import { shallow } from 'enzyme';


describe('Redeemable Component ', () => {

    test('should render Redeemable Component', () => {
        const redeemableComponent = shallow(<Redeemable />);
        expect(redeemableComponent.exists());
    })


    test('on mount, should set redeemables state of type array', () => {
        const redeemableComponent = shallow(<Redeemable />);

        expect(redeemableComponent.state('redeemables')).toBeDefined();
        expect(redeemableComponent.state('redeemables')).toBeInstanceOf(Array);
        expect(redeemableComponent.state('redeemables').length).toBeGreaterThan(0);

    })

})