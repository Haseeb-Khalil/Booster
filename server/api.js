/* eslint-disable linebreak-style */
import { Router } from "express";
require("dotenv").config();

const router = Router();

const { Pool } = require("pg");
const dbUrl = process.env.DATABASE_URL;

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: { rejectUnauthorized: false },
});

///=================POST REQUESTS==================///

//  ADD AN ENERGISER
router.post("/energiser", function (req, res) {
	const energiserTitle = req.body.title;
	const energiserDescription = req.body.description;
	const energiserInstructions = req.body.playing_instructions;
	const energiserLink = req.body.link;
	const energiserImage = req.body.image;

	// Basic Url testing. it should be starting with "http" or "https" following://
	const validateUrl = /^(http|https):\/\/[^ "]+$/.test(energiserLink);
	if (energiserLink) {
		validateUrl;
		if (!validateUrl) {
			return res.status(400).send({ msg: "Please enter the correct URL !" });
		}
	} else {
		res.status(200);
	}

	if (!energiserTitle || !energiserDescription) {
		return res
			.status(400)
			.send({ msg: "Please fill in all the required fields" });
	}
	pool
		.query("SELECT title FROM energisers WHERE title = $1", [energiserTitle])
		.then((result) => {
			if (result.rows.length > 0) {
				return res
					.status(400)
					.send({ msg: `Energiser name: ${energiserTitle} already exist` });
			} else {
				let query =
					"INSERT INTO energisers(title, description, playing_instructions, link, image) VALUES ($1,$2,$3,$4,$5)";

				let params = [
					energiserTitle,
					energiserDescription,
					energiserInstructions,
					energiserLink,
					energiserImage,
				];
				pool
					.query(query, params)
					.then(() =>
						res.send({ msg: `Energiser: ${energiserTitle} added Successfully` })
					)
					.catch((error) => {
						console.error(error);
						res.status(500).json(error);
					});
			}
		});
});

//  CREATE AND ADD RANDOM GAME CODE OF A SELECTED ENERGISER

const generateRandomCode = () => {
	var result = "";
	let resultLength = 7;
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < resultLength; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

router.post("/game/:energiserId", function (req, res) {
	let energiserId = req.params.energiserId;

	let code = generateRandomCode();
	console.log("Code:", code);

	// Checking if the energiser with Id entered exist or not
	pool
		.query("SELECT id FROM energisers WHERE id = $1", [energiserId])
		.then((result) => {
			if (result.rows.length == 0) {
				return res
					.status(404)
					.send({ msg: `Energiser: ${energiserId} doesn't exist` });
			}
		});

	let startTime = Date.now();

	let query = `INSERT INTO game (energiser_id, share_code, start_time) VALUES ($1,$2,$3) RETURNING *`;

	const params = [energiserId, code, startTime];

	pool
		.query(query, params)
		.then((result1) => {
			const gameRow = result1.rows[0];
			// console.log(gameRow)
			pool
				.query(
					"SELECT id, title, description, playing_instructions, link, likes, dislikes, image FROM energisers WHERE id =$1",
					[energiserId]
				)
				.then((result2) => {
					const energiserRow = result2.rows[0];
					// console.log(result2);
					let secondsLeft =
						gameRow.timer_seconds - (Date.now() - gameRow.start_time) / 1000;
					res.json({ ...energiserRow, secondsLeft, code });
				});
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});

///==================GET REQUESTS===================///

// GET ALL THE Energisers
router.get("/energisers", function (req, res) {
	pool
		.query(
			"SELECT id, title, description, playing_instructions, link, likes, dislikes, image FROM energisers"
		)
		.then((result) => res.json(result.rows))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});

// GET MOST POPULAR ENERGISERS
router.get("/energisers/popular", function (req, res) {
	pool
		.query(
			`SELECT id, title, description, playing_instructions, link, likes, dislikes, image FROM energisers ORDER BY likes DESC LIMIT 10`
		)
		.then((result) => res.json(result.rows))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});

// GET ENERGISERS USING SEARCH
// Tested with: http://localhost:3100/api/energisers/search?term=test
router.get("/energisers/search", function (req, res) {
	let searchQuery = req.query.term;

	if (searchQuery.length) {
		pool
			.query(
				`SELECT id, title, description, playing_instructions, link, likes, dislikes, image  FROM energisers WHERE LOWER(title) LIKE LOWER('%${searchQuery}%') ORDER BY title`
			)
			.then((result) => res.json(result.rows))
			.catch((error) => {
				console.error(error);
				res.status(500).json(error);
			});
	} else {
		res.status(404).send({ msg: "No Such Energisers found" });
	}
});

// ///////////////////////////////////////////////////////////////////////////////////////
// router.get("/game/:code", function (req, res) {
// 	let code = req.params.code;
// 	pool
// 		.query(
// 			`SELECT * from game WHERE share_code =$1`, [code])
// 		.then((result) => res.json(result.rows))
// 		.catch((error) => {
// 			console.error(error);
// 			res.status(500).json(error);
// 		});
// });

/////////////////////////////////////////////////////////////////////////////////////

// GET AN ENERGISER USING SHARE CODE CREATED BY HOST

router.get("/game/:code", function (req, res) {
	let code = req.params.code;

	console.log("Code:", code);
	pool
		.query(
			`SELECT energisers.id, energisers.title, energisers.description, energisers.playing_instructions, energisers.link, energisers.likes, energisers.dislikes, energisers.image FROM energisers
			JOIN game 
			ON game.energiser_id = energisers.id
			WHERE share_code =$1`,
			[code]
		)
		.then((result) => {
			console.log(result);
			if (result.length) {
				const gameRow = result.rows;
				// res.send(result.rows);
				let secondsLeft =
					gameRow.timer_seconds - (Date.now() - gameRow.start_time) / 1000;
				res.send({ gameRow, secondsLeft });
			} else {
				return res.status(404).send({ msg: `Game: ${code} doesn't exist` });
			}
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});

// GET ENERGISER WITH AN ID
// Tested with: http://localhost:3100/api/energisers/3
router.get("/energiser/:energiserId", function (req, res) {
	let energiserId = req.params.energiserId;
	let query =
		"SELECT id, title, description, playing_instructions, link, likes, dislikes, image  FROM energisers WHERE id = $1";
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

///==================PUT REQUESTS===================///

// UPDATE AN ENERGISER's DETAILS

router.put("/energiser/:energiserId", function (req, res) {
	let energiserId = req.params.energiserId;
	const energiserNewTitle = req.body.title;
	const energiserNewDescription = req.body.description;
	const energiserNewInstructions = req.body.playing_instructions;
	const energiserNewLink = req.body.link;
	const energiserNewImage = req.body.image;

	// Checking if the energiser with Id entered exist or not
	pool
		.query("SELECT id FROM energisers WHERE id = $1", [energiserId])
		.then((result) => {
			if (result.rows.length == 0) {
				return res
					.status(404)
					.send({ msg: `Energiser: ${energiserId} doesn't exist` });
			}
		});

	// First we select the energiser then we can update the changes else we will can return the old info
	pool
		.query(
			"SELECT id, title, description, playing_instructions, link, image  FROM energisers WHERE id = $1",
			[energiserId]
		)
		.then((result) => {
			let originalEnergiser = result.rows[0];
			let updateQuery = `UPDATE energisers
        SET title = $2, description  = $3, playing_instructions = $4, link = $5, image = $6
        WHERE id = $1`;
			let params = [
				energiserId,
				energiserNewTitle || originalEnergiser.title,
				energiserNewDescription || originalEnergiser.description,
				energiserNewInstructions || originalEnergiser.playing_instructions,
				energiserNewLink || originalEnergiser.link,
				energiserNewImage || originalEnergiser.image,
			];

			pool
				.query(updateQuery, params)
				.then(() => res.send(`Energiser:${energiserId} updated!`))
				.catch((error) => {
					console.error(error);
					res.status(500).json(error);
				});
		});
});

// LIKE AN ENERGISER

router.put("/energiser/:energiserId/like", function (req, res) {
	let energiserId = req.params.energiserId;

	// Checking if the energiser with Id entered exist or not
	pool
		.query("SELECT id FROM energisers WHERE id = $1", [energiserId])
		.then((result) => {
			if (result.rows.length == 0) {
				return res
					.status(404)
					.send({ msg: `Energiser: ${energiserId} doesn't exist` });
			}
		});

	// First we select the energiser then we can update the likes-dislikes else we will can return the old info
	pool
		.query(`SELECT id, likes  FROM energisers WHERE id = $1`, [energiserId])
		.then(() => {
			let updateQuery = `UPDATE energisers SET likes = likes + 1 WHERE id = $1`;
			let params = [energiserId];

			pool
				.query(updateQuery, params)
				.then(() => res.send(`Energiser:${energiserId} Liked!`))
				.catch((error) => {
					console.error(error);
					res.status(500).json(error);
				});
		});
});

// DISLIKE AN ENERGISER

router.put("/energiser/:energiserId/dislike", function (req, res) {
	let energiserId = req.params.energiserId;

	// Checking if the energiser with Id entered exist or not
	pool
		.query("SELECT id FROM energisers WHERE id = $1", [energiserId])
		.then((result) => {
			if (result.rows.length == 0) {
				return res
					.status(404)
					.send({ msg: `Energiser: ${energiserId} doesn't exist` });
			}
		});

	// First we select the energiser then we can update the likes-dislikes else we will can return the old info
	pool
		.query(`SELECT id, dislikes  FROM energisers WHERE id = $1`, [energiserId])
		.then(() => {
			let updateQuery = `UPDATE energisers SET dislikes = dislikes + 1 WHERE id = $1`;
			let params = [energiserId];

			pool
				.query(updateQuery, params)
				.then(() => res.send(`Energiser:${energiserId} Disliked!`))
				.catch((error) => {
					console.error(error);
					res.status(500).json(error);
				});
		});
});

///==================DELETE REQUESTS===================///

router.delete("/energiser/:energiserId", (req, res) => {
	const energiserId = req.params.energiserId;
	pool
		.query("SELECT id FROM energisers WHERE id = $1", [energiserId])
		.then((result) => {
			if (result.rows.length === 0) {
				return res
					.status(400)
					.send({ msg: `Energiser:${energiserId} does not exist` })
					.catch((error) => {
						console.log(error);
						res.status(500).json(error);
					});
			} else {
				return pool
					.query("DELETE FROM energisers WHERE id = $1", [energiserId])
					.then(() => res.send({ msg: `Energiser:${energiserId} Deleted!` }))
					.catch((error) => {
						console.log(error);
						res.status(500).json(error);
					});
			}
		});
});

export default router;
