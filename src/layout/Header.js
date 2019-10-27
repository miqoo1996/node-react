import React, { useContext } from 'react';
import HLinks, { HLink } from './HLinks'

const Header = ({welcomeText}) => {

    return <header className="masthead">
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">{welcomeText}</div>
                <HLinks>
                    <hr/>
                    <HLink icon="fa fa-globe" href="#page-top">Miqo.Com</HLink>
                    <HLink icon="fa fa-envelope" href="mailto:miqoo1996@gmail.com">miqoo1996@gmail.com</HLink>
                    <HLink icon="fa fa-skype" href="skype:miqoo1996?call">skype: miqoo1996</HLink>
                    <HLink icon="fa fa-phone" href="callto:+37441249999">+37441249999</HLink>
                    <HLink icon="fa fa-facebook" href="https://www.facebook.com/miqoo1996">https://www.facebook.com/miqoo1996</HLink>
                    <HLink icon="fa fa-linkedin" href="https://www.linkedin.com/in/miqayel-ishkhanyan-50bb28bb/">https://www.linkedin.com/in/miqayel-ishkhanyan-50bb28bb</HLink>
                    <HLink icon="fa fa-github" href="https://github.com/miqoo1996">https://github.com/miqoo1996</HLink>
                </HLinks>
            </div>
        </div>
    </header>;
};

export default Header;