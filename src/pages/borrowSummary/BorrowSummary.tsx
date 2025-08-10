import { BookOpen, UsersRound, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { BorrowData } from "@/types/borrowData";

type Metric = {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const BorrowSummaryPage = () => {
  // redux endpoint hook
  const { data, isLoading } = useBorrowSummaryQuery(undefined);
  const borrowedBooks = data?.data;
  const popularBook = borrowedBooks?.reduce(
    (max: BorrowData, current: BorrowData) =>
      current.totalQuantity > max.totalQuantity ? current : max
  );

  // metrics stats
  const metrics: Metric[] = [
    {
      title: "Books in Circulation",
      value: borrowedBooks?.length,
      subtitle: "Different titles borrowed",
      icon: BookOpen,
    },

    {
      title: "Total Copies Borrowed",
      value: borrowedBooks?.reduce(
        (acc: number, item: BorrowData) => acc + item.totalQuantity,
        0
      ),
      subtitle: "Across all books",
      icon: UsersRound,
    },

    {
      title: "Most Borrowed Book",
      value: popularBook?.totalQuantity,
      subtitle: popularBook?.book?.title,
      icon: TrendingUp,
    },
  ];

  // columnsTitle
  const columnsTitle = [
    { label: "Book Title", value: "title" },
    { label: "ISBN", value: "isbn" },
    { label: "Borrowed Quantity", value: "quantity" },
  ];

  return (
    <>
      {/* manage loading */}
      {isLoading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-8 h-8 border-5 border-black/30 border-t-black dark:border-white/30 dark:border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        <div className="pt-18 lg:pb-30 pb-24 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Heading */}
            <section
              className="text-center space-y-3 mb-10 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
              style={{
                animationDelay: `${150}ms`,
                animationDuration: "400ms",
                animationFillMode: "both",
              }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight transition-all duration-700 ease-out delay-200">
                Borrow Summary
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-200">
                Track and analyze borrowing patterns across your library
                collection
              </p>
            </section>

            {/* Metric Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-4xl">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.title}
                    className="hover:-translate-y-1 cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
                    style={{
                      animationDelay: `${index * 160}ms`,
                      animationDuration: "400ms",
                      animationFillMode: "both",
                    }}
                  >
                    <Card className="border">
                      <CardContent className="px-5">
                        <div className="flex justify-between">
                          <p className="text-sm text-neutral-600 dark:text-neutral-300">
                            {metric.title}
                          </p>
                          <div className="rounded-md border bg-neutral-50 p-2 text-neutral-500 dark:bg-transparent dark:text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="-mt-1">
                          <div className="text-2xl md:text-3xl font-semibold tabular-nums">
                            {metric.value}
                          </div>
                          <p className="text-sm pt-2 text-neutral-500 dark:text-neutral-300">
                            {metric.subtitle}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </section>

            {/* Borrowing Summary */}
            <section className={`mt-8 md:mt-10`}>
              <Card className="mx-auto max-w-4xl pb-7.5 rounded-2xl border gap-3 shadow-sm">
                <CardHeader className="">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <CardTitle className="text-base md:text-lg font-semibold">
                      {"Borrowing Summary"}
                    </CardTitle>
                  </div>
                </CardHeader>

                {/* table */}
                <CardContent className="">
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      {/* table head */}
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          {columnsTitle?.map((column, index) => (
                            <TableHead
                              key={column.value}
                              className="text-center text-foreground p-4 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
                              style={{
                                animationDelay: `${index * 120}ms`,
                                animationDuration: "400ms",
                                animationFillMode: "both",
                              }}
                            >
                              {column.label}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>

                      {/* table body */}
                      <TableBody>
                        {borrowedBooks?.map(
                          (borrowedBook: BorrowData, index: number) => (
                            <tr
                              key={borrowedBook?.book?.isbn}
                              className="border-b hover:bg-muted/50 cursor-pointer transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
                              style={{
                                animationDelay: `${index * 120}ms`,
                                animationDuration: "400ms",
                                animationFillMode: "both",
                              }}
                            >
                              {/* title */}
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-medium text-sm truncate">
                                      {borrowedBook?.book?.title}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>

                              {/* isbn */}
                              <TableCell className="px-4 py-3 text-center">
                                <div className="text-xs text-muted-foreground font-mono">
                                  {borrowedBook?.book?.isbn}
                                </div>
                              </TableCell>

                              {/* total quantity */}
                              <TableCell className="px-4 py-3 text-center">
                                <div className="text-sm">
                                  {borrowedBook?.totalQuantity}
                                </div>
                              </TableCell>
                            </tr>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default BorrowSummaryPage;
