import { BookOpen, CalendarIcon, User } from "lucide-react";
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
import {
  useBorrowBookMutation,
  useGetBookDetailsQuery,
} from "@/redux/api/baseApi";
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
import { toast } from "sonner";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { apiErrorResponse } from "@/types/apiErrorResponse";

const BorrowBook = () => {
  // state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // redux endpoint hook
  const params = useParams();
  const id = params?.id;

  const [createBorrow] = useBorrowBookMutation();
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
  const onSubmit: SubmitHandler<
    z.infer<ReturnType<typeof borrowZodSchema>>
  > = async (data) => {
    setIsSubmitting(true);
    const submitData = {
      ...data,
      book: bookDetails?._id,
    };

    try {
      const res = await createBorrow(submitData).unwrap();
      if (res?.success) {
        toast.success(res.message);
        form.reset();
        navigate("/books");
      }
    } catch (err) {
      const apiError = err as FetchBaseQueryError;
      const errorData = apiError.data as apiErrorResponse;

      // mongodb error
      if (errorData?.error?.message) {
        toast.error(errorData.error.message || "An unexpected error occurred");
      }

      // validation error
      const validationErrors = errorData?.error?.errors;
      if (Array.isArray(validationErrors) && validationErrors.length > 0) {
        toast.error(validationErrors[0].message || "Validation error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-18 lg:pb-30 pb-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto space-y-6">
        {/* page header */}
        <section
          className="text-center space-y-3 mb-10 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
          style={{
            animationDelay: `${120}ms`,
            animationDuration: "400ms",
            animationFillMode: "both",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight transition-all duration-700 ease-out delay-200">
            Borrow Book
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-200">
            complete the borrowing process efficiently with easy tracking
          </p>
        </section>

        {/* book details */}
        <Card
          className="border sm:px-3 py-11 border-border gap-3 rounded-xl shadow-sm mb-9 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
          style={{
            animationDelay: `${250}ms`,
            animationDuration: "400ms",
            animationFillMode: "both",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <BookOpen className="-mb-1" />
              Book Details
            </CardTitle>
          </CardHeader>

          {/* details section */}
          <CardContent className="space-y-4">
            {/* title & author */}
            <div className="grid gap-4 grid-cols-2">
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
            <div className="grid gap-4 grid-cols-2">
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
            <div className="grid gap-4 grid-cols-2">
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
        <Card
          className="border border-border sm:px-3 py-11 rounded-xl shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
          style={{
            animationDelay: `${400}ms`,
            animationDuration: "400ms",
            animationFillMode: "both",
          }}
        >
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
                                <span>Pick a date to return the book</span>
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
                        <BookOpen className="w-4 h-4" />
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
