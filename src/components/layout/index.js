import { useState } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import {
	Zoom,
	Button,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import Header from "../header";
import Sidebar from "./sidebar";
import { PAGES } from "../../App";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const sidebarHandler = () => setSidebarOpen((prevState) => !prevState);

	const sidebarMenu = (
		<>
			<Zoom in={sidebarOpen} style={{ transitionDelay: "500ms" }}>
				<Button
					color="secondary"
					variant="outlined"
					onClick={sidebarHandler}
					startIcon={<CloseIcon />}
					sx={{
						px: 1,
						mt: 1.5,
						py: 0.5,
						mx: "auto",
						".MuiButton-startIcon": { fontSize: "24px", marginRight: 0 },
					}}
				>
					Close
				</Button>
			</Zoom>
			{PAGES.map((page) => (
				<ListItem key={page.path} disablePadding>
					<ListItemButton component={RouterLink} to={page.path || "/"}>
						<ListItemText
							primary={capitalizeFirstLetter(page.path || "Home")}
						/>
					</ListItemButton>
				</ListItem>
			))}
		</>
	);
	return (
		<div style={{ minHeight: "100vh" }}>
			<Header sidebarHandler={sidebarHandler} />

			<Sidebar open={sidebarOpen} onClose={sidebarHandler}>
				{sidebarMenu}
			</Sidebar>

			<Outlet />
		</div>
	);
};

export default Layout;
