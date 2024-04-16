var http = require('http');
var request = require('request');
var minhaBiblioteca = 'nao executado';

function iniciadoSistemaEcommerce() {
    return "sistema de ecommerce (monolito)";
}

function acionaModuloCatalogoDeProduto() {
    return "modulo de catalogo (modulo)";
}

function acionaComponenteProcessoFraude() {
    return "componente anti-fraude (componente)";
}

function acionaMicroServicoConsulta(callback) {
    request('http://localhost:8081', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            minhaBiblioteca = body;
            console.log(body);
            callback(body); // Chamando o callback com o resultado da requisição
        } else {
            console.error("Erro ao fazer a requisição ao microserviço:", error);
            callback(null); // Chamando o callback com null em caso de erro
        }
    });
}

http.createServer(function (req, res) {
    var sequenciaExecucao = iniciadoSistemaEcommerce() +
        acionaModuloCatalogoDeProduto() +
        acionaComponenteProcessoFraude();

    acionaMicroServicoConsulta(function (resultadoMicroServico) {
        sequenciaExecucao += resultadoMicroServico; // Adicionando o resultado da consulta ao microserviço na sequência de execução
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sequenciaExecucao);
        res.end();
    });
}).listen(8096);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("microservico de localizacao do ecommerce");
    res.end();
}).listen(8081);
