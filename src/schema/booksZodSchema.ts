import z from "zod";

const booksZodSchema = z.object({
  title: z.string({
    message: "Title is required",
  }),
  author: z.string({
    message: "Author is required",
  }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      message: "Genre is required",
    }
  ),
  isbn: z.string({
    message: "title is required",
  }),
  copies: z.number({
    message: "title is required",
  }),
  available: z.boolean().optional(),
  description: z.string().optional(),
});

export default booksZodSchema;
