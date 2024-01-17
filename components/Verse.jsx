import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Verse = ({ vers }) => {
  //   console.log("verse:", vers);
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Verse</AccordionTrigger>
        <AccordionContent>Coming soon</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Verse;
