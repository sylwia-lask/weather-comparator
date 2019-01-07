import SortingTypes from '../shared/sorting-types';

export const getSortedPlaces = (places, sortingType) => {
    switch (sortingType) {
        case SortingTypes.Temperature:
            return places.sort((a, b) => {
                return a.main.temp - b.main.temp;
            });
        case SortingTypes.Wind:
            return places.sort((a, b) => {
                return a.wind.speed - b.wind.speed;
            });
        case SortingTypes.Pressure:
            return places.sort((a, b) => {
                return a.main.pressure - b.main.pressure;
            });
        case SortingTypes.Humidity: 
        return places.sort((a, b) => {
            return a.main.humidity - b.main.humidity;
        });
        default:
            return places;
    }

}