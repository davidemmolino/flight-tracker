import * as types from '../constants/modalActions';

type Action = {
    type: string
    payload: any
};

type InitialState = {
    modal: boolean
};

const initialState: InitialState = {
    modal: false
};

const modalReducer = (state = initialState, action: Action) => {
    switch({ action }) {
        //change modal boolean
        case types.CHANGE_MODAL:
            console.log(`clicked and opened a modal`)
            if (state.modal === false) {
               modal = true 
            } else {
                modal = false
            }

            return {
                ...state,
                modal
            };
    };
};

export default modalReducer;