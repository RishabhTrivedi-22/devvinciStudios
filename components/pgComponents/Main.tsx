export default function Main({ children }: { children?: React.ReactNode }) {
  return (
    <>
    <div className="relative flex-grow flex flex-col justify-center items-center text-center w-full">
      {children}
    </div>
    </>
  )
};
