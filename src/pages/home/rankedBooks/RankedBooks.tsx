import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetBookQuery } from "@/redux/api/baseApi";
import type { BookData } from "@/types/bookData";
import { ArrowRight, Library } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

const RankedBooks = () => {
  // redux endpoint hook
  const page = 1;
  const limit = 6;
  const { data } = useGetBookQuery({ page, limit });
  const books = data?.data;

  const { ref: featureRef, inView: featureVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className="flex items-center justify-center py-28 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* header */}
        <div
          ref={featureRef}
          className={`text-center transition-all duration-700 ease-out ${
            featureVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-14 max-w-4xl mx-auto">
            Most Borrowed Books
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make library management effortless,
            efficient, and enjoyable with cutting-edge technology
          </p>
        </div>

        {/* books */}
        <div className="grid grid-cols-3 gap-10 pt-12">
          {books?.map((book: BookData) => (
            <Card
              key={book?._id}
              className="h-full max-w-78 mx-auto bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 text-white bg-black rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <Library className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 leading-tight line-clamp-2">
                      {book?.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {book?.author}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 rounded-md px-2 py-1 text-xs font-medium"
                    >
                      {book?.genre}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {book?.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium mb-1">
                      ISBN:
                    </p>
                    <p className="text-gray-900 dark:text-white text-xs font-mono">
                      {book?.isbn}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium mb-1">
                      Copies:
                    </p>
                    <p className="text-gray-900 dark:text-white text-xs">
                      {book?.copies}
                    </p>
                  </div>
                </div>

                <div className="border-gray-100 dark:border-gray-800 pt-4">
                  <Link to={`/books/${book?._id}`}>
                    <Button
                      variant="outline"
                      className="w-full h-10 cursor-pointer rounded-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 text-sm"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* view all */}
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
