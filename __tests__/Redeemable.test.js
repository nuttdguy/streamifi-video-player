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

    test('should filter list of unique price categories ', () => {
        const menuItems = [
            {'price_category': 'Embers'},
            {'price_category': 'Embers'},
            {'price_category': 'Sparks'},
            {'price_category': 'Embers'},
            {'price_category': 'Sparks'}
        ];

        const wrapper = shallow(<Redeemable />);
        const instance = wrapper.instance();

        const result = instance.filterPriceCategoriesToMenuItems(menuItems);

        expect(result.length).toEqual(2);

    })

    test('should render button menu item', () => {
        const menuItems = ['Embers', 'Sparks']
        const wrapper = shallow(<Redeemable />);
        const instance = wrapper.instance();

        instance.renderMenubar(menuItems);
        expect(wrapper.containsAnyMatchingElements('<button> </button>'))
        
    })

    test('should render redeemable imgs', () => {
        const redeemable = {
            img: '../dist/img/r1.gif', 
            price_category_url: '../dist/img/ember.png'}
        const wrapper = shallow(<Redeemable />);
        const instance = wrapper.instance();

        instance.renderItemTemplateWith(redeemable);
        expect(wrapper.containsAnyMatchingElements('<img>'))
    })

    test('html should render a list of redeemable items',() => {
        const redeemables = [
            { redeemables_id: 1, img: '../dist/img/r1.gif',  price_category_url: '../dist/img/ember.png'},
            { redeemables_id: 2, img: '../dist/img/r2.gif',  price_category_url: '../dist/img/ember.png'},
            { redeemables_id: 3, img: '../dist/img/r3.gif',  price_category_url: '../dist/img/ember.png'}
        ];

        const wrapper = mount(<Redeemable/>);
        wrapper.setState({redeemables: redeemables})

        expect(wrapper.contains('../dist/img/r1.gif'));
        expect(wrapper.contains('../dist/img/ember.png'));

    })

})