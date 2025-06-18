"use client";

import type React from "react";
import { useState } from "react";
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
import { Phone, VoicemailIcon as Fax, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("@/components/shared/MapLeaflet"), {
  ssr: false,
});

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Container with Secondary Border */}
          <div className="relative border border-secondary-500 rounded-3xl">
            {/* Inner Container with Split Background */}
            <div className="relative bg-white rounded-3xl overflow-hidden">
              {/* Background Split - Responsive */}
              <div className="absolute inset-0">
                {/* Desktop: Left-Right Split */}
                <div className="hidden lg:flex h-full">
                  {/* White Background - 65% */}
                  <div className="w-[65%] bg-white"></div>
                  {/* Blue Background - 35% */}
                  <div className="w-[35%] bg-primary-900"></div>
                </div>

                {/* Mobile: Top-Bottom Split */}
                <div className="flex lg:hidden flex-col h-full">
                  {/* White Background - 65% */}
                  <div className="h-[65%] bg-white"></div>
                  {/* Blue Background - 35% */}
                  <div className="h-[35%] bg-primary-900"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col lg:flex-row">
                {/* Form Section */}
                <div className="w-full lg:w-[60%] p-8 lg:p-12">
                  <div className="max-w-md mx-auto">
                    {/* Blue Icon and Header */}
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

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Field */}
                      <div>
                        <Input
                          type="text"
                          placeholder="Name *"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <Input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="w-full"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone number *"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Source Dropdown */}
                      <div>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("source", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="How did you find us?"
                              className="text-gray-400"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="google">
                              Google Search
                            </SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="advertisement">
                              Advertisement
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="w-full resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-primary-800 hover:bg-primary-900 text-white py-3 font-semibold tracking-wide text-sm"
                      >
                        SEND
                      </Button>
                    </form>

                    {/* Contact Information */}
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
                            info@morcc.com.au
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section - Overlapping both backgrounds */}
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
