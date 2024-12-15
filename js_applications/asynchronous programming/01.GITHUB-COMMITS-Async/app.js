async function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsUl = document.getElementById('commits');
    commitsUl.innerHTML = '';

    try {
        let response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
        if (response.status < 400) {
            let data = await response.json();
            data.forEach(element => {
                console.log(element.commit.author.name);
                let li = document.createElement('li');
                li.innerHTML = `${element.commit.author.name}: ${element.commit.message}`
                commitsUl.appendChild(li);
            });
        } else {
            throw ({
                responseStatus: response.status,
                responseStatusText: response.statusText
            })
        }

    } catch (error) {
        let li = document.createElement('li')
        li.innerText = `${error['responseStatus']} - ${error['responseStatusText']}`
        commitsUl.appendChild(li);
        console.log(response);
    }

}