import { createTheme } from "@mui/material/styles";

const themeOptions = {
	palette: {
		primary: {
			main: "#192846",
		},
		secondary: {
			main: "#00acc1",
		},
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
		text: {
			primary: "#192846",
			hint: "rgba(25,40,70,0.38)",
			secondary: "rgba(25,40,70,0.54)",
			disabled: "rgba(25,40,70,0.38)",
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
