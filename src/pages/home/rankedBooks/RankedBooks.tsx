import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import BookCard from "./BookCard";

const RankedBooks = () => {
  const { ref: featureRef, inView: featureVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className="flex items-center justify-center lg:py-30 py-22 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* header */}
        <div
          ref={featureRef}
          className={`text-center transition-all duration-700 ease-out ${
            featureVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3 lg:leading-12 max-w-4xl mx-auto">
            Most Borrowed Books
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the most popular reads with powerful tools that make
            tracking and managing top picks effortless, efficient and enjoyable
          </p>
        </div>

        {/* books */}
        <BookCard isVisible={featureVisible}></BookCard>

        {/* view all btn */}
        <div className="border-gray-100 max-w-60 dark:border-gray-800 pt-10">
          <Link to={`/books`}>
            <Button
              size="lg"
              className="group w-full h-12 cursor-pointer bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg px-8 py-5 text-base font-medium"
            >
              View All Books
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RankedBooks;
