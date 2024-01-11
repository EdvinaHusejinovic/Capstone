import html from "html-literal";

export default () => html`
  <div class="button-options">
    <a>Join as a</a>
    <button id="buttonOptions">Parent</button>

    <button id="buttonFailTeacher">Teacher</button>

    <button id="buttonFailStudent">Student</button>

    <button id="buttonFailAdmin">Administration</button>
  </div>
`;
