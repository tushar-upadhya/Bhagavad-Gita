"use client";

import Link from "next/link";

const SearchBar = ({
  id,
  chapterNumber,
  verseNumber,
  transliteration,
  wordMeanings,
  text,
}) => {
  return (
    <Link href={`/verse/${id}`}>
      <div className="flex flex-col justify-between w-full px-6 py-2 mt-4 border rounded-lg lg:py-5 hover:cursor-pointer hover:bg-box-bg">
        <div className="pb-2 font-semibold uppercase text-md lg:w-2/5 text-my-orange">
          Chapter {chapterNumber} - verse {verseNumber}
        </div>
        <div className="flex-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
          {transliteration}
        </div>
      </div>
    </Link>
  );
};

export default SearchBar;
