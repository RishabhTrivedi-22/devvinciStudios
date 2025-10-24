import Main from "./pgComponents/Main";
import NavBar from "./pgComponents/NavBar";
import ThemeToggle from "./pgComponents/ThemeToggle";

export default function Desc() {
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 pb-8 overflow-x-clip">
        <NavBar />
        <Main>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-normal leading-tight">
            Your Dream is now a
            <br />
            <span className="relative inline-block">
              <em className="not-italic">"click away !"</em>
            </span>
          </h1>
          <p className="mt-16 md:mt-24 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            At DevVinci Studios, we believe in the fusion of art and technology.
            We craft beautiful, user-centric brands and high-performance digital
            solutions—from stunning websites to efficient AI automations—that
            work as hard as they look good.
          </p>
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </Main>
        {/* This will act as the click trigger to transition to the contact page. */}

        <footer>
          <div className="w-1/3">
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </>
  );
}
