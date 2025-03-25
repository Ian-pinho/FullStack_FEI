let n1 = Math.floor(Math.random()*100)
console.log(n1)
function test(){
    let n2 = parseInt(document.getElementById("num").value)
    if (n2 < n1){
        console.log("O número é maior!")
        document.getElementById("resp").innerHTML = "O número é maior!"
        document.getElementById("resp").style.setProperty("background-color", "red");
    }else if (n2 > n1){
        console.log("O número é menor!")
        document.getElementById("resp").innerHTML = "O número é menor!"
        document.getElementById("resp").style.setProperty("background-color", "red");
    }else{
        console.log("Você acertou o número!")
        document.getElementById("resp").innerHTML = "Você acertou o número!"
        document.getElementById("resp").style.setProperty("background-color", "green");

    }
}