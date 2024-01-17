import { Badge } from "./ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Chapter = ({ lesson, onClick }) => {
  return (
    <div className="relative overflow-hidden group" onClick={onClick}>
      <div className="h-full px-8 py-6 ">
        <Badge className="absolute mb-8 text-sm font-medium capitalize top-2 right-12 ">
          {lesson.slug}
        </Badge>
        <h4 className="mt-4 mb-1 border-b h4">
          {lesson.name} | {lesson.name_translated}{" "}
        </h4>
        <div className="mt-4 leading-6">
          <p className="text-lg text-muted-foreground">
            {lesson.chapter_summary_hindi}
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            {lesson.chapter_summary}
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Verse</AccordionTrigger>
              <AccordionContent>{lesson.verses_count}</AccordionContent>
              {/* <AccordionContent>{lesson.chapter_summary}</AccordionContent> */}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
