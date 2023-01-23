import { Button } from "@mui/material";

export const HoverTextButton = (props) => (
	<Button
		{...props}
		sx={{
			transition: "color 0.5s",
			"&:hover": {
				color: "red",
				backgroundColor: "transparent",
			},
			...props.sx,
		}}
	>
		{props.children}
	</Button>
);
