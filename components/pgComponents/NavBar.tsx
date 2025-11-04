import Link from "next/link";

export default function NavBar() {
  const navItems = ["works", "studio", "contact", "follow"];
  return (
    <>
      <header className="w-full">
        <nav className="flex justify-between items-center py-4 w-full">
          <div className="font-chill lg:text-2xl md:text-xl font-medium tracking-[0.2rem]">
            DEVVINCI
          </div>
          <div className="hidden md:flex items-center font-syn lg:space-x-12 md:space-x-5 text-md font-medium tracking-widest hover:opacity-70 transition-opacity">
            {navItems.map((item) => (
              <Link key={item} href={`${item}`} className="uppercase">
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
