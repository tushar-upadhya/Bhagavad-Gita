"use clients";
import Verse from "./Verse";
import { Badge } from "./ui/badge";

const Chapter = ({ lesson, onClick }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden group"
      onClick={onClick}
    >
      <div className="h-full px-8 py-6 ">
        <Badge className="absolute mb-8 text-sm font-medium capitalize top-2 right-12 ">
          {lesson.slug}
        </Badge>
        <h4 className="mt-4 mb-1 border-b h4">
          {lesson.name} | {lesson.name_translated}{" "}
        </h4>
        <div className="mt-4 leading-8 ">
          <p className="text-lg font-semibold ">
            {lesson.chapter_summary_hindi}
          </p>
          <p className="mt-3 text-lg font-semibold text-muted-foreground">
            {lesson.chapter_summary}
          </p>
          <p className="mt-3 text-lg font-bold text-inherit">
            Verse {lesson.verses_count}
          </p>
          <Verse chapterNumber={lesson.chapter_number} />
        </div>
      </div>
    </div>
  );
};

export default Chapter;
