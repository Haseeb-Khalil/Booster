import { Router } from "express";
require("dotenv").config();

const router = Router();

//load the booster JSON
//const booster = require("../boosterData.json");

// router.get("/", (req, res) => {
// 	//res.status(200).json(booster);
// 	//res.json({ message: "Hello, world!" });
// });

const { Pool } = require("pg");
const dbUrl = process.env.DATABASE_URL;

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	//ssl: { rejectUnauthorized: false },
});



///=================POST REQUESTS==================///

//  ADD AN ENERGISER
router.post("/energisers", function (req, res) {
  let energiserTitle = req.body.title;
  let energiserImage = req.body.image;
  let energiserDescription = req.body.description;
  let energiserLink = req.body.link;

//    || !energiserImage || !energiserLink

  if (!energiserTitle  || !energiserDescription) {
    return res
      .status(400)
      .send({ msg: "Please fill in all the required fields" });
  }
  pool
    .query(`SELECT title FROM energisers WHERE title = $1`, [energiserTitle])
    .then((result) => {
      if (result.rows.length > 0) {
        return res
          .status(400)
          .send({ msg: `Energiser name:${energiserTitle} already exist` });
      } else {
        let query = `INSERT INTO energisers(title, image, description, link) VALUES ($1,$2,$3,$4)`;
        let params = [
					energiserTitle,
					energiserImage,
					energiserDescription,
					energiserLink,
				];
        pool
          .query(query, params)
          .then(() =>
            res.send({ msg: `Energiser ${energiserName} added Successfully` })
          )
          .catch((error) => {
            console.error(error);
            res.status(500).json(error);
          });
      }
    });
});



///==================GET REQUESTS===================///

// GET ALL THE Energisers
router.get("/energisers", function (req, res) {
  pool
    .query("SELECT * FROM energisers")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

// GET ENERGISERS USING SEARCH
router.get("/energisers/search", function (req, res) {

  let searchQuery = req.query.term;

  if (searchQuery) {
    pool
      .query(
        `SELECT * WHERE LOWER(title) LIKE LOWER('%${searchQuery}%') ORDER BY title`
      )
      .then((result) => res.json(result.rows))
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
  }
});


// GET ENERGISER WITH AN ID
router.get("/energisers/:energiserId", function (req, res) {
  let energiserId = req.params.energiserId;
  let query = `SELECT * FROM energisers WHERE id = $1`;
  const params = [energiserId];

  pool
    .query(query, params)
    .then((result) => {
      if (result.rows.length == 0) {
        return res
          .status(404)
          .send({ msg: `Energiser: ${energiserId} doesn't exist` });
      }
      res.json(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});





export default router;
