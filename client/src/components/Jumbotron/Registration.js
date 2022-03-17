import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


function Registration (){
	const [values, setValues] = React.useState({
			password: "",
			showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Discover the experience
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="outlined-required"
						label="Name"
						name="name"
						autoComplete="name"
						variant="outlined"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						variant="outlined"
					/>
					<FormControl variant="outlined" sx={{ mt: 1, width: "35ch" }}>
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={values.showPassword ? "text" : "password"}
							value={values.password}
							onChange={handleChange("password")}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						color="primary"
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
}

export default Registration;