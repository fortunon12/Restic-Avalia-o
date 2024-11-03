const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/aluno');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/alunos', alunoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
