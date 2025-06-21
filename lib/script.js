// The canvas itself doesn't draw anything. You need to get the 2D rendering context.
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Set the canvas size to match the size of the browser window.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the color, line join style and line cap style for drawing lines
ctx.strokeStyle = '#BADA55'; // line color
ctx.lineJoin = 'round'; // Rounded corners where lines meet
ctx.lineCap = 'round';  // rounded ends for lines
ctx.lineWidth = 10; // Initial width of the drawing line

// Drawing state variables
let isDrawing = false; // Tracks whether the user is currently drawing
let lastX = 0; // Stores the previous X coordinates for smooth line drawing
let lastY = 0; // Stores the previous Y coordinates for smooth line drawing
let hue = 0; // Tracks the color hue for the rainbow effect
let direction = true; // Determines the direction of line width change (increasing or decreasing)

// function for handling the drawing on the canvas
const draw = (e) => {
    if(!isDrawing) return; // stop the function from running when they are not moused down

    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Set stroke color using HSL for a rainbow effect
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    
    // Increment hue to cycle through colors of the rainbow
    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    // Reverse the direction of line width change when the min/max is reached
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    // Increase or decrease line width for a "breathing" effect
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}


// Event listener to track mouse movement over the canvas.
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

