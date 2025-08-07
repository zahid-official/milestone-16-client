import { Plus, Pencil, BookOpen, Trash2, LibraryBig, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router";
import { useGetBookQuery } from "@/redux/api/baseApi";
import type { BookData } from "@/types/bookData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BooksPagination from "./BooksPagination";
import { useState } from "react";

// columnsTitle
const columnsTitle = [
  { label: "Title", value: "title" },
  { label: "Author", value: "author" },
  { label: "Genre", value: "genre" },
  { label: "ISBN", value: "isbn" },
  { label: "Copies", value: "copies" },
  { label: "Availability", value: "availability" },
  { label: "Actions", value: "actions" },
];

const AllBooks = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data } = useGetBookQuery({ page, limit });

  const books = data?.data ?? [];
  const totalPages = data?.pagination?.totalPages ?? 1;

  // handlePageChange
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="mt-36 mb-26 bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full  max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Book Collection
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage and organize your library collection
            </p>
          </div>
          <Link to={"/create-book"}>
            <Button className="gap-0.5 cursor-pointer">
              <Plus className="h-5 w-5" />
              Add Book
            </Button>
          </Link>
        </div>

        {/* Table Section */}
        <div>
          <Card className="flex flex-col gap-6 rounded-xl border px-2 shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto min-h-[55vh]">
                <Table>
                  {/* table head */}
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      {columnsTitle?.map((column) => (
                        <TableHead
                          key={column.value}
                          className="text-center text-foreground pb-5"
                        >
                          {column.label}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  {/* table body */}
                  <TableBody>
                    {books?.map((book: BookData) => (
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

                        {/* author */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-sm">{book?.author}</div>
                        </TableCell>

                        {/* genre */}
                        <TableCell className="px-4 py-3 text-center">
                          <Badge variant="secondary" className="text-xs">
                            {book?.genre}
                          </Badge>
                        </TableCell>

                        {/* isbn */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-xs text-muted-foreground font-mono">
                            {book?.isbn}
                          </div>
                        </TableCell>

                        {/* copies */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-sm">{book?.copies}</div>
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

                        {/* actions */}
                        <TableCell className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            {/* view */}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link to={`/books/${book?._id}`}>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 cursor-pointer"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>View Book Details</TooltipContent>
                            </Tooltip>

                            {/* edit */}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link to={`/edit-book/${book?._id}`}>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 cursor-pointer"
                                  >
                                    <Pencil className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>Edit Book Details</TooltipContent>
                            </Tooltip>

                            {/* borrow */}
                            {book?.available ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link to={`/borrow/${book?._id}`}>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 cursor-pointer"
                                      disabled={!book?.available}
                                    >
                                      <LibraryBig className="h-4 w-4" />
                                      <span className="sr-only">Borrow</span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>Borrow Book</TooltipContent>
                              </Tooltip>
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 cursor-pointer"
                                disabled={!book?.available}
                              >
                                <LibraryBig className="h-4 w-4" />
                                <span className="sr-only">Borrow</span>
                              </Button>
                            )}

                            {/* delete */}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 cursor-pointer"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="px-4 pt-5 flex items-center justify-between border-t bg-muted/20">
                <BooksPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                ></BooksPagination>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
