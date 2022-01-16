import { Box } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { Title } from "../components/Title";

const Project = () => {
  const MY_PROJECTS = [
    {
      name: "AfterClass",
      description:
        "AfterClass is the go to platform that all University students love, trust",
      imageUrl: "https://www.afterclass.io/new-landing-page/8.png",
      labels: ["Web Development", "React", "Tailwind"],
      actions: [
        { name: "Website", url: "https://www.afterclass.io/" },
        {
          name: "Github",
          url: "https://github.com/AfterClass-io/Frontend",
        },
      ],
    },
    {
      name: "AfterClass",
      description:
        "AfterClass is the go to platform that all University students love, trust",
      imageUrl: "https://www.afterclass.io/new-landing-page/8.png",
      labels: ["Web Development", "React", "Tailwind"],
      actions: [
        { name: "Website", url: "https://www.afterclass.io/" },
        {
          name: "Github",
          url: "https://github.com/AfterClass-io/Frontend",
        },
      ],
    },
    {
      name: "AfterClass",
      description:
        "AfterClass is the go to platform that all University students love, trust",
      imageUrl: "https://www.afterclass.io/new-landing-page/8.png",
      labels: ["Web Development", "React", "Tailwind"],
      actions: [
        { name: "Website", url: "https://www.afterclass.io/" },
        {
          name: "Github",
          url: "https://github.com/AfterClass-io/Frontend",
        },
      ],
    },
  ];

  return (
    <div>
      <Title>Project</Title>
      <Box sx={{ px: 5, textAlign: "left", gap: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))' }}>
        {MY_PROJECTS.map((proj) => {
          return (
            <ProjectCard
              name={proj.name}
              description={proj.description}
              imageUrl={proj.imageUrl}
              labels={proj.label}
              actions={proj.actions}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Project;
