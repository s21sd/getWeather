const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			feels_lik.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			humidity.innerHTML = response.humidity

			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp2.innerHTML = response.temp
			temp.innerHTML = response.temp
			wind_spee2.innerHTML = response.wind_speed
			wind_spee.innerHTML = response.wind_speed
			// wind_degr.innerHTML = response.wind_degrees
			
			
		

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})

// getWeather("Sidhauli");