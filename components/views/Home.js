import html from "html-literal";

export default state => html`
  <main>
    <h2>Welcome to On Track</h2>
    <p>Join today as a...</p>
    <nav>
      <i class="fas fa-bars"></i>
      <div class="hidden--mobile nav-links">
        <p>Parent</p>
        <p>Teacher</p>
        <p>Student</p>
        <p>Administration</p>
      </div>
    </nav>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </main>
`;
