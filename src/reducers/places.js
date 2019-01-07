import SortingTypes from '../shared/sorting-types';

const initialState = {
    chosenPlace: '', 
    placesList: [], 
    sortingType: SortingTypes.None
  };

function places(state = initialState, action) {
    switch (action.type) {
        case 'CHOOSE_PLACE_SUCCESS':
            return { ...state, chosenPlace: action.payload };
        case 'CHOOSE_PLACE_ERROR':
            return state;
        case 'ADD_PLACE':
            let placesListCopy = Array.from(state.placesList);
            if (placesListCopy.some(p => p.id === action.payload.id)) {
                return state;
            }
            placesListCopy.push(action.payload);
            return { ...state, placesList: placesListCopy };
        case 'REMOVE_PLACE':
            let newPlacesList = Array.from(state.placesList); 
            newPlacesList.splice(placesListCopy.indexOf(action.payload), 1);
            return { ...state, placesList: newPlacesList };
        case 'CHANGE_SORTING_TYPE':
            return { ...state, sortingType: action.payload }
        default:
            return state;
    }
}

export default places;