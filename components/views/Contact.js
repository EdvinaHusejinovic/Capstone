import html from "html-literal";

export default () => html`
<h1 id="contactMe">Contact Me</h1>

  <div class="contactForm">

    <form action="" method="POST">



      <label for="name">Name:</label>
      <br>
      <input type="text" name="name" id="name" placeholder="Name"  required/>
      <br>
      <br>

      <label for="email">Email:</label>
      <br>
      <input type="email" name="email" id="email" placeholder="example@example.com" required />
      <br>
      <br>

      <label for="phone">Phone:</label>
      <br>
      <input type="tel" name="phone" id="phone" placeholder="333-333-3333" required/>
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
