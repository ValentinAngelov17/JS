const firebaseUrl = 'api';

// Function to add a task
async function createTask(name, dueDate) {
    const task = { name, dueDate, completed: false };
    const response = await fetch(`${firebaseUrl}.json`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('Task added successfully:', data);
}

// Function to list all tasks
async function listTasks() {
    const response = await fetch(`${firebaseUrl}.json`);
    const tasks = await response.json();
    console.log('Current Tasks:');
    if (tasks) {
        for (const id in tasks) {
            const { name, dueDate, completed } = tasks[id];
            console.log(`- ID: ${id}, Task: ${name}, Due: ${dueDate}, Completed: ${completed}`);
        }
    } else {
        console.log('No tasks available.');
    }
}

// Function to update a task by ID
async function updateTask(taskId, newName, newDueDate, completedStatus) {
    const updatedTask = { name: newName, dueDate: newDueDate, completed: completedStatus };
    await fetch(`${firebaseUrl}/${taskId}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log('Task updated successfully!');
}

// Function to delete a task by ID
async function deleteTask(taskId) {
    await fetch(`${firebaseUrl}/${taskId}.json`, {
        method: 'DELETE'
    });
    console.log('Task deleted successfully!');
}

// Example Usage in Console
async function demoTasks() {
    console.log("Adding new tasks...");
    await createTask('Finish Project', '2025-01-10');
    await createTask('Buy Groceries', '2025-01-08');

    console.log("\nListing all tasks:");
    await listTasks();

    console.log("\nUpdating a task...");
    await updateTask('some-task-id', 'Submit Project', '2025-01-12', true);

    console.log("\nListing all tasks after update:");
    await listTasks();

    console.log("\nDeleting a task...");
    await deleteTask('some-task-id');

    console.log("\nFinal list of tasks:");
    await listTasks();
}


demoTasks();
