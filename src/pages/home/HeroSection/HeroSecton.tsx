import Intro from "./Intro";
import ShelfyActivity from "./ShelfyActivity";

const HeroSection = () => {
  return (
    <div className="flex container max-w-6xl gap-10 mx-auto min-h-[89vh] items-center justify-center">
      {/* Left Part */}
      <Intro></Intro>

      {/* Right Part */}
      <ShelfyActivity></ShelfyActivity>
    </div>
  );
};

export default HeroSection;
