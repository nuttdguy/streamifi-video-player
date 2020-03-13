import React from 'react';
import VideoPlayer from '../client/src/components/player/VideoPlayer.jsx';
import axios from 'axios';


import { shallow, mount, render } from 'enzyme';


describe('Video Player Component', () => {

    test('will invoke VideoPlayer Component', () => {
        const func = jest.fn();

        const a = new func(<VideoPlayer />);
        expect(func).toHaveBeenCalledTimes(1);
        expect(func).toHaveBeenCalledWith(<VideoPlayer />)

    })

    test('will invoke initVideoPlayer', () => {
        const wrapper = shallow(<VideoPlayer />);
        const instance = wrapper.instance();

        jest.spyOn(instance, 'initVideoPlayer')
        instance.componentDidMount();

        expect(instance.initVideoPlayer).toHaveBeenCalledTimes(1);

    })

})