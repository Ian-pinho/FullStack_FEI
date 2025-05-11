let canv1 = document.getElementById('canv1');
let ctx1 = canv1.getContext('2d');
let direcaox = 0
let direcaoy = 0
function desenhar(){
    ctx1.fillStyle = this.cor
    ctx1.fillRect(this.x, this.y, this.altura, this.largura)
}

let ret1 ={
    largura: 10,    
    altura: 10,
    cor: 'blue',
    x: 0,
    y: 0,
    desenha: desenhar
}
let ret2 ={
    largura: 10,
    altura: 10,
    cor: 'red',
    x: 200,
    y: 200,
    desenha: desenhar
}
let ret3 ={
    largura: 10,
    altura: 10,
    cor: 'green',
    x: 250,
    y: 250,
    desenha: desenhar
}

retangs = [ret1, ret2, ret3]

for (i = 0; i < retangs.length; i++){
    retangs[i].desenha()
}

function animacao(){
    ctx1.clearRect(0,0,300,300)
    ret1.desenha()
    ret2.desenha()
    ret3.desenha()
    requestAnimationFrame(animacao)
    if (ret1.y == 0 && ret1.x == 0){
        direcaox=1
        direcaoy=0
    }
    if (ret1.y == 0 && ret1.x == 290){
        direcaox=0
        direcaoy=1
    }
    if (ret1.y == 290 && ret1.x == 290){
        direcaox=-1
        direcaoy=0
    }
    if (ret1.y == 290 && ret1.x == 0){
        direcaox=0
        direcaoy=-1
    }
    ret1.x+=direcaox
    ret1.y+=direcaoy
}
animacao()
let velocidade = 3
document.addEventListener('keydown', function(evento){
    let tecla = evento.key
    console.log(tecla)
    if (tecla == "ArrowUp"){
        ret2.y -= velocidade
    } 
    if (tecla == "ArrowDown"){
        ret2.y += velocidade
    } 
    if (tecla == "ArrowRight"){
        ret2.x += velocidade
    } 
    if (tecla == "ArrowLeft"){
        ret2.x -= velocidade
    } 
    if (tecla == "+"){
        velocidade += 2
    } 
    if (tecla == "-"){
        velocidade -= 2
    } 
})

document.addEventListener("mousemove", function(evento){
    let rect = canv1.getBoundingClientRect()
    let mousex = evento.clientX - rect.left
    let mousey = evento.clientY - rect.top
    console.log(mousex, mousey)

    ret3.x = mousex-10
    ret3.y = mousey-10
})