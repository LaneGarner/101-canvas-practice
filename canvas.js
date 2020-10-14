let canvas = document.getElementById("my-canvas")


// c.fillRect(75, 75, 100, 100);
// c.fillStyle = 'red';
// c.fillRect(125, 125, 200, 40)


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
// console.log(c)
// c.fillRect(75, 75, 100, 100);
// c.fillStyle = 'red';
// c.fillRect(200, 125, 100, 40);
// c.fillStyle = 'green';
// c.fillRect(350, 125, 100, 40);
// c.fillStyle = 'black';
// c.fillRect(75, 200, 100, 100);

// c.beginPath();
// c.moveTo(20, 100)
// c.lineTo(1000, 500)
// c.strokeStyle= "pink";
// c.stroke();

c.beginPath();
c.strokeStyle = "hotpink";
c.arc(600, 250, 50, 0, 2 * Math.PI);
c.stroke();

for(let i=0; i < 50; i++ ) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
    const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;
    
    // Draw Circle
    c.beginPath();
    c.strokeStyle = colors[randomIndex];
    c.arc(x, y, 50, 0, 2 * Math.PI);
    c.stroke();
}


console.log(canvas);


window.onclick = () => {
    for(let i=0; i < 50; i++ ) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
        const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;
        
        // Draw Circle
        c.beginPath();
        c.strokeStyle = colors[randomIndex];
        c.arc(x, y, 50, 0, 2 * Math.PI);
        c.stroke();
    }
}
