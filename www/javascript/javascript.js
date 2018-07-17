"use strict";
//const mysql = require("mysql");
//const options = require("./connectionOptions.json");
/**
 * Coloca a informação numa ul HTML "dentro" do elemento com id=this.id
 * @param {string} separador - texto separador de cada campo do ItemInformacao.
 */


function viewHome() {
    /** @todo 
     * Criar a estrutura da tabela utilizando DOM. 
     * A criação de cada linha deverá ser feita por um método de cada um dos objectos da classe "ItemInformacao" previamente guardados.
     * Não esquecer de substituir os filhos do elemento pai que contém a informação com a nova tabela.
     * Sugestão: Implementar e utilizar a função "substituirFilhos".
     */
    
    document.getElementById("Home").style.display="inline";
    document.getElementById("register").style.display="inline";
    document.getElementById("login").style.display="inline";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("Mensagens").style.display="none";
    document.getElementById("Candidaturas").style.display="none";
    document.getElementById("Renovacoes").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("criarMensagem").style.display="none";
};

 function viewEnviarCandidaturas() {
    /** @todo 
     * Criar a estrutura da tabela utilizando DOM. 
     * A criação de cada linha deverá ser feita por um método de cada um dos objectos da classe "ItemInformacao" previamente guardados.
     * Não esquecer de substituir os filhos do elemento pai que contém a informação com a nova tabela.
     * Sugestão: Implementar e utilizar a função "substituirFilhos".
     */
    
    document.getElementById("Home").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("enviarCandidatura").style.display="inline";
    document.getElementById("formCandidatura").style.display="inline";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("Mensagens").style.display="none";
    document.getElementById("Candidaturas").style.display="none";
    document.getElementById("Renovacoes").style.display="none";
    document.getElementById("enviarCandidatura").style.display="inline";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("criarMensagem").style.display="none";
};

function viewRenovacaoContratos() {
    /** @todo 
     * Criar a estrutura da tabela utilizando DOM. 
     * A criação de cada linha deverá ser feita por um método de cada um dos objectos da classe "ItemInformacao" previamente guardados.
     * Não esquecer de substituir os filhos do elemento pai que contém a informação com a nova tabela.
     * Sugestão: Implementar e utilizar a função "substituirFilhos".
     */
    
    document.getElementById("Home").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="inline";
    document.getElementById("formRenovacaoContrato").style.display="inline";
    document.getElementById("Mensagens").style.display="none";
    document.getElementById("Candidaturas").style.display="none";
    document.getElementById("Renovacoes").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="inline";
    document.getElementById("criarMensagem").style.display="none";
};

function viewMensagens() {
    /** @todo 
     * Criar a estrutura da tabela utilizando DOM. 
     * A criação de cada linha deverá ser feita por um método de cada um dos objectos da classe "ItemInformacao" previamente guardados.
     * Não esquecer de substituir os filhos do elemento pai que contém a informação com a nova tabela.
     * Sugestão: Implementar e utilizar a função "substituirFilhos".
     */
    
    document.getElementById("Home").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("Mensagens").style.display="inline";
    document.getElementById("Candidaturas").style.display="none";
    document.getElementById("Renovacoes").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("criarMensagem").style.display="none";
};

function viewCandidaturas() {
    document.getElementById("Home").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("Mensagens").style.display="none";
    document.getElementById("Candidaturas").style.display="inline";
    document.getElementById("Renovacoes").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("criarMensagem").style.display="none";
};

function viewRenovacoes () {
    /** @todo 
     * Criar a estrutura da tabela utilizando DOM. 
     * A criação de cada linha deverá ser feita por um método de cada um dos objectos da classe "ItemInformacao" previamente guardados.
     * Não esquecer de substituir os filhos do elemento pai que contém a informação com a nova tabela.
     * Sugestão: Implementar e utilizar a função "substituirFilhos".
     */
    
    document.getElementById("Home").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("Mensagens").style.display="none";
    document.getElementById("Candidaturas").style.display="none";
    document.getElementById("Renovacoes").style.display="inline";
    document.getElementById("enviarCandidatura").style.display="none";
    document.getElementById("renovacaoContrato").style.display="none";
    document.getElementById("criarMensagem").style.display="none";
};



