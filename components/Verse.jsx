"use client";

import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Verse = ({ chapterNumber }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = useMemo(
    () => async () => {
      const options = {
        method: "GET",
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`,
        headers: {
          "X-RapidAPI-Key":
            "947162b802mshb99e34a9e50bacbp1e8c83jsn35dc3a87ef76",
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setApiData(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [chapterNumber]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Accordion type="single" collapsible className="w-full">
      {apiData &&
        apiData.map((verse, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="m-1 mt-2 text-xl font-semibold transition-all duration-200 hover:text-primary text-slate-600">
              Verse {verse.verse_number} | {verse.text}
            </AccordionTrigger>
            <AccordionContent>
              {/* <p>{verse.transliteration}</p>
              <p>{verse.word_meanings}</p> */}
              {verse.translations.map((translation, tIndex) => (
                <p
                  key={tIndex}
                  className="m-6 mt-3 text-lg font-semibold capitalize transition-all duration-150 cursor-pointer hover:border-b-2 text-inherits"
                >
                  {translation.description}
                </p>
              ))}
              {/* {verse.commentaries.map((commentarie, tIndex) => (
                <p
                  key={tIndex}
                  className="m-6 mt-3 text-lg font-semibold capitalize transition-all duration-150 cursor-pointer text-inherit hover:border-b-2 "
                >
                  {commentarie.description}
                </p>
              ))} */}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default Verse;
