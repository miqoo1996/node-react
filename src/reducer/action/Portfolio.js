import React from 'react';
import { ResponsiveDialog } from '../../MaterialUiModal';
import '../../scss/PRMuiDialog.scss'

export const PORTFOLIO_MODAL_ITEM = (state, action) => {
    state.PRModal = {};

    const Iframe = ({site, children}) => {
        return <iframe src={site} style={{ border: '0px', minWidth: '100%', minHeight: ' 100%' }}>
            {children}
        </iframe>;
    };

    const PrModalView = ({site}) => {
        const img = <img src={state.payload.image} alt={state.payload.name} />;
        const iframe = <Iframe site={state.payload.site}>{img}</Iframe>;

        return (state.payload.site && state.payload.site.match(/rembrandtcasino|b-bets|casinosieger|24bettle|condor-affiliate/gi) || []).length ? img : iframe;
    };

    state.PRModal[state.payload.site] = <ResponsiveDialog title={state.payload.title} site={state.payload.site}>
        <PrModalView/>
    </ResponsiveDialog>;
};