import React from 'react';

const HLink = ({href, children, icon, store}) => {
    store.dispatch({ type: icon.replace('fa fa-', '').toUpperCase(), payload: {icon, children, href} });

    return <div>
        <i className={icon} aria-hidden="true" />
        <a className="navbar-brand js-scroll-trigger" href={href}>{children}</a>
    </div>;
};

const HLinks = ({children}) => {
    return <div className="links">
        {children}
    </div>;
};

export default HLinks;

export {
    HLink
}