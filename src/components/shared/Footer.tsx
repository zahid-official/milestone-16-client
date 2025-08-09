import {
  BookOpen,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-11 w-11 flex items-center justify-center rounded-lg bg-black dark:bg-white text-white dark:text-black">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Shelfy
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                A modern, minimal library system to effortlessly organize and
                manage your book collection.
              </p>
              <div className="flex space-x-4">
                {[Github, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                Platform
              </h3>
              <ul className="space-y-3">
                {[
                  "Member Portal",
                  "Lending System",
                  "Book Management",
                  "Analytics Dashboard",
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "Best Practices",
                  "Training Materials",
                  "Library Setup Guide",
                  "Librarian Community",
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Live Chat Support
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    1-800-SHELFY-1
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    support@shelfy.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center space-y-4 sm:space-y-0 text-xs text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Shelfy. All rights reserved.</p>
            <p>Made for book lovers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
