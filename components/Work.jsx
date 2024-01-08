"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/utils/utilsProject";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="mb-4 section-title">Latest Project</h2>
          <p className="mb-8 subtitle">Lorem ipsum dolor sit amet.</p>

          <Link href={"/projects"}>
            <Button>All Project</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={Pagination}
            pagination={{ clickable: true }}
            observer={true}
            observeParents={true}
          >
            {/* first 4 project */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
