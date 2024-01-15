"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Chapter from "@/components/Chapter";

const Chapters = () => {
  const [category, setCategory] = useState("Chapters");
  const [apiData, setApiData] = useState();
  const categories = ["Chapters", "Verses"];

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/1/",
        headers: {
          "X-RapidAPI-Key":
            "947162b802mshb99e34a9e50bacbp1e8c83jsn35dc3a87ef76",
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("API data:", response.data); // Log the API data
        setApiData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);

  const filtered = Array.isArray(apiData)
    ? apiData.filter((filtered) => {
        return category === "all" ? filtered : filtered.category === category;
      })
    : [];

  // ... Rest of your code ...

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          Chapters
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="grid grid-cols-1 gap-4 text-lg xl:mt-8 lg:grid-cols-3">
            {apiData &&
              apiData.map((lesson, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <Chapter lesson={lesson} />
                  </TabsContent>
                );
              })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Chapters;
