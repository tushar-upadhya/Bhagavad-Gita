import { Github, Linkedin } from "lucide-react";

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
