const firebaseUrl = 'https://fir-playground-7e3a3-default-rtdb.europe-west1.firebasedatabase.app/students';

// Load all students
document.getElementById('loadStudents').addEventListener('click', async () => {
    const response = await fetch(`${firebaseUrl}.json`);
    const data = await response.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    if (!data) {
        tbody.innerHTML = '<tr><td colspan="4">No students available</td></tr>';
        return;
    }

    for (let id in data) {
        const student = data[id];
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        `;
        tbody.appendChild(row);
    }
});

// Create a new book
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const id = document.getElementById('ID').value;
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const facultyNumber = document.getElementById('FacultyNumber').value;
    const grade = document.getElementById('Grade').value;

    if (!id || !firstName || !lastName || !facultyNumber || !grade) {
        alert('Please fill out all fields!');
        return;
    }

    const newStudent = { id, firstName, lastName, facultyNumber, grade };
    await fetch(`${firebaseUrl}.json`, {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: { 'Content-Type': 'application/json' },
    });

    document.getElementById('ID').value = '';
    document.getElementById('FirstName').value = '';
    document.getElementById('LastName').value = '';
    document.getElementById('FacultyNumber').value = '';
    document.getElementById('Grade').value = '';

    alert('Student added successfully!');

    document.getElementById('loadStudents').click();
});
