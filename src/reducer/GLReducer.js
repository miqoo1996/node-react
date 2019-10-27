import React from 'react';
import { GLOBAL } from './action/Link'
import { PORTFOLIO_MODAL_ITEM } from './action/Portfolio';

const initiaState = {

};


const reducer = (state = initiaState, action) => {
    const stateRet = {
        ...state,
        type: action.type,
        payload: action.payload
    };

    if (action.type == 'GLOBAL') {
        GLOBAL(stateRet, action);
    }

    if (action.type == 'PORTFOLIO_MODAL_ITEM') {
        PORTFOLIO_MODAL_ITEM(stateRet, action);
    }

    return stateRet;
};

export {
    initiaState,
    reducer
}