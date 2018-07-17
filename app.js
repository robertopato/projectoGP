"use strict";

const express = require("express");
const requestHandlers = require("./scripts/request-handlers.js");
const bodyParser = require("body-parser");
const app = express();
var fs = require("fs");
var mysql = require('mysql');
var firebase = require("firebase");




var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "projectoGP"
});

conn.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/"+"www/Home.html");
});
// Jogador
app.get("/utilizador", requestHandlers.getUtilizadores);
app.post("/utilizador", requestHandlers.createUpdateUtilizador);
//app.put("/player/:id", requestHandlers.createUpdatePlayer);
//app.delete("/player/:id", requestHandlers.removePlayer);
// Sessão Jogo
app.get("/candidatura", requestHandlers.getCandidaturas);
app.post("/candidatura", requestHandlers.createUpdateCandidatura);
//app.put("/gameSession/:id", requestHandlers.createUpdateGameSession);
//app.delete("/gameSession/:id", requestHandlers.removeGameSession);
// Estatistica
app.get("/renovacao", requestHandlers.getRenovacoes);
app.post("/renovacao", requestHandlers.createUpdateRenovacao);
//app.put("/statistic/:id", requestHandlers.createUpdateStatistic);
//app.delete("/statistic/:id", requestHandlers.removeStatistic);
// Tipo de Estatistica
app.get("/mensagem", requestHandlers.getMensagens);
app.post("/mensagem", requestHandlers.createUpdateMensagem);
//app.put("/statistictype/:id", requestHandlers.createUpdateStatisticType);
app.delete("/mensagem/:id", requestHandlers.removeMensagem);

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http:///%s:%s", host, port)

})

// Initialize Firebase
// TODO: Replace with your project's customized code snippet





