const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var myData = [];

app.post('/criar', (req, res) => {
    
    const { NOME, RGM, DISCIPLINA } = req.body;

    myData.push( 'Jefferson Rosa' );
    myData.push( 'RGM: 5934057269' );
    myData.push( 'Analise e Desenvolvimento de Sistemas' );

    res.json(myData);
});

app.listen(8000, () => {
    console.log(' App rodando na porta 8000');
});


app.get('/listagem', (req, res) => {
    res.json('Pessoas, Pet, Disciplinas');
    });