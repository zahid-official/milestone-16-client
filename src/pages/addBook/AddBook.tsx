import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    totalCopies: "",
    available: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
    "Business",
    "Technology",
    "Art & Design",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Book data:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      totalCopies: "",
      available: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      totalCopies: "",
      available: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-[#0a0a0a] dark:to-[#0b0b0b] from-slate-50 to-slate-100 flex items-center justify-center pt-24 pb-32">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-0.5">
            Add New Book
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Add a new book record to your library collection
          </p>
        </div>

        <Card className="shadow-xl border-0 pt-14 pb-17 px-2">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="-mb-1.5" />
              Book Information
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* title */}
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter book title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                {/* author */}
                <div className="space-y-2">
                  <Label htmlFor="author">
                    Author <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author"
                    type="text"
                    placeholder="Enter author name"
                    value={formData.author}
                    onChange={(e) =>
                      handleInputChange("author", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* genre */}
                <div className="space-y-2">
                  <Label htmlFor="genre">
                    Genre <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={formData.genre}
                    onValueChange={(value) => handleInputChange("genre", value)}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    <SelectContent>
                      {genres.map((genre) => (
                        <SelectItem key={genre} value={genre.toLowerCase()}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* isbn */}
                <div className="space-y-2">
                  <Label htmlFor="isbn">
                    ISBN <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="isbn"
                    type="text"
                    placeholder="978-0-123456-78-9"
                    value={formData.isbn}
                    onChange={(e) => handleInputChange("isbn", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* copies */}
                <div className="space-y-2">
                  <Label htmlFor="totalCopies">
                    Copies <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="totalCopies"
                    type="number"
                    placeholder="Enter number of copies"
                    value={formData.totalCopies}
                    onChange={(e) =>
                      handleInputChange("totalCopies", e.target.value)
                    }
                    min="1"
                    required
                  />
                </div>

                {/* available */}
                <div className="space-y-2">
                  <Label htmlFor="availableCopies">Available</Label>

                  <Select
                    value={formData.available}
                    onValueChange={(value) =>
                      handleInputChange("available", value)
                    }
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select availablity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter book description (optional)"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="min-h-[100px] resize-none"
                />
              </div>

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
                      <Plus className="w-4 h-4 mr-2" />
                      Create Book
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="flex-1 cursor-pointer bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddBook;
