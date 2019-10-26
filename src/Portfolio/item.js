import React from 'react';


const Item = ({children, name, site, image, href}) => {
    return <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href={href}>
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"/>
                </div>
            </div>
            <img className="img-fluid" src={image} alt={name}/>
        </a>
        <div className="portfolio-caption">
            {children}
            <p className="text-muted">{name}</p>
            <a className="text-muted" href={site}>
                <i className="fa fa-globe"> {site}</i>
            </a>
        </div>
    </div>;
};

export default Item;