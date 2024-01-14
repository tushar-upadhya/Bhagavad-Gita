import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const Chapter = ({ lesson }) => {
  console.log("lesson:", lesson);
  return (
    <Card className="relative overflow-hidden group">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {/* btn links */}
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute mb-2 text-sm font-medium uppercase top-4 left-5">
          {lesson.chapter_number}
        </Badge>
        <h4 className="mb-1 h4">{lesson.name}</h4>
        <p className="text-lg text-muted-foreground">
          {lesson.chapter_summary}
        </p>
        <p className="text-lg text-muted-foreground">
          {lesson.chapter_summary_hindi}
        </p>
      </div>
    </Card>
  );
};

export default Chapter;
