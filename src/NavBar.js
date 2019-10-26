import React, {Component} from 'react';

class NavBarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, ...props} = this.props;

        const {href = '#', pref} = props;

        return  <a onClick={(e) => {
            e.preventDefault();
            window.scrollTo({top: pref ? pref.current.offsetTop : 0, behavior: 'smooth'});

        }} className="navbar-brand js-scroll-trigger" href={href}>{children}</a>;
    }
}

const NavBar = ({children}) => {
    return <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            {children}
        </div>
    </nav>;
};

export default NavBar;

export {
    NavBarItem
}