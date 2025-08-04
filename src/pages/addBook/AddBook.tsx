import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { BookOpen, Save } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import booksZodSchema from "@/schema/booksZodSchema";
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

const AddBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const headingTimeout = setTimeout(() => setIsHeadingVisible(true), 50);
    const formTimeout = setTimeout(() => setIsFormVisible(true), 300);
    return () => {
      clearTimeout(headingTimeout);
      clearTimeout(formTimeout);
    };
  }, []);

  const form = useForm({
    resolver: zodResolver(booksZodSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof booksZodSchema>> = async (
    data
  ) => {
    setIsSubmitting(true);
    const submitData = { ...data, available: data.available ?? true };
    console.log("Submit: ", submitData);
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-[#0a0a0a] dark:to-[#0b0b0b] from-slate-50 to-slate-100 flex flex-col items-center justify-center pt-24 pb-32 px-4">
      {/* Animated Heading */}
      <div
        className={`text-center transition-all duration-700 ease-out ${
          isHeadingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white transition-all duration-700 ease-out delay-200">
          Add New Book
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-200">
          Add a new book record to your library collection
        </p>
      </div>

      {/* Animated Form/Card */}
      <div
        className={`w-full max-w-xl mt-10 transition-all duration-1000 ease-out transform ${
          isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Card className="shadow-xl border-0 pt-14 pb-17 px-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="-mb-1.5" />
              Book Information
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              <SelectItem key={genre.value} value={genre.value}>
                                {genre.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                              field.value !== undefined ? Number(field.value) : ""
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                            field.value === undefined ? "" : String(field.value)
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
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Creating Book...
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
                    onClick={() => form.reset()}
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

export default AddBook;
