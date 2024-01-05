import Image from "next/image";
import quotes from "../../assets/quotes.jpeg";

const Quotes = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <Image
        src={quotes}
        width={500}
        height={500}
        alt="quotesImage"
        className="md:mr-4"
      />
      <div className="mt-4 text-xl font-semibold md:mt-0 text-slate-600">
        Whenever dharma declines and the purpose of life is forgotten, I
        manifest myself on earth. I am born in every age to protect the good, to
        destroy evil, and to reestablish dharma.
      </div>
    </div>
  );
};

export default Quotes;
