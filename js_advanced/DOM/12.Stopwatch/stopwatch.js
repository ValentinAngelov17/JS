function stopwatch() {
    const buttons = document.getElementsByTagName('button');
    const startButton = buttons[0];
    const stopButton = buttons[1];
    let time = document.getElementById('time');


    let seconds = 0;
    let interval = null;


    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        stopButton.disabled = false;
        seconds = 0;
        time.innerHTML = `00:00`;
        

        interval = setInterval(function () {
            seconds++;

            time.innerHTML = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

        }, 1000)


    })

    stopButton.addEventListener('click', () => {
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
    })


}