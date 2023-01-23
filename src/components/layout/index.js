import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Drawer, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Header from "../header";
import { PAGES } from "../../App";

const Layout = () => {
	const theme = useTheme();
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

			<Drawer
				anchor={"left"}
				open={sidebarOpen}
				onClose={sidebarHandler}
				PaperProps={{
					sx: {
						minWidth: "60vw",
						backgroundColor: theme.palette.primary.dark,
						color: theme.palette.primary.contrastText,
					},
				}}
				transitionDuration={{ enter: 500, exit: 500 }}
			>
				{sidebarMenu}
			</Drawer>

			<Outlet />
		</div>
	);
};

export default Layout;
