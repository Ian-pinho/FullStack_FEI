require("colors");
console.log("Olá mundo!".rainbow);
var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = `mongodb+srv://Ian_Pinho:5dgRe6hqKqJAbyVP@ians-database.mlityrs.mongodb.net/?retryWrites=true&w=majority&appName=Ians-DataBase`;


const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

var dboo = client.db("exemplo2_bd");
var posts = dboo.collection("postss");

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
    resposta.redirect("Servidor login/Cadastro.html")
})

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("Login.html")
})
app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("Login.html")
})

email2 = ""
senha2 = ""
app.post("/cadastra", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;
    console.log(nome, email, senha, nascimento);
    email2 = email
    senha2 = senha
    resposta.redirect("Servidor login/Login.html")
})

app.post("/login", function(req, resp) {
    let db_email = req.body.email;
    let db_senha = req.body.senha;
    console.log(db_email)
    console.log(email2)
    console.log(db_senha)
    console.log(senha2)
    if (email2 != db_email || senha2 != db_senha) {
        resp.render('resposta.ejs', {resposta: "Erro ao cadastrar usuário!"})
    }else {
        resp.render('resposta.ejs', {resposta: "Usuário cadastrado com sucesso!"})        
    }
})

app.get('/blog', function(requisicao, resposta) {
    posts.find().toArray(function(err, resultados) {
        if (err) {
            resposta.send('Erro ao buscar os posts');
        } else {
            resposta.render('blog.ejs', { posts: resultados });
        }
    });
});

app.post('/cad_blog', function(requisicao, resposta){
    resposta.redirect('LABs/cadastrar_post.html')
})

app.post('/cadpost', function(requisicao, resposta){
    let titulo = requisicao.body.titulo;
    let resumo = requisicao.body.resumo;
    let conteudo = requisicao.body.conteudo;

    let data = {db_titulo: titulo, db_resumo: resumo,db_conteudo: conteudo}
    
    posts.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_blog.ejs', 
                {mensagem: "Não Cadastrado!"})
        }else {
            resposta.render('resposta_blog.ejs', 
                {mensagem: "Cadastrado com Sucesso!"})   
        };
    });
});

app.get('/listaposts', function(requisicao, resposta) {
    posts.find().toArray(function(err, resultados) {
        if (err) {
            resposta.send('Erro ao buscar os posts');
        } else {
            resposta.render('lista_posts.ejs', { posts: resultados });
        }
    });
});

app.get("/for_ejs", function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render("exemplo_for.ejs", {tamanho: num})
})