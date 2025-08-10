import { useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const BookDetails = () => {
  const params = useParams();
  const id = params?.id;

  const { data, isLoading } = useGetBookDetailsQuery(id);
  const bookData = data?.data;
  return (
    <div>
      {/* manage loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-5">
          <div className="w-8 h-8 border-5 border-black/30 border-t-black rounded-full animate-spin" />
        </div>
      )}

      <div className="lg:py-28 py-24 flex items-center justify-center px-6">
        <Card className="w-full sm:p-8 p-6 max-w-4xl grid md:grid-cols-2 items-center overflow-hidden shadow-xl rounded-xl border transition-all duration-500 ease-in-out hover:shadow-2xl">
          {/* left */}
          <div className="bg-black sm:h-96 h-80 rounded-2xl flex items-center justify-center group">
            <BookOpen className="w-32 h-32 md:w-40 md:h-40 text-white transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>

          {/* right */}
          <div className="sm:p-8 px-2 flex flex-col justify-center space-y-6">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
                {bookData?.title}
              </CardTitle>
              <CardDescription className="italic text-lg md:text-xl text-muted-foreground">
                by {bookData?.author}
              </CardDescription>
            </CardHeader>
            <CardContent
              className={`p-0 ${bookData?.description && "space-y-6"}`}
            >
              <p className="text-base md:text-lg leading-relaxed">
                {bookData?.description}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
                {/* isbn */}
                <div className="font-medium">ISBN:</div>
                <div>{bookData?.isbn}</div>

                {/* genre */}
                <div className="font-medium">Genre:</div>
                <div>
                  <Badge variant="secondary">{bookData?.genre}</Badge>
                </div>

                {/* availablity */}
                <div className="font-medium">Status:</div>
                <div>
                  <Badge
                    variant={bookData?.available ? "default" : "destructive"}
                    className={`text-xs ${
                      bookData?.available
                        ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                        : ""
                    }`}
                  >
                    {bookData?.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>

                {/* copies */}
                <div className="font-medium">Copies:</div>
                <div>{bookData?.copies}</div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookDetails;