/**
 * Função que será executada quando a página estiver toda carregada, criando a variável global "info" com um objeto Information
 * Aproveitamos ainda para solicitar ao servidor o carregamento de dados de forma assincrona(AJAX)
 * @memberof window
 * @params {Event} event - objeto que representará o evento
 */

 //------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//lab12 partes que tem-se de alterar
//-----------------------------------------------------------------------
//--------------------------------------------------------------------------
//-----------------------------------------------------------------------


window.onload = function (event) {
    var info1 = new InfoUtilizador("Utilizadores");
    var info2 = new InfoCandidatura("Candidaturas");
    var info3 = new InfoRenovacao("Renovacoes");
    var info4 = new InfoMensagem("Mensagens");
    //console.log("pre getPlayer");
    info1.getUtilizador();
    //console.log("pos getPlayer");
    info2.getCandidatura();
    
    info3.getRenovacao();
    info4.getMensagem();
    window.info1 = info1;
    window.info2=info2;
    window.info3=info3;
    window.info4=info4;
};

/** 
* @class Guarda toda informação necessaria na execução do exercicio 
* @constructs Informacao
* @param {string} id - id do elemento HTML que contém a informação.
* 
* @property {string} id - id do elemento HTML que contém a informação.
* @property {country[]} countries - Array de objetos do tipo Country, para guardar todos os countries do nosso sistema
* @property {person[]} players - Array de objetos do tipo person, para guardar todas as pessoas do nosso sistema
*/
function InfoUtilizador(id) {
    this.id = id;
    this.utilizadores=[];
};

function InfoCandidatura(id){
    this.id = id;
    this.candidaturas=[];
};

function InfoRenovacao(id){
    this.id = id;
    this.renovacoes=[];
};

function InfoMensagem(id){
    this.id = id;
    this.mensagens=[];
};

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade jogador 
* @constructs Player
* @param {int} id - id da pessoa
* @param {int} nome - nome da pessoa
* @param {Date} dataDeNasc - data de nascimento da pessoa
* @param {string} país - país da pessoa
*/
function Utilizador(email, password, role) {
    this.email = email;
    this.password = password;
    this.role = role;
};

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade sessão de jogo
* @constructs GameSession
* @param {int} id - id do país
* @param {Date} dataInicio - inicio da sessão
* @param {string} descricao - descrição da sessão
* @param {string} nomeJogador - nome do Jogador
*/

function Candidatura(id, emailSender, curriculum, cartaIntencoes) {
    this.id=id;
    this.emailSender = emailSender;
    this.curriculum = curriculum;
    this.cartaIntencoes = cartaIntencoes;
};

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade estatistica
* @constructs Statistic
* @param {int} id - id da estatistica
* @param {int} valor - valor da estatistica
* @param {string} tipo - tipo da estatistica
* @param {int} sessaoJogo - Id da sessão do jogo
*/
function Renovacao(id, emailEnvio, dadosRenovacao){
    this.id=id;
    this.emailEnvio=emailEnvio;
    this.dadosRenovacao=dadosRenovacao;
};

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade tipo estatistica
* @constructs StatisticType
* @param {int} id - id da estatistica
* @param {string} nome - valor da estatistica
* @param {string} descricao - tipo da estatistica
*/
function Mensagem(id, emailEnviar, corpoMensagem, emailReceber){
    this.id=id;
    this.emailEnviar=emailEnviar;
    this.corpoMensagem=corpoMensagem;
    this.emailReceber=emailReceber;
};

/**
 * coloca a palavra "home" no div titulo e limpa o div informação
 */
/*
Information.prototype.showHome = function () {
    document.getElementById("headerTitle").textContent="Home";
    replaceChilds(this.id,document.createElement("div"));
};
*/
/**
 * coloca a palavra "Player" no div titulo e cria dinamicamente uma tabela com a informação dos jogadores
 */
