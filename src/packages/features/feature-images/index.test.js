import React from 'react';
import { mount, shallow } from 'enzyme';
import VideoContainerCardFactory from './index';

let wrapper;

describe('Video Container Card Factory', () => {

    const defaultProps = {
        img: 'defaultImageString',
        title: 'defaultTitleString',
        tagline: 'defaultTaglineString',
        handleClick: jest.fn(),
    }

    beforeAll((() => {
        const MockComponent = () => <div>test</div>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        wrapper = mount(<TestComponent {...defaultProps} />);
    }))

    it('should render the Video Card Component without exploding...', () => {  
        expect(wrapper).toBeTruthy();
    });

    it('should render an Image Card with the expected props', () => {

        const expectedProps = {
            img: 'defaultImageString',
            title: 'defaultTitleString',
            tagline: 'defaultTaglineString',
            handleClick: () => true,
        };

        const arrayOfExpectedProps = Object.keys(expectedProps);
        const arrayOfRenderedProps = Object.keys(wrapper.props());
        expect(arrayOfRenderedProps).toEqual(arrayOfExpectedProps);
    });

    it('should render the expected image src', () => {
        const MockComponent = () => <div>test</div>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        const newProps = { ...defaultProps, img: 'new-img' };
        wrapper = mount(<TestComponent {...newProps} />)
        const renderedImageProp = wrapper.props().img;

        const expectedImageProp = 'new-img';
        expect(renderedImageProp).toEqual(expectedImageProp);
    });

    it('should handle clicks of the video card', () => {
        const MockComponent = () => <div>test</div>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        const shallowWrapper = shallow(<TestComponent {...defaultProps} />);
        shallowWrapper.simulate('click');
        expect(defaultProps.handleClick).toHaveBeenCalledTimes(1);
    });

    it('should have a border for the card', () => {
        const MockComponent = () => <div>test</div>;
        const TestComponent = VideoContainerCardFactory(MockComponent);
        const shallowWrapper = shallow(<TestComponent {...defaultProps} />);
    })
})