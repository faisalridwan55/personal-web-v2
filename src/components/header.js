import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { FlexBox, FlexRow } from "./grid";

const pages = ["Home", "About", "Portofolio"];

const ContactButton = ({ isDesktop }) => {
	const props = {
		variant: "outlined",
		startIcon: isDesktop ? <EmailIcon /> : null,
		sx: { px: isDesktop ? 1.5 : 0.5 },
	};
	return (
		<FlexRow justifyContent="flex-end" mr={{ xs: 1, sm: 2 }} py={2}>
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

const DesktopElement = (
	<FlexRow sx={{ display: { xs: "none", sm: "flex" } }}>
		<FlexRow justifyContent="flex-start" ml={2}>
			{pages.map((page) => (
				<Button
					key={page}
					sx={{
						my: 2,
						transition: "transform 0.5s",
						"&:hover": {
							backgroundColor: "transparent",
							transform: "scale(1.1)",
						},
					}}
				>
					{page}
				</Button>
			))}
		</FlexRow>
		<Title isDesktop />
		<ContactButton isDesktop />
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
		<Title />
		<ContactButton />
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
