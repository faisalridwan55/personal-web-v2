import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { FlexBox, FlexRow } from "./grid";
import { HoverTextButton } from "./button";

const pages = ["Home", "About", "Portofolio"];

const ContactButton = ({ isDesktop }) => {
	const props = {
		variant: "outlined",
		startIcon: isDesktop ? <EmailIcon /> : null,
		sx: { px: isDesktop ? 1.5 : 0.5 },
	};
	return (
		<FlexRow justifyContent="flex-end" py={2}>
			<Button {...props}>{isDesktop ? "Contact" : <EmailIcon />}</Button>
		</FlexRow>
	);
};

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
	const DesktopElement = (
		<FlexRow sx={{ display: { xs: "none", sm: "flex" } }}>
			<FlexRow justifyContent="flex-start">
				{pages.map((page) => (
					<HoverTextButton key={page}>{page}</HoverTextButton>
				))}
			</FlexRow>
			<Title isDesktop />
			<ContactButton isDesktop />
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
			<ContactButton />
		</FlexRow>
	);

	return (
		<Slide direction="down" in={true} timeout={1000} mountOnEnter>
			<Grid px={{ xs: 1.5, sm: 2 }}>
				{DesktopElement}
				{MobileElement}
			</Grid>
		</Slide>
	);
}
export default Header;
