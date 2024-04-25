function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`latitude : ${lat} longitude : ${lng}`);
    fetchWeatherData(lat, lng);
  }

  const apiKey = "2f824fae95087f04d29f3c298ff3a779";

  async function fetchWeatherData(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const chunk = await response.json();
    console.log(chunk);
    updateWeather(chunk);
  }

  function updateWeather(chunk) {
    document.getElementById("name").innerHTML = chunk.name;
    document.getElementById("con11").innerHTML = chunk.weather[0].description;
    document.getElementById("11").innerHTML =
      "Temp " + Math.floor(chunk.main.temp) + "ºC";
    document.getElementById("12").innerHTML =
      "Feel_like " + Math.ceil(chunk.main.feels_like) + "ºC";
    document.getElementById("13").innerHTML =
      "Wind " + chunk.wind.speed + "kph";
    document.getElementById("14").innerHTML =
      "Pressure " + chunk.main.pressure + "mbar";
    document.getElementById("15").innerHTML =
      "Humidity " + chunk.main.humidity + "%";
    document.getElementById("16").innerHTML = "Cloud " + chunk.clouds.all + "%";
  }
}

function newForcast() {
  const apiKey = "e8335881d1c74b2b945132542242504&";
  var Data;
  async function fetchWeatherData(Data) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}q=${Data}&days=5&aqi=yes&alerts=yes`
    );
    const data = await response.json();
    console.log(data);
    updateWeather(data);
  }

  let formElement = document.querySelector(".search-form");
  const inputElement = document.querySelector(".city-input");
  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    Data = inputElement.value;

    if (Data !== "") {
      fetchWeatherData(Data);
    }
  });

  function updateWeather(data) {
    document.getElementById("city-info").innerHTML =
      "City : " +
      data.location.name +
      "<br />" +
      "Region : " +
      data.location.region +
      "<br />" +
      "Country : " +
      data.location.country;

    document.getElementById("date2").innerHTML = data.current.last_updated;
    document.getElementById("con2").innerHTML =
      "<img src=" +
      data.current.condition.icon +
      " style=height:40px;width:40px><span style=vertical-align:middle>" +
      data.current.condition.text +
      "</span>";
    document.getElementById("21").innerHTML =
      "Temp " + "<br>" + Math.floor(data.current.temp_c) + "°C";
    document.getElementById("22").innerHTML =
      "Feel " + "<br>" + Math.floor(data.current.feelslike_c) + "°C";
    document.getElementById("23").innerHTML =
      "Wind " + "<br>" + data.current.wind_kph + "kph";
    document.getElementById("24").innerHTML =
      "pressure " + "<br>" + data.current.pressure_mb + "mb";
    document.getElementById("25").innerHTML =
      "Humidity " + "<br>" + data.current.humidity + "%";
    document.getElementById("26").innerHTML =
      "Cloud " + "<br>" + data.current.cloud + "%";
    document.getElementById("27").innerHTML =
      "Precip " + "<br>" + data.current.precip_mm + "mm";
    document.getElementById("28").innerHTML = "UV " + "<br>" + data.current.uv;

    document.getElementById("011").innerHTML =
      data.forecast.forecastday[0].hour[1].time;
    document.getElementById("012").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[1].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[1].condition.text +
      "</span>";
    document.getElementById("013").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[1].temp_c) +
      "°C";
    document.getElementById("014").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[1].wind_kph + "kph";
    document.getElementById("015").innerHTML =
      "Humidity   " + data.forecast.forecastday[0].hour[1].humidity + "%";
    document.getElementById("016").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[1].chance_of_rain + "%";
    document.getElementById("017").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[1].cloud + "%";
    document.getElementById("018").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[1].uv;

    document.getElementById("021").innerHTML =
      data.forecast.forecastday[0].hour[3].time;
    document.getElementById("022").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[3].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[3].condition.text +
      "</span>";
    document.getElementById("023").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[3].temp_c) +
      "°C";
    document.getElementById("024").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[3].wind_kph + "kph";
    document.getElementById("025").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[3].humidity + "%";
    document.getElementById("026").innerHTML =
      "Rain   " + data.forecast.forecastday[0].hour[3].chance_of_rain + "%";
    document.getElementById("027").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[3].cloud + "%";
    document.getElementById("028").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[3].uv;

    document.getElementById("031").innerHTML =
      data.forecast.forecastday[0].hour[5].time;
    document.getElementById("032").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[5].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[5].condition.text +
      "</span>";
    document.getElementById("033").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[5].temp_c) +
      "°C";
    document.getElementById("034").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[5].wind_kph + "kph";
    document.getElementById("035").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[5].humidity + "%";
    document.getElementById("036").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[5].chance_of_rain + "%";
    document.getElementById("037").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[5].cloud + "%";
    document.getElementById("038").innerHTML =
      "UV     " + data.forecast.forecastday[0].hour[5].uv;

    document.getElementById("041").innerHTML =
      data.forecast.forecastday[0].hour[7].time;
    document.getElementById("042").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[7].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[7].condition.text +
      "</span>";
    document.getElementById("043").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[7].temp_c) +
      "°C";
    document.getElementById("044").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[7].wind_kph + "kph";
    document.getElementById("045").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[7].humidity + "%";
    document.getElementById("046").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[7].chance_of_rain + "%";
    document.getElementById("047").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[7].cloud + "%";
    document.getElementById("048").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[7].uv;

    document.getElementById("051").innerHTML =
      data.forecast.forecastday[0].hour[9].time;
    document.getElementById("052").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[9].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[9].condition.text +
      "</span>";
    document.getElementById("053").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[9].temp_c) +
      "°C";
    document.getElementById("054").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[9].wind_kph + "kph";
    document.getElementById("055").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[9].humidity + "%";
    document.getElementById("056").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[9].chance_of_rain + "%";
    document.getElementById("057").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[9].cloud + "%";
    document.getElementById("058").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[9].uv;

    document.getElementById("061").innerHTML =
      data.forecast.forecastday[0].hour[11].time;
    document.getElementById("062").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[11].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[11].condition.text +
      "</span>";
    document.getElementById("063").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[11].temp_c) +
      "°C";
    document.getElementById("064").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[11].wind_kph + "kph";
    document.getElementById("065").innerHTML =
      "Humidity   " + data.forecast.forecastday[0].hour[11].humidity + "%";
    document.getElementById("066").innerHTML =
      "Rain   " + data.forecast.forecastday[0].hour[11].chance_of_rain + "%";
    document.getElementById("067").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[11].cloud + "%";
    document.getElementById("068").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[11].uv;

    document.getElementById("071").innerHTML =
      data.forecast.forecastday[0].hour[13].time;
    document.getElementById("072").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[13].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[13].condition.text +
      "</span>";
    document.getElementById("073").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[13].temp_c) +
      "°C";
    document.getElementById("074").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[13].wind_kph + "kph";
    document.getElementById("075").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[13].humidity + "%";
    document.getElementById("076").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[13].chance_of_rain + "%";
    document.getElementById("077").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[13].cloud + "%";
    document.getElementById("078").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[13].uv;

    document.getElementById("081").innerHTML =
      data.forecast.forecastday[0].hour[15].time;
    document.getElementById("082").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[15].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[15].condition.text +
      "</span>";
    document.getElementById("083").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[15].temp_c) +
      "°C";
    document.getElementById("084").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[15].wind_kph + "kph";
    document.getElementById("085").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[15].humidity + "%";
    document.getElementById("086").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[15].chance_of_rain + "%";
    document.getElementById("087").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[15].cloud + "%";
    document.getElementById("088").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[15].uv;

    document.getElementById("091").innerHTML =
      data.forecast.forecastday[0].hour[17].time;
    document.getElementById("092").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[17].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[17].condition.text +
      "</span>";
    document.getElementById("093").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[17].temp_c) +
      "°C";
    document.getElementById("094").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[17].wind_kph + "kph";
    document.getElementById("095").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[17].humidity + "%";
    document.getElementById("096").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[17].chance_of_rain + "%";
    document.getElementById("097").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[17].cloud + "%";
    document.getElementById("098").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[17].uv;

    document.getElementById("101").innerHTML =
      data.forecast.forecastday[0].hour[19].time;
    document.getElementById("102").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[19].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[19].condition.text +
      "</span>";
    document.getElementById("103").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[19].temp_c) +
      "°C";
    document.getElementById("104").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[19].wind_kph + "kph";
    document.getElementById("105").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[19].humidity + "%";
    document.getElementById("106").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[19].chance_of_rain + "%";
    document.getElementById("107").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[19].cloud + "%";
    document.getElementById("108").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[19].uv;

    document.getElementById("111").innerHTML =
      data.forecast.forecastday[0].hour[21].time;
    document.getElementById("112").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[21].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[21].condition.text +
      "</span>";
    document.getElementById("113").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[21].temp_c) +
      "°C";
    document.getElementById("114").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[21].wind_kph + "kph";
    document.getElementById("115").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[21].humidity + "%";
    document.getElementById("116").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[21].chance_of_rain + "%";
    document.getElementById("117").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[21].cloud + "%";
    document.getElementById("118").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[21].uv;

    document.getElementById("sunrise").innerHTML =
      "Sunrise " + "</br>" + data.forecast.forecastday[0].astro.sunrise;
    document.getElementById("sunset").innerHTML =
      "Sunset " + "</br>" + data.forecast.forecastday[0].astro.sunset;
    document.getElementById("moonrise").innerHTML =
      "Moonrise " + "</br>" + data.forecast.forecastday[0].astro.moonrise;
    document.getElementById("moonset").innerHTML =
      "Moonset " + "<br>" + data.forecast.forecastday[0].astro.moonset;
    document.getElementById("moon_phase").innerHTML =
      "Moon Phase " + "</br>" + data.forecast.forecastday[0].astro.moon_phase;
    document.getElementById("illumination").innerHTML =
      "Luminous " +
      "</br>" +
      data.forecast.forecastday[0].astro.moon_illumination +
      "%";

    document.getElementById("121").innerHTML =
      data.forecast.forecastday[0].hour[23].time;
    document.getElementById("122").innerHTML =
      "<img src=" +
      data.forecast.forecastday[0].hour[23].condition.icon +
      " style=height:30px;width:30px;border-radius:50%><span style=vertical-align:middle>" +
      data.forecast.forecastday[0].hour[23].condition.text +
      "</span>";
    document.getElementById("123").innerHTML =
      "Temp    " +
      Math.floor(data.forecast.forecastday[0].hour[23].temp_c) +
      "°C";
    document.getElementById("124").innerHTML =
      "Wind    " + data.forecast.forecastday[0].hour[23].wind_kph + "kph";
    document.getElementById("125").innerHTML =
      "Humidity    " + data.forecast.forecastday[0].hour[23].humidity + "%";
    document.getElementById("126").innerHTML =
      "Rain    " + data.forecast.forecastday[0].hour[23].chance_of_rain + "%";
    document.getElementById("127").innerHTML =
      "Cloud    " + data.forecast.forecastday[0].hour[23].cloud + "%";
    document.getElementById("128").innerHTML =
      "UV    " + data.forecast.forecastday[0].hour[23].uv;

    document.getElementById("date31").innerHTML =
      data.forecast.forecastday[1].date;
    document.getElementById("con31").innerHTML =
      "<img src=" +
      data.forecast.forecastday[1].day.condition.icon +
      " style=height:30px;width:30px;border-radius:50%>" +
      data.forecast.forecastday[1].day.condition.text;
    document.getElementById("31").innerHTML =
      "Temp " +
      "<br>" +
      Math.floor(data.forecast.forecastday[1].hour[0].temp_c) +
      "ºC";
    document.getElementById("32").innerHTML =
      "Precip " +
      "<br>" +
      data.forecast.forecastday[1].day.totalprecip_mm +
      "mm";
    document.getElementById("33").innerHTML =
      "Wind " + "<br>" + data.forecast.forecastday[1].hour[0].wind_kph + "kph";
    document.getElementById("34").innerHTML =
      "Pressure " +
      "<br>" +
      data.forecast.forecastday[1].hour[0].pressure_mb +
      "mb";
    document.getElementById("35").innerHTML =
      "Humudity " +
      "<br>" +
      data.forecast.forecastday[1].hour[0].humidity +
      "%";
    document.getElementById("36").innerHTML =
      "Clouds " + "<br>" + data.forecast.forecastday[1].hour[0].cloud + "%";
    document.getElementById("37").innerHTML =
      "Rain" +
      "<br>" +
      data.forecast.forecastday[1].hour[0].chance_of_rain +
      "%";
    document.getElementById("38").innerHTML =
      "UV" + "<br>" + data.forecast.forecastday[1].hour[0].uv;

    document.getElementById("date41").innerHTML =
      data.forecast.forecastday[2].date;
    document.getElementById("con41").innerHTML =
      "<img src=" +
      data.forecast.forecastday[2].day.condition.icon +
      " style=height:30px;width:30px;border-radius:50%>" +
      data.forecast.forecastday[2].day.condition.text;
    document.getElementById("41").innerHTML =
      "Temp " +
      "<br>" +
      Math.floor(data.forecast.forecastday[2].hour[0].temp_c) +
      "ºC";
    document.getElementById("42").innerHTML =
      "Precip " +
      "<br>" +
      data.forecast.forecastday[2].day.totalprecip_mm +
      "mm";
    document.getElementById("43").innerHTML =
      "Wind " + "<br>" + data.forecast.forecastday[2].hour[0].wind_kph + "kph";
    document.getElementById("44").innerHTML =
      "Pressure " +
      "<br>" +
      data.forecast.forecastday[2].hour[0].pressure_mb +
      "mb";
    document.getElementById("45").innerHTML =
      "Humudity " +
      "<br>" +
      data.forecast.forecastday[2].hour[0].humidity +
      "%";
    document.getElementById("46").innerHTML =
      "Clouds " + "<br>" + data.forecast.forecastday[2].hour[0].cloud + "%";
    document.getElementById("47").innerHTML =
      "Rain" +
      "<br>" +
      data.forecast.forecastday[2].hour[0].chance_of_rain +
      "%";
    document.getElementById("48").innerHTML =
      "UV" + "<br>" + data.forecast.forecastday[2].hour[0].uv;

    document.getElementById("date51").innerHTML =
      data.forecast.forecastday[3].date;
    document.getElementById("con51").innerHTML =
      "<img src=" +
      data.forecast.forecastday[3].day.condition.icon +
      " style=height:30px;width:30px;border-radius:50%>" +
      data.forecast.forecastday[3].day.condition.text;
    document.getElementById("51").innerHTML =
      "Temp " +
      "<br>" +
      Math.floor(data.forecast.forecastday[3].hour[0].temp_c) +
      "ºC";
    document.getElementById("52").innerHTML =
      "Precip " +
      "<br>" +
      data.forecast.forecastday[3].day.totalprecip_mm +
      "mm";
    document.getElementById("53").innerHTML =
      "Wind " + "<br>" + data.forecast.forecastday[3].hour[0].wind_kph + "kph";
    document.getElementById("54").innerHTML =
      "Pressure " +
      "<br>" +
      data.forecast.forecastday[3].hour[0].pressure_mb +
      "mb";
    document.getElementById("55").innerHTML =
      "Humudity " +
      "<br>" +
      data.forecast.forecastday[3].hour[0].humidity +
      "%";
    document.getElementById("56").innerHTML =
      "Clouds " + "<br>" + data.forecast.forecastday[3].hour[0].cloud + "%";
    document.getElementById("57").innerHTML =
      "Rain" +
      "<br>" +
      data.forecast.forecastday[3].hour[0].chance_of_rain +
      "%";
    document.getElementById("58").innerHTML =
      "UV" + "<br>" + data.forecast.forecastday[3].hour[0].uv;

    document.getElementById("date61").innerHTML =
      data.forecast.forecastday[4].date;
    document.getElementById("con61").innerHTML =
      "<img src=" +
      data.forecast.forecastday[4].day.condition.icon +
      " style=height:30px;width:30px;border-radius:50%>" +
      data.forecast.forecastday[4].day.condition.text;
    document.getElementById("61").innerHTML =
      "Temp " +
      "<br>" +
      Math.floor(data.forecast.forecastday[4].hour[0].temp_c) +
      "ºC";
    document.getElementById("62").innerHTML =
      "Precip " +
      "<br>" +
      data.forecast.forecastday[4].day.totalprecip_mm +
      "mm";
    document.getElementById("63").innerHTML =
      "Wind " + "<br>" + data.forecast.forecastday[4].hour[0].wind_kph + "kph";
    document.getElementById("64").innerHTML =
      "Pressure " +
      "<br>" +
      data.forecast.forecastday[4].hour[0].pressure_mb +
      "mb";
    document.getElementById("65").innerHTML =
      "Humudity " +
      "<br>" +
      data.forecast.forecastday[4].hour[0].humidity +
      "%";
    document.getElementById("66").innerHTML =
      "Clouds " + "<br>" + data.forecast.forecastday[4].hour[0].cloud + "%";
    document.getElementById("67").innerHTML =
      "Rain" +
      "<br>" +
      data.forecast.forecastday[4].hour[0].chance_of_rain +
      "%";
    document.getElementById("68").innerHTML =
      "UV" + "<br>" + data.forecast.forecastday[4].hour[0].uv;
  }
}
