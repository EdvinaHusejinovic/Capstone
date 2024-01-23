import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import { Viewnotfound } from "./components/views";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links, state)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Home") {
    // Do this stuff
    document.getElementById("JoinTodayAsA").addEventListener("click", event => {
      event.preventDefault();
      router.navigate("/join");
    });
  }

  if (state.view === "Join") {
    // Do this stuff for Join view
    const buttonOptions = document.getElementById("buttonOptions");

    if (buttonOptions) {
      buttonOptions.addEventListener("click", event => {
        event.preventDefault();

        // Add logic to check if teacher, student, or admin buttons are clicked
        const isTeacherButton = event.target.id === "buttonFailTeacher";
        const isStudentButton = event.target.id === "buttonFailStudent";
        const isAdminButton = event.target.id === "buttonFailAdmin";

        if (isTeacherButton || isStudentButton || isAdminButton) {
          router.navigate("/Viewnotfound");
        } else {
          // Navigate to the "/parent" route for other cases
          router.navigate("/parent");
        }
      });
    }
  }

  if (state.view === "Parent") {
    document.querySelector("#tab1").addEventListener("click", () => {
      openSection(document.querySelector("#tab1"), "addChild");
      // Do this stuff for Parent view
      console.log(document.querySelector("#addChildForm"));
      // const parentSideBar = document.getElementById("parentSideBar");

      // if (parentSideBar) {
      document
        .querySelector("#addChildForm")
        .addEventListener("submit", event => {
          event.preventDefault();

          // Get the form element
          const inputList = event.target.elements;
          console.log("Input Element List", inputList);

          // Create a request body object to send to the API
          const requestData = {
            name: inputList.name.value,
            age: inputList.age.value,
            gender: inputList.gender.value,
            grade: inputList.grade.value,
            teacherName: inputList.teacherName.value,
            school: inputList.school.value,
            activities: inputList.activities.value
          };

          // Log the request body to the console
          console.log("request Body", requestData);

          axios
            // Make a POST request to the API to create new child
            .post(`${process.env.ADD_CHILD_API_URL}/children`, requestData)
            .then(response => {
              //  Then push the new child onto the Child state, so it can be displayed in the child list
              store.Child.children.push(response.data);
              router.navigate("/Child");
            })
            // If there is an error log it to the console
            .catch(error => {
              console.log("It puked", error);
            });
        });
    });

    document.querySelector("#tab2").addEventListener("click", () => {
      openSection(document.querySelector("#tab2"), "message");
    });
  }

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
}

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

            // Date object for the current date and time
            const currentDate = new Date();

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              currentDate: currentDate.toLocaleDateString(),
              currentTime: currentDate.toLocaleTimeString(),
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main,
              clouds: cloudCoverage(response.data.weather[0].description),
              windSpeed: response.data.wind.speed,
              humidity: response.data.main.humidity,
              pressure: response.data.main.pressure
            };

            done();

            // Cloud coverage on the sky condition
            function cloudCoverage(description) {
              const cloudDescription = description.toLowerCase();
              if (cloudDescription.includes("cloud")) {
                return "Cloudy";
              } else if (cloudDescription.includes("clear")) {
                return "Clear";
              } else {
                return "Unknown";
              }
            }
          })
          .catch(err => {
            console.log("Error", err);
            done();
          });
        break;

      case "Child":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.ADD_CHILD_API_URL}/children`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime
            //   let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);
            store.Child.children = response.data;

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
