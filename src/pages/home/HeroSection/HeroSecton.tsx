import Intro from "./Intro";
import ShelfyActivity from "./ShelfyActivity";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 sm:gap-20 gap-16 container max-w-6xl mx-auto px-6 min-h-[88vh] py-24 items-center justify-center">
      {/* Left Part */}
      <Intro></Intro>

      {/* Right Part */}
      <ShelfyActivity></ShelfyActivity>
    </div>
  );
};

export default HeroSection;
