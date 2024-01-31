"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { uniqueCategories } from "@/utils/utils";
import AboutCard from "@/components/AboutCard";
import { aboutData } from "@/utils/utilsData";

const About = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all");

  const filteredProjects = aboutData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          About
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full  grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <AboutCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
