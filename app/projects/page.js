"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { uniqueCategory } from "@/utils/utils";
import { projectData } from "@/utils/utilsProject";

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");
  // console.log("category:->", category);

  const filterProject = projectData.filter((project) => {
    //  if category is 'all projects' return all projects else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log("filterProject:", filterProject);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          My Project
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:md-48">
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
          <div className="grid grid-cols-1 gap-4 text-lg xl:mt8 lg:grid-cols-3">
            {filterProject.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
