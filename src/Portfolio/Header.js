import React from 'react';


const Header = ({t1, t2, children}) => {
    return <div>
        <div className="row">
            <div class="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase"> {t1} </h2>
                <h3 className="section-subheading text-muted"> {t2} </h3>
            </div>
        </div>
        <div className="row">
            {children}
        </div>
    </div>
};

export default Header;