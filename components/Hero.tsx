import ThemeToggle from "./ThemeToggle";
export default function Hero() {
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 py-8 overflow-x-clip">
      
      <header className="w-full">
        <nav className="flex justify-center lg:justify-center lg:space-x-34 items-center md:space-x-8 sm:space-x-15">
          <a href="#" className="font-bold text-lg tracking-widest hover:opacity-70 transition-opacity">WORKS</a>
          <a href="#" className="font-bold text-lg tracking-widest hover:opacity-70 transition-opacity">STUDIO</a>
          <a href="#" className="font-bold text-lg tracking-widest hover:opacity-70 transition-opacity">CONTACT</a>
          <a href="#" className="font-bold text-lg tracking-widest hover:opacity-70 transition-opacity">FOLLOW</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto pt-10 pb-20">
        <div className="w-full lg:w-3/5 flex-shrink-0 text-center lg:text-left">
          <h1 className="font-cormorant font-normal text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter">
            DEVVINCI
          </h1>
          <h2 className="font-cormorant font-normal text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.8] tracking-tighter mt-2">
            STUDIOS
          </h2>
        </div>
        
        <div className="w-full lg:w-2/5 h-96 lg:h-full mt-16 lg:mt-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1541535650829-add135a57492?q=80&w=800&auto=format&fit=crop"
            alt="Classical drawing of a male figure"
            className="absolute top-0 right-1/2 translate-x-1/4 lg:right-20 w-32 md:w-40 object-cover transform rotate-6 shadow-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1677442293344-933e46c3b88b?q=80&w=800&auto=format&fit=crop"
            alt="Statue wearing a VR headset"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 object-cover z-10 transform -rotate-3 shadow-2xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop"
            alt="Vitruvian Man style drawing"
            className="absolute bottom-[-2rem] right-1/2 translate-x-3/4 lg:right-12 w-40 md:w-48 object-cover transform rotate-3 shadow-xl"
          />
        </div>
      </main>

      <footer className="w-full flex items-center justify-between">
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
