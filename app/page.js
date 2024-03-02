import dynamic from "next/dynamic";

const ComponentA = dynamic(() => import("../components/Hero"));
const ComponentB = dynamic(() => import("../components/AboutMe"));
const ComponentC = dynamic(() => import("../components/Quote"));
const ComponentD = dynamic(() => import("../components/Cta"));
const ComponentE = dynamic(() => import("../components/Verse"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <ComponentA />

      <ComponentB />

      <ComponentC />

      <ComponentD />

      <ComponentE />
    </main>
  );
}