/*
InfoJogador.prototype.showPlayer = function () {
    //document.getElementById("headerTitle").textContent="Players";
    document.getElementById("formPlayer").style.display="none";
    var table = document.createElement("table");
    table.id="tablePlayer";
    table.appendChild(tableHead(new Player()));
    for(var i=0;i<this.players.length;i++){
        table.appendChild(tableLine(this.players[i]));
    }
    var divTable = document.createElement("div");
    divTable.setAttribute("id", "divTable");
    divTable.appendChild(table);
    function deletePlayerEventHandler(){
        var table = document.getElementById("tablePlayer");
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkBox = row.cells[0].firstChild;
            var idPlayer = row.cells[1].firstChild.nodeValue;
            if (checkBox.checked) {
                info1.removePlayer(idPlayer);
            }
        }
    }
    *//*
    function newUtilizadorEventHandler(){
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formRegister").action="javascript: info1.processingUtilizador('create');";
        
        //for(var i=0;i<info.countries.length;i++)
        //    document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
    }*/
    /*
    function updatePlayerEventHandler(){
        var idPlayer =0;
        for (var i = 1; i<table.rows.length; i++) {
            var checkBox = table.rows[i].cells[0].firstChild;
            if (checkBox.checked)
                idPlayer = parseInt(table.rows[i].cells[1].firstChild.nodeValue);
        }
        replaceChilds("divTable",document.createElement("div"));
        console.log(document.getElementById("formPlayer").tagName);
        document.getElementById("formPlayer").action="javascript: info1.processingPlayer('update');";
        document.getElementById("addPlayer").style.display="block";
        document.getElementById("formPlayer").style.display="block";
        document.getElementById("id").value=idPlayer;
        document.getElementById("nome").value=info1.players[info1.players.findIndex(i => i.id === idPlayer)].nome;
        document.getElementById("dataDeNasc").value=info1.players[info1.players.findIndex(i => i.id === idPlayer)].dataDeNasc.toString().split('T')[0];
        document.getElementById("país").value=info1.players[info1.players.findIndex(i => i.id === idPlayer)].país;
        //var idCountry = info.players[info.players.findIndex(i => i.id === idPerson)].idCountry;
        //for(var i=0;i<info.countries.length;i++){
         //   document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
           // if(info1.countries[i].id===idCountry)
         //       document.getElementById("countries").selectedIndex=i;
        //}
    }*/




/**
 * coloca a palavra "GameSession" no div titulo e cria dinamicamente uma tabela com a informação das sessões de jogo
 */
InfoCandidatura.prototype.showCandidatura = function () {
    //document.getElementById("headerTitle").textContent="GameSessions";
    document.getElementById("formCandidatura").style.display="none";
    var table = document.createElement("table");
    table.id="tableCandidatura";
    table.appendChild(tableHeadWithoutCheckBox(new Candidatura()));
    for(var i=0;i<this.candidaturas.length;i++){
        table.appendChild(tableLineWithoutCheckbox(this.candidaturas[i]));
    }
    var divTable = document.createElement("divTable");
    divTable.setAttribute("id", "divTable");
    divTable.appendChild(table);
    replaceChilds(this.id, divTable);
        /*
    function deleteCandidaturaEventHandler(){
        var table = document.getElementById("tableCandidatura");
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkBox = row.cells[0].firstChild;
            var idCandidatura = row.cells[1].firstChild.nodeValue;
            if (checkBox.checked) {
                info2.removeCandidatura(idCandidatura);
            }
        }
    }*/
    /*function newCandidaturaEventHandler(){
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formCandidatura").action="javascript: info2.processingCandidatura('create');";
        document.getElementById("formCandidatura").style.display="block";
        document.getElementById("enviarCandidatura").style.display="block";
        
        //for(var i=0;i<info.countries.length;i++)
        //    document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
    }
    /*
    function updateGameSessionEventHandler(){
        var idGameSession =0;
        for (var i = 1; i<table.rows.length; i++) {
            var checkBox = table.rows[i].cells[0].firstChild;
            if (checkBox.checked)
                idGameSession = parseInt(table.rows[i].cells[1].firstChild.nodeValue);
        }
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formGameSession").action="javascript: info2.processingGameSession('update');";
        document.getElementById("addGameSession").style.display="block";
        document.getElementById("formGameSession").style.display="block";
        document.getElementById("id").value=idGameSession;
        document.getElementById("dataInicio").value=info2.gameSessions[info2.gameSessions.findIndex(i => i.id === idGameSession)].dataInicio.toString().split('T')[0];
        document.getElementById("descricao").value=info2.gameSessions[info2.gameSessions.findIndex(i => i.id === idGameSession)].descricao;
        document.getElementById("nomeJogador").value=info2.gameSessions[info2.gameSessions.findIndex(i => i.id === idGameSession)].nomeJogador;
        //var idCountry = info.players[info.players.findIndex(i => i.id === idPerson)].idCountry;
        //for(var i=0;i<info.countries.length;i++){
         //   document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
           // if(info1.countries[i].id===idCountry)
         //       document.getElementById("countries").selectedIndex=i;
        //}
    }
    createButton(divTable, newGameSessionEventHandler, "New Game Session");*/
    //createButton(divTable, deleteCandidaturaEventHandler, "Delete Candidatura");
    //createButton(divTable, updateGameSessionEventHandler, "Update Game Session");
    //replaceChilds(this.id,divTable);
};

