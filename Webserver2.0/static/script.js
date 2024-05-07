const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            populateTable(data);
        } else {
            console.error('Error fetching data');
        }
    };

    xhr.send();
}

function populateTable(data) {
    tableBody.innerHTML = ''; // Clear existing rows
    for (const row of data) {
        const tableRow = document.createElement('tr');
        const idCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const cgpaCell = document.createElement('td');

        idCell.textContent = row.ID;
        nameCell.textContent = row.name;
        ageCell.textContent = row.age;
        cgpaCell.textContent = row.CGPA;

        tableRow.appendChild(idCell);
        tableRow.appendChild(nameCell);
        tableRow.appendChild(ageCell);
        tableRow.appendChild(cgpaCell);

        tableBody.appendChild(tableRow);
    }
}

fetchData();
