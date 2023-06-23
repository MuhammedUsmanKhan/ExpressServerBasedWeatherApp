let getWeatherBut = document.getElementById(`getWeather`)

getWeatherBut.addEventListener(`click`,()=>{

    let userInput = document.getElementById(`weatherInp`).value

  axios.get(`/currentWeather/${userInput}`)
  .then((response) => {
    // handle success
    console.log(response);


    
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })

})

