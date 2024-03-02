"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Chapter from "@/components/Chapter";

const Chapters = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
        params: { limit: "18" },
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
  }, []);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          Chapters
        </h2>
        <div className="mb-24 xl:mb-48">
          <Carousel>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent className="cursor-grab">
              {apiData.map((lesson, index) => (
                <CarouselItem key={index}>
                  <Chapter lesson={lesson} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Chapters;
