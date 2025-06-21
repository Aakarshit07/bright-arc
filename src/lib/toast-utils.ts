import { toast } from "sonner";

// Simple toast utilities - no complex error handling
export const showError = (error: any, title = "Error") => {
  const message =
    error?.error || error?.message || error || "Something went wrong";
  toast.error(title, { description: message });
};

export const showSuccess = (message: string, title = "Success") => {
  toast.success(title, { description: message });
};

export const showInfo = (message: string, title = "Info") => {
  toast.info(title, { description: message });
};
