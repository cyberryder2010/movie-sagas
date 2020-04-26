const express = require("express");
const genresRouter = express.Router();
const pool = require("../modules/pool");

genresRouter.get("/", (req, res) => {
  const queryString = `SELECT * FROM "genres" ORDER BY "id" ASC`;

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

genresRouter.get("/movie/:id", (req, res) => {
  const queryString = `SELECT * FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
  JOIN "genres" ON  "genres".id = "movies_genres".genres_id
  WHERE "movies".id = $1`;

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

module.exports = genresRouter;
