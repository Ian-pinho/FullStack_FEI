let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// EXEC 1

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'green';
// ctx.fillRect(650, 650, 50, 50);

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(0, 650, 50, 50);

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'red';
// ctx.fillRect(0, 0, 50, 50);
// ctx.moveTo(50, 50)
// ctx.lineTo(700, 700)
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'blue';
// ctx.fillRect(650, 0, 50, 50);
// ctx.moveTo(650, 50)
// ctx.lineTo(0, 700)
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.strokeStyle = "green";
// ctx.arc(350, 350, 100, 0*Math.PI, 1*Math.PI);
// ctx.moveTo(0, 350);
// ctx.lineTo(700, 350);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "green";
// ctx.arc(100, 200, 50, 0*Math.PI, 2*Math.PI);
// ctx.moveTo(0, 350);
// ctx.lineTo(700, 350);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "green";
// ctx.arc(600, 200, 50, 0*Math.PI, 2*Math.PI);
// ctx.moveTo(0, 350);
// ctx.lineTo(700, 350);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.arc(500, 200, 100, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "gray";
ctx.fillRect(0, 500, 700, 200)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "brown";
ctx.fillRect(270, 500, 180, -180)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.fillRect(290, 420, 50, -50)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.fillRect(380, 420, 50, -50)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "black";
ctx.fillRect(340, 500, 40, -80)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'orange';
ctx.moveTo(270, 320);
ctx.lineTo(360, -70)
ctx.lineTo(360, -70)
ctx.lineTo(360, -70)
ctx.fill();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = "brown";
// ctx.fillRect(270, 500, 180, -200)