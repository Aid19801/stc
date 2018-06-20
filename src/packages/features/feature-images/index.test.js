import React from 'react';
import { mount } from 'enzyme';
import VideoContainerCardFactory from './index';

let wrapper, expectedProps;

describe('feature images', () => {

    const defaultProps = {
        img: 'defaultImageString',
        title: 'defaultTitleString',
        tagline: 'defaultTaglineString',
    }

    beforeAll((() => {
        const MockComponent = () => <p>test</p>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        wrapper = mount(<TestComponent {...defaultProps} />);

        expectedProps = {
            img: "defaultImageString",
            tagline: "defaultTaglineString",
            title: "defaultTitleString",
        }
    }))

    it('should render the Video Card Component without exploding...', () => {  
        expect(wrapper).toBeTruthy();
    });

    it('should render an app with the expected props', () => {
        expect(wrapper.props()).toEqual(expectedProps);
    });

    it('should render the expected image src', () => {
        const MockComponent = () => <p>new test</p>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        const newProps = { ...defaultProps, img: 'new-img' };
        const newExpectedProps = {
            img: 'new-img',
            title: 'defaultTitleString',
            tagline: 'defaultTaglineString',
        }
        wrapper = mount(<TestComponent {...newProps} />)
        expect(wrapper.props()).toEqual(newExpectedProps);
    });
})