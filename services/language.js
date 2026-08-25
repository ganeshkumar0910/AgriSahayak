const userLanguages = new Map();

function setLanguage(chatId, language) {
    console.log(`✅ Setting language for ${chatId}: ${language}`);
    userLanguages.set(chatId, language);
}

function getLanguage(chatId) {
    const language = userLanguages.get(chatId) || "english";
    console.log(`🌐 Language for ${chatId}: ${language}`);
    return language;
}

module.exports = {
    setLanguage,
    getLanguage
};