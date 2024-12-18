const fetchWeatherData = async () => {
    try {
        const apiKey = '12345abcd6789efgh01234ijkl56789mnop';
        const city = 'London';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const weatherInfo = {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description
        };

        console.log(`The weather in ${weatherInfo.city}:`);
        console.log(`${weatherInfo.temperature}°C and ${weatherInfo.condition}`);

        return weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

fetchWeatherData();