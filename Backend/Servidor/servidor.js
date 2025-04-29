require("colors");
console.log("Olá mundo!".rainbow);
var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(express.static("public/"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
var server = http.createServer(app);
server.listen(80);
console.log("Servidor rodando...");

app.get("/", function(requisicao, resposta){
    resposta.redirect("LABs/projects.html")
})
app.get("/cadastra", function(requisicao, resposta){
    resposta.redirect("Cadastro.html")
})

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("Login.html")
})
app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("Login.html")
})
app.get("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let senha = requisicao.query.senha;
    let nascimento = requisicao.query.nascimento;
    console.log(nome, email, senha, nascimento);

    resposta.render("resposta.ejs", 
        {mensagem: "Usuário cadastrado com sucesso!", usuario: nome, login: email})
})
app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;
    console.log(nome, email, senha, nascimento);

    resposta.render("resposta.ejs")
})
app.get("/for_ejs", function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render("exemplo_for.ejs", {tamanho: num})
})