import type { BookData } from "@/types/bookData";
import { Badge } from "@/components/ui/badge";
import { Library } from "lucide-react";
import { useGetBookQuery } from "@/redux/api/baseApi";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

interface IProps {
  isVisible: boolean;
}

const BookCard = ({ isVisible }: IProps) => {
  // redux endpoint hook
  const page = 1;
  const limit = 6;
  const { data } = useGetBookQuery({ page, limit });
  const books = data?.data;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      {books?.map((book: BookData, index: number) => {
        return (
          <div
            key={book?._id}
            className={`transition-all duration-700 ease-out transform md:max-w-md max-w-sm mx-auto ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${400 + index * 200}ms` }}
          >
            <div className="px-6 py-12 cursor-pointer h-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
              <div className="flex gap-4 mb-4">
                {/* icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-white bg-black rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    <Library className="h-7 w-7" />
                  </div>
                </div>

                {/* title */}
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

              {/* description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {book?.description}
              </p>

              {/* isbn */}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
