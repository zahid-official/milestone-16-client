import { useInView } from "react-intersection-observer";
import Features from "./Features";
import Services from "./Services";

const ManageSection = () => {
  const { ref: featureRef, inView: featureVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: serviceRef, inView: serviceVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="flex items-center justify-center lg:py-30 py-22 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header section */}
        <div
          ref={featureRef}
          className={`text-center transition-all duration-700 ease-out ${
            featureVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 lg:leading-12 max-w-4xl mx-auto">
            Everything You Need to <br className="lg:block hidden" /> Manage Your Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make library management effortless,
            efficient, and enjoyable with cutting-edge technology
          </p>
        </div>

        {/* Features section */}
        <Features isVisible={featureVisible} />

        {/* Services section */}
        <div ref={serviceRef}>
          <Services isVisible={serviceVisible} />
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
