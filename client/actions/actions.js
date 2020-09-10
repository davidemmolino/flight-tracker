import * as types from '../constants/actionTypes'

//add a trip
//note sure what kind of payload to enter
export const addTrip = () => ({
    type: types.ADD_TRIP,
    payload: {
        city, 
        departure, 
        arrival,
        airline
    }
});

//remote a trip
// export const removeTrip = () => ({
//     type: types.REMOTE_TRIP
// });

// //edit a trip
// export const editTrip = (city) => ({
//     type: types.EDIT_TRIP,
//     payload: city
// });

export const changeModal = () => ({
    type: types.CHANGE_MODAL,
    //insert modal type and props?
    //boolean value of modal
})