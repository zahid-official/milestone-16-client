import { Zap, Shield, Smartphone } from "lucide-react";

interface IProps {
  isVisible: boolean;
}

const Services = ({ isVisible }: IProps) => {
  const services = [
    {
      icon: Zap,
      iconColor: "text-yellow-500",
      title: "Lightning Fast",
      description:
        "Built with modern technology for instant responses and smooth interactions.",
    },
    {
      icon: Shield,
      iconColor: "text-green-500",
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.",
    },
    {
      icon: Smartphone,
      iconColor: "text-blue-500",
      title: "Mobile Optimized",
      description:
        "Perfect experience across all devices with responsive design and touch-friendly interface.",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 dark:bg-black/40 pt-24 pb-5">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  transition-all duration-700 ease-out transform
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div
                  className={`
                    text-center space-y-4 p-6 rounded-2xl
                    bg-gradient-to-br from-gray-100/40 to-transparent
                    dark:from-white/5 dark:to-white/10
                    border border-gray-200 dark:border-gray-800
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2
                    transition-all duration-300 ease-out cursor-pointer
                  `}
                >
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/50 dark:from-gray-700 dark:to-gray-800 shadow-lg mx-auto">
                    <Icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
