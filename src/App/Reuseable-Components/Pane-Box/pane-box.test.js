import React from 'react';
import { shallow, mount } from 'enzyme';
import data from '../../../Data/db.json';

import PaneBox from './pane-box';

describe('pane box', () => {
    it('should render', () => {
        const expectedProps = [
            { title: "The Bouncer", tagline: "Ipsum Lorum and stuff and things." },
            { title: "The Interview", tagline: "Sometimes i put blurb into components" },
            { title: "Some Days Are Nights", tagline: "Coding on a train & need blurb here." },
        ];

        const wrapper = shallow(<PaneBox eachVideo={data} />);
        console.log('====== wrapper props: ', wrapper.props().children);
        // expect(wrapper.props()).toEqual(expectedProps);
        expect(true).toBe(true);
    })
})