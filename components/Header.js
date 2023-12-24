import html from "html-literal";
import logo from "../assets/img/dandelion.png";

export default state => html`
  <header>
    <img src=${logo} alt="logo" />
    ${state.header}
    <nav class="navigator">
      <ul>
        <li><a href=${state.home}>Home</a></li>
        <li><a href=${state.about}>About</a></li>
        <li><a href=${state.contact}>Contact</a></li>
      </ul>
    </nav>
  </header>
`;
