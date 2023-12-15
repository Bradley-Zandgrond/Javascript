let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 0; // startsnelheid X
let dy = 0; // startsnelheid Y
let radius = 20; // radius van de circle

let x2 = 100;
let y2 = 150;
let speed = 4;
let radius2 = 20;

document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowLeft') {
        x2 -= speed; 
        if (x2 < radius2) {
            x2 = radius2;
        }  
    } else if (event.key === 'ArrowRight') {
        x2 += speed;
        if (x2 > canvas.width - radius2) {
            x2 = canvas.width - radius2;
        }
    }
});

// starten van bewegen bal 1
function startMovement(){
    dx = 2;
    dy = 2;
}

document.getElementById('startButton').addEventListener('click', startMovement)

// functie om een cirle te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// functie om een cirle te tekenen
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// uitrekenen van rand, tekenen van canvas
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawCircle();
    drawCircle2();

    // Verander de positie van de cirkel
    x += dx; // = x=x+dx
    y += dy; // = y=y+dy
    // laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dx < radius) {
        dy = -dy;
    }
    requestAnimationFrame(update); // Roep update weer aan voor de volgende
}
update(); // start de animatie