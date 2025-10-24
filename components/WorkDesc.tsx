
import CardCarousel from "./CardCarousel";
import NavBar from "./pgComponents/NavBar";
import ThemeToggle from "./pgComponents/ThemeToggle";

export default function WorkDesc() {
  const dummyCards = [
    { id: '1', imageSrc: '/images/card-1.jpg', altText: 'Modern Architecture', description: 'A sleek, minimalist building with glass facades and clean lines.' },
    { id: '2', imageSrc: '/images/card-2.jpg', altText: 'Vibrant Street Art', description: 'Colorful mural depicting urban life and diverse culture.' },
    { id: '3', imageSrc: '/images/card-3.jpg', altText: 'Mountain Landscape', description: 'Breathtaking view of snow-capped mountains at sunrise.' },
    { id: '4', imageSrc: '/images/card-4.jpg', altText: 'Abstract Digital Art', description: 'Swirling patterns and glowing colors, representing digital creativity.' },
    { id: '5', imageSrc: '/images/card-5.jpg', altText: 'Cozy Cafe Interior', description: 'Warm and inviting cafe space with wooden furniture and soft lighting.' },
    { id: '6', imageSrc: '/images/card-6.jpg', altText: 'Underwater Coral Reef', description: 'Lush coral reef teeming with exotic fish and marine life.' },
    // Add more cards as needed
  ];
  return (
    <>
      <div className=" min-h-screen flex flex-col font-sans px-4 sm:px-8 md:px-16 pb-8 overflow-x-clip">
        <NavBar />
        <main className="flex-grow flex flex-col justify-between w-full max-w-7xl mx-auto pt-10 pb-20">
        <div className="w-full lg:w-3/5 flex-shrink-0 text-center lg:text-left">
            <h1 className="font-cormorant font-normal text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter">
              Our Work
            </h1>
          </div>
          <div>
            <CardCarousel cards={dummyCards} scrollSpeed={20} />
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
