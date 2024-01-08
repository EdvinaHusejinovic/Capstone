import html from "html-literal";
import logo from "../assets/img/dandelion.png";

export default state => html`
  <div class="header">
    <header>
      <h1>${state.header}</h1>
      <h1>
        <span> <img src="${logo}" id="logoImage" alt="logo"/></span>
      </h1>
      <h1>On Track</h1>
    </header>
  </div>
`;
