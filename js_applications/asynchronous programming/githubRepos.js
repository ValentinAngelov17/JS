// Function to load commits from a GitHub repository
async function loadCommits() {
    // Get the username and repository name from the HTML input fields
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;

    // Select the unordered list element for displaying commits
    const commitsList = document.getElementById('commits');

    // Clear any previous commit entries
    commitsList.innerHTML = '';

    try {
        // Construct the GitHub API URL
        const url = `https://api.github.com/repos/${username}/${repo}/commits`;

        // Fetch data from the GitHub API
        const response = await fetch(url);

        // Handle HTTP errors
        if (!response.ok) {
            throw new Error(`${response.status} (${response.statusText})`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Iterate through each commit and append to the list
        data.forEach(commit => {
            const listItem = document.createElement('li');
            const authorName = commit.commit.author.name;
            const commitMessage = commit.commit.message;
            listItem.textContent = `${authorName}: ${commitMessage}`;
            commitsList.appendChild(listItem);
        });
    } catch (error) {
        // In case of an error, display it in the list
        const listItem = document.createElement('li');
        listItem.textContent = `Error: ${error.message}`;
        commitsList.appendChild(listItem);
    }
}
