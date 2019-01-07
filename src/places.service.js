export function getPreciseLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve([position.coords.latitude, position.coords.longitude]);
            reject([54.61, 18.35]);
        });
    });
}

export function choosePlaceWithName(name) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(resp => resp.json());
}

export function choosePlaceWithCoords(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(res => res.json());
}