const express = require("express");

const server = express();

server.use(express.json());

//Query params = ?node=NodeJS (be in the url)
//Route params = /curso/2
//Request Body = {nome: "Nodejs", tipo: "backend"}

const cursos = ["node JS", "JavaScript", "React Native"];

server.use((req, res, next) => {
  console.log(`URL CHAMADA: ${req.url}`);

  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso obrigatório" });
  }
  return next();
}

//get all cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

//localhost:3000/curso/2
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(`curso escolhido foi: ${cursos[index]}`);
});

//criando um novo curso
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//atualizando algum curso
server.put("/cursos/:index", checkCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

//excluindo algum curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);

  return res.json({ message: "curso deletado com sucesso" });
});

server.listen(3000);
