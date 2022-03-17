import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ModalDialog from "./ModalDialog";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import { red } from "@material-ui/core/colors";
import cyf_brand from "../images/cyf_brand.png";
import "./navbar.css";



const useStyles = makeStyles((theme) => ({
	icon: {
		marginTop: theme.spacing(-6),
		marginLeft: theme.spacing(6),
	},
	title: {
		flexGrow: 1,
		marginTop: theme.spacing(-6),
	},
	loginButton: {
		marginTop: theme.spacing(-10),
	},

	appBar: {
		maxHeight: theme.spacing(10),
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<AppBar className={classes.appBar} position="static" color="secondary">
			<img className="cyfLogo" src={cyf_brand} alt="cyf_brand" />
			<Toolbar>
				<ElectricBoltRoundedIcon
					className={classes.icon}
					sx={{ color: red[500] }}
				/>
				<Typography color="primary" variant="h6" className={classes.title}>
					booster
				</Typography>
				<Button
					variant="outlined"
					color="primary"
					onClick={handleOpen}
					className={classes.loginButton}
				>
					login
				</Button>
			</Toolbar>
			<ModalDialog open={open} handleClose={handleClose} />
		</AppBar>
	);
};

export default Navbar;
