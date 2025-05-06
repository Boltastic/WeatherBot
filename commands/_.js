/*CMD
  command: *
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

let city = message // user's reply
let apiKey = "afb1e52cb5b34a1d94d65557250605"

HTTP.get({
  url: "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + encodeURIComponent(city),
  success: "/onWeather"
})

// store city name in user property if you want
User.setProperty("lastCity", city, "string")

