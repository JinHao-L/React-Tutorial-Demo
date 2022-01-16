import { Typography } from "@mui/material";

export const Title = ({children}) => {
  return (
    <Typography gutterBottom variant="h5">
      {children}
    </Typography>
  );
};
