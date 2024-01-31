import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import Quote from "@/components/Quote";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Quote />
      <Cta />
    </main>
  );
}
