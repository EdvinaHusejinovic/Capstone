import html from "html-literal";

export default () => html`
  <main>
    <p>Join Today as a...</p>
    <nav>
      <i class="fas fa-bars"></i>
      <div class="hidden--mobile nav-links">
        <button class="join" id="joinAs">Parent</button>
        <button class="join" id="joinAs">Teacher</button>
        <button class="jabs" id="joinAs">Student</button>
        <button class="jabs" id="joinAs">Administration</button>
      </div>
    </nav>
  </main>
`;
