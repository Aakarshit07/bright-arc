export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  source: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
