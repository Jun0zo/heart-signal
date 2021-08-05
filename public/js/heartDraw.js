var A = document.getElementById('slider_a').value;
var B = document.getElementById('slider_b').value;
var C = document.getElementById('slider_c').value;

document.querySelector('.x-exp .hid-var').textContent = document.querySelector('.x-exp .hid-var').textContent.replace('A', A)
document.querySelector('.y-exp-1 .hid-var').textContent = document.querySelector('.y-exp-1 .hid-var').textContent.replace('B', B)
document.querySelector('.y-exp-2 .hid-var').textContent = document.querySelector('.y-exp-2 .hid-var').textContent.replace('C', C)

var R = 80;

var global_canvas;


function setup() {
    var width = $(".row > div ").width();
    if(width <= 575)
        width = 200
    createCanvas(width, width);
    background('pink');
    
}

function draw() {
	var xh = (angle, A) => (R / 15.0 * A * Math.pow(Math.sin(angle), 3));
	var yh = (p, B, C) => R / 15.0 * (B * Math.cos(p) + C * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));
	
    background('#ffc0cb');
    fill('#E6007E');
    stroke(255);
    strokeWeight(3);
    beginShape();
    let n = 200;
    for (let i = 0; i < n; i++) {
        let x = width / 2 + xh((TAU * i / n),A);
        let y = height / 2 + yh((TAU * i / n), B, C);
        vertex(x, y);
    }
    endShape();
    
}

function windowResized() {
    resizeWindow()
}

function save2img() {
    draw()
    saveCanvas('myCanvas', 'png');
}

function resizeWindow() {
    var width = document.querySelector('.content').offsetWidth
    var height = document.querySelector('.content').offsetHeight
    resizeCanvas(width , height);
}

window.addEventListener('load', () => {
    resizeWindow()
}) 