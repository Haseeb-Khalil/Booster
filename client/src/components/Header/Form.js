import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(2),

		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "300px",
		},
		"& .MuiButtonBase-root": {
			margin: theme.spacing(2),
		},
	},
}));

const Form = ({ handleClose }) => {
	const classes = useStyles();
	// create state variables for each input
	// const [Name, setName] = useState("");
	// const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		handleClose();
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<TextField
				label="Email"
				variant="filled"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				label="Password"
				variant="filled"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div>
				<Button variant="outlined" color="primary" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					login
				</Button>
			</div>
		</form>
	);
};

export default Form;
