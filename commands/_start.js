/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Handle /start command
if (message == "/start") {
  Bot.sendMessage(
    "👋 Welcome to *@WeatherWiseRobot* 🌤️!\n\n" +
    "I can provide weather information for any city around the world. Just type the name of the city and I'll fetch the current weather for you.\n\n" +
    "🌍 To get started, type your desired city name."
  )
}

