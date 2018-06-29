import React from 'react';
import { mount, shallow } from 'enzyme';
import Banner from './banner';

describe('Banner', () => {
    it('should render without exploding....', () => {
        const wrapper = shallow(<Banner {...props} />)
        expect(wrapper.props()).toEqual({})
    })
})