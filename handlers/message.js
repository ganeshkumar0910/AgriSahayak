const { getLanguage } = require("../services/language");
const { askAI } = require("../services/ai");
const { getWeather } = require("../services/weather");

const waitingForLocation = new Map();

module.exports = (bot) => {

    bot.on("message", async (msg) => {

        const chatId = msg.chat.id;

        // LOCATION RECEIVED
        if (msg.location) {

            if (!waitingForLocation.get(chatId)) return;

            waitingForLocation.delete(chatId);

            bot.sendChatAction(chatId, "typing");

            const weather = await getWeather(
                msg.location.latitude,
                msg.location.longitude
            );

            if (!weather) {
                return bot.sendMessage(chatId, "❌ Unable to fetch weather.");
            }

            return bot.sendMessage(
                chatId,
`🌤 Weather Report

📍 ${weather.city}

🌡 Temperature : ${weather.temp}°C
🤒 Feels Like : ${weather.feelsLike}°C
💧 Humidity : ${weather.humidity}%
🌬 Wind : ${weather.wind} m/s
☁ Condition : ${weather.condition}`,
                {
                    reply_markup: {
                        remove_keyboard: true
                    }
                }
            );
        }

        if (!msg.text) return;

        if (msg.text === "/start") return;

        const text = msg.text.toLowerCase();

        const weatherKeywords = [
            "weather",
            "temperature",
            "temp",
            "rain",
            "forecast",
            "humidity",
            "wind",
            "climate"
        ];

        const isWeather = weatherKeywords.some(word =>
            text.includes(word)
        );

        // WEATHER QUESTION
        if (isWeather) {

            waitingForLocation.set(chatId, true);

            const language = getLanguage(chatId);

            const locationMessages = {
                english: "📍 Please share your location.",
                telugu: "📍 దయచేసి మీ స్థానాన్ని పంచుకోండి.",
                hindi: "📍 कृपया अपना स्थान साझा करें।",
                tamil: "📍 உங்கள் இருப்பிடத்தை பகிரவும்.",
                kannada: "📍 ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
                malayalam: "📍 ദയവായി നിങ്ങളുടെ സ്ഥലം പങ്കിടുക."
            };

            const buttonText = {
                english: "📍 Share Location",
                telugu: "📍 స్థానాన్ని పంచుకోండి",
                hindi: "📍 स्थान साझा करें",
                tamil: "📍 இருப்பிடத்தை பகிரவும்",
                kannada: "📍 ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಿ",
                malayalam: "📍 സ്ഥലം പങ്കിടുക"
            };

            return bot.sendMessage(chatId, locationMessages[language], {
                reply_markup: {
                    keyboard: [[
                        {
                            text: buttonText[language],
                            request_location: true
                        }
                    ]],
                    resize_keyboard: true,
                    one_time_keyboard: true
                }
            });
        }

        // OTHER QUESTIONS -> AI
        const language = getLanguage(chatId);

        bot.sendChatAction(chatId, "typing");

        const reply = await askAI(msg.text, language);

        bot.sendMessage(chatId, reply);
    });

};