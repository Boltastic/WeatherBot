/*CMD
  command: /onWeather
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

let result = JSON.parse(content)

if(result.error){
  Bot.sendMessage("🚨 Error: Could not fetch weather info for the provided city. Please try again later.")
  return
}

let location = result.location
let current = result.current

// Better formatting with emojis and styled text
Bot.sendMessage(
  "🌦️ *Weather for " + location.name + ", " + location.country + "*\n" +
  "---------------------------------\n" +
  "🌡️ *Temperature*: " + current.temp_c + "°C\n" +
  "☁️ *Condition*: " + current.condition.text + "\n" +
  "💧 *Humidity*: " + current.humidity + "%\n" +
  "🌬️ *Wind*: " + current.wind_kph + " kph\n" +
  "---------------------------------\n" +
  "*Stay safe and enjoy your day!* 🌞"
)

