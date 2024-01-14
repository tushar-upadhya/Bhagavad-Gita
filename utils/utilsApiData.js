export const apiData = async () => {
  const res = await fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/s"
  );

  if (!res.ok) {
    throw new Error("fetch data failed");
  }
  return res.json();
};
