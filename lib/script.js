// The canvas itself doesn't draw anything. You need to get the 2D rendering context.
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('');

// Set the canvas size to match the size of the browser window.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the color, line join style and line cap style for drawing lines
ctx.strokeStyle = '#BADA55'; // line color
ctx.lineJoin = 'round'; // Rounded corners where lines meet
ctx.lineCap = 'round';  // rounded ends for lines

let isDrawing = false;

