import { Button } from "@/components/ui/button";
import { ChevronDown, CircleHelp, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import { faqItems } from "./faqData";

const FAQ = () => {
  const { ref: featureRef, inView: featureVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const [openId, setOpenId] = useState<string>(faqItems[0]?.id ?? "");

  const toggleQuestion = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <div className="relative overflow-hidden lg:py-30 py-22 px-6 bg-gray-50 dark:bg-black">
      <div className="pointer-events-none absolute -left-22 top-12 h-52 w-52 rounded-full bg-gray-300/40 blur-3xl dark:bg-gray-900/80" />
      <div className="pointer-events-none absolute -right-18 bottom-10 h-56 w-56 rounded-full bg-gray-300/30 blur-3xl dark:bg-gray-900/70" />

      <div className="max-w-6xl mx-auto w-full relative">
        <div
          ref={featureRef}
          className={`text-center transition-all duration-700 ease-out ${
            featureVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/70 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 dark:text-gray-300">
            Support Center
          </span>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mt-5 mb-4 lg:leading-12 max-w-4xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to run your library smoothly, from
            adding books to tracking borrows and managing availability.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div
            className={`transition-all duration-700 ease-out ${
              featureVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101010] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-5">
                <CircleHelp className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Need quick clarity?
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                These answers cover the most common library workflow questions.
                If you are setting things up for the first time, start with the
                first two items.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/30 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Reliable Workflow
                      </p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                        Manage books, borrowers, and returns from a single
                        place with consistent records.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/30 p-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Easy to Follow
                      </p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                        Clear actions and simple controls make daily operations
                        faster for any team size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/documentation">
                  <Button className="w-full h-11 cursor-pointer rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Explore Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101010] shadow-sm transition-all duration-700 ease-out ${
                    featureVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${220 + index * 90}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  >
                    <span className="text-[15px] sm:text-base font-semibold text-gray-900 dark:text-white leading-relaxed">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
