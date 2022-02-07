// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);
server.set('view engine', 'ejs');
// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const saveCards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  console.log(req.body);

  if (
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.linkedin !== "" &&
    req.body.email !== "" &&
    req.body.photo !== "" &&
    req.body.github !== ""
  ) {
    const newCardData = {
      ...req.body,
      id: uuidv4(),
    };
    saveCards.push(newCardData);
    console.log(saveCards);

    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCardData.id}`,
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: "Error description",
    };

    res.json(responseError);
  }
});

server.get("/card/:id", (req, res) => {
  console.log(req.params.id);

  const userCard = saveCards.find( card => card.id === req.params.id );

  res.render('./card', userCard);
});

const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));
