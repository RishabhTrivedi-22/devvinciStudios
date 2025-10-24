import ThemeToggle from "./pgComponents/ThemeToggle";
export default function Hero() {
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 py-8 overflow-x-clip">
        <header className="w-full">
          <nav className="flex justify-between md:justify-center lg:justify-center lg:space-x-34 items-center md:space-x-8 ">
            <a
              href="#"
              className="font-bold sm:text-xs md:text-lg md:tracking-widest hover:opacity-70 transition-opacity"
            >
              WORKS
            </a>
            <a
              href="#"
              className="font-bold sm:text-xs md:text-lg md:tracking-widest hover:opacity-70 transition-opacity"
            >
              STUDIO
            </a>
            <a
              href="#"
              className="font-bold sm:text-xs md:text-lg md:tracking-widest hover:opacity-70 transition-opacity"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="font-bold sm:text-xs md:text-lg md:tracking-widest hover:opacity-70 transition-opacity"
            >
              FOLLOW
            </a>
          </nav>
        </header>

        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto pt-10 pb-20">
          <div className="w-full lg:w-3/5 flex-shrink-0 text-center lg:text-left z-20">
            <h1 className="font-cormorant font-normal text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter">
              DEVVINCI
            </h1>
            <h2 className="font-cormorant font-normal text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.8] tracking-tighter mt-2">
              STUDIOS
            </h2>
          </div>

          <div className="w-full lg:w-2/5 h-96 mt-16 lg:mt-0 relative">
            <img
              src='/images/hero-2.png'
              alt="Classical drawing of a male figure"
              className="absolute top-0 right-0 translate-x-1/4 lg:right-20 w-32 md:w-40 object-cover transform rotate-6 shadow-xl"
            />
            <img
              src="/images/hero-1.png"
              alt="Statue wearing a VR headset"
              className="absolute lg:top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 object-cover z-10 transform -rotate-3 shadow-2xl"
            />
            <img
              src="/images/hero-4.jpg"
              alt="Vitruvian Man style drawing"
              className="absolute bottom-[-2rem] right-1/2 translate-x-3/4 lg:right-12 w-40 md:w-48 object-cover transform rotate-3 shadow-xl"
            />
            <img
              src="/images/hero-3.jpg"
              alt="Statue wearing a VR headset"
              className="absolute bottom-[-11rem] lg:-bottom-100 lg:-right-1/4 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 object-cover z-10 transform -rotate-3 shadow-2xl"
            />
          </div>
        </main>

        <footer className="w-full flex items-center justify-between z-20">
          <div className="w-1/3">
            <ThemeToggle />
          </div>

          <div className="w-1/3 flex flex-col items-center justify-center">
            <span className="font-bold text-xs tracking-widest">SCROLL</span>
            <div className="w-[2px] h-16 bg-black mt-2"></div>
          </div>

          <div className="w-1/3 flex justify-end">
            <button className="bg-[#FFD700] text-black font-bold text-sm tracking-wider py-4 px-8 rounded-full border-2 border-black hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
              START A PROJECT
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
