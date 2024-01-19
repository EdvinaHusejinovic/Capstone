import html from "html-literal";

export default state => html`
  <link rel="stylesheet" href="styles.css" />

  <div class="child-container">
    ${state.children
      .map(child => {
        return html`
          <div class="child">
            <p><strong>Name:</strong> ${child.name}</p>
            <p><strong>Age:</strong> ${child.age}</p>
            <p><strong>Gender:</strong> ${child.gender}</p>
            <p><strong>Grade:</strong> ${child.grade}</p>
            <p><strong>Teacher Name:</strong> ${child.teacherName}</p>
            <p><strong>School:</strong> ${child.school}</p>
            <p><strong>Activities:</strong> ${child.activities.join(" & ")}</p>
          </div>
        `;
      })
      .join("")}
  </div>
`;
