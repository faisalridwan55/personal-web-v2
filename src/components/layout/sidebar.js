import { Drawer } from "@mui/material";
import { useTheme } from "@emotion/react";

const Sidebar = ({ children, open, onClose }) => {
	const theme = useTheme();

	return (
		<Drawer
			open={open}
			anchor={"left"}
			onClose={onClose}
			transitionDuration={{ enter: 500, exit: 500 }}
			PaperProps={{
				sx: {
					minWidth: "60vw",
					backgroundColor: theme.palette.primary.dark,
					color: theme.palette.primary.contrastText,
				},
			}}
		>
			{children}
		</Drawer>
	);
};

export default Sidebar;
