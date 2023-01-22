import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../header";
import theme from "./theme";

const Layout = () => {
	return (
		<div style={{ minHeight: "100vh" }}>
			<ThemeProvider theme={theme}>
				<Header />
				<Outlet />
			</ThemeProvider>
		</div>
	);
};

export default Layout;
