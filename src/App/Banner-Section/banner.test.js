import React from 'react';
import { shallow } from 'enzyme';
import { Banner } from './banner';

describe('banner', () => {
    const props = {
        onLoad: jest.fn(),
        bannerInformation: {
            title: 'test title',
            tagline: 'test tagline',
            imageOne: 'test imageOne',
            imageTwo: 'test imageTwo',
        }
    };

    const wrapper = shallow(<Banner {...props} />)

    it('should render without exploding', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper).toExist();
    })

    it('should render with expected title', () => {
        const renderedTitle = wrapper.props().children[0];
        const expectedTitle = <h4>test title</h4>;
        expect(renderedTitle).toEqual(expectedTitle);
    })

    it('should render with expected tagline', () => {
        const renderedTagline = wrapper.props().children[1];
        const expectedTagline = <h4>test tagline</h4>;
        expect(renderedTagline).toEqual(expectedTagline);
    })

    it('should render with expected imageOne', () => {
        const renderedImg = wrapper.props().children[2];
        const expectededImg = <img alt="imgOne" height={100} src="test imageOne" width={100} />
        expect(renderedImg).toEqual(expectededImg);
    })

    it('should render with expected imageTwo', () => {
        const renderedImg = wrapper.props().children[3];
        const expectededImg = <img alt="imgTwo" height={100} src="test imageTwo" width={1000} />
        expect(renderedImg).toEqual(expectededImg);
    })
})