const express = require("express");
const moviesRouter = express.Router();
const pool = require("../modules/pool");

moviesRouter.get("/", (req, res) => {
  const queryString = `SELECT * FROM "movies" ORDER BY "id" ASC`;

  pool
    .query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("Error retrieving data from database:", err);
      res.send(500);
    });
});

moviesRouter.get("/details/:id", (req, res) => {
  const queryString = `SELECT * FROM "movies" WHERE "id" = $1`;

  pool
    .query(queryString, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("Error retrieving data from database:", err);
      res.send(500);
    });
});

moviesRouter.post("/", (req, res) => {
  console.log(req.body);

  const queryString = `INSERT INTO "movies" 
  ( description )
  VALUES ( $1 )`;

  pool
    .query(queryString, [req.body.description])

    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

moviesRouter.put("/:id", (req, res) => {
  const itemId = req.params.id;
  const newItemData = req.body;
  const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE id = $3;`;

  pool
    .query(queryText, [newItemData.title, newItemData.description, itemId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = moviesRouter;
