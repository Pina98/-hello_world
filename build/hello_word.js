"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (resquest, response) {
    response.send('Helo Word!');
});
app.get('/bsms', function (resquest, response) {
    response.json({
        "Bsm 1": "Persistência",
        "Bsm 2": "Responsabilidade Pessoal",
        "BSM 3": "Orientação Ao Futuro",
        "BSM 4": "Mentalidade De Crescimento",
        "Bsm 5": "Trabalho Em Equipe",
        "Bsm 6": "Atenção Aos Detalhes",
        "BSM 7": "Proatividade",
        "BSM 8": "Comunicação"
    });
});
app.get('/Objetivos', function (resquest, response) {
    response.send('Objetivos desta semana é buscar um pouco mas de conhecimento e ter foco total no projeto!');
});
app.listen(port, function () {
    console.log("O servidor estar rodando na porta ".concat(port, " e tudo ok!"));
});
