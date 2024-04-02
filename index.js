const express = require("express");

const server = express();

//localhost:3000/curso/2
server.get("/curso", (req, res) => {
  const id = req;
});

server.listen(3000);
