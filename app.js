fetch('http://api.openweathermap.org/data/2.5/weather?id=627904&appid=d37ac89ef7c7457d4d4c0623f06babed')
.then(function (resp) {return resp.json()
})
.then(function (data) {
	console.log(data)
	document.querySelector('.header__city').textContent = data.name;
	document.querySelector('.header__discription') .textContent = data.weather[0].description;
	document.querySelector('.header__temperature').innerHTML = Math.floor(data.main.temp - 273)+'&deg'
	document.querySelector('.forecast__icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	document.querySelector('.forecast__humidity').textContent = 'Влажность  ' + data.main.humidity;
	document.querySelector('.forecast__wind').textContent = 'ветер  ' + data.wind.speed + 'm/s';
})

.catch(function(){

})