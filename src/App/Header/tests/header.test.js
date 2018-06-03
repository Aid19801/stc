import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';
import { shallow } from 'enzyme';
import { headerNames } from '../header-names';


describe('Header Tests | ', () => {
    it('should render the Header component without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.container')).toHaveLength(1);
        expect(wrapper.find('.hamburger').hasClass('hamb-img')).toEqual(true);
    });
    it('should render the correct number of sections', () => {
        const wrapper = shallow(<Header />);
        const expectedNoOfHeaderNames = headerNames.sections.length;
        const renderedNoOfHeaderNames = wrapper.find('.navbar-item').length;
        expect(renderedNoOfHeaderNames).toEqual(expectedNoOfHeaderNames);
    });
    it('should render the Header with Desktop-True state as default', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state().isMobile).toEqual(false);
        expect(wrapper.state().isDesktop).toEqual(true);
        expect(wrapper.state().navOpen).toEqual(false);
    });
    it('should NOT render a navBar if on Desktop (navOpen state is false)', () => {
        const wrapper = shallow(<Header />);
        const expectedlyAbsentNav = '.resp-nav';
        expect(wrapper.state().isDesktop).toEqual(true);
        expect(wrapper.state().navOpen).toEqual(false);
        expect(wrapper.find(expectedlyAbsentNav).exists()).toBe(false); 
    });
    it('*should* render a NavBar when on Desktop because hamburger is clicked (navOpen state becomes true)', () => {
        const wrapper = shallow(<Header />);
        const hamburger = wrapper.find('.hamburger').at(0);
        hamburger.simulate('click');
        expect(wrapper.state().navOpen).toEqual(true);
        expect(wrapper.find('.navbar-item').exists()).toBe(true);
    });
    it('*should* render a NavBar then hide it, then show it again', () => {
        const wrapper = shallow(<Header />);
        const hamburger = wrapper.find('.hamburger').at(0);
        const isNavOpen = wrapper.state().navOpen;
        expect(isNavOpen).toBe(false);
        expect(wrapper.find('.resp-nav').exists()).toBe(false);

        hamburger.simulate('click');
        const isNavOpenAfter = wrapper.state().navOpen;
        expect(isNavOpenAfter).toBe(true);
        expect(wrapper.find('.resp-nav').exists()).toBe(true);

        hamburger.simulate('click');
        const isNavOpenAfterClickingAgain = wrapper.state().navOpen;
        expect(isNavOpenAfterClickingAgain).toBe(false);
        expect(wrapper.find('.resp-nav').exists()).toBe(false);
    });
    // it('should call openMobNav() when user clicks hamburger', () => {
    //     jest.mock('Header').openMobNav();
    //     const openMobNav = jest.fn();
    //     const wrapper = shallow(<Header />);
    //     const hamburger = wrapper.find('.hamb-img').at(0);
    //     hamburger.simulate('click')
    //     expect(openMobNav).toHaveBeenCalledTimes(1);
    // })
});
