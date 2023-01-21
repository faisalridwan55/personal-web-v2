import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
	]);

	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}

export default App;
