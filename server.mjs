import express from 'express'
import path from 'path'
const app = express()
const port = process.env.PORT || 3000
const __dirname = path.resolve();
app.get('/currentWeather/:cityName', (req, res) => {

  let currWeatherData = {
    karachi: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    },
    quetta: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    },
    london: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    },
    manchestor: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    },
    newjersey: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    },
    newyork: {
      date: "June 23,2023",
      temp: 36,
      max_temp: 38,
      min_temp: 33,
      humidity: 78,
      feels_like: 42,
      pressure: 45
    }
  }

let userEnteredCityNam = req.params.cityName.toLowerCase()
let requestedWeatherData = currWeatherData[userEnteredCityNam]
if(requestedWeatherData){
  res.send(requestedWeatherData)
}else{
res.status(404).send(`Weather data is not available for ${req.params.cityName}`)
}

})
// app.get('/weatherForecast', (req, res) => {
  
// })
app.use(express.static(path.join(__dirname, `staticWeatherApp`)))
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})