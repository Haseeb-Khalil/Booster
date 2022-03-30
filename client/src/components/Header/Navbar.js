import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
	Button,
	Link,
	Box,
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	ButtonGroup,
	Container,
	MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import { red } from "@material-ui/core/colors";
import ModalDialog from "./ModalDialog";
import cyf_brand from "../../assets/cyf_brand.png";
import "./navbar.css";

const Navbar = () => {
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorEl(null);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = (code) => {
		if (code) {
			navigate(`/game/${code}`);
		}
		setOpen(false);
	};

	const handleHost = (e) => {
		e.preventDefault();
		navigate("/energisers");
	};

	return (
		<AppBar position="fixed" color="primary">
			<Container disableGutters maxWidth="lg">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link href="https://codeyourfuture.io/" target="_blank">
							<img className="cyfLogo" src={cyf_brand} alt="cyf_brand" />
						</Link>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
						<ElectricBoltRoundedIcon sx={{ color: red[800] }} />
						<Link
							variant="h5"
							href="/"
							underline="none"
							sx={{ color: red[800] }}
						>
							booster
						</Link>
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
						<ButtonGroup variant="text" aria-label="text button group">
							<Button color="secondary" onClick={handleHost}>
								host
							</Button>
							<Button color="secondary" onClick={handleOpen}>
								join
							</Button>
						</ButtonGroup>
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon sx={{ color: red[800] }} />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorEl)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "flex", md: "none" },
							}}
						>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ display: "flex", flexDirection: "column" }}
							>
								<Button color="secondary" variant="text" onClick={handleHost}>
									<Typography textAlign="center">host</Typography>
								</Button>
								<Button color="secondary" onClick={handleOpen}>
									<Typography textAlign="center">JOIN</Typography>
								</Button>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
			<ModalDialog open={open} handleClose={handleClose} />
		</AppBar>
	);
};
export default Navbar;