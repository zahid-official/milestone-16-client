import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { apiErrorResponse } from "@/types/apiErrorResponse";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type IProps = {
  bookId: string;
};

const DeleteBook = ({ bookId }: IProps) => {
  // state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // redux endpoint hook
  const [deleteBook] = useDeleteBookMutation();

  // handleDelete
  const handleDelete = async (id: string) => {
    setIsSubmitting(true);

    try {
      const res = await deleteBook(id).unwrap();
      if (res?.success) {
        toast.success(res.message);
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
    <div>
      <AlertDialog>
        <Tooltip>
          <AlertDialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 cursor-pointer"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
                <span className="sr-only">Delete</span>
              </Button>
            </TooltipTrigger>
          </AlertDialogTrigger>
          <TooltipContent>Delete Book</TooltipContent>
        </Tooltip>

        {/* message */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              book and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* action btn */}
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isSubmitting}
              className=" cursor-pointer"
              onClick={() => handleDelete(bookId)}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Deleting
                </>
              ) : (
                <>Confirm</>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteBook;
