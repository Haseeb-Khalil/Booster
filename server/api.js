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

router.get("/energisers", (req, res) => {
    console.log(dbUrl);
    //res.send("Hello");
    pool.query("SELECT * FROM energisers")
    .then((result) => {
        console.log(result);
        res.json(result.rows);
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
});



export default router;
