import { Badge } from "@/components/ui/badge";
import { BookOpen, ClipboardList, FolderPlus, Repeat, Search, Users } from "lucide-react";

const docs = [
  {
    title: "Create and Manage Books",
    icon: FolderPlus,
    points: [
      "Open Books and use Add Book to register a new title.",
      "Add title, author, genre, ISBN, and number of copies.",
      "Edit records later from book details when information changes.",
    ],
  },
  {
    title: "Search and Discover",
    icon: Search,
    points: [
      "Use list filters to quickly find books by title or genre.",
      "Open any card to view complete book details.",
      "Track top-performing books from the ranked section.",
    ],
  },
  {
    title: "Borrow Workflow",
    icon: ClipboardList,
    points: [
      "Borrow from a book details page using the Borrow action.",
      "Copies are reduced automatically when borrowing succeeds.",
      "Borrow summary provides a quick snapshot of activity.",
    ],
  },
  {
    title: "Update Availability",
    icon: Repeat,
    points: [
      "When all copies are used, books remain visible as unavailable.",
      "Update copies through edit to restore availability.",
      "Keep stock current for reliable borrower expectations.",
    ],
  },
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-18 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900">
            Documentation
          </Badge>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Library Management Guide
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Quick usage guide for book management, borrowing, and stock updates.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {docs.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101010] p-6 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101010] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Need feature-specific help? Check FAQ or open any page to explore workflow directly.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <BookOpen className="h-4 w-4" />
            Updated for current app navigation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
