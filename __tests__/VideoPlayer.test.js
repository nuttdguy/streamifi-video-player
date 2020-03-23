import React from 'react';
import VideoPlayer from '../client/src/components/player/video/VideoPlayer.jsx';

import { shallow } from 'enzyme';


describe('Video Player Component', () => {

    test('should render VideoPlayer Component', () => {
        const wrapper = shallow(<VideoPlayer />);
        expect(wrapper.exists()).toBe(true);

    })

    test('should toggle show menu', () => {
        const wrapper = shallow(<VideoPlayer />);
        const instance = wrapper.instance();

        instance.onShowMenu();
        expect(instance.state.showMenu).toBe('flex');

        instance.onShowMenu();
        expect(instance.state.showMenu).toBe('none');
        expect(wrapper.state('showMenu')).toBe('none');

    })

})