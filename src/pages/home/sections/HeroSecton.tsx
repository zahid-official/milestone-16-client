import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Library, TrendingUp, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { value: "500+", label: "Libraries" },
    { value: "50,000+", label: "Books" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9", label: "Rating", icon: Star },
  ];

  return (
    <div className="flex container mx-auto min-h-screen items-center justify-center px-4 mt-9 py-12">
      {/* Left Part */}
      <div className="flex-1 mx-auto max-w-2xl">
        {/* Brand Header */}
        <div
          className={`transform flex items-center space-x-2 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Library className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="text-base font-medium text-gray-700 dark:text-gray-100 tracking-wide">
            Modern Library Management
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 mt-4 mb-8">
          <h1
            className={`transform text-5xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-700 ease-out delay-200 sm:text-6xl lg:text-7xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Meet
          </h1>
          <h2
            className={`transform text-3xl font-medium text-gray-600 dark:text-gray-400 transition-all duration-700 ease-out delay-300 sm:text-4xl lg:text-5xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Your Digital Library
          </h2>
        </div>

        {/* Description */}
        <p
          className={`transform text-lg leading-relaxed text-gray-600 dark:text-gray-100 transition-all duration-700 ease-out delay-500 sm:text-xl lg:text-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Transform your library management with our elegant, powerful platform.
          Organize, track, and manage your book collection with unprecedented
          ease and style.
        </p>

        {/* Buttons */}
        <div
          className={`transform flex flex-col space-y-4 transition-all duration-700 ease-out delay-700 sm:flex-row sm:space-x-4 sm:space-y-0 mt-9 mb-3 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group cursor-pointer bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg px-8 py-5 text-base font-medium"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 cursor-pointer text-gray-700 dark:text-white dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 ease-out transform hover:scale-105 px-8 py-5 text-base font-medium bg-transparent"
          >
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`transform grid grid-cols-2 gap-8 pt-8 transition-all duration-700 ease-out delay-1000 sm:grid-cols-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transform text-left transition-all duration-500 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${1200 + index * 100}ms`,
              }}
            >
              <div className="flex items-center space-x-1">
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  {stat.value}
                </div>
                {stat.icon && (
                  <stat.icon className="h-5 w-5 fill-black text-black dark:fill-white dark:text-white" />
                )}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Part */}
      <div className="max-w-md mx-auto flex-1">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="w-full bg-white dark:bg-[#111] shadow-lg border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <CardContent className="p-8 space-y-6">
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
    </div>
  );
}
