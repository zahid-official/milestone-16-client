export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I add a new book to the library catalog?",
    answer:
      "Go to the books page and use the add book option. You can enter title, author, ISBN, genre, and copies, then save to make it available instantly.",
  },
  {
    id: "faq-2",
    question: "Can I track borrowed books and return dates?",
    answer:
      "Yes. Every borrow record stores borrower details, due date, and return status so you can monitor active loans and overdue books from one place.",
  },
  {
    id: "faq-3",
    question: "What happens when a book runs out of available copies?",
    answer:
      "The system automatically updates stock after each borrow. If copies reach zero, the book remains in the catalog but is marked unavailable until returns are processed.",
  },
  {
    id: "faq-4",
    question: "Can I edit or remove books after adding them?",
    answer:
      "You can edit book details any time and remove records when needed. Updates are reflected immediately across listings and search results.",
  },
  {
    id: "faq-5",
    question: "Does the dashboard show popular or trending books?",
    answer:
      "Yes. The ranked books section highlights most borrowed titles, helping you quickly identify reader demand and plan inventory decisions.",
  },
  {
    id: "faq-6",
    question: "Is the application mobile friendly?",
    answer:
      "Yes. The interface is responsive and optimized for phones, tablets, and desktop devices, so core library actions work smoothly on all screen sizes.",
  },
];
