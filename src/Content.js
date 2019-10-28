import React from 'react';
import Portfolio from './Portfolio/index';
import PortfolioHeader from './Portfolio/Header';

const Content = ({pref}) => {
    return <section ref={pref} className="bg-light page-section" id="portfolio">
        <div className="container">
            <PortfolioHeader t1="PORTFOLIO" t2="LATEST PROJECTS">
                <div className="alert alert-info" style={{lineHeight: '30px'}}>
                    <h3 style={{textAlign: 'center'}}>Professional skills</h3>
                    <hr/>
                    PHP, MySql, MongoDb, PostgreSQL, NoSQL, Zend Framework, Symfony Framework, Yii, Laravel, PrestaShop, Wordpress, Linux(Ubuntu), Javascript(Node.js, React, React Native), Vue.js, JQuery, Gulp, C#, unity3d, git, svn.
                </div>
            </PortfolioHeader>
            <div className="row">
                <Portfolio name="Zend Framework" site="https://www.rembrandtcasino.com" image="img/portfolio/rembrandtcasino.png">
                    <h4>Rembrandt Casino</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="https://www.b-bets.com" image="img/portfolio/b-bets.png">
                    <h4>B-Bets Casino</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="https://www.casinosieger.com" image="img/portfolio/casinosieger.png">
                    <h4>Casino Sieger</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="https://www.24bettle.com" image="img/portfolio/24bettle.png">
                    <h4>24 Bettle</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="https://www.condor-affiliates.com" image="img/portfolio/condor-affiliates.png">
                    <h4>Condor Affiliates</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="https://www.budsvit.ua" image="img/portfolio/budsvit.png">
                    <h4>Budsvit</h4>
                </Portfolio>

                <Portfolio name="Zend Framework" site="http://jermukcity.am" image="img/portfolio/jermukcity.png">
                    <h4>Jermuk City</h4>
                </Portfolio>

                <Portfolio name="Laravel Framework" site="https://justtravel.am" image="img/portfolio/just-travel.png">
                    <h4>Just Travel</h4>
                </Portfolio>

                <Portfolio name="Laravel Framework" site="https://aniplustaxi.am" image="img/portfolio/aniplustaxi.png">
                    <h4>Ani Plus Taxi Service</h4>
                </Portfolio>

                <Portfolio name="Laravel Framework" site="https://easyfees.io" image="img/portfolio/easy-fees.png">
                    <h4>Easy Fees</h4>
                </Portfolio>

                <Portfolio name="Laravel Framework" site="http://multiplategrading.com" image="img/portfolio/multiplategrading.png">
                    <h4>Multiplate Grading</h4>
                </Portfolio>

                <Portfolio name="Yii 2 Framework" site="https://studymoose.com" image="img/portfolio/studymoose.png">
                    <h4>Study Moose</h4>
                </Portfolio>

                <Portfolio name="Yii 2 Framework" site="https://www.mykaz.kz" image="img/portfolio/may-kaz.png">
                    <h4>My Kaz</h4>
                </Portfolio>

                <Portfolio name="Yii 2 Framework" site="http://www.kazvideo.kz" image="img/portfolio/kaz-video.png">
                    <h4>Kaz Video</h4>
                </Portfolio>

                <Portfolio name="Yii 1 Framework" site="http://hotelarpa.am" image="img/portfolio/hotelarpa.png">
                    <h4>Hotel Arpa</h4>
                </Portfolio>

                <Portfolio name="Prestashop CMS" site="https://zdorovee.com" image="img/portfolio/zdorovee.png">
                    <h4>Zdorovee</h4>
                </Portfolio>

                <Portfolio name="WordPress CMS" site="http://smartroom.kz" image="img/portfolio/smart-room.png">
                    <h4>Smart Room</h4>
                </Portfolio>

                <Portfolio name="ShopOs CMS" site="https://art-decoupage.ru" image="img/portfolio/art-decoupage.png">
                    <h4>Art Decoupage</h4>
                </Portfolio>
            </div>
        </div>
    </section>;
};

export default Content;