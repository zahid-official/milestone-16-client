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
    <div className="relative overflow-hidden lg:py-30 py-22 px-6">
      <div className="pointer-events-none absolute -left-30 top-10 h-56 w-56 rounded-full bg-gray-200/70 blur-3xl dark:bg-gray-900" />
      <div className="pointer-events-none absolute -right-24 top-20 h-56 w-56 rounded-full bg-gray-200/60 blur-3xl dark:bg-gray-900" />

      <div className="max-w-6xl mx-auto w-full relative">
        {/* header */}
        <div
          ref={featureRef}
          className={`text-center transition-all duration-700 ease-out ${
            featureVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center rounded-full border border-gray-300/80 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-gray-600 dark:text-gray-300">
            Reader Favorites
          </span>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mt-5 mb-4 lg:leading-12 max-w-4xl mx-auto">
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
        <div className="max-w-60 mx-auto pt-12">
          <Link to={`/books`}>
            <Button
              size="lg"
              className="group w-full h-12 cursor-pointer rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg px-8 py-5 text-base font-medium"
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
