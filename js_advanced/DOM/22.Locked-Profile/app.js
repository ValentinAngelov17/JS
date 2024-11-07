function lockedProfile() {
    const $buttons = document.querySelectorAll('div#container main#main div.profile button');

    [...$buttons]
    .forEach((button) => {
        button.addEventListener('click', (event) => {
            // const parent = event.currentTarget.previousElementSibling;
            // console.log(parent);

            const divSibling = event.currentTarget.parentNode.children[9];
            const selector = divSibling.id.split('HiddenFields')[0];

            const $lockInput = document.querySelector(`input[name="${selector + 'Locked'}"]`);

            if (!$lockInput.checked && button.textContent === "Show more") {
                divSibling.style.display = "block";
                button.textContent = "Hide";
            } else if (!$lockInput.checked) {
                divSibling.style.display = "none";
                button.textContent = "Show more";
            }
        });
    });
}
