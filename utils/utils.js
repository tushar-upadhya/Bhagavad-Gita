import { Github, Linkedin } from "lucide-react";
import { projectData } from "./utilsProject";

export const UtilsVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export const utilsNavLink = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export const icons = [
  {
    path: "/",
    name: <Linkedin />,
  },
  {
    path: "/",
    name: <Github />,
  },
];

export const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
