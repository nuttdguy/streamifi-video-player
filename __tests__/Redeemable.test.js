import React from 'react';

import { shallow, mount } from 'enzyme';


describe.skip('Redeemable Component ', () => {

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
            { 'price_category': 'Embers' },
            { 'price_category': 'Embers' },
            { 'price_category': 'Sparks' },
            { 'price_category': 'Embers' },
            { 'price_category': 'Sparks' }
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
        const wrapper = mount(<Redeemable />)
        wrapper.setState(stat);

        expect(wrapper.state('sparks')).toEqual(100000);
        expect(wrapper.state('embers')).toEqual(5000);
        expect(wrapper.state('level')).toEqual(34);

        const token = wrapper.state('tokens');
        expect(token['sparks']).toEqual('../dist/img/spark-coin.svg');
        expect(token['embers']).toEqual('../dist/img/ember.png');
    })

    test('should return wallet stats', () => {
        const wrapper = shallow(<Redeemable />);
        const instance = wrapper.instance();
        const result = instance.moldWalletStatsFrom();

        expect(result).toHaveProperty('sparks');
        expect(result).toHaveProperty('embers');
        expect(result).toHaveProperty('level');
        expect(result).toHaveProperty('tokens');
    })

})



    // TODO FIX TESTS -> SHOULD NOW TEST 
    // test('should render redeemable imgs', () => {
    //     const redeemable = {
    //         img: '../dist/img/r1.gif', 
    //         price_category_url: '../dist/img/ember.png'}
    //     const wrapper = shallow(<Redeemable />);
    //     const instance = wrapper.instance();

    //     instance.renderItemTemplateWith(redeemable);
    //     expect(wrapper.containsAnyMatchingElements('<img>'))
    // })

    // test('html should render a list of redeemable items',() => {
    //     const redeemables = [
    //         { redeemables_id: 1, img: '../dist/img/r1.gif',  price_category_url: '../dist/img/ember.png'},
    //         { redeemables_id: 2, img: '../dist/img/r2.gif',  price_category_url: '../dist/img/ember.png'},
    //         { redeemables_id: 3, img: '../dist/img/r3.gif',  price_category_url: '../dist/img/ember.png'}
    //     ];

    //     const wrapper = mount(<Redeemable/>);
    //     wrapper.setState({redeemables: redeemables})

    //     expect(wrapper.contains('../dist/img/r1.gif'));
    //     expect(wrapper.contains('../dist/img/ember.png'));

    // })

        // test('should reduce the wallet-value', () => {
    //     const donateFunc = jest.fn();
    //     const wrapper = mount(<Redeemable />);
    //     const instance = wrapper.instance();
    //     const walletStats = wrapper.state('walletStats')
    //     instance.renderItemTemplateWith();

    //     expect(donateFunc.mock.calls.length).toEqual(1);
    //     // expect(instance.state.sparks).toBeLessThan(walletStats.sparks);
    // })