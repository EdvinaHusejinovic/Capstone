import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links, state)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
  afterRender();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  // for parent page
  function openSection(button, tabType) {
    var i, tabContent, tabs;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");

    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = (tabs[i].className + " ")
        .replace(" active ", "")
        .trim();
    }
    document.getElementById(tabType).style.display = "block";
    button.className += "active";
  }

  try {
    document.querySelector("#tab1").addEventListener("click", () => {
      openSection(document.querySelector("#tab1"), "child");
    });

    document.querySelector("#tab2").addEventListener("click", () => {
      openSection(document.querySelector("#tab2"), "message");
    });
  } catch (err) {
    // catch error
  }
}

// //Join today button
// if (state.view === "Home") {
//   //Do this stuff
//   document.getElementById("join").addEventListener("click", event => {
//     event.preventDefault();

//     router.navigate("/join");
//   });
// }

// if (state.view === "Parent") {
//   // Add an event handler for the submit button on the form
//   document.querySelector("form").addEventListener("submit", event => {
//     event.preventDefault();

//     let inputs = event.target.elements;

//     store.Join.joins.push({
//       name: event.target.elements.name.value,
//       age: event.target.elements.age.value,
//       gender: inputs.gender.value,
//       grade: event.target.elements.grade.value,
//       activities: []
//     });

//     console.log(store.Join.join);

//     router.navigate("/Join");
//   });
// }

router.hooks({
  before: async (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Join":
        axios
          .get(`${process.env.PIZZA_PLACE_API_URL}/Join`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime
            //   let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);
            store.Join.joins = response.data;

            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
