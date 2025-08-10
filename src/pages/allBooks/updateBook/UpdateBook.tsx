import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetBookDetailsQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import booksZodSchema from "@/schema/booksZodSchema";
import type { apiErrorResponse } from "@/types/apiErrorResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import type z from "zod";

// genres
const genres = [
  { label: "Fiction", value: "FICTION" },
  { label: "Fantasy", value: "FANTASY" },
  { label: "Science", value: "SCIENCE" },
  { label: "History", value: "HISTORY" },
  { label: "Biography", value: "BIOGRAPHY" },
  { label: "Non Fiction", value: "NON_FICTION" },
];

const UpdateBook = () => {
  // state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // hooks
  const params = useParams();
  const id = params?.id;

  // redux endpoint hook
  const { data, isLoading } = useGetBookDetailsQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const bookData = data?.data;

  // useNavigate
  const navigate = useNavigate();

  // react hook form
  const form = useForm({
    resolver: zodResolver(booksZodSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: bookData?.genre ?? undefined,
      isbn: "",
      copies: 0,
      available: true,
      description: "",
    },
  });

  // handle form submission
  const onSubmit: SubmitHandler<z.infer<typeof booksZodSchema>> = async (
    data
  ) => {
    setIsSubmitting(true);
    const submitData = { ...data, id: bookData?._id };

    try {
      const res = await updateBook(submitData).unwrap();
      if (res?.success) {
        toast.success(res.message);
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

  // reset form value using useEffect
  useEffect(() => {
    if (bookData) {
      form.reset({
        title: bookData.title ?? "",
        author: bookData.author ?? "",
        genre: bookData.genre ?? undefined,
        isbn: bookData.isbn ?? "",
        copies: bookData.copies ?? 0,
        available: bookData.available ?? true,
        description: bookData.description ?? "",
      });
    }
  }, [bookData, form]);

  return (
    <>
      {/* manage loading */}
      {isLoading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-8 h-8 border-5 border-black/30 border-t-black dark:border-white/30 dark:border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        <div className="min-h-screen pt-20 lg:pb-30 pb-24 px-6 flex flex-col items-center justify-center">
          {/* heading */}
          <div
            className="text-center space-y-3 transition-all duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
            style={{
              animationDelay: `${300}ms`,
              animationDuration: "400ms",
              animationFillMode: "both",
            }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white transition-all duration-700 ease-out delay-200">
              Edit Book Details
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-200">
              Modify an existing book record in your library collection
            </p>
          </div>

          {/* form */}
          <div
            className="w-full max-w-xl mt-8 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
            style={{
              animationDelay: `${500}ms`,
              animationDuration: "400ms",
              animationFillMode: "both",
            }}
          >
            <Card className="shadow-xl pt-14 pb-17 px-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <BookOpen className="-mb-1.5" />
                  Book Information
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* title & author */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Title <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter book title"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* author */}
                      <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Author <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter author name"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* genre & isbn */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Genre <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value ?? ""}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a genre" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {genres.map((genre) => (
                                  <SelectItem
                                    key={genre.value}
                                    value={genre.value}
                                  >
                                    {genre.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* isbn */}
                      <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              ISBN <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter book's ISBN"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* copies & available */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Copies <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Enter number of copies"
                                {...field}
                                value={
                                  field.value !== undefined
                                    ? Number(field.value)
                                    : ""
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* isbn */}
                      <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Available</FormLabel>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(value === "true")
                              }
                              value={
                                field.value === undefined
                                  ? ""
                                  : String(field.value)
                              }
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select availability" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="true">True</SelectItem>
                                <SelectItem value="false">False</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* description */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter book description (optional)"
                              className="min-h-[100px] resize-none"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Updating Book
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4" />
                            Update Book
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
      )}
    </>
  );
};

export default UpdateBook;
