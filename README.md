<div align="center">
  
  # 🌱 AgriSahayak
  
  **Empowering Farmers with AI-Driven Agricultural Intelligence via Telegram**
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-v16+-blue.svg)](https://nodejs.org/)
  [![Telegram](https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram)](https://core.telegram.org/bots)
  
  [Report Bug](https://github.com/ganeshkumar0910/AgriSahayak/issues) · [Request Feature](https://github.com/ganeshkumar0910/AgriSahayak/issues)
</div>

---

## 📖 About The Project

**AgriSahayak** is a multilingual, intelligent Telegram bot built to be a digital companion for farmers. By combining the conversational capabilities of the **Groq AI** with real-time **OpenWeather** data, AgriSahayak delivers tailored agricultural advice directly to a farmer's smartphone. 

Whether it's deciding the right time to irrigate or understanding complex fertilizer requirements, AgriSahayak is available 24/7 in the user's preferred language.

### ✨ Key Features

- 💬 **Dynamic AI Consultation:** Context-aware conversations powered by Groq API. Ask anything about farming, pests, or crops!
- 🌍 **Multilingual Accessibility:** Breaks down language barriers by communicating in various regional languages.
- ⛅ **Real-Time Weather Updates:** Accurate local weather forecasting to plan farming activities securely.
- 🌾 **Crop-Specific Guidance:** Best-practice cultivation methods for seasonal crops.
- 🧪 **Smart Fertilizer Advice:** Recommendations for nutrient management based on crop needs.
- 💧 **Irrigation Planning:** Climate and weather-based watering schedules to conserve water.

---

## 🛠️ Built With

* [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
* [![Telegram API](https://img.shields.io/badge/Telegram_API-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://core.telegram.org/bots/api)
* **Groq API** for ultra-fast AI inference
* **OpenWeather API** for meteorological data

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/) (v16.0.0 or higher)
* [npm](https://www.npmjs.com/) (usually installed with Node.js)
* A Telegram Account to interact with [@BotFather](https://t.me/botfather)

### Installation

1. **Get your API Keys:**
   * Get a free Telegram Bot token from [@BotFather](https://t.me/botfather).
   * Get a free API Key at [Groq Console](https://console.groq.com/).
   * Get a free API Key at [OpenWeather](https://openweathermap.org/api).

2. **Clone the repo:**
   ```sh
   git clone https://github.com/ganeshkumar0910/AgriSahayak.git
   cd AgriSahayak
   ```

3. **Install NPM packages:**
   ```sh
   npm install
   ```

4. **Configure Environment Variables:**
   Create a `.env` file in the root directory and enter your API keys.
   ```env
   BOT_TOKEN=your_telegram_bot_token_here
   GROQ_API_KEY=your_groq_api_key_here
   WEATHER_API_KEY=your_openweather_api_key_here
   ```

5. **Run the Bot:**
   ```sh
   npm start
   ```
   *You should see `🌱 AgriSahayak Bot Started...` in your terminal!*

---

## Usage
1. Start the bot by sending `/start` on Telegram.
2. Select your preferred language.
3. Choose a topic from the interactive keyboard or simply type your question.

---

## 📁 Project Architecture

```text
AgriSahayak/
├── handlers/          # Logic for incoming messages and callbacks
│   ├── start.js       # /start command handler
│   ├── message.js     # Text message routing
│   └── callback.js    # Inline button callback logic
├── services/          # External Integrations
│   ├── ai.service.js  # Groq API interactions
│   └── weather.js     # OpenWeather API calls
├── keyboards.js       # Telegram interactive button layouts
├── bot.js             # Main server entrypoint
└── package.json       # Dependencies & Scripts
```

---


---

## 📬 Contact

**Ganesh Kumar** - [@ganeshkumar0910](https://github.com/ganeshkumar0910)

Project Link: [https://github.com/ganeshkumar0910/AgriSahayak](https://github.com/ganeshkumar0910/AgriSahayak)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
