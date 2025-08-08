import { BookOpen, CalendarIcon, Save, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useGetBookDetailsQuery } from "@/redux/api/baseApi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import borrowZodSchema from "@/schema/borrowZodSchema";
import type z from "zod";

const BorrowBook = () => {
  // state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // redux endpoint hook
  const params = useParams();
  const id = params?.id;
  const { data } = useGetBookDetailsQuery(id);
  const bookDetails = data?.data;
  const availableBook = bookDetails?.copies;

  // useNavigate
  const navigate = useNavigate();

  // react hook form
  const form = useForm({
    resolver: zodResolver(borrowZodSchema(availableBook)),
  });

  // handle form submission
  const onSubmit: SubmitHandler<z.infer<ReturnType<typeof borrowZodSchema>>> = (
    data
  ) => {
    setIsSubmitting(true);
    const submitData = {
      ...data,
      book: bookDetails?._id,
    };
    console.log(submitData);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-22 pb-32 bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto space-y-6">
        {/* page header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">Borrow Book</h1>
          <p className="text-lg text-muted-foreground">
            Complete the borrowing process
          </p>
        </div>

        {/* book details */}
        <Card className="border px-3 py-9 border-border gap-3 rounded-xl shadow-sm mb-9">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <BookOpen className="-mb-1" />
              Book Details
            </CardTitle>
          </CardHeader>

          {/* details section */}
          <CardContent className="space-y-4">
            {/* title & author */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Title
                </Label>
                <p className="font-medium">{bookDetails?.title}</p>
              </div>

              {/* author */}
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Author
                </Label>
                <p>{bookDetails?.author}</p>
              </div>
            </div>

            {/* genre & isbn */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Genre
                </Label>
                <Badge variant="secondary" className="mt-1 w-fit">
                  {bookDetails?.genre}
                </Badge>
              </div>

              {/* isbn */}
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  ISBN
                </Label>
                <p className="font-mono text-sm mt-0.5">{bookDetails?.isbn}</p>
              </div>
            </div>

            {/* copies & available */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Copies
                </Label>
                <p className="ml-4">{bookDetails?.copies}</p>
              </div>

              {/* available */}
              <div>
                <Label className="text-sm mb-0.5 -mt-0.5 font-medium text-muted-foreground">
                  Status
                </Label>
                <Badge
                  variant={bookDetails?.available ? "default" : "destructive"}
                  className={`text-xs ${
                    bookDetails?.available
                      ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                      : ""
                  }`}
                >
                  {bookDetails?.available ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* borrowing information */}
        <Card className="border border-border  px-3 py-9 rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-1 text-xl font-semibold">
              <User className="-mb-1" />
              Borrowing Information
            </CardTitle>
          </CardHeader>

          {/* form */}
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* quantity  */}
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Quantity to borrow
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter quantity to borrow"
                          {...field}
                          value={
                            field.value !== undefined ? Number(field.value) : ""
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* due date */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>
                        Due date to return
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a due date to return the book</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* buttons */}
                <div className="flex flex-col sm:flex-row gap-4 py-2.5">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating Book
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Create Book
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/books")}
                    disabled={isSubmitting}
                    className="flex-1 cursor-pointer bg-transparent"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BorrowBook;
