let getWeatherBut = document.getElementById(`getWeather`)
let getWeatherForecast = document.getElementById(`getWeatherForecast`)
let weatherInp = document.getElementById(`weatherInp`)
let forecastPart = document.getElementById(`forecastPart`)
let forecastContainer = document.getElementById(`forecastData`)

getWeatherBut.addEventListener(`click`, async (event) => {

  event.preventDefault()
  let userInput = document.getElementById(`weatherInp`).value
  let countryNam = document.getElementById(`cityNam`)
  let $Date = document.getElementById(`Date`)
  let Temp = document.getElementById(`Temp`)
  let Humidity = document.getElementById(`Humidity`)
  let FeelsLike = document.getElementById(`FeelsLike`)
  let Pressure = document.getElementById(`Pressure`)
  //const openModal = document.getElementById(event.target.id);
  const modal = document.getElementById('myModal');
  const closeModal = modal.getElementsByClassName('modal-close')[0];
  const modalContainer = modal.getElementsByClassName('modal-container')[0];
  const modalOverlay = modal.getElementsByClassName('modal-overlay')[0]; 
  // axios.get(`/currentWeather/${userInput}`)
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data);
  // countryNam.innerText = `${currWeatherinput.data.country} / ${userInput}`
  // $Date.innerText = currWeatherinput.data.date
  // Temp.innerText = `${currWeatherinput.data.temp}°C`
  // Humidity.innerText = `${currWeatherinput.data.humidity}%`
  // FeelsLike.innerText = `${currWeatherinput.data.feels_like}°C`
  // Pressure.innerHTML = `${currWeatherinput.data.pressure}hPa`
  // //    weatherInp = " "
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })
try{
   let currWeatherinput = await axios.get(`/currentWeather/${userInput}`)
  console.log(currWeatherinput.data);
  if(forecastPart.classList.contains(`hidden`)){
    forecastPart.classList.remove(`hidden`)
    forecastPart.classList.add(`flex`)
  }else{
   forecastContainer.classList.add(`hidden`)
   getWeatherForecast.classList.remove(`hidden`)
  }
  countryNam.innerText = `${currWeatherinput.data.country} / ${userInput}`
  $Date.innerText = currWeatherinput.data.date
  Temp.innerText = `${currWeatherinput.data.temp}°C`
  Humidity.innerText = `${currWeatherinput.data.humidity}%`
  FeelsLike.innerText = `${currWeatherinput.data.feels_like}°C`
  Pressure.innerHTML = `${currWeatherinput.data.pressure}hPa`
}
catch(error){

let openModal = (error) => {
  const modalText = document.getElementById(`Response`);
  if(weatherInp.value.length == 0){
    modalText.innerText = `Kindly enter the valid City Name`
    console.log(modalText.innerText)
  }
  else{
    modalText.innerText = error.response.data
  }
    console.log(error.response.data)
    modal.classList.remove('hidden');
  setTimeout( () => {
     modal.classList.add('modal-open');
     modalContainer.classList.add('modal-container-open');
  }, 50);
}
openModal(error)
closeModal.addEventListener('click',  () => {
  event.preventDefault()
    modal.classList.remove('modal-open');
    modalContainer.classList.remove('modal-container-open');
  setTimeout( () => {
    modal.classList.add('hidden');
  }, 300);
});
modalOverlay.addEventListener('click', () => {
  event.preventDefault()
    modal.classList.remove('modal-open');
    modalContainer.classList.remove('modal-container-open');
  setTimeout( () => {
    modal.classList.add('hidden');
  }, 300);
});
}  
})
getWeatherForecast.addEventListener(`click`, async () => {

forecastContainer.innerHTML = ' '
forecastContainer.classList.remove(`hidden`)
forecastContainer.classList.add(`flex`,`flex-col`)  
{/* <div class="flex flex-col  bg-blue-600/40 space-y-2 rounded-2xl p-2 border-2 border-blue-800 ">
        <div class="flex justify-around text-2xl w-full text-center text-white font-semibold border-t-2 border-blue-600 border-solid border-b-2">
            <span id="Date">Date</span>
        </div>
        <div class="flex  justify-around items-center">
            <img src="./images/CloudLOGO-removebg-preview.png" class="w-44 max-h-36 " alt="404 not-found">
            <p class="text-3xl text-center text-white" id="Temp">--°C</p>
        </div>
        <div class="flex justify-around p-1 bg-blue-600 rounded-2xl">
            <label for="" class="font-semibold  text-white  text-lg">Humidity</label>
            <p class="text-lg text-center text-white" id="Humidity">N / A</p>
        </div>
        <div class="flex justify-around p-1 bg-blue-600 rounded-2xl">
            <label for="" class="font-semibold  text-white  text-lg">FeelsLike</label>
            <p class="text-lg text-center text-white" id="FeelsLike">N / A</p>
        </div>
        <div class="flex justify-around p-1 bg-blue-600 rounded-2xl">
            <label for="" class="font-semibold  text-white  text-lg">Pressure</label>
            <p class="text-lg text-center text-white" id="Pressure">N / A</p>
        </div>
      </div> */}
  try {
    let userInput = document.getElementById(`weatherInp`).value

    let forecastData = await axios.get(`/weatherForecast/${userInput}`)
    let forecastDataArray = forecastData.data
    // handle success
  //console.log(forecastData.data);
  forecastDataArray.forEach(forecast => {
  console.log(forecast)
  let forecastDataContainer = document.createElement(`div`)
  let dateContainer = document.createElement(`div`)
  let TempContainer = document.createElement(`div`)
  let humidityContainer = document.createElement(`div`)
  let feelslikeContainer = document.createElement(`div`)
  let pressureContainer = document.createElement(`div`)
  let dateSpanContainer = document.createElement(`span`)
  let dateSpantxt = document.createTextNode(forecast.date)
  let imgContainer = document.createElement(`img`)
  let tempParaContainer = document.createElement(`p`)
  let tempParatxt = document.createTextNode(`${forecast.temp}°C`)
  let humidityParaContainer = document.createElement(`p`)
  let humidityParatxt = document.createTextNode(`${forecast.humidity}%`)
  let pressureParaContainer = document.createElement(`p`)
  let pressureParatxt = document.createTextNode(`${forecast.pressure}hPa`)
  let feelslikeParaContainer = document.createElement(`p`)
  let feelslikeParatxt = document.createTextNode(`${forecast.feels_like}°C`)
  let humidityLabelContainer = document.createElement(`label`)
  let humiditylabeltxt = document.createTextNode(`Humidity`)
  let feelslikeLabelContainer = document.createElement(`label`)
  let feelslikelabeltxt = document.createTextNode(`FeelsLike`)
  let pressureLabelContainer = document.createElement(`label`)
  let pressurelabeltxt = document.createTextNode(`Pressure`)
  tempParaContainer.appendChild(tempParatxt)
  imgContainer.src = `./images/CloudLOGO-removebg-preview.png`
  humidityParaContainer.appendChild(humidityParatxt)
  pressureParaContainer.appendChild(pressureParatxt)
  feelslikeParaContainer.appendChild(feelslikeParatxt)
  humidityLabelContainer.appendChild(humiditylabeltxt)
  feelslikeLabelContainer.appendChild(feelslikelabeltxt)
  pressureLabelContainer.appendChild(pressurelabeltxt)
  dateSpanContainer.appendChild(dateSpantxt)
  dateContainer.appendChild(dateSpanContainer)
  TempContainer.append(imgContainer,tempParaContainer)
  humidityContainer.append(humidityLabelContainer,humidityParaContainer)
  feelslikeContainer.append(feelslikeLabelContainer,feelslikeParaContainer)
  pressureContainer.append(pressureLabelContainer,pressureParaContainer)
  forecastDataContainer.append(dateContainer, TempContainer, humidityContainer, feelslikeContainer, pressureContainer)
  console.log(forecastDataContainer)
  forecastContainer.appendChild(forecastDataContainer)
  forecastDataContainer.classList.add(`flex`,`flex-col`,`bg-blue-600/40`,`space-y-2`,`rounded-2xl`,`p-2`,`border-2`,`border-blue-800`)
  dateContainer.classList.add(`flex`,`justify-around`,`text-2xl`,`w-full`,`text-center`,`text-white`,`font-semibold`,`border-t-2`,`border-blue-600`,`border-solid`, `border-b-2`)
  TempContainer.classList.add(`flex` , `justify-around` , `items-center`)
  tempParaContainer.classList.add(`text-3xl` ,`text-center`,`text-white`)
  imgContainer.classList.add(`w-44`,`max-h-36`)
  imgContainer.setAttribute(`alt`,`404 image not found`)
  humidityContainer.classList.add(`flex`,`justify-around`, `p-1`, `bg-blue-600`, `rounded-2xl`)
  humidityLabelContainer.classList.add(`font-semibold`, `text-white` , `text-lg`)
  humidityParaContainer.classList.add(`text-lg`, `text-center`, `text-white`)
  feelslikeContainer.classList.add(`flex`,`justify-around`, `p-1`, `bg-blue-600`, `rounded-2xl`)
  feelslikeLabelContainer.classList.add(`font-semibold`, `text-white` , `text-lg`)
  feelslikeParaContainer.classList.add(`text-lg`, `text-center`, `text-white`)
  pressureContainer.classList.add(`flex`,`justify-around`, `p-1`, `bg-blue-600`, `rounded-2xl`)
  pressureLabelContainer.classList.add(`font-semibold`, `text-white` , `text-lg`)
  pressureParaContainer.classList.add(`text-lg`, `text-center`, `text-white`)
  console.log(forecastData)
});
    
  }
  catch (error) {
    // handle error
    console.log(error);
  }
  getWeatherForecast.classList.add(`hidden`)
})
