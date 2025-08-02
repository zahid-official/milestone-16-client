import Banner from "./footerBanner/Banner";
import HeroSecton from "./heroSection/HeroSecton";
import ManageSection from "./manageSection/ManageSection";

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

      {/* banner */}
      <section>
        <Banner></Banner>
      </section>
    </div>
  );
};

export default Home;
