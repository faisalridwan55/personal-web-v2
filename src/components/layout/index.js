import { useState } from "react";
import { Outlet } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	ListItem,
	ListItemButton,
	ListItemText,
	Zoom,
} from "@mui/material";

import Header from "../header";
import { PAGES } from "../../App";
import Sidebar from "./sidebar";

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
					<ListItemButton>
						<ListItemText primary={page.path === "" ? "Home" : page.path} />
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
