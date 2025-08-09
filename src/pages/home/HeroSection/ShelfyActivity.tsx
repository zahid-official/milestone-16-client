import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Library, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const ShelfyActivity = () => {
  // state
  const [isVisible, setIsVisible] = useState(false);

  // useEffect
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="lg:max-w-md max-w-lg w-full mx-auto flex-1">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Card className="w-full bg-white dark:bg-[#111] shadow-lg border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
          <CardContent className="sm:p-8 px-6 py-4 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:rotate-2 will-change-transform transform-gpu origin-center">
                <Library className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Digital Library
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Shelfy Activity
                </p>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Books", value: "1,247" },
                { label: "Borrowed", value: "89" },
              ].map((item, index) => (
                <Card
                  key={item.label}
                  className={`bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-700 rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-[#222] duration-300 transform transition-all ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${200 + index * 150}ms`,
                  }}
                >
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium text-sm tracking-wide">
                <TrendingUp className="w-4 h-4" />
                RECENT ACTIVITY
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "The Great Gatsby",
                    status: "Returned",
                    time: "2 min ago",
                  },
                  {
                    title: "To Kill a Mockingbird",
                    status: "Borrowed",
                    time: "1 hour ago",
                  },
                  { title: "1984", status: "Added", time: "3 hours ago" },
                ].map((book, index) => (
                  <div
                    key={book.title}
                    className={`flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-[#222] transition-all duration-300 cursor-pointer transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div className="w-9 h-9 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-700 rounded-md flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-black dark:text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-white text-sm mb-0.5">
                        {book.title}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>{book.status}</span>
                        <span>•</span>
                        <span>{book.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShelfyActivity;
