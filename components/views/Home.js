import html from "html-literal";

export default state => html`
  <section id="homePage">
    <a id="JoinTodayAsA">Join Today as a ...</a>
    <br />
    <br />
    <br />

    <div class="weather-container">

      <div class="weather-block">
        <p class="city">Weather in ${state.weather.city}:</p>
      </div>

      <div class="weather-block">
        <p class="date">Date: ${state.weather.currentDate}</p>
      </div>

      <div class="weather-block">
        <p class="time">Time: ${state.weather.currentTime}</p>
      </div>

      <div class="weather-block temperature">
        <p class="Temperature">Temperature is at ${state.weather.temp}F, feels like ${state.weather.feelsLike}F</p>
      </div>

      <div class="weather-block">
        <p class="sky">If you look up the Sky is ${state.weather.clouds}</p>
      </div>

      <div class="weather-block">
        <p class="wind">Wind Speed: ${state.weather.windSpeed} m/s</p>
      </div>

      <div class="weather-block humidity">
        <p class="Humidity">Humidity is at ${state.weather.humidity}%</p>
      </div>

      <div class="weather-block">
        <p class="atmosphere">Atmospheric Pressure: ${state.weather.pressure} hPa</p>
      </div>

  </section>
`;
