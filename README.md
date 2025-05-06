# WeatherWiseBot — Bots.Business Integration

A simple Telegram bot built using **Bots.Business** that fetches real-time weather data from **WeatherAPI.com** based on user-inputted city names.

## Overview

WeatherWiseBot allows users to type a city name and instantly receive the current temperature, weather condition, humidity, and wind speed for that location.

## Commands Structure

### `/start`

**Purpose:** Greet the user and instruct them to type a city name.

```javascript
Bot.sendMessage(
  "👋 *Welcome to WeatherWiseBot!* 🌦️\n\n" +
  "I can provide live weather updates for any city in the world.\n\n" +
  "🌍 *To get started, simply type the name of a city below.*"
)

```

---

### `*` (Any Message)

**Purpose:** Capture user input as a city name, call the WeatherAPI, and store the input.

```javascript
let city = message
let apiKey = "YOUR_WEATHERAPI_KEY"

HTTP.get({
  url: "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + encodeURIComponent(city),
  success: "/onWeather"
})

User.setProperty("lastCity", city, "string")
```

---

### `/onWeather`

**Purpose:** Receive weather data from the API and display it nicely to the user.

```javascript
let result = JSON.parse(content)

if(result.error){
  Bot.sendMessage("🚨 Couldn’t find weather for that city. Please check the spelling and try again.")
  return
}

let location = result.location
let current = result.current

Bot.sendMessage(
  "🌦️ *Weather in " + location.name + ", " + location.country + "*\n" +
  "---------------------------------\n" +
  "🌡️ *Temperature*: " + current.temp_c + "°C\n" +
  "☁️ *Condition*: " + current.condition.text + "\n" +
  "💧 *Humidity*: " + current.humidity + "%\n" +
  "🌬️ *Wind*: " + current.wind_kph + " kph\n" +
  "---------------------------------\n" +
  "*Type another city name to check again!*"
)
```

---

## Setup Instructions

1. Create a new bot on **Bots.Business**.
2. Add `/start`, `*`, and `/onWeather` commands.
3. Paste the corresponding code into each command.
4. Replace `YOUR_WEATHERAPI_KEY` with your actual key from [WeatherAPI.com](https://weatherapi.com).
5. Test your bot by typing `/start` and entering a city name.

## Notes

* Make sure to enable the HTTP module in Bots.Business.
* API calls are made via HTTP GET to `http://api.weatherapi.com/v1/current.json`.

## Example API Response

```json
{
  "location": {
    "name": "London",
    "country": "United Kingdom"
  },
  "current": {
    "temp_c": 14.0,
    "condition": {
      "text": "Partly cloudy"
    },
    "humidity": 82,
    "wind_kph": 11.9
  }
}
```

## License

Free to use for personal and educational projects. Give Credit For Commercial Use
