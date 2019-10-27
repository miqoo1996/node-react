import React, { useContext } from 'react';
import { storeContext } from '../reducer/storeContext';

const HLink = ({href, children, icon}) => {
    const store = useContext(storeContext);

    store.dispatch({ type: icon.replace('fa fa-', '').toUpperCase(), payload: {icon, children, href} });

    return <div>
        <a className="navbar-brand js-scroll-trigger" href={href}>
            <i className={icon} aria-hidden="true" /> {children}
        </a>
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