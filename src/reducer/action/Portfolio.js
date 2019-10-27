import React from 'react';
import { ResponsiveDialog } from '../../MaterialUiModal';

export const PORTFOLIO_MODAL_ITEM = (state, action) => {
    state.PRModal = {};

    state.PRModal[state.payload.site] = <ResponsiveDialog title={state.payload.title} site={state.payload.site}>
        <img src={state.payload.image} alt={state.payload.name} />
    </ResponsiveDialog>;
};