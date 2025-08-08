import z from "zod";

const borrowZodSchema = (availableBook: number) =>
  z.object({
    quantity: z.coerce
      .number({
        error: "Quantity is required",
      })
      .int("Quantity must be an integer")
      .min(1, "Quantity must be a positive number")
      .max(availableBook, `Maximum ${availableBook} copies available`),

    dueDate: z.date({ error: "Due date is required" }).refine(
      (date) => {
        const now = new Date();
        const today = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        return date >= today;
      },
      {
        message: "Due date must be today or in the future",
      }
    ),
  });

export default borrowZodSchema;
