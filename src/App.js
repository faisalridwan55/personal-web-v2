import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import theme from "./components/theme";
import About from "./pages/about";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";
import Portofolio from "./pages/portofolio";

export const PAGES = [
	{ path: "", element: <Home /> },
	{ path: "About", element: <About /> },
	{ path: "Portofolio", element: <Portofolio /> },
];

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: PAGES.map((page) =>
				page.path === ""
					? {
							index: true,
							element: page.element,
					  }
					: {
							path: page.path.toLowerCase(),
							element: page.element,
					  }
			),
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
