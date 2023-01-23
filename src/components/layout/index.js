import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Drawer, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Header from "../header";
import { PAGES } from "../../App";
import Sidebar from "./sidebar";

const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const sidebarHandler = () => setSidebarOpen((prevState) => !prevState);

	const sidebarMenu = (
		<>
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
