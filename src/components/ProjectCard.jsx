import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
} from "@mui/material";

// interface ProjectCardProps {
//   name: String;
//   descriptions: String;
//   labels?: String[];
//   actions?: {
//     name: String;
//     url: String;
//   }[]
// }

export const ProjectCard = ({
  name = "",
  description = "",
  imageUrl = "https://www.afterclass.io/new-landing-page/8.png",
  labels = [],
  actions = [],
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Box>
          {labels.map((name) => (
            <Chip label={name} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        {actions.map(({ name, url }) => (
          <Button size="small" href={url} target="_blank" rel="noreferrer">
            {name}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};
