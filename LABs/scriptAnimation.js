let canv1 = document.getElementById('canv1');
let ctx1 = canv1.getContext('2d');

let bola = {
    x: 0,
    y: 0,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'football_PNG52789.png'
        ctx1.beginPath();
        ctx1.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx1.closePath();
    }
}

function animacao(){
    ctx1.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canv1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left - 50;
    let y_mouse = evento.clientY - rect.top -50;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;

    if (bola.x >200){
        bola.x = 200
    }
    if (bola.x<0){
        bola.x = 0
    }
    if (bola.y<0){
        bola.y = 0
    }
    if (bola.y>200){
        bola.y = 200
    }
})
