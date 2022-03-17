import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ModalDialog from "./ModalDialog";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { amber } from "@material-ui/core/colors";



const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
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
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<OfflineBoltIcon sx={{ color: amber[500] }} />
				<Typography color="secondary" variant="h6" className={classes.title}>
					booster
				</Typography>
				<Button color="secondary" onClick={handleOpen}>
					signup
				</Button>
			</Toolbar>
			<ModalDialog open={open} handleClose={handleClose} />
		</AppBar>
	);
};

export default Navbar;