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

module.exports = moviesRouter;
