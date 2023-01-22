import { createTheme } from "@mui/material/styles";

const themeOptions = {
	palette: {
		type: "light",
		primary: {
			main: "#131e35",
		},
		secondary: {
			main: "#00acc1",
		},
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
		text: {
			primary: "rgba(6,6,6,0.87)",
			secondary: "rgba(0,0,0,0.54)",
			disabled: "rgba(0,0,0,0.38)",
			hint: "rgba(0,0,0,0.38)",
		},
		error: {
			main: "#f44336",
		},
		info: {
			main: "#2196f3",
		},
	},
	typography: {
		h1: {
			fontFamily: "Lilita One",
		},
		h2: {
			fontFamily: "Lilita One",
		},
		h3: {
			fontFamily: "Lilita One",
		},
		h4: {
			fontFamily: "Lilita One",
		},
		h5: {
			fontFamily: "Lilita One",
		},
		h6: {
			fontFamily: "Lilita One",
		},
		body2: {
			fontFamily: "Vesper Libre",
		},
		body1: {
			fontFamily: "Vesper Libre",
		},
		subtitle1: {
			fontFamily: "Vesper Libre",
		},
		subtitle2: {
			fontFamily: "Vesper Libre",
		},
		button: {
			fontFamily: "Lilita One",
			fontWeight: 500,
		},
		caption: {
			fontFamily: "Vesper Libre",
		},
		overline: {
			fontFamily: "Vesper Libre",
		},
		fontFamily: "Vesper Libre",
	},
};

const theme = createTheme(themeOptions);

export default theme;
