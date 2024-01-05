const Chapters = ({ chapter }) => {
  return (
    <div key={chapter.chapter_number}>
      <h2 className="text-2xl font-bold">{chapter.name}</h2>
      <p>{chapter.name_meaning}</p>
      <p>{chapter.chapter_summary}</p>
    </div>
  );
};

export default Chapters;
