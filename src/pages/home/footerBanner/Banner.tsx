import {
  BookOpen,
  Sparkles,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-black">
      <div className="container  max-w-6xl mx-auto">
        <div className="transition-all duration-700 ease-out opacity-100 translate-x-0 translate-y-0">
          <div className="relative overflow-hidden rounded-3xl dark:border bg-black px-8 py-16 text-center text-white shadow-2xl">
            {/* Dotted pattern overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=")`,
              }}
            />

            {/* Floating decorative icons */}
            <div
              className="absolute left-12 top-12 opacity-20 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <BookOpen className="h-20 w-20" />
            </div>

            <div
              className="absolute right-12 bottom-12 opacity-20 animate-bounce"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              <Sparkles className="h-16 w-16" />
            </div>

            <div
              className="absolute left-1/4 bottom-16 opacity-15 animate-pulse"
              style={{ animationDuration: "4s" }}
            >
              <Users className="h-12 w-12" />
            </div>

            <div
              className="absolute right-1/4 top-16 opacity-15 animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "2s" }}
            >
              <TrendingUp className="h-12 w-12" />
            </div>

            <div className="relative z-10">
              {/* Central icon */}
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                <BookOpen className="h-12 w-12" />
              </div>

              {/* Main heading */}
              <h2 className="mx-auto max-w-4xl text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
                Ready to Transform Your Library Management?
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 leading-relaxed mb-12">
                Join thousands of librarians and book enthusiasts who have
                revolutionized their collection management with Shelfy's
                powerful yet elegant tools.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-6 py-3 text-base rounded-lg shadow-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium border border-white text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300 px-6 py-3 text-base rounded-lg">
                  Schedule a Demo
                </button>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    <span>500+</span>
                  </div>
                  <div className="text-sm">Active Libraries</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    <span>50K+</span>
                  </div>
                  <div className="text-sm">Books Managed</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    <span>99.9%</span>
                  </div>
                  <div className="text-sm">Server Uptime</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                    <Star className="h-5 w-5 fill-white text-white" />
                    <span>4.9</span>
                  </div>
                  <div className="text-sm">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
