"use client";

import chapterImage from "@/assets/chapter.jpeg";
import { fetchData } from "@/utils/utilsApi";
import { useEffect, useState } from "react";
import Chapters from "@/components/Chapters";
import Image from "next/image";

const Chapter = () => {
  const [data, setData] = useState(null);

  // Use useEffect to make the API call when the component mounts
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <Image
        src={chapterImage}
        layout="responsive"
        width={500}
        height={500}
        alt="quotesImage"
      />

      {data ? (
        <div>
          {data.map((chapter) => (
            <Chapters key={chapter.chapter_number} chapter={chapter} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chapter;
