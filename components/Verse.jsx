"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Verse = ({ chapterNumber }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [chapterNumber]);

  return (
    <Accordion type="single" collapsible className="w-full">
      {apiData &&
        apiData.map((verse, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>Verse {verse.verse_number}</AccordionTrigger>
            <AccordionContent>
              <p>{verse.text}</p>
              <p>{verse.transliteration}</p>
              <p>{verse.word_meanings}</p>
              {verse.translations.map((translation, tIndex) => (
                <p key={tIndex}>{translation.description}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default Verse;
