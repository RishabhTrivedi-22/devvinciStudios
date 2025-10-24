export default function Desc() {
  const navItems = ["WORKS", "STUDIO", "CONTACT", "FOLLOW"];
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 py-8 overflow-x-clip">
        <header className="w-full">
          <nav className="flex justify-between items-center py-4 w-full">
            <div className=" lg:text-xl md:text-lg font-medium tracking-[0.2em]">
              DEVVINCI STUDIOS
            </div>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest md:tracking-wide hover:opacity-70 transition-opacity">
              {navItems.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex-grow flex flex-col justify-center items-center text-center w-full">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-tight">
            Your Dream is now a
            <br />
            <span className="relative inline-block">
              “<em className="not-italic">click away </em>
              <span className="relative inline-block not-italic">
                !
                <span className="absolute -right-20 -top-12 sm:-right-24 sm:-top-16 md:-right-28 md:-top-20 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-red-500 rounded-full flex items-center justify-center -z-10">
                  <span
                    className="absolute text-cyan-400 font-serif"
                    style={{
                      top: "25%",
                      right: "20%",
                      fontSize: "clamp(2rem, 8vw, 4rem)",
                    }}
                    aria-hidden="true"
                  >
                    ”
                  </span>
                  <span
                    className="absolute text-cyan-400 font-serif font-bold"
                    style={{
                      top: "45%",
                      right: "30%",
                      fontSize: "clamp(2rem, 8vw, 4rem)",
                    }}
                    aria-hidden="true"
                  >
                    !
                  </span>
                </span>
              </span>
              ”
            </span>
          </h1>
          <p className="mt-16 md:mt-24 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
            At DevVinci Studios, we believe in the fusion of art and technology.
            We craft beautiful, user-centric brands and high-performance digital
            solutions—from stunning websites to efficient AI automations—that
            work as hard as they look good.
          </p>
        </main>
      </div>
    </>
  );
}
