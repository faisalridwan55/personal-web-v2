import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import About from "./pages/about";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