/**
 * coloca a palavra "Statistic" no div titulo e cria dinamicamente uma tabela com a informação das estatisticas
 */

InfoRenovacao.prototype.showRenovacao = function () {
    //document.getElementById("headerTitle").textContent="Statistics";
    document.getElementById("formRenovacaoContrato").style.display="none";
    var table = document.createElement("table");
    table.id="tableRenovacao";
    table.appendChild(tableHeadWithoutCheckBox(new Renovacao()));
    for(var i=0;i<this.renovacoes.length;i++){
        table.appendChild(tableLineWithoutCheckbox(this.renovacoes[i]));
    }
    var divTable = document.createElement("divTable");
    divTable.setAttribute("id", "divTable");
    divTable.appendChild(table);
    replaceChilds(this.id, divTable);
    /*function deleteStatisticEventHandler(){
        var table = document.getElementById("tableStatistic");
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkBox = row.cells[0].firstChild;
            var idStatistic = row.cells[1].firstChild.nodeValue;
            if (checkBox.checked) {
                info3.removeStatistic(idStatistic);
            }
        }
    }*/
    /*function newRenovacaoEventHandler(){
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formRenovacao").action="javascript: info3.processingRenovacao('create');";
        document.getElementById("addRenovacao").style.display="block";
        document.getElementById("formRenovacao").style.display="block";
        //for(var i=0;i<info.countries.length;i++)
        //    document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
    }*/
    /*function updateStatisticEventHandler(){
        var idStatistic =0;
        for (var i = 1; i<table.rows.length; i++) {
            var checkBox = table.rows[i].cells[0].firstChild;
            if (checkBox.checked)
                idStatistic = parseInt(table.rows[i].cells[1].firstChild.nodeValue);
        }
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formStatistic").action="javascript: info3.processingStatistic('update');";
        document.getElementById("addStatistic").style.display="block";
        document.getElementById("formStatistic").style.display="block";
        document.getElementById("id").value=idStatistic;
        document.getElementById("valor").value=info3.statistics[info3.statistics.findIndex(i => i.id === idStatistic)].valor;
        document.getElementById("tipo").value=info3.statistics[info3.statistics.findIndex(i => i.id === idStatistic)].tipo;
        document.getElementById("sessaoJogo").value=info3.statistics[info3.statistics.findIndex(i => i.id === idStatistic)].sessaoJogo;
        //var idCountry = info.players[info.players.findIndex(i => i.id === idPerson)].idCountry;
        //for(var i=0;i<info.countries.length;i++){
         //   document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
           // if(info1.countries[i].id===idCountry)
         //       document.getElementById("countries").selectedIndex=i;
        //}
    }
    createButton(divTable, newStatisticEventHandler, "New Statistic");
    createButton(divTable, deleteStatisticEventHandler, "Delete Statistic");
    createButton(divTable, updateStatisticEventHandler, "Update Statistic");*/
    //replaceChilds(this.id,divTable);
};



/**
 * coloca a palavra "StatisticType" no div titulo e cria dinamicamente uma tabela com a informação dos tipos de estatistica
 */

