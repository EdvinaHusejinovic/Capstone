import html from "html-literal";

export default () => html`
  <div class = "parentPage">
    <h3>Welcome. What is your name?</h3>
    <label for="myText">Name: </label>
    <input type="text" id="myText" />
    <br />
    <br />
    <button id="mySubmit">Submit</button>
    <br>
    <br>

    <div class="tabs">
      <p>Click on tabs!</p>
    </div>

    <div id="parentSideBar">
      <div class="sideBar">
        <button class="tabs active-content" id="tab1">Child</button>


        <button class="tabs" id="tab3">
          Message
        </button>
      </div>

      <!-- Child Page -->
      <div id="child" class="tabContent">
        <h3>Child Profile</h3>

        <label for="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" placeholder="Full Name" />
        <br />
        <br>
        <label for="name">Age:</label>
        <br />
        <input type="text" name="age" id="age" placeholder="Age" />
        <br />
        <br>
        <label for="gender">Gender:</label>
          <br />
          <select name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br>
          <br>


        <label for="name">Grade:</label>
        <br />
        <input type="text" name="grade" id="grade" placeholder="Grade" />
        <br />
        <br>
        <label for="name">Activities:</label>
        <br />
        <input type="text" name="activities" id="activities" placeholder="Activities" />
        <br />
        <br />
          <button id="mySubmit">Submit</button>


        </div>

          <!-- Message Page -->
          <div id="message" class="tabContent">
            <h3>Send Message</h3>

            <label for="subject">Subject:</label>
            <br />
            <input
              type="text"
              name="Subject"
              id="Subject"
              placeholder="Subject"
            />
            <br />
            <br>
            <label for="subject">Message:</label>
            <br />
            <textarea name="bio" id="bio" cols="10" rows="5"></textarea>
            <br>
            <br>
            <button id="mySubmit">Submit</button>
            <br />
            <br />

          </div>
        </div>
      </div>
    </div>
  </div>
`;
