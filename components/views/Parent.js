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
    <div id="addChild" class="tabContent">
      <h3>Child Profile</h3>

      <form id="addChildForm" method="POST" action="">
        <label for="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" placeholder="Full Name" />
        <br />
        <br />
        <label for="age">Age:</label>
        <br />
        <input type="text" name="age" id="age" placeholder="Age" />
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
      <h3>Send Message</h3>

      <label for="subject">Subject:</label>
      <br />
      <input type="text" name="Subject" id="Subject" placeholder="Subject" />
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
  </div>
`;

// <!-- Message Page if wanted it to be a form -->
// <div id="message" class="tabContent">
//   <h3>Send Message</h3>

//   <form id="messageForm">
//     <!-- Form content here-->

//     <button id="messageSubmit">Submit</button>
//   </form>
// </div>
// </div>
// `;
