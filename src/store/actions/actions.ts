import * as types from 'store/constants/actionTypes'

//* add a trip
//note sure what kind of payload to enter
export const addTrip = (values: any) => ({
    type: types.ADD_TRIP,
    payload: values
});

//* remote a trip
// export const removeTrip = () => ({
//     type: types.REMOTE_TRIP
// });

//* edit a trip
// export const editTrip = (city) => ({
//     type: types.EDIT_TRIP,
//     payload: city
// });

export const changeModal = (modal: boolean) => ({
    type: types.CHANGE_MODAL,
    payload: modal
});