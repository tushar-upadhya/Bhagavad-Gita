import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="w-full px-4 mt-4 text-center md:px-0">
        <p className="mb-2 text-lg leading-relaxed">
          <span className="text-primary">Bhagavad Gita</span> , also known as
          the Gita - "The Song of The Lord" is a practical guide to one's life
          that guides one to re-organise their life, achieve inner peace and
          approach the Supreme Lord
          <span className="text-primary">(the Ultimate Reality).</span>
          It is a 700-verse text in Sanskrit which comprises chapters 23 through
          40 in the Bhishma-Parva section of the Mahabharata.
        </p>
        <p className="text-lg leading-relaxed">
          The {"  "}
          <span className="text-primary">Bhagavad Gita </span> is a dialogue
          between Arjuna , a supernaturally gifted warrior and his guide and
          charioteer <span className="text-primary">Lord Krishna</span> on the
          battlefield of Kurukshetra. As both armies stand ready for the battle,
          the mighty warrior Arjuna, on observing the warriors on both sides
          becomes overwhelmed with grief and compassion due to the fear of
          losing his relatives and friends and the consequent sins attributed to
          killing his own relatives. So, he surrenders to{" "}
          <span className="text-primary">Lord Krishna</span>, seeking a
          solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18
          chapters, Gita packs an intense analysis of life, emotions and
          ambitions, discussion of various types of yoga, including Jnana,
          Bhakti, Karma and Raja, the difference between Self and the material
          body as well as the revelation of the Ultimate Purpose of Life.
        </p>
      </div>
      <div className="w-full h-4">
        {/* <Image src="/about/gita.png" layout="fill" alt="gita" /> */}
      </div>
    </div>
  );
};

export default About;
