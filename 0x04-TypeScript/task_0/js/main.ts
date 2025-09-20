interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Kumneger",
  lastName: "Getiye",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Elham",
  lastName: "Seid",
  age: 23,
  location: "Bahir Dar",
};
const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");

const headers: string[] = ["First Name", "Location"];
headers.forEach((headerText) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

table.appendChild(headerRow);
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});
document.body.appendChild(table);
