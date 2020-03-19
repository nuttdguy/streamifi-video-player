import React from 'react';
import VideoPlayer from '../client/src/components/player/VideoPlayer.jsx';
import Plyr from 'plyr';


import { shallow, mount, render } from 'enzyme';


describe('Video Player Component', () => {

    // test('should invoke VideoPlayer Component', () => {
    //     const func = jest.fn();

    //     const a = new func(<VideoPlayer />);
    //     expect(func).toHaveBeenCalledTimes(1);
    //     expect(func).toHaveBeenCalledWith(<VideoPlayer />)

    // })


    // test('video player should have a plyr state that is an instance of Plyr', () => {
    //     const videoPlayer = mount(<VideoPlayer />);

    //     expect(videoPlayer.state('plyr')).toBeInstanceOf(Plyr);
    // })


    // test('should invoke initVideoPlayer', () => {
    //     const wrapper = shallow(<VideoPlayer />);
    //     const instance = wrapper.instance();

    //     jest.spyOn(instance, 'initVideoPlayer')
    //     instance.componentDidMount();

    //     expect(instance.initVideoPlayer).toHaveBeenCalledTimes(1);

    // })



    test('should change menu state', () => {
        const wrapper = shallow(<VideoPlayer />);
        const instance = wrapper.instance();
        instance.setState({showMenu: false})

        expect(wrapper.state('showMenu')).toBe(false);

        instance.onShowMenu();
        expect(wrapper.state('showMenu')).toBe(true)
    })

})