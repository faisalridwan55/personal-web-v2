import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { FlexBox, FlexRow } from "./grid";

const pages = ["Home", "About", "Portofolio"];

function Header() {
	const ContactButton = (
		<FlexRow justifyContent="flex-end" mr={{ xs: 1, md: 2 }} p={2}>
			<Button variant="outlined" startIcon={<WhatsAppIcon />} sx={{ p: 1 }}>
				<Typography sx={{ textTransform: "none" }}>Chat me</Typography>
			</Button>
		</FlexRow>
	);

	const DesktopElement = (
		<FlexRow sx={{ display: { xs: "none", sm: "flex" } }}>
			<FlexRow justifyContent="flex-start" ml={2}>
				{pages.map((page) => (
					<Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
						{page}
					</Button>
				))}
			</FlexRow>
			<FlexRow alignItems="center" justifyContent="center">
				<Typography>Faisal Ridwan</Typography>
			</FlexRow>
			{ContactButton}
		</FlexRow>
	);

	const MobileElement = (
		<FlexRow sx={{ display: { xs: "flex", sm: "none" } }}>
			<FlexBox ml={1} justifyContent="center">
				<IconButton sx={{ justifyContent: "flex-start" }} size="large">
					<MenuIcon sx={{ color: "white" }} />
				</IconButton>
			</FlexBox>
			<FlexRow alignItems="center" justifyContent="center">
				<Typography>Faisal Ridwan</Typography>
			</FlexRow>
			{ContactButton}
		</FlexRow>
	);

	return (
		<AppBar position="static" sx={{ backgroundColor: "black" }}>
			{DesktopElement}
			{MobileElement}
		</AppBar>
	);
}
export default Header;
