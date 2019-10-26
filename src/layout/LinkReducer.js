import React from 'react';

const initiaState = {

};


const reducer = (state = initiaState, action) => {
    if (action.type == 'GLOBAL') {

    }

    return {
        ...state,
        type: action.type,
        payload: action.payload
    };
};

export {
    initiaState,
    reducer
}