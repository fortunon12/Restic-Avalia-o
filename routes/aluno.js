const express = require('express');
const router = express.Router();

let alunos = [];

// Create: Criar um novo aluno (POST)
router.post('/', (req, res) => {
  const { id, nome, email, nome_curso } = req.body;
  const novoAluno = { id, nome, email, nome_curso };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// Read: Listar todos os alunos ou buscar um aluno específico (GET)
router.get('/', (req, res) => {
  res.json(alunos);
});

router.get('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

// Update: Atualizar as informações de um aluno existente (PUT)
router.put('/:id', (req, res) => {
  const { id, nome, email, nome_curso } = req.body;
  const alunoIndex = alunos.findIndex(a => a.id === parseInt(req.params.id));
  if (alunoIndex !== -1) {
    alunos[alunoIndex] = { id, nome, email, nome_curso };
    res.json(alunos[alunoIndex]);
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

// Delete: Excluir um aluno (DELETE)
router.delete('/:id', (req, res) => {
  const alunoIndex = alunos.findIndex(a => a.id === parseInt(req.params.id));
  if (alunoIndex !== -1) {
    alunos.splice(alunoIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

module.exports = router;
