function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsUl = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then((response) => {
            commitsUl.innerHTML = '';
            if (response.status >= 400) {
                console.log(response);
                throw ({
                    responseStatus: response.status,
                    responseStatusText: response.statusText
                })
            } else {
                return response.json();

            }
        })
        .then((response) => {
            response.forEach(element => {
                console.log(element.commit.author.name);
                let li = document.createElement('li');
                li.innerHTML = `${element.commit.author.name}: ${element.commit.message}`
                commitsUl.appendChild(li);
            });
        })
        .catch((response) => {
            let error = document.createElement('li')
            error.innerText = `${response['responseStatus']} - ${response['responseStatusText']}`
            commitsUl.appendChild(error);
            console.log(response);
        })


}