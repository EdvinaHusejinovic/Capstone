import html from "html-literal";

export default state => html`
  <section id="homePage">
    <a id="join">Join Today as a...</a>
    <br />
    <br />
    <br />
    <br />
  </section>
  <div class="weather" id="weather">
    <h2 class="h2Weather">Today's weather</h2>
    <p>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </p>
  </div>
`;
