import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex
    flex-col items-center justify-center relative overflow-hidden
    mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-20 left-0 lg:left-180 lg:-top-20 md:left-80 md:-top-20"
        fill="white"
      />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
            
          <Link href={"/courses"}>
          <button className="bg-gray-400 rounded">
          Explore Courses
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
