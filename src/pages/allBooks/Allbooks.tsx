import { useState } from "react";
import { Plus, Pencil, BookOpen, Trash2, LibraryBig } from "lucide-react";
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

interface BookData {
  id: string;
  title: string;
  isbn: string;
  author: string;
  genre: string;
  availableCopies: number;
  totalCopies: number;
}

const booksData: BookData[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    isbn: "978-0-7432-7356-5",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    availableCopies: 3,
    totalCopies: 5,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    isbn: "978-0-06-112008-4",
    author: "Harper Lee",
    genre: "Fiction",
    availableCopies: 0,
    totalCopies: 3,
  },
  {
    id: "3",
    title: "1984",
    isbn: "978-0-452-28423-4",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    availableCopies: 2,
    totalCopies: 4,
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    isbn: "978-0-14-143951-8",
    author: "Jane Austen",
    genre: "Romance",
    availableCopies: 4,
    totalCopies: 6,
  },
];

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
  const [books] = useState<BookData[]>(booksData);

  const totalBooks = books.length;
  const availableBooksCount = books.reduce(
    (sum, book) => sum + book.availableCopies,
    0
  );
  const borrowedBooksCount = books.reduce(
    (sum, book) => sum + (book.totalCopies - book.availableCopies),
    0
  );

  return (
    <div className="mt-36 bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Book Collection
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage and organize your library collection
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  {totalBooks}
                </span>{" "}
                total
              </span>
              <span className="text-muted-foreground">
                <span className="font-medium text-green-600">
                  {availableBooksCount}
                </span>{" "}
                available
              </span>
              <span className="text-muted-foreground">
                <span className="font-medium text-orange-600">
                  {borrowedBooksCount}
                </span>{" "}
                borrowed
              </span>
            </div>
            <Button className="gap-0.5 cursor-pointer">
              <Plus className="h-5 w-5" />
              Add Book
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div>
          <Card className="flex flex-col gap-6 rounded-xl border px-2 shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  {/* table head */}
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      {columnsTitle?.map((title) => (
                        <TableHead
                          key={title.value}
                          className="text-center text-foreground pb-5"
                        >
                          {title.label}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  {/* table body */}
                  <TableBody>
                    {books.map((book) => (
                      <tr
                        key={book.id}
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
                                {book.title}
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        {/* author */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-sm">{book.author}</div>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                          <Badge variant="secondary" className="text-xs">
                            {book.genre}
                          </Badge>
                        </TableCell>

                        {/* isbn */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-xs text-muted-foreground font-mono">
                            {book.isbn}
                          </div>
                        </TableCell>

                        {/* copies */}
                        <TableCell className="px-4 py-3 text-center">
                          <div className="text-sm">{book.totalCopies}</div>
                        </TableCell>

                        {/* availablity */}
                        <TableCell className="px-4 py-3 text-center">
                          <Badge
                            variant={
                              book.availableCopies > 0
                                ? "default"
                                : "destructive"
                            }
                            className={`text-xs ${
                              book.availableCopies > 0
                                ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                                : ""
                            }`}
                          >
                            {book.availableCopies} / {book.totalCopies}
                          </Badge>
                        </TableCell>

                        {/* actions */}
                        <TableCell className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            {/* edit */}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 cursor-pointer"
                            >
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>

                            {/* borrow */}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8  cursor-pointer"
                              disabled={book.availableCopies === 0}
                            >
                              <LibraryBig className="h-4 w-4" />
                              <span className="sr-only">Borrow</span>
                            </Button>

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
              <div className="px-4  pt-5 border-t bg-muted/20">
                <p className="text-sm text-muted-foreground">
                  Showing {books.length} of {books.length} books
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
