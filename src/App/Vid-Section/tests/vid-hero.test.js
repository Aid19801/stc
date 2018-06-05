import React from 'react';
import ReactDOM from 'react-dom';
import { VideoSectionContainer } from '../vid-hero';
import { shallow } from 'enzyme';

let baseProps = {
    videos: [
        { title: 'mockTitle1', tagline: 'mockTagline1'},
        { title: 'mockTitle2', tagline: 'mockTagline2' }
    ],
    onRequestVids: jest.fn(),
    fetching: false,
    error: false,
};

describe('vid hero', () => {
    it('should render the Vid Section Container & not explode', () => {
        const wrapper = shallow(<VideoSectionContainer {...baseProps} />);
        const renderedNoOfContainers = wrapper.find('.vid-section-container');
        expect(renderedNoOfContainers).toHaveLength(1);
    });
    it('should render the Vid Section Container & not explode', () => {
        const wrapper = shallow(<VideoSectionContainer {...baseProps} />);
        expect(baseProps.onRequestVids).toHaveBeenCalled();
    });
    it('render 2x vid-box-title elements for every video object passed in', () => {
        const wrapper = shallow(<VideoSectionContainer {...baseProps} />);
        const expectedNumberOfVidBoxes = 4;
        expect(wrapper.find('.vid-box-title')).toHaveLength(expectedNumberOfVidBoxes);
    });
    it('render 1x vid-box-player elements for every video object passed in', () => {
        const wrapper = shallow(<VideoSectionContainer {...baseProps} />);
        const expectedNumberOfVidBoxes = 2;
        expect(wrapper.find('.vid-box-player')).toHaveLength(expectedNumberOfVidBoxes);
    });
})

// GOTCHAS
// ways to test ^^ 
// 1) DISPATCH ACTIONS: take the dispatch-action prop, make sure its in your base props
// 2) make it equal to jest.fn();
// 3) because thats passed intto the rendered wrapper as props - when it hits componentWillMount
// 4) it calls it, and we can check it with toHaveBeenCalled(). Awesome sauce.

// 1) MOCKING THE STORE: you can explore NPM packages that mock the store, or mess around with .dive()
// 2) But i found the best way to simplify whether a container was working was to
// 3) Export JUST the container, not the export default connect()... version of it.
// 4) Took me a minute to remember that these redux components are exported like that.


