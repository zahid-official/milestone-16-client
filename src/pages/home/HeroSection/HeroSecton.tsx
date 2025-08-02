import Intro from "./Intro";
import ShelfyActivity from "./ShelfyActivity";

const HeroSection = () => {
  return (
    <div className="flex container max-w-6xl gap-10 mx-auto min-h-screen items-center justify-center mt-9 py-12">
      {/* Left Part */}
      <Intro></Intro>

      {/* Right Part */}
      <ShelfyActivity></ShelfyActivity>
    </div>
  );
};

export default HeroSection;
