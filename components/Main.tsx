import Hero from "./Hero";
import AboutDesc from "./AboutDesc"
import WorkDesc from "./WorkDesc";

export default function Main() {
  return (
    <>
    <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 py-8 overflow-x-clip">
      <Hero />
      <AboutDesc />
      <WorkDesc />
    </div>
    </>
  );
};
