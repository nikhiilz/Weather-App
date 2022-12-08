const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let weatherbycity = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)

			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			// humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			// wind_speed.innerHTML = response.wind_speed
			// wind_degrees.innerHTML = response.wind_degrees
			// sunrise.innerHTML = response.sunrise
			// sunset.innerHTML = response.sunset

			console.log("Your info for city has been fetched successfully")
		})
		.catch(err => console.error(err));
}

weatherbycity("Brampton")

search_submit.addEventListener("click", (e) => {
	e.preventDefault()
	weatherbycity(city.value)
}
)

let weatherofcity = (city2) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			document.getElementsByClassName(city2)[0].innerHTML = response.cloud_pct
			document.getElementsByClassName(city2)[1].innerHTML= response.feels_like
			document.getElementsByClassName(city2)[2].innerHTML= response.humidity
			document.getElementsByClassName(city2)[3].innerHTML= response.max_temp
			document.getElementsByClassName(city2)[4].innerHTML= response.min_temp
			document.getElementsByClassName(city2)[5].innerHTML= response.sunrise
			document.getElementsByClassName(city2)[6].innerHTML= response.sunset
			document.getElementsByClassName(city2)[7].innerHTML = response.temp
			document.getElementsByClassName(city2)[8].innerHTML = response.wind_degrees
			document.getElementsByClassName(city2)[9].innerHTML= response.wind_speed

			console.log("Your info for "+ city2 +" has been fetched successfully")
		})
		.catch(err => console.error(err));
}

weatherofcity('Mississauga')
weatherofcity('Scarborough')
weatherofcity('Malton')
weatherofcity('Toronto')