InfoMensagem.prototype.showMensagem = function () {
    console.log("showMensagem");
    //document.getElementById("headerTitle").textContent="StatisticsType";
    document.getElementById("enviarEmail").style.display="none";
    document.getElementById("formMensagem").style.display="none";
    var table = document.createElement("table");
    table.id="tableMensagem";
    table.appendChild(tableHead(new Mensagem()));
    for(var i=0;i<this.mensagens.length;i++){
        table.appendChild(tableLine(this.mensagens[i]));
    }
    var divTable = document.createElement("divTable");
    divTable.setAttribute("id", "divTable");
    divTable.appendChild(table);
    function deleteMensagemEventHandler(){
        var table = document.getElementById("tableMensagem");
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkBox = row.cells[0].firstChild;
            var idMensagem = row.cells[1].firstChild.nodeValue;
            if (checkBox.checked) {
                info4.removeMensagem(idMensagem);
            }
        }
    }
    function newMensagemEventHandler(){
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("criarMensagem").style.display="block";
        document.getElementById("formMensagem").style.display="block";
        document.getElementById("formMensagem").action="javascript: info4.processingMensagem('create');";
        
        //for(var i=0;i<info.countries.length;i++)
        //    document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
    }/*
    function updateMensagemEventHandler(){
        var idMensagem =0;
        for (var i = 1; i<table.rows.length; i++) {
            var checkBox = table.rows[i].cells[0].firstChild;
            if (checkBox.checked)
            idMensagem = parseInt(table.rows[i].cells[1].firstChild.nodeValue);
        }
        replaceChilds("divTable",document.createElement("div"));
        document.getElementById("formStatisticType").action="javascript: info4.processingStatisticType('update');"
        document.getElementById("addStatisticType").style.display="block";
        document.getElementById("formStatisticType").style.display="block";
        document.getElementById("id").value=idStatisticType;
        document.getElementById("nome").value=info4.statisticsType[info4.statisticsType.findIndex(i => i.id === idStatisticType)].nome;
        document.getElementById("descricao").value=info4.statisticsType[info4.statisticsType.findIndex(i => i.id === idStatisticType)].descricao;
        //var idCountry = info.players[info.players.findIndex(i => i.id === idPerson)].idCountry;
        //for(var i=0;i<info.countries.length;i++){
         //   document.getElementById("countries").options[i] =new Option(info.countries[i].name, info.countries[i].id);
           // if(info1.countries[i].id===idCountry)
         //       document.getElementById("countries").selectedIndex=i;
        //}
    }*/
    createButton(divTable, newMensagemEventHandler, "Nova Mensagem");
    createButton(divTable, deleteMensagemEventHandler, "Apagar Mensagem");
    //createButton(divTable, updateStatisticTypeEventHandler, "Update Statistic Type");
    replaceChilds(this.id,divTable);
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso player através do verbo GET, usando pedidos assincronos e JSON
 */
InfoUtilizador.prototype.getUtilizador = function (){
    console.log("getUtilizador");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/utilizador", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            var response = JSON.parse(xhr.responseText);
            info1.utilizadores = [];
            response.utilizador.forEach(function(current){
                info1.utilizadores.push(new Utilizador(current.email, current.password, current.role));
            });
        }
    };
    xhr.send();
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso GameSession através do verbo GET, usando pedidos assincronos e JSON
 */
InfoCandidatura.prototype.getCandidatura = function (){
    console.log("getCandidatura");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/candidatura", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            var response = JSON.parse(xhr.responseText);
            info2.candidaturas = [];
            response.candidaturas.forEach(function(current){
                info2.candidaturas.push(new Candidatura(current.id, current.emailSender, current.curriculum, current.cartaIntencoes));
                
            });
        }
    };
    xhr.send();
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso Statistic através do verbo GET, usando pedidos assincronos e JSON
 */
InfoRenovacao.prototype.getRenovacao = function (){
    console.log("getRenovacao");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/renovacao", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            var response = JSON.parse(xhr.responseText);
            info3.renovacoes = [];
            response.renovacao.forEach(function(current){
                info3.renovacoes.push(new Renovacao(current.id, current.emailEnvio, current.dadosRenovacao));
                
            });
        }
    };
    xhr.send();
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso StatisticType através do verbo GET, usando pedidos assincronos e JSON
 */
