import * as types from '../constants/actionTypes'

//add a trip
//note sure what kind of payload to enter
export const addTrip = (city) => ({
    type: types.ADD_TRIP,
    payload: city
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