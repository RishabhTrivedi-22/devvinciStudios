
import NavBar from "./pgComponents/NavBar";
import ThemeToggle from "./pgComponents/ThemeToggle";

export default function WorkDesc() {
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 pb-8 overflow-x-clip">
        <NavBar />
        <main className="flex-grow flex flex-col justify-between border w-full max-w-7xl mx-auto pt-10 pb-20">
        <div className="w-full lg:w-3/5 flex-shrink-0 text-center lg:text-left border">
            <h1 className="font-cormorant font-normal text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter">
              Our Work
            </h1>
          </div>
          <div>
            
          </div>
        </main>

        <footer>
          <div className="w-1/3">
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </>
  );
}
