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
	const [code, setCode] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClose(code);
	};

	const onCancel = (e) => {
		e.preventDefault();
		handleClose();
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<TextField
				label="Please Enter the Code"
				variant="outlined"
				type="text"
				value={code}
				onChange={(e) => setCode(e.target.value)}
			/>
			<div>
				<Button variant="outlined" color="primary" onClick={onCancel}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					join
				</Button>
			</div>
		</form>
	);
};

export default Form;