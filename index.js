const express = require("express");

const server = express();

//localhost:3000/curso/2
server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.json({ curso: `curso: ${id}` });
});

server.listen(3000);
