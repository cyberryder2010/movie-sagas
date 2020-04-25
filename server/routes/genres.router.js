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

module.exports = genresRouter;
