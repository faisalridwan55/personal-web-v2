import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";

import { FlexBox, FlexRow } from "./grid";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const pages = ["Home", "About", "Portofolio"];

const ContactButton = (
	<FlexRow justifyContent="flex-end" mr={{ xs: 1, md: 2 }} py={2}>
		<Button
			variant="outlined"
			startIcon={<EmailIcon />}
			sx={{ px: 1.5, display: { xs: "none", md: "flex" } }}
		>
			Email me
		</Button>
		<Button
			variant="outlined"
			sx={{ px: 0.5, display: { xs: "flex", md: "none" } }}
		>
			<EmailIcon />
		</Button>
	</FlexRow>
);

const DesktopElement = (
	<FlexRow sx={{ display: { xs: "none", sm: "flex" } }}>
		<FlexRow justifyContent="flex-start" ml={2}>
			{pages.map((page) => (
				<Button key={page} sx={{ my: 2 }}>
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
			<IconButton
				size="large"
				sx={{ justifyContent: "flex-start", width: "fit-content" }}
			>
				<MenuIcon />
			</IconButton>
		</FlexBox>
		<FlexRow alignItems="center" justifyContent="center">
			<Typography>Faisal Ridwan</Typography>
		</FlexRow>
		{ContactButton}
	</FlexRow>
);

function Header() {
	return (
		<Slide direction="down" in={true} timeout={1000} mountOnEnter>
			<Grid>
				{DesktopElement}
				{MobileElement}
			</Grid>
		</Slide>
	);
}
export default Header;
