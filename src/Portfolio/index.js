import React from 'react';
import Item from './item';

const Portfolio = ({children, name, image, site = '#', href = '#portfolioModal'}) => {
    return <Item href={href} name={name} site={site} image={image}>{children}</Item>;
};

export default Portfolio;