import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  //   console.log("project:", project);

  return (
    <Card className="relative overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden ">
          <Image
            src={project.image}
            height={247}
            width={250}
            alt="project_image"
            priority
            className="absolute bottom-0 shadow-2xl"
          />
          {/* buttons */}
          <div className="flex gap-x-6">
            <Link
              href={project.link}
              className="bg-secondary  w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white " />
            </Link>
            {/* github */}
            <div>
              <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Github className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute mb-2 text-sm font-medium uppercase top-4 left-5 ">
          {project.category}
        </Badge>
        <h4 className="mb-1 h4">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
