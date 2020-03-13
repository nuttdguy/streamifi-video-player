import React from 'react';
import Redeemable from '../client/src/components/redeemable/Redeemable.jsx';

import { shallow } from 'enzyme';


describe('Redeemable Component ', () => {

    test('should render Redeemable Component', () => {
        const redeemableComponent = shallow(<Redeemable />);
        expect(redeemableComponent.exists());
    })



})