InfoMensagem.prototype.getMensagem = function (){
    console.log("getMensagem");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/mensagem", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            var response = JSON.parse(xhr.responseText);
            info4.mensagens = [];
            response.mensagem.forEach(function(current){
                info4.mensagens.push(new Mensagem(current.id, current.emailEnviar, 
                current.corpoMensagem, current.tema, current.emailReceber));
                
            });
        }
    };
    xhr.send();
};



InfoMensagem.prototype.removeMensagem = function (id){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/mensagem/"+id, true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            info4.mensagens.splice(info4.mensagens.findIndex(i => i.id === id),1);
            info4.showMensagem();
        }
    };
    xhr.send();
}

InfoUtilizador.prototype.processingUtilizador = function (acao) {
    var id = document.getElementById("id").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;
    var utilizador = {id: id, email:email, password: password, role: role};
    var xhr = new XMLHttpRequest();
    xhr.responseType="json";
    if (acao === "create") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                var newUtilizador = new Utilizador(xhr.response.insertId, email, password, role);
                info1.utilizadores.push(newUtilizador);
                info1.showUtilizador();
            }
        }
        xhr.open("POST", "http://localhost:8081/utilizador", true);
    }/* else if (acao === "update") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                info1.players.splice(info1.players.findIndex(i => i.id === id),1);
                info1.players.push(player);
                info1.showPlayer();
            }
        }
        xhr.open("PUT", "http://localhost:8081/player/"+id, true);
    }*/
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(utilizador));
};

InfoCandidatura.prototype.processingCandidatura = function (acao) {
    var id = document.getElementById("id").value;
    var emailSender = document.getElementById("emailSender").value;
    var curriculum = document.getElementById("curriculum").value;
    var cartaIntencoes = document.getElementById("cartaIntencoes").value;
    var candidatura = {id: id, emailSender: emailSender, curriculum: curriculum, cartaIntencoes: cartaIntencoes};
    var xhr = new XMLHttpRequest();
    xhr.responseType="json";
    if (acao === "create") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                var newCandidatura = new Candidatura(xhr.response.insertId, emailSender, curriculum, cartaIntencoes);
                info2.candidaturas.push(newCandidatura);
                info2.showCandidatura();
                //document.getElementById("enviarCandidatura").style.display="block";
            }
        }
        
        xhr.open("POST", "http://localhost:8081/candidatura", true);
    }/* else if (acao === "update") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                info2.gameSessions.splice(info2.gameSessions.findIndex(i => i.id === id),1);
                info2.gameSessions.push(gameSession);
                info2.showGameSession();
            }
        }
        xhr.open("PUT", "http://localhost:8081/gameSession/"+id, true);
    }*/
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(candidatura));
};

InfoRenovacao.prototype.processingRenovacao = function (acao) {
    var id = document.getElementById("id").value;
    var emailEnvio = document.getElementById("emailEnvio").value;
    var dadosRenovacao = document.getElementById("dadosRenovacao").value;
    var renovacao = {id: id, emailEnvio: emailEnvio, dadosRenovacao: dadosRenovacao};
    var xhr = new XMLHttpRequest();
    xhr.responseType="json";
    if (acao === "create") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                var newRenovacao = new Renovacao(xhr.response.insertId, emailEnvio, dadosRenovacao);
                info3.renovacoes.push(newRenovacao);
                //document.getElementById("renovacaoContrato").style.display="block";
                info3.showRenovacao();
            }
        }
        xhr.open("POST", "http://localhost:8081/renovacao", true);
    } /*else if (acao === "update") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                info3.statistics.splice(info3.statistics.findIndex(i => i.id === id),1);
                info3.statistics.push(statistic);
            
            }
        }
        xhr.open("PUT", "http://localhost:8081/statistic/"+id, true);
    }*/
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(renovacao));
};

