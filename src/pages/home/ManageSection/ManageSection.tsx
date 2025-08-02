import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Book Management",
    description:
      "Effortlessly organize your entire collection with AI-powered cataloging, advanced search, and intuitive categorization.",
    items: [
      "Smart ISBN scanning",
      "Bulk import/export",
      "Advanced filtering",
      "Custom categories",
    ],
  },
  {
    icon: Users,
    title: "Intelligent Borrow System",
    description:
      "Streamline lending with automated tracking, smart notifications, and seamless member management powered by modern technology.",
    items: [
      "Automated due dates",
      "SMS/Email reminders",
      "Member profiles",
      "Return processing",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain powerful insights with comprehensive analytics, usage patterns, and detailed reporting with beautiful visualizations.",
    items: [
      "Real-time analytics",
      "Popular books tracking",
      "Member statistics",
      "Export reports",
    ],
  },
];

const ManageSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24 px-4 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-14 max-w-4xl mx-auto">
            Everything You Need to Manage Your Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to make library management effortless,
            efficient, and enjoyable with cutting-edge technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="px-8 py-16 cursor-pointer h-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110">
                      <Icon className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 ease-out group-hover:text-black dark:group-hover:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm space-x-2 text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span>•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
