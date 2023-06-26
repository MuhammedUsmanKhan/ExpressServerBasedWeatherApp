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
      pressure: 45,
      country: "Pakistan"
    },
    quetta: {
      date: "June 23,2023",
      temp: 22,
      max_temp: 38,
      min_temp: 33,
      humidity: 40,
      feels_like: 32,
      pressure: 60,
      country: "Pakistan"
    },
    london: {
      date: "June 23,2023",
      temp: 16,
      max_temp: 38,
      min_temp: 33,
      humidity: 20,
      feels_like: 22,
      pressure: 33,
      country: "England"
    },
    manchestor: {
      date: "June 23,2023",
      temp: 20,
      max_temp: 38,
      min_temp: 33,
      humidity: 40,
      feels_like: 44,
      pressure: 64,
      country: "England"
    },
    newjersey: {
      date: "June 23,2023",
      temp: 44,
      max_temp: 38,
      min_temp: 33,
      humidity: 56,
      feels_like: 48,
      pressure: 50,
      country: "America"
    },
    newyork: {
      date: "June 23,2023",
      temp: 45,
      max_temp: 38,
      min_temp: 33,
      humidity: 88,
      feels_like: 48,
      pressure: 56,
      country: "America"
    }
  }

  let userEnteredCityNam = req.params.cityName.toLowerCase()
  let requestedWeatherData = currWeatherData[userEnteredCityNam]
  if (requestedWeatherData) {
    res.send(requestedWeatherData)
  } else {
    res.status(404).send(`The Data of City (${req.params.cityName}) you are trying to access right now is not available in our Pre-Defined DataSet . So Kindly enter from the following Cities that are available in our DataSet :\n-Karachi\n-Quetta\n-NewYork\n-NewJersey\n-London\n-Manchestor  `)
  }

})
app.get('/weatherForecast/:cityName', (req, res) => {
  let WeatherForecastData = {
    karachi: [
      {
        date: "June 25,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 46,
        max_temp: 38,
        min_temp: 33,
        humidity: 43,
        feels_like: 55,
        pressure:33,
        country: "Pakistan"
      },
      {
        date: "June 27,2023",
        temp: 38,
        max_temp: 38,
        min_temp: 33,
        humidity: 53,
        feels_like: 42,
        pressure: 66,
        country: "Pakistan"
      },
      {
        date: "June 28,2023",
        temp: 40,
        max_temp: 38,
        min_temp: 33,
        humidity: 43,
        feels_like: 48,
        pressure: 66,
        country: "Pakistan"
      },
      {
        date: "June 29,2023",
        temp: 32,
        max_temp: 38,
        min_temp: 33,
        humidity: 40,
        feels_like: 36,
        pressure: 39,
        country: "Pakistan"
      },
      {
        date: "June 30,2023",
        temp: 30,
        max_temp: 38,
        min_temp: 33,
        humidity: 38,
        feels_like: 44,
        pressure: 32,
        country: "Pakistan"
      }
    ],
    london: [
      {
        date: "June 25,2023",
        temp: 22,
        max_temp: 38,
        min_temp: 33,
        humidity: 12,
        feels_like: 24,
        pressure: 66,
        country: "England"
      },
      {
        date: "June 26,2023",
        temp: 12,
        max_temp: 38,
        min_temp: 33,
        humidity: 22,
        feels_like: 8,
        pressure: 22,
        country: "England"
      },
      {
        date: "June 27,2023",
        temp: 28,
        max_temp: 38,
        min_temp: 33,
        humidity: 30,
        feels_like: 26,
        pressure: 23,
        country: "England"
      },
      {
        date: "June 28,2023",
        temp: 10,
        max_temp: 38,
        min_temp: 33,
        humidity: 0,
        feels_like: 4,
        pressure: 33,
        country: "England"
      },
      {
        date: "June 29,2023",
        temp: 2,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: -2,
        pressure: 22,
        country: "England"
      },
      {
        date: "June 26,2023",
        temp: 16,
        max_temp: 38,
        min_temp: 33,
        humidity: 20,
        feels_like: 18,
        pressure: 24,
        country: "England"
      }
    ],
    quetta: [
      {
        date: "June 25,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "England"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "England"
      },
      {
        date: "June 27,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 28,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 29,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      }
    ],
    newyork: [
      {
        date: "June 25,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 27,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 28,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 29,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      }
    ],
    manchestor: [
      {
        date: "June 25,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 27,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 28,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 29,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      }
    ],
    newjersey: [
      {
        date: "June 25,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 27,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 28,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 29,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      },
      {
        date: "June 26,2023",
        temp: 36,
        max_temp: 38,
        min_temp: 33,
        humidity: 78,
        feels_like: 42,
        pressure: 45,
        country: "Pakistan"
      }
    ],
  }

let userEnteredCityNam = req.params.cityName
if(WeatherForecastData[userEnteredCityNam]){
  res.send(WeatherForecastData[userEnteredCityNam])
}
else{
  res.status(404).send(`Weather Forecast is not available for ${req.params.cityName}`)
}

})
app.use(express.static(path.join(__dirname, `staticWeatherApp`)))
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})