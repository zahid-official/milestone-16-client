import HeroSecton from "./HeroSection/HeroSecton";
import ManageSection from "./ManageSection/ManageSection";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section>
        <HeroSecton></HeroSecton>
      </section>

      {/* manage section */}
      <section>
        <ManageSection></ManageSection>
      </section>
    </div>
  );
};

export default Home;
