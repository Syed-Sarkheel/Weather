const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5172daadcmsh23f87163e98e836p1e72a1jsnefc78fa1aac8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
   cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
      .then(response=>response.json())
      .then(response=>{
		console.log(response)

		cloud.innerHTML=response.cloud_pct
		tem.innerHTML=response.temp
		feels.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		windspeed.innerHTML=response.wind_speed
		winddegrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		maxtemp.innerHTML=response.max_temp
		mintemp.innerHTML=response.min_temp

	
	})
      .catch(err=>console.error(err));
}
search.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Bangalore")




