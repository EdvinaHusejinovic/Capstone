import html from "html-literal";
import linkedin from "../assets/img/linkedin.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";

export default () => html`
  <footer>
    <p>© 2023 Edvina Husejinovic - On Track</p>

    <div class="footer">
      <div class="social-links">
        <a href="https://www.facebook.com/edvina9/">
          <img src="${facebook}" />
        </a>
        <a href="https://www.instagram.com/edvina9/">
          <img src="${instagram}"
        /></a>

        <a href="https://www.linkedin.com/in/edvina-husejinovic-94b89224a/">
          <img src="${linkedin}" />
        </a>
      </div>
    </div>
  </footer>
`;
