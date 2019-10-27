import React, { useContext, useState } from 'react';
import { storeContext } from '../reducer/storeContext';

const Item = ({children, name, site, image, href}) => {
    const store = useContext(storeContext);

    const [PRModal, setPRModal]= useState('');

    store.subscribe(() => {
        setPRModal(store.getState().PRModal[site]);
    });

    return <div className="col-md-4 col-sm-6 portfolio-item">
        <a
            onClick={ () => store.dispatch({ type: 'PORTFOLIO_MODAL_ITEM', payload: {name, site, title: children, image, href} }) }
            className="portfolio-link"
            data-toggle="modal"
            href={href}>
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
        {PRModal}
    </div>;
};

export default Item;