import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetBookQuery } from "@/redux/api/baseApi";
import type { BookData } from "@/types/bookData";
import { Library } from "lucide-react";
import { Link } from "react-router";

interface IProps {
  isVisible: boolean;
}

const BookCard = ({ isVisible }: IProps) => {
  const page = 1;
  const limit = 6;
  const { data, isLoading } = useGetBookQuery({ page, limit });
  const books = data?.data;

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14">
        {Array.from({ length: limit }).map((_, index) => (
          <div
            key={`book-skeleton-${index}`}
            className="md:max-w-md max-w-sm mx-auto w-full"
          >
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3 items-center">
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 rounded-full" />
                    <Skeleton className="h-3 w-16 rounded-full" />
                  </div>
                </div>
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-4 w-7/12" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>

              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!books?.length) {
    return (
      <div className="mt-14 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          No ranked books available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14">
      {books.map((book: BookData, index: number) => {
        return (
          <div
            key={book?._id}
            className={`transition-all duration-700 ease-out transform md:max-w-md max-w-sm mx-auto w-full ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${350 + index * 120}ms` }}
          >
            <div className="group relative overflow-hidden h-full rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-600" />

              <div className="p-6 flex flex-col h-full">
                <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-3 gap-y-1 mb-5">
                  <div className="row-span-2 self-start mt-0.5 w-12 h-12 text-white bg-black dark:bg-white dark:text-black rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    <Library className="h-6 w-6" />
                  </div>

                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Rank #{index + 1}
                  </p>

                  <Badge
                    variant="secondary"
                    className="justify-self-end self-start bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 rounded-full px-3 py-1 text-xs font-medium shrink-0"
                  >
                    {book?.genre}
                  </Badge>

                  <h3 className="col-start-2 col-end-4 text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2 min-h-[3.5rem]">
                    {book?.title}
                  </h3>
                </div>

                <p className="text-sm font-medium italic text-gray-600 dark:text-gray-400 mb-4 line-clamp-1">
                  by {book?.author}
                </p>

                <div className="flex flex-1 flex-col justify-between gap-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {book?.description}
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/30 px-3 py-2">
                        <p className="text-[11px] font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-500 mb-1">
                          ISBN
                        </p>
                        <p className="text-xs font-mono text-gray-900 dark:text-white truncate">
                          {book?.isbn}
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/30 px-3 py-2">
                        <p className="text-[11px] font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-500 mb-1">
                          Copies
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {book?.copies}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Link to={`/books/${book?._id}`}>
                        <Button
                          variant="outline"
                          className="w-full h-10 cursor-pointer rounded-md border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
