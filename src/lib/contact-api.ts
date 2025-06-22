import type {
  ContactFormData,
  ContactApiResponse,
} from "@/types/contact.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

class ContactApiService {
  private async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const url = `https://brightarcbackend-5p0v.onrender.com/api${endpoint}`;
      console.log("Making contact API request to:", url);

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      console.log("Contact API Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Contact API Success:", data);

      return data;
    } catch (error) {
      console.error("Contact API Error:", error);
      throw error;
    }
  }

  async submitContactForm(
    formData: ContactFormData
  ): Promise<ContactApiResponse> {
    try {
      const response = await this.fetchApi<{ message: string }>("/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      return {
        success: true,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit contact form",
      };
    }
  }

  async getAllContacts(): Promise<ContactApiResponse> {
    try {
      const response = await this.fetchApi<any[]>("/contacts");
      return {
        success: true,
        message: "Contacts retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to retrieve contacts",
      };
    }
  }
}

export const contactApi = new ContactApiService();
