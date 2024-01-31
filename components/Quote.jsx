"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { quotes } from "@/utils/utilsQuotes";

const Quote = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title">Quotes</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[400px]"
        >
          {quotes.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary  hover:cursor-grab dark:bg-secondary/40  sm:p-4 min-h-[320px]">
                  <CardHeader className="flex">
                    <div className="flex items-center border-b gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={100}
                        height={100}
                        alt=""
                        priority
                      />
                    </div>
                  </CardHeader>

                  <CardDescription className="text-lg font-semibold text-muted-foreground">
                    {person.english}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Quote;
