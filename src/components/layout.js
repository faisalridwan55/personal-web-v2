import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
	return (
		<div style={{ minHeight: "100vh" }}>
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
