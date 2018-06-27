import React from 'react';
import { shallow } from 'enzyme';

import PaneBox from './pane-box';

describe('Pane Box', () => {

    const mockProp = { title: "Test Title", tagline: "Test Tagline" };
    const wrapper = shallow(<PaneBox eachVideo={mockProp} />);

    it('should render the Pane Box without exploding...', () => {
        expect(wrapper).toBeTruthy();
    })
    it('should render the Pane Box with expected Height & Width', () => {
        const renderedProps = wrapper.props().children[0].props;
        const expectedProps = { className: 'paneBox-fineBorder', height: 200, src: 'videoPlaceholder.jpg', width: 400 }
        expect(renderedProps).toEqual(expectedProps);
    })
    it('should render the Pane Box with expected Title element', () => {
        const renderedProps = wrapper.props().children[1].props;
        const expectedProps = { className: 'paneBox-title', children: 'Test Title' }
        expect(renderedProps).toEqual(expectedProps);
    })
    it('should render the Pane Box with expected Title element', () => {
        const renderedProps = wrapper.props().children[2].props;
        const expectedProps = { className: 'paneBox-tagline', children: 'Test Tagline' }
        expect(renderedProps).toEqual(expectedProps);
    })
})