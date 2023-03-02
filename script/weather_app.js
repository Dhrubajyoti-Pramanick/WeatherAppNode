function getWeatherData() {
    const weatherData = [
        {
            location: 'kolkata',
            lat: '22',
            lng: '12',
            condition: {
                humidity: '93',
                presure: '1005',
                wind: '5'
            },
        }
    ]
    const result = Object.keys(weatherData).filter((key) => key.includes);
    return result;
}

let weather = getWeatherData('kolkata');
console.log(weather);