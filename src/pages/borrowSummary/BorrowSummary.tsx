import * as React from "react";
import { BookOpen, UsersRound, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Metric = {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function BorrowSummaryPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  // Demo data (replace with real data if needed)
  const metrics: Metric[] = [
    {
      title: "Books in Circulation",
      value: 2,
      subtitle: "Different titles borrowed",
      icon: BookOpen,
    },
    {
      title: "Total Copies Borrowed",
      value: 5,
      subtitle: "Across all books",
      icon: UsersRound,
    },
    {
      title: "Most Popular",
      value: 3,
      subtitle: "To Kill a Mockingbird",
      icon: TrendingUp,
    },
  ];

  // columnsTitle
  const columnsTitle = [
    { label: "Book Title", value: "title" },
    { label: "ISBN", value: "isbn" },
    { label: "Total Quantity Borrowed", value: "quantity" },
    { label: "Popularity", value: "popularity" },
  ];

  const rows = [
    {
      title: "To Kill a Mockingbird",
      isbn: "978-0-06-112008-4",
      total: 3,
      popularity: { label: "Most Popular", rank: 1 },
    },
    {
      title: "The Great Gatsby",
      isbn: "978-0-7432-7356-5",
      total: 2,
      popularity: { label: "2nd Most", rank: 2 },
    },
  ];

  // Trigger animations on mount
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="container mx-auto max-w-5xl px-4 md:px-8 py-12 md:py-16">
        {/* Heading */}
        <section
          className={`text-center space-y-3 mb-10 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white transition-all duration-700 ease-out delay-200">
            Borrow Summary
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-200">
            Track and analyze borrowing patterns across your library collection
          </p>
        </section>

        {/* Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto max-w-4xl">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className={`transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Card className="border border-neutral-200 bg-white rounded-xl shadow-sm transition-all duration-300">
                  <CardContent className="px-5 cursor-pointer">
                    <div className="flex justify-between">
                      <p className="text-sm text-neutral-600">{m.title}</p>
                      <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2 text-neutral-500">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="-mt-1">
                      <div className="text-2xl md:text-3xl font-semibold text-black tabular-nums">
                        {m.value}
                      </div>
                      <p className="text-sm pt-2 text-neutral-500">
                        {m.subtitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </section>

        {/* Borrowing Summary */}
        <section
          className={`mt-8 md:mt-10 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Card className="mx-auto max-w-4xl rounded-2xl border gap-3 border-neutral-200 bg-white shadow-sm">
            <CardHeader className="">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-neutral-800" />
                <CardTitle className="text-base md:text-lg font-semibold text-neutral-900">
                  {"Borrowing Summary (2)"}
                </CardTitle>
              </div>
            </CardHeader>

            {/* table */}
            <CardContent className="">
              <div className="overflow-hidden rounded-lg border border-neutral-200">
                <Table>
                  {/* table head */}
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      {columnsTitle?.map((column) => (
                        <TableHead
                          key={column.value}
                          className="text-center text-foreground px-4"
                        >
                          {column.label}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  {/* table body */}
                  <TableBody>
                    {rows?.map((book: BookData) => (
                      <tr
                        key={book?._id}
                        className="border-b hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        {/* title */}
                        <TableCell className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              <BookOpen className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-sm truncate">
                                {book?.title}
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        {/* isbn */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-xs text-muted-foreground font-mono">
                            {book?.isbn}
                          </div>
                        </TableCell>

                        {/* copies */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-sm">5</div>
                        </TableCell>

                        {/* availablity */}
                        <TableCell className="px-4 py-3 text-center">
                          <Badge
                            variant={
                              book?.available ? "default" : "destructive"
                            }
                            className={`text-xs ${
                              book?.available
                                ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                                : ""
                            }`}
                          >
                            {book?.available ? "Available" : "Unavailable"}
                          </Badge>
                        </TableCell>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
