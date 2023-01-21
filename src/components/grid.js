import Grid from "@mui/material/Unstable_Grid2";

const sx = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
};
export const FlexBox = (props) => <Grid sx={sx} {...props} />;

export const FlexRow = (props) => (
	<FlexBox
		sx={{
			...sx,
			flexDirection: "row",
		}}
		{...props}
	/>
);
