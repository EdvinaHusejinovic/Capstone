import html from "html-literal";

export default state => html`
  <table id="child">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Grade</th>
      <th>Activities</th>
    </tr>
    ${state.child
      .map(child => {
        return html`
          <tr>
            <td>${child.name}</td>
            <td>${child.age}</td>
            <td>${child.gender}</td>
            <td>${child.grade}</td>
            <td>${child.activities.join(" & ")}</td>
          </tr>
        `;
      })
      .join("")}
  </table>
`;
