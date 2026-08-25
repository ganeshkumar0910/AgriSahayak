const languageKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "🇬🇧 English", callback_data: "lang_en" }
            ],
            [
                { text: "🇮🇳 తెలుగు", callback_data: "lang_te" }
            ],
            [
                { text: "🇮🇳 हिन्दी", callback_data: "lang_hi" }
            ],
            [
                { text: "🇮🇳 தமிழ்", callback_data: "lang_ta" }
            ],
            [
                { text: "🇮🇳 ಕನ್ನಡ", callback_data: "lang_kn" }
            ],
            [
                { text: "🇮🇳 മലയാളം", callback_data: "lang_ml" }
            ]
        ]
    }
};

const locationKeyboard = {
    reply_markup: {
        keyboard: [
            [
                {
                    text: "📍 Share Location",
                    request_location: true
                }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    }
};

module.exports = {
    languageKeyboard,
    locationKeyboard
};