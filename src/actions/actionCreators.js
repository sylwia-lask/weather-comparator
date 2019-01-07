import { choosePlaceWithName, choosePlaceWithCoords } from '../places.service';

export const choosePlaceSuccess = (payload) => ({
    type: 'CHOOSE_PLACE_SUCCESS',
    payload
});

export const choosePlaceError = () => ({
    type: 'CHOOSE_PLACE_ERROR'
});

export const choosePlaceFromInput = (payload) => (dispatch) => {
    choosePlaceWithName(payload)
        .then(resp => {
            if (resp.cod === 200) {
                dispatch(choosePlaceSuccess(resp));
            } else {
                dispatch(choosePlaceError(resp))
            }
        }
    )         
}

export const choosePlaceFromMap = (lat, lon) => (dispatch) => {
    choosePlaceWithCoords(lat, lon)
        .then(json => dispatch(choosePlaceSuccess(json)));
}

export const addPlace = (payload) => ({
    type: 'ADD_PLACE', 
    payload
});

export const removePlace = (payload) => ({
    type: 'REMOVE_PLACE', 
    payload
});

export const changeSortingType = (payload) => ({
    type: 'CHANGE_SORTING_TYPE', 
    payload
})