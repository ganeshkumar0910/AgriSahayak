const axios = require("axios");

async function getWeather(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

        const { data } = await axios.get(url);

        return {
            city: data.name,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            condition: data.weather[0].description
        };

    } catch (err) {
        console.log("Weather Error:", err.message);
        return null;
    }
}

module.exports = { getWeather };