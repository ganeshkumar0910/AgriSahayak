const { languageKeyboard } = require("../keyboards");

module.exports = (bot) => {

    bot.onText(/\/start/, (msg) => {

        const chatId = msg.chat.id;

        bot.sendMessage(
            chatId,
`🌱 Welcome to AgriSahayak

Your Smart Farming Assistant 🌾

Please choose your preferred language.`,
            languageKeyboard
        );

    });

};