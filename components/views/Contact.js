import html from "html-literal";

export default () => html`
<h1 id="contactMe">Contact Me</h1>

  <div class="contactForm">

    <form action="https://formspree.io/f/xeqyqpoy" method="POST">



      <label for="name">Name:</label>
      <br>
      <input type="text" name="name" id="name" placeholder="Full Name"  required/>
      <br>
      <br>

      <label for="email">Email:</label>
      <br>
      <input type="email" name="email" id="email" placeholder="you@somewhere.com" required />
      <br>
      <br>

      <label for="phone">Phone:</label>
      <br>
      <input type="tel" name="phone" id="phone" placeholder="555-555-5555" required/>
      <br>
      <br>

        <label for="msg">Subject:</label>
        <br>
        <textarea name="message" id="msg" cols="10" rows="6" required></textarea>

      </div>


  </div>
  <br>
    <input type="submit" value="Submit" id = "buttonS" />
    </form>

  </div>
</div>
`;
