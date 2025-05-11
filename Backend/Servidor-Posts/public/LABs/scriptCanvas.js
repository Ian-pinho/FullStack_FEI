let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrado(ctx, color, x, y, x1, y1){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, x1, y1);
    ctx.closePath();
}

desenhar_quadrado(ctx1, "red", 250, 0, 50, 50)
desenhar_quadrado(ctx1, "blue", 0, 0, 50, 50)
desenhar_quadrado(ctx1, "red", 110, 150, 40, 40)
desenhar_quadrado(ctx1, "cyan", 270, 135, 30, 30)
desenhar_quadrado(ctx1, "cyan", 0, 150, 30, 30)
desenhar_quadrado(ctx1, "cyan", 0, 120, 30, 30)
desenhar_quadrado(ctx1, "black", 270, 270, 30, 30)
desenhar_quadrado(ctx1, "black", 270, 240, 30, 30)
desenhar_quadrado(ctx1, "black", 240, 270, 30, 30)
desenhar_quadrado(ctx1, "yellow", 0, 270, 30, 30)
desenhar_quadrado(ctx1, "yellow", 0, 240, 30, 30)
desenhar_quadrado(ctx1, "yellow", 30, 270, 30, 30)


function desenhar_linha(ctx, color, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
}

desenhar_linha(ctx1, "blue", 0, 0, 150, 150)
desenhar_linha(ctx1, "red", 300, 0, 150, 150)
desenhar_linha(ctx1, "green", 0, 150, 300, 150)
desenhar_linha(ctx1, "gray", 150, 150, 150, 260)

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

desenhar_arco(ctx1, "transparent", "green", 150, 150, 70, 1, 2)
desenhar_arco(ctx1, "transparent", "green", 150, 150, 95, 1, 1.25)
desenhar_arco(ctx1, "transparent", "green", 150, 150, 95, 1.75, 2)
desenhar_arco(ctx1, "cyan", "blue", 150, 110, 15, 1, 4)
desenhar_arco(ctx1, "yellow", "green", 75, 220, 15, 1, 4)
desenhar_arco(ctx1, "yellow", "green", 225, 220, 15, 1, 4)
desenhar_arco(ctx1, "cyan", "green", 150, 300, 40, 1, 4)
desenhar_arco(ctx1, "transparent", "green", 150, 300, 60, 1.5, 2)
desenhar_arco(ctx1, "transparent", "green", 150, 300, 80, 1, 1.5)

function escrever(){
    
}

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

desenhar_arco(ctx2, "yellow", "yellow", 220, 50, 40, 1, 4)


desenhar_quadrado(ctx2, "gray", 0, 200, 300, 100)
desenhar_quadrado(ctx2, "brown", 30, 200, 20, -50)
desenhar_quadrado(ctx2, "brown", 240, 250, 20, -50)

desenhar_arco(ctx2, "green", "green", 40, 150, 25, 1, 4)
desenhar_arco(ctx2, "green", "green", 250, 190, 25, 1, 4)
desenhar_arco(ctx2, "blue", "blue", 0, 200, 29, 1, 2)
desenhar_quadrado(ctx2, "blue", 0, 200, 29, 50)
desenhar_quadrado(ctx2, "blue", 0, 250, 130, 50)
desenhar_arco(ctx2, "blue", "blue", 130, 300, 49, 1, 2)

desenhar_quadrado(ctx2, "brown", 110, 200, 80, -80)
desenhar_quadrado(ctx2, "blue", 120, 160, 20, -20)
desenhar_quadrado(ctx2, "blue", 180, 160, -20, -20)
desenhar_quadrado(ctx2, "black", 140, 200, 20, -40)

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'orange';
ctx2.strokeStyle = 'orange';
ctx2.moveTo (110, 120)
ctx2.lineTo (148, 90)
ctx2.lineTo (188, 120)
ctx2.lineTo (110, 120)
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

