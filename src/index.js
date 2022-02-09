// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Database = require("better-sqlite3");

// Configuramos la bbdd

const db = new Database("./src/db/database.db", { verbose: console.log });

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
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

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

    const insertstmt = db.prepare(`INSERT INTO cards (uuid, palette, name, job, linkedin, email, photo, github, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    insertstmt.run(newCardData.id, newCardData.palette, newCardData.name, newCardData.job, newCardData.linkedin, newCardData.email, newCardData.photo, newCardData.github, newCardData.phone);

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

  const querystmt = db.prepare(`SELECT * FROM cards WHERE uuid = ?`);

  const userCard = querystmt.get(req.params.id);
  res.render('./card', userCard);
});

const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));

const staticServerStyles = "./src/public-css";
server.use(express.static(staticServerStyles));
