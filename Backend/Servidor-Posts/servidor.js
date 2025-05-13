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

app.post("/cadastra", function(requisicao, resposta){
    var data = {db_nome: requisicao.body.nome, db_email: requisicao.body.email, db_senha: requisicao.body.senha };
    usuarios.insertOne(data, function(err){
        if (err) {
            resposta.render("resposta.ejs", {resposta: "Erro ao cadastrar usuário!"})
        }else {
            resposta.render("resposta.ejs", {resposta: "Usuário cadastrado com sucesso!"})
        }
    })
})

app.post("/login", function(req, resp) {
    let email = req.body.email;
    let senha = req.body.senha;
    let data = {db_email: email, db_senha: senha};
    usuarios.find(data).toArray(function(err, itens){
        if (itens.length == 0) {
            resp.render("resposta.ejs", {resposta: "Usuário não encontrado!"})
        }
        else if (err) {
            resp.render('resposta.ejs', {resposta: "Erro ao logar no usuário!"})
        }else {
            resp.render('resposta.ejs', {resposta: "Usuário logado com sucesso!"})        
        }
    })
})

app.post("/atualizar_cadastro", function(req, resp) {
    var data = { db_nome: req.body.nome, db_senha: req.body.senha };
    var newData = { $set: {db_senha: req.body.novaSenha} };

    usuarios.updateOne(data, newData, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        resp.render('resposta.ejs', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta.ejs', {resposta: "Erro ao atualizar usuário!"})
      }else {
        resp.render('resposta.ejs', {resposta: "Usuário atualizado com sucesso!"})        
      };
    });
   
  });

app.post("/remover_usuario", function(req, resp) {
    var data = { db_nome: req.body.nome, db_senha: req.body.senha };
    usuarios.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
            resp.render('resposta.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
            resp.render('resposta.ejs', {resposta: "Erro ao remover usuário!"})
        }else {
            resp.render('resposta.ejs', {resposta: "Usuário removido com sucesso!"})        
      };
    });
});


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