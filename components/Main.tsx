import AboutDesc from "./AboutDesc";
import WorkDesc from "./WorkDesc";
import HeroSect from "./HeroSect";

export default function Main() {
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans sm:px-8 md:px-16 py-4 overflow-x-clip">
        <HeroSect />
        <AboutDesc />
        <WorkDesc />
      </div>
    </>
  );
}
