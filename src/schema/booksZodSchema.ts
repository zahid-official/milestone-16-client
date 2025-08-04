import z from "zod";

const booksZodSchema = z.object({
  title: z
    .string({ error: "Title is required" })
    .trim()
    .min(1, { error: "Title is required" }),
  author: z
    .string({ error: "Author is required" })
    .trim()
    .min(1, { error: "Author is required" }),
  isbn: z
    .string({ error: "ISBN is required" })
    .trim()
    .min(1, { error: "ISBN is required" }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      error: (issue) =>
        issue.input === undefined
          ? "Genre is required"
          : "Invalid genre selected",
    }
  ),
  copies: z.coerce
    .number({
      error: "Copies is required",
    })
    .int("Copies must be an integer")
    .min(0, "Copies must be non-negative"),
  available: z.boolean().optional(),
  description: z.string().trim().optional(),
});

export default booksZodSchema;
