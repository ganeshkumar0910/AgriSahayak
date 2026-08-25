const { setLanguage } = require("../services/language");

module.exports = (bot) => {

    bot.on("callback_query", async (query) => {

        const chatId = query.message.chat.id;
        const data = query.data;

        let language = "";
        let message = "";

        switch (data) {

            case "lang_en":
                language = "english";
                message = "✅ Language set to English.";
                break;

            case "lang_te":
                language = "telugu";
                message = "✅ భాష తెలుగుగా మార్చబడింది.";
                break;

            case "lang_hi":
                language = "hindi";
                message = "✅ भाषा हिन्दी में बदल दी गई।";
                break;

            case "lang_ta":
                language = "tamil";
                message = "✅ மொழி தமிழாக மாற்றப்பட்டது.";
                break;

            case "lang_kn":
                language = "kannada";
                message = "✅ ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಲಾಗಿದೆ.";
                break;

            case "lang_ml":
                language = "malayalam";
                message = "✅ ഭാഷ മലയാളമായി മാറ്റി.";
                break;

            default:
                return;
        }

        setLanguage(chatId, language);

        // Remove loading animation
        await bot.answerCallbackQuery(query.id);

        // Edit the original message
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: query.message.message_id
        });

    });

};