"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { contactApi } from "@/lib/api/contact-api";
import { showError, showSuccess } from "@/lib/toast-utils";

const MapLeaflet = dynamic(() => import("@/components/shared/MapLeaflet"), {
  ssr: false,
});

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian number"),
  source: z.string().min(1, "Please select how you found us"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const apiData = {
        name: data.name.trim(),
        email: data.email.trim(),
        mobile: data.phone.trim(),
        source: data.source,
        message: data.message.trim(),
      };

      const response = await contactApi.submitContactForm(apiData);

      if (response.success) {
        showSuccess("Thank you! We'll get back to you soon.", "Success");
        reset();
      } else {
        showError(response.error || "Submission failed", "Error");
      }
    } catch (error) {
      showError("Network error. Please try again.", "Connection Error");
    }
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative border border-secondary-500 rounded-3xl">
            <div className="relative bg-white rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <div className="hidden lg:flex h-full">
                  <div className="w-[65%] bg-white"></div>
                  <div className="w-[35%] bg-primary-900"></div>
                </div>
                <div className="flex lg:hidden flex-col h-full">
                  <div className="h-[65%] bg-white"></div>
                  <div className="h-[35%] bg-primary-900"></div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row">
                {/* Form Section */}
                <div className="w-full lg:w-[60%] p-8 lg:p-12">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">
                        Get in Touch
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                      Enim tempor eget pharetra facilisis sed maecenas
                      adipiscing. Eu leo molestie vel, ornare non id blandit
                      netus.
                    </p>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div>
                        <Input
                          type="text"
                          placeholder="Name *"
                          {...register("name")}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p className="text-danger-50 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Email *"
                          {...register("email")}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-danger-50 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone number *"
                          {...register("phone")}
                          disabled={isSubmitting}
                        />
                        {errors.phone && (
                          <p className="text-danger-50 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Controller
                          control={control}
                          name="source"
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                              disabled={isSubmitting}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="How did you find us? *" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectItem value="google">
                                  Google Search
                                </SelectItem>
                                <SelectItem value="social-media">
                                  Social Media
                                </SelectItem>
                                <SelectItem value="referral">
                                  Referral
                                </SelectItem>
                                <SelectItem value="linkedin">
                                  LinkedIn
                                </SelectItem>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="advertisement">
                                  Advertisement
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.source && (
                          <p className="text-danger-50 text-xs mt-1">
                            {errors.source.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Textarea
                          placeholder="Your Message *"
                          {...register("message")}
                          className="w-full resize-none"
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <p className="text-danger-50 text-xs mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-800 hover:bg-primary-900 text-white py-3 font-semibold tracking-wide text-sm disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            SENDING...
                          </>
                        ) : (
                          "SEND"
                        )}
                      </Button>
                    </form>

                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-evenly mt-6 gap-2">
                      <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-gray-900" />
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-600 uppercase tracking-wide">
                            PHONE
                          </span>
                          <span className="text-xs text-accent-600">
                            03 5432 1234
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-gray-900" />
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-600 uppercase tracking-wide">
                            EMAIL
                          </span>
                          <span className="text-xs text-accent-600">
                            info@brightarc.in
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="w-full lg:w-[40%] p-8 lg:p-12 lg:pl-0 flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <MapLeaflet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
