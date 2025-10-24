

export default function NavBar() {
  const navItems = ["WORKS", "STUDIO", "CONTACT", "FOLLOW"];
  return (
    <>
      <header className="w-full">
        <nav className="flex justify-between items-center py-4 w-full">
          <div className="lg:text-2xl md:text-xl font-medium tracking-[0.2em]">
            DEVVINCI STUDIOS
          </div>
          <div className="hidden md:flex items-center lg:space-x-12 md:space-x-5 text-sm font-medium tracking-widest hover:opacity-70 transition-opacity">
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
