import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const AboutCard = ({ project }) => {
  return (
    <Card className="relative overflow-hidden group">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[180px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={150}
            height={150}
            alt="project_Image"
            priority
          />
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <h4 className="mb-1 text-sm font-semibold capitalize border-b text-muted-foreground">
          {project.name}
        </h4>
        {/* <h4 className="mb-1 font-semibold border-b">{project.description}</h4> */}
      </div>
    </Card>
  );
};

export default AboutCard;
