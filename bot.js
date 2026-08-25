require("dotenv").config({ override: true });

const TelegramBot = require("node-telegram-bot-api");

// Handlers
const startHandler = require("./handlers/start");
const callbackHandler = require("./handlers/callback");
const messageHandler = require("./handlers/message");

// Create Bot
const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true,
});

console.log("🌱 AgriSahayak Bot Started...");

// Register Handlers
startHandler(bot);
callbackHandler(bot);
messageHandler(bot);