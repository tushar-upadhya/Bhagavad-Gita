import Image from "next/image";
import quotes from "../../assets/quotes.png";

const Quotes = () => {
  return (
    <div>
      <Image
        src={quotes}
        // layout="responsive"
        width={500}
        height={100}
        alt="quotesImage"
      />
      Whenever dharma declines and the purpose of life is forgotten, I manifest
      myself on earth. I am born in every age to protect the good, to destroy
      evil, and to reestablish dharma.
    </div>
  );
};

export default Quotes;
