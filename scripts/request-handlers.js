"use strict";
const mysql = require("mysql");
const options = require("./connectionOptions.json");

/**
 * Função para retornar a lista de jogadores da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getUtilizadores(req, res) {
    console.log("Olá");
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select id, email, password, role from utilizador";
    connection.query(query, function (err, rows) {
        if (err) {
            console.log("erro:" + err.message);
            
            res.json({"Message": "Error MySQL query to utilizador" });
        } else {
            console.log(rows);
            res.json({"Message": "Success", "utilizador": rows });
        }
    });
}
module.exports.getUtilizadores = getUtilizadores;

/**
 * Função para retornar a lista de sessões de jogo da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getCandidaturas(req, res) {
    console.log("Olás");
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select id, emailSender, curriculum, cartaIntencoes from candidatura";
    connection.query(query, function (err, rows) {
        if (err) {
            console.log("erro: " + err.message);
            res.json({"Message": "Error MySQL query to candidatura" });
        } else {
            console.log("candidatura"+ rows);
            res.json({"Message": "Success", "candidaturas": rows });
        }
    });
}
module.exports.getCandidaturas = getCandidaturas;

/**
 * Função para retornar a lista de pessoas da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getRenovacoes(req, res) {
    console.log("Olássss");
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select id, emailEnvio, dadosRenovacao from renovacao";
    connection.query(query, function (err, rows) {
        if (err) {
            console.log("erro: " + err.message);
            res.json({"Message": "Error MySQL query to renovacao table" });
        } else {
            console.log("renovacao"+ rows);
            res.json({"Message": "Success", "renovacao": rows });
        }
    });
}
module.exports.getRenovacoes = getRenovacoes;

/**
 * Função para retornar a lista de países da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getMensagens(req, res) {
    console.log("OOOOOOlássss");
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select id, emailEnviar, corpoMensagem, tema, emailReceber from mensagem";
    connection.query(query, function (err, rows) {
        if (err) {
            console.log("erro: " + err.message);
            res.json({"Message": "Error MySQL query to mensagem" });
        } else {
            console.log("mensagem"+ rows);
            res.json({"Message": "Success", "mensagem": rows });
        }
    });
}
module.exports.getMensagens = getMensagens;

/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateUtilizador(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var email = req.body.email;
    var password = (req.body.password) ? req.body.password : null;
    var role = (req.body.role) ? req.body.role : null;
    var sql;
    
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO utilizador(email, password, role) VALUES (?,?,?)", [email, password, role]);
        }
    
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}
module.exports.createUpdateUtilizador = createUpdateUtilizador;

/**
 * Função que permite remover uma pessoa
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */


/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateCandidatura(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var emailSender = req.body.emailSender;
    var curriculum = (req.body.curriculum) ? req.body.curriculum : null;
    var cartaIntencoes = (req.body.cartaIntencoes) ? req.body.cartaIntencoes : null;
    var sql;
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO candidatura(emailSender, curriculum, cartaIntencoes) VALUES (?,?,?)", [emailSender, curriculum, cartaIntencoes]);
        }
    
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}
module.exports.createUpdateCandidatura = createUpdateCandidatura;

/**
 * Função que permite remover uma pessoa
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */


/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateRenovacao(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var emailEnvio = req.body.emailEnvio;
    var dadosRenovacao = (req.body.dadosRenovacao) ? req.body.dadosRenovacao : null;
    var sql;
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO renovacao(emailEnvio, dadosRenovacao) VALUES (?,?)", [emailEnvio, dadosRenovacao]);
        }
    
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}
module.exports.createUpdateRenovacao = createUpdateRenovacao;



/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateMensagem(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var emailEnviar = req.body.emailEnviar;
    var corpoMensagem = req.body.corpoMensagem;
    var tema = req.body.tema;
    var emailReceber = (req.body.emailReceber) ? req.body.emailReceber : null;
    var sql;
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO mensagem(emailEnviar, corpoMensagem, emailReceber, tema) VALUES (?,?,?,?)", [emailEnviar, corpoMensagem, emailReceber, tema]);
            
        }
    
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}
module.exports.createUpdateMensagem = createUpdateMensagem;

/**
 * Função que permite remover uma pessoa
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function removeMensagem(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var sql = mysql.format("DELETE FROM mensagem WHERE id = ?", [req.params.id]);
    connection.query(sql,
        function (err, rows, fields) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send();
            }
        });
    connection.end();
}

module.exports.removeMensagem = removeMensagem;