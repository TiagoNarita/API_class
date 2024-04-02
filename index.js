const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["node JS", "JavaScript", "React Native"];

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});
//localhost:3000/curso/2
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(`curso escolhido foi: ${cursos[index]}`);
});

server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.listen(3000);
