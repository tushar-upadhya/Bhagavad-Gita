import { Badge } from "./ui/badge";
import Verse from "./Verse";

const Chapter = ({ lesson }) => {
  // console.log("lesson:", lesson);
  return (
    <div className="relative overflow-hidden group">
      <div className="h-full px-8 py-6 ">
        <Badge className="absolute mb-8 text-sm font-medium uppercase top-2 right-5 ">
          {lesson.slug}
        </Badge>
        <h4 className="mt-4 mb-1 border-b h4">{lesson.name}</h4>
        <div className="mt-4 leading-6">
          <p className="text-lg text-muted-foreground">
            {lesson.chapter_summary_hindi}
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            {lesson.chapter_summary}
          </p>
        </div>

        <Verse />
      </div>
    </div>
  );
};

export default Chapter;
