import Image from "next/image";
import aboutImage from "../../assets/about2.jpg";
import { CheckCheck } from "lucide-react";

const AboutGita = () => {
  return (
    <div className="container p-4 mx-auto text-base sm:p-6 lg:p-8 sm:text-lg md:text-xl lg:text-2xl xl:text-xl">
      <Image
        src={aboutImage}
        alt="About Gita"
        layout="responsive"
        width={500}
        height={100}
      />

      <div className="leading-10 text-center">
        <p className="mt-8">
          <span className="font-semibold text-[#cca14ac6]">Bhagavad Gita</span>{" "}
          , also known as the Gita - "The Song of The Lord" is a practical guide
          to one's life that guides one to re-organise their life, achieve inner
          peace and approach the Supreme Lord (the Ultimate Reality). It is a
          700-verse text in Sanskrit which comprises chapters 23 through 40 in
          the Bhishma-Parva section of the Mahabharata.
        </p>
        <ul className="max-w-full p-8 m-4">
          <li className="flex gap-4 items-center font-semibold text-[#cca14ac6]">
            <CheckCheck /> जो हुआ, अच्छे के लिए हुआ। जो हो रहा है, अच्छे के लिए
            हो रहा है। जो होगा, अच्छे के लिए ही होगा।
          </li>
          <li className="flex gap-4 items-center font-semibold text-[#cca14ac6]">
            <CheckCheck />
            तुम बस अपना कर्म करो फल की चिंता मत करो।
          </li>
          <li className="flex gap-4 items-center font-semibold text-[#cca14ac6]">
            <CheckCheck />
            तुम खाली हाथ आए हो और खाली हाथ चले जाओगे।
          </li>
        </ul>

        <p className="mt-10 mb-6">
          The{" "}
          <span className="font-semibold text-[#cca14ac6]">Bhagavad Gita</span>{" "}
          is a dialogue between Arjuna, a supernaturally gifted warrior and his
          guide and charioteer Lord Krishna on the battlefield of Kurukshetra.
          As both armies stand ready for the battle, the mighty warrior Arjuna,
          on observing the warriors on both sides becomes overwhelmed with grief
          and compassion due to the fear of losing his relatives and friends and
          the consequent sins attributed to killing his own relatives. So, he
          surrenders to Lord Krishna, seeking a solution. Thus, follows the
          wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense
          analysis of life, emotions and ambitions, discussion of various types
          of yoga, including Jnana, Bhakti, Karma and Raja, the difference
          between Self and the material body as well as the revelation of the
          Ultimate Purpose of Life.
        </p>
      </div>
    </div>
  );
};

export default AboutGita;
