function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    
    gradient.addEventListener('mousemove', (e) => {
        let rect = gradient.getBoundingClientRect();
        let xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    
        result.innerHTML = `${Math.floor(xPercent)}%`
        
    });
}