InfoMensagem.prototype.processingMensagem = function (acao) {
    var id = document.getElementById("id").value;
    var emailEnviar = document.getElementById("emailEnviar").value;
    var corpoMensagem = document.getElementById("corpoMensagem").value;
    var emailReceber = document.getElementById("emailReceber").value;
    var tema = document.getElementById("tema").value;
    var mensagem = {id:id, emailEnviar: emailEnviar, corpoMensagem: corpoMensagem, emailReceber: emailReceber,tema: tema};
    var xhr = new XMLHttpRequest();
    xhr.responseType="json";
    if (acao === "create") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                var newMensagem = new Mensagem(xhr.response.insertId,emailEnviar, corpoMensagem, emailReceber, tema);
                info4.mensagens.push(newMensagem);
                info4.showMensagem();
            }
        }
        xhr.open("POST", "http://localhost:8081/mensagem", true);
        //sendEmail(emailEnviar, corpoMensagem, tema, emailReceber);
    }/* else if (acao === "update") {
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == XMLHttpRequest.DONE) && (this.status === 200)) {
                info4.statisticsType.splice(info4.statisticsType.findIndex(i => i.id === id),1);
                info4.statisticsType.push(statisticType);
                info4.showStatisticType();
            }
        }
        xhr.open("PUT", "http://localhost:8081/statisticType/"+id, true);
    }*/
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(mensagem));
};

/**
 * Função genérica que cria um botão HTML, dá-lhe um evento e coloca-o na árvore de nós
 * @param {HTMLElement} fatherNode - nó pai do botão
 * @param {function} eventHandler - evento do botão.
 * @param {String} value - texto do botão.
 */
function createButton(fatherNode, eventHandler, value){
    var button = document.createElement("input");
    button.type = "button";
    button.value = value;
    button.addEventListener("click", eventHandler);
    fatherNode.appendChild(button);
}

/**
 * Função que substitui todos os elementos filhos de um elemento HTML por um novo elemento HTML (facilitador de DOM)
 * @param {string} id - id do elemento HTML para o qual se pretende substituir os filhos.
 * @param {HTMLElement} newSon - elemento HTML que será o novo filho.
 */
function replaceChilds(id, newSon) {
    var no = document.getElementById(id);
    while(no.hasChildNodes()){
        no.removeChild(no.lastChild);
    }
    no.appendChild(newSon);
};




/**
 * Função que recebe um qualquer objeto e retorna dinamicamente uma linha de tabela HTML com os supostos headers
 * @param {Object} object - objecto do qual vamos transformar os atributos e TH
 */
function tableHead(object) {
    var tr = document.createElement("tr");
    tr.appendChild(document.createElement("th"));
    for (var property in object) {
        if ((object[property] instanceof Function)===false) {
            var td = document.createElement("th");
            td.textContent=property[0].toUpperCase() + property.substr(1,property.length-1);;
            tr.appendChild(td);
        }
    }
    return tr;
};

function tableHeadWithoutCheckBox(object) {
    var tr = document.createElement("tr");
    for (var property in object) {
        if ((object[property] instanceof Function)===false) {
            var td = document.createElement("th");
            td.textContent=property[0].toUpperCase() + property.substr(1,property.length-1);;
            tr.appendChild(td);
        }
    }
    return tr;
};

/**
 * Função que recebe um qualquer objeto e retorna dinamicamente uma linha de tabela HTML com informação relativa ao estado das suas propriedades
 * @param {Object} object - objecto do qual vamos transformar o conteudo dos seus atributos em TD
 */
function tableLine(object) {
    var tr = document.createElement("tr");
    tr.appendChild(createCellCheckbox());
    for (var property in object) {
        if ((object[property] instanceof Function)===false) {
            var td = document.createElement("td");
            td.textContent=object[property];
            tr.appendChild(td);
        }
    }
    return tr;
};

function tableLineWithoutCheckbox(object) {
    var tr = document.createElement("tr");
    for (var property in object) {
        if ((object[property] instanceof Function)===false) {
            var td = document.createElement("td");
            td.textContent=object[property];
            tr.appendChild(td);
        }
    }
    return tr;
};
/**
 * Função genérica que tem como objetivo a criação de uma coluna com checkbox
 */
function createCellCheckbox(){
    var td=document.createElement("td");
    var check = document.createElement("input");
    check.type="checkbox";
    td.appendChild(check);
    return td;
}




