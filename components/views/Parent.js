import html from "html-literal";

export default () => html`
  <div class="parentPage">
    <!--buttons on side -->
    <div class="tabs">
      <p>Click on tabs!</p>
    </div>

    <div id="parentSideButtons">
      <div class="sideButtons">
        <button class="tabs" id="tab1">Add Child Form</button>
        <button class="tabs" id="tab2">Send Message</button>
      </div>
    </div>

    <!-- Child Button -->
    <div id="addChild" class="tabContent active">
      <h3>Child Profile</h3>

      <form id="addChildForm" method="POST" action="">
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        />
        <br />
        <br />
        <label for="age">Age:</label>
        <br />
        <input type="text" name="age" id="age" placeholder="Age" required />
        <br />
        <br />
        <label for="gender">Gender:</label>
        <br />
        <select name="gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />

        <label for="grade">Grade:</label>
        <br />
        <input type="text" name="grade" id="grade" placeholder="Grade" />
        <br />
        <br />

        <label for="teacherName">Teacher Name:</label>
        <br />
        <input
          type="text"
          name="teacherName"
          id="teacherName"
          placeholder="Teacher Name"
        />
        <br />
        <br />

        <label for="school">School:</label>
        <br />
        <input type="text" name="school" id="school" placeholder="School" />
        <br />
        <br />

        <label for="activities">Activities:</label>
        <br />
        <input
          type="text"
          name="activities"
          id="activities"
          placeholder="Activities"
        />
        <br />
        <br />
        <button type="submit" id="mySubmit">Submit</button>
      </form>
    </div>

    <!-- Message Button -->
    <div id="message" class="tabContent">
      <h1>Contact Us</h1>
      <div class="messageForm">
        <form action="https://formspree.io/f/xeqyqpoy" method="POST">
          <label
            >Name:<input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            /> </label
          ><br /><br />
          <label
            >Email:<input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
            /> </label
          ><br /><br />
          <label
            >Message:<br /><textarea
              class="message"
              name="message"
            ></textarea> </label
          ><br />
          <button class="formSub" type="submit" value="Submit">Submit</button>
        </form>
      </div>
      <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
    </div>
  </div>

  <!-- <div id="message" class="tabContent">
      <h3>Contact Us</h3>

      <label for="subject">Subject:</label>
      <br />
      <input type="text" name="Subject" id="Subject" />
      <br />
      <br />
      <label for="subject">Message:</label>
      <br />
      <textarea name="bio" id="bio" cols="10" rows="10"></textarea>
      <br />
      <br />
      <button id="mySubmit">Submit</button>
      <br />
      <br />
    </div>
  </div> -->
`;
