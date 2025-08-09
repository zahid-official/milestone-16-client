import { BookOpen, Users, BarChart3 } from "lucide-react";

interface IProps {
  isVisible: boolean;
}

const Features = ({ isVisible }: IProps) => {
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

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className={`transition-all duration-700 ease-out transform md:max-w-md max-w-sm mx-auto ${
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
  );
};

export default Features;
