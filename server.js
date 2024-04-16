const express = require('express');
const { createStudent } = require('./studentInfo');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo! Acesse /info para obter informações do estudante.');
});

// Endpoint para retornar informações do estudante
app.get('/info', (req, res) => {
  const student = createStudent('' 34057269, ‘Jefferson, 'Rosa');
  res.send(student.getInfo());
});

// Iniciando o servidor
const port = 8080;
app.listen(port, () => {
  console.log(Servidor rodando na porta ${port});
});