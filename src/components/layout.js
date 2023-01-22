import Header from "./header";

const Layout = ({ children }) => {
	return (
		<div style={{ minHeight: "100vh" }}>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
