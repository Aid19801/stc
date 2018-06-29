import React, { Component } from 'react';
import { headerNames } from './header-names';
import hamburger from './hamburger.png';
import styles from './styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            isDesktop: true,
            navOpen: false,
        }
    }

    openMobNav = () => {
        this.setState({
            isMobile: true,
            isDesktop: false,
            navOpen: !this.state.navOpen,
        })
    }

    render() {
        const { navOpen } = this.state;
        return(
            <div className="container">
                <img 
                    className="hamburger"
                    alt="hamburger"
                    onClick={this.openMobNav}
                    src={hamburger} 
                    width={30} 
                    height={30} 
                    />
                { navOpen ? 
                    <ul className="resp-nav">{headerNames.sections.map((each, i) => 
                        <li className="resp-navbar-item" key={i}>{each.name}</li>)}
                    </ul>
                    : null 
                }
                {headerNames.sections.map((each, i) => {
                    return <a href={each.link} key={i} className="navbar-item">{each.name}</a>
                })}
            </div>
        )
    }
};

export default Header;
