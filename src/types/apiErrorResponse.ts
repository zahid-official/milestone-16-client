export interface apiErrorResponse {
  error?: {
    message?: string;
    errors?: { message?: string }[];
  };
}
