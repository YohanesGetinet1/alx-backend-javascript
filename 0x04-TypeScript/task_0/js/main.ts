/* Student Interface */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "Yohanes",
    lastName: "Nuriye",
    age: 22,
    location: "Bangalore"
};
const student2: Student = {
    firstName: "Barack",
    lastName: "Obama",
    age: 61,
    location: "Washington DC"
};
// Generics Array with interface Student
const StudentList: Array<Student> = [ student1,student2];

// rendering table using Vanilla Javascript
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
const headerCell2 = document.createElement('th');

headerCell1.textContent = 'Header 1';
headerCell2.textContent = 'Header 2';
headerRow.append(headerCell1, headerCell2);
thead.append(headerRow);

for (const student of StudentList) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.append(cell1,cell2);
    tbody.append(row);
}

table.append(thead, tbody);
const container = document.getElementById('table-container');
container.append(table);

