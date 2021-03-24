const form = document.getElementById("input-form");

function validateEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  return reg.test(email);
}

function createTableHeadNode(tableHeader, value) {
  const header = document.createElement("th");
  const headerTextNode = document.createTextNode(value);
  header.appendChild(headerTextNode);
  tableHeader.appendChild(header);
}

function createTableCellNode(tableRow, value) {
  const cell = document.createElement("td");
  const cellTextNode = document.createTextNode(value);
  cell.appendChild(cellTextNode);
  tableRow.appendChild(cell);
}

form.addEventListener("submit", function clickHandler(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;

  console.log(name);
  console.log(mobile);
  console.log(email);

  if (name.length < 3) {
    alert("Name should be of minimum 3 characters long");
  } else if (mobile.length !== 10) {
    alert("Number should be of 10 characters long");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email");
  } else {
    const tables = document.getElementsByTagName("table");
    const resultContainer = document.getElementById("result");
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    if (tables.length === 0) {
      // Setting header for table
      createTableHeadNode(tableHead, "Name");
      createTableHeadNode(tableHead, "Mob. No.");
      createTableHeadNode(tableHead, "Email ID");
      table.appendChild(tableHead);
      // Adding the row
      const row = document.createElement("tr");
      createTableCellNode(row, name);
      createTableCellNode(row, mobile);
      createTableCellNode(row, email);

      tableBody.appendChild(row);

      table.appendChild(tableBody);
      resultContainer.appendChild(table);
    } else {
      const row = document.createElement("tr");
      createTableCellNode(row, name);
      createTableCellNode(row, mobile);
      createTableCellNode(row, email);

      const prevTableBody = document.getElementsByTagName("tbody")[0];
      prevTableBody.appendChild(row);
    }
  }

  console.log("asdfasd");
  form.reset();
});
