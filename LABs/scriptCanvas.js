let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrado(ctx, color, x, y, x1, y1){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, x1, y1);
    ctx.closePath();
}

desenhar_quadrado(ctx1, "red", 0, 0, 50, 50)

function desenhar_linha(ctx, color, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
}

desenhar_linha(ctx1, "red", 0, 0, 300, 300)

function desenhar_arco(ctx, color, color2, x, y, r, ai, af){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.strokeStyle = color2;
    ctx.arc(x, y, r, ai*Math.PI, af*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

desenhar_arco(ctx1, "red", "blue", 150, 150, 50, 1, 2)

function escrever(){
    
}

let canvas2 = document.getElementById('canvas');
let ctx2 = canvas2.getContext('2d');

