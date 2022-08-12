import * as types from "../constants/modalActions";

export const changeModal = (modal: boolean) => ({
    type: types.CHANGE_MODAL,
    payload: modal
});
