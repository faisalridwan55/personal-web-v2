import { useState } from "react";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import { Link as RouterLink } from "react-router-dom";

import Alert from "./alert";
import { PAGES } from "../App";
import { CONTACTS } from "../constant";
import { FlexBox, FlexRow } from "./grid";
import { HoverTextButton } from "./button";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import {
	Menu,
	MenuItem,
	Snackbar,
	Container,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

const Title = ({ isDesktop }) => {
	return (
		<FlexRow alignItems="center" justifyContent="center">
			<Typography variant={isDesktop ? "h4" : "h6"} color="primary">
				Faisal Ridwan
			</Typography>
		</FlexRow>
	);
};

function Header({ sidebarHandler }) {
	const [anchorElContact, setAnchorElContact] = useState(null);
	const [showSnackbar, setShowSnackbar] = useState(false);

	const openMenu = Boolean(anchorElContact);

	const openMenuHandler = (event) => {
		setAnchorElContact(event.currentTarget);
	};

	const closeMenuHandler = () => setAnchorElContact(null);

	const closeSnackbarHandler = () => setShowSnackbar(false);

	const ContactButton = (
		<FlexRow justifyContent="flex-end" py={2}>
			<Snackbar
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={closeSnackbarHandler}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Alert sx={{ width: "100%" }} onClose={closeSnackbarHandler}>
					Email copied to clibboard
				</Alert>
			</Snackbar>
			<Button
				variant="outlined"
				onClick={openMenuHandler}
				sx={{ px: 0.5, display: { xs: "flex", sm: "none" } }}
			>
				<EmailIcon />
			</Button>
			<Button
				variant="outlined"
				startIcon={<EmailIcon />}
				onClick={openMenuHandler}
				sx={{ px: 1.5, display: { xs: "none", sm: "flex" } }}
			>
				Contact
			</Button>
			<Menu
				anchorEl={anchorElContact}
				open={openMenu}
				onClose={closeMenuHandler}
			>
				{CONTACTS.map((contact) => (
					<MenuItem
						key={contact.name}
						onClick={() => {
							if (contact.name === "Email") {
								navigator.clipboard.writeText(contact.address);
								setShowSnackbar(true);
							} else {
								window.open(contact.address);
							}
							closeMenuHandler();
						}}
					>
						<ListItemIcon sx={{ color: "inherit" }}>
							{contact.icon}
						</ListItemIcon>
						<ListItemText textAlign="center">{contact.name}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</FlexRow>
	);

	const DesktopElement = (
		<FlexRow sx={{ display: { xs: "none", sm: "flex" } }}>
			<FlexRow justifyContent="flex-start">
				{PAGES.map((page) => (
					<HoverTextButton
						key={page.path}
						component={RouterLink}
						to={page.path || "/"}
					>
						{capitalizeFirstLetter(page.path || "Home")}
					</HoverTextButton>
				))}
			</FlexRow>
			<Title isDesktop />
			{ContactButton}
		</FlexRow>
	);

	const MobileElement = (
		<FlexRow sx={{ display: { xs: "flex", sm: "none" } }}>
			<FlexBox justifyContent="center">
				<IconButton
					size="large"
					onClick={sidebarHandler}
					sx={{
						paddingLeft: 0,
						width: "fit-content",
						justifyContent: "flex-start",
					}}
				>
					<MenuIcon sx={{ fontSize: "32px" }} />
				</IconButton>
			</FlexBox>
			<Title />
			{ContactButton}
		</FlexRow>
	);

	return (
		<Slide direction="down" in={true} timeout={1000} mountOnEnter>
			<Container maxWidth="xl">
				{DesktopElement}
				{MobileElement}
			</Container>
		</Slide>
	);
}
export default Header